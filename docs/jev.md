# TypeSafe AIのJevで判断を補助する

Jevには、点検ルールと実環境から収集した情報を渡し、項目ごとの選択式質問を評価させます。このリポジトリは、Jev用の入力を生成するCLIと、応答を検証するコードを提供します。証拠の収集や設定変更、外部APIの呼び出しは行いません。

2026-10-02に確認した [TypeSafe公式API仕様](https://docs.typesafe.ai/api) では、`POST https://api.typesafe.ai/v1/systemone` に `state`・`model`・`questions` を渡します。Choice質問は `type`・`instructions`・`criteria` を持ち、回答は `answers` に質問IDごとに返ります。Choice回答の内容は `choice`・`probabilities`・`confidence` です。この形式へ点検項目を変換します。

## 質問を小さく分ける

`decision-tasks.jsonl` は1ルール1行で、次のように分けています。

- `applicability`: 資産がルールの適用条件に該当するか。選択肢は `applicable`・`not-applicable`・`unknown`。
- `check_1`、`check_2`…: 各確認項目だけを評価する。選択肢は `concern-indicated`・`satisfied-indicated`・`unknown`。

Jevは質問を同じ状態に対して独立に評価する仕様です。質問IDは推論の入力に使われないため、各質問に対象ルールと基準の文章を含めています。[質問の組み立て方](https://docs.typesafe.ai/introduction)と [Choiceの仕様](https://docs.typesafe.ai/primitives/choice)を確認してください。

この質問形式は、別のAIでも選択肢・質問文を対応するAPIへ写して使えます。プロバイダーが返す確率やconfidenceの意味は共通ではないため、Jev用の応答検証を他社の回答にそのまま適用しません。

## 入力を用意する

利用者の許可した読み取りツールで証拠を集め、`decision-input.schema.json` の形式へ整理します。

| フィールド | 内容 |
| --- | --- |
| `formatVersion` | `1.0.0` |
| `ruleId` / `ruleHash` | 対象ルールと、その版のハッシュ |
| `assetId` / `environmentRevision` | 対象資産と構成のリビジョン |
| `observedAt` / `scope` | 観測したUTC日時と確認範囲 |
| `observations` | `id`・`text`・`locator` を持つ観測情報。元の証拠へ戻れる参照を残す |

たとえば稼働バージョンの照合では、実際のバージョンと開発元の最新アドバイザリを読み取りツールで取得します。このDBにCVEが見当たらないことや、モデルの知識だけで安全を判断しません。外部AIへ送る情報は利用者の許可した範囲で匿名化し、秘密の実値や顧客データを含めません。形式検証は、匿名化や内容の真偽を保証するものではありません。

## オフラインで入力・応答の処理を試す

Node.js 22以上で、リポジトリのルートから実行します。

```sh
mkdir -p .local
node scripts/decisions.mjs prepare data/decision-input.example.json > .local/jev-request.json
node scripts/decisions.mjs review data/decision-input.example.json data/jev-response.example.json --min-confidence 0.9 > .local/jev-review.json
```

入力・応答の例は架空です。`jev-response.example.json` はすべて `unknown` を返す人工的な例で、APIの実行結果ではありません。上記コマンドは外部通信、課金、秘密情報の読み取りを行いません。観測情報が0件なら入力の生成を停止し、未確認のままにします。

実運用では、自分の観測情報を `.local/decision-input.json` に用意し、以下で入力を生成します。送信は、利用側が認証・送信許可・APIの制限・再試行・ログの保存範囲を管理するコードで行ってください。

```sh
node scripts/decisions.mjs prepare .local/decision-input.json --model jev-1.13.0 --locale en > .local/jev-request.json
# 利用側で許可されたAPI呼び出しを行い、応答を .local/jev-response.json に保存する
node scripts/decisions.mjs review .local/decision-input.json .local/jev-response.json --model jev-1.13.0 --locale en --min-confidence 0.9 > .local/jev-review.json
```

標準の質問文は英語で、日本語を選ぶオプションは `--locale ja` です。モデルIDの標準値は、確認時点の `jev-1.13.0` に固定しています。公式の [モデル一覧](https://docs.typesafe.ai/models) は英語を主な学習言語とし、日本語などの精度は自分のデータで確認するよう案内しています。`jev-latest` の参照先は変わるため、モデルの版を固定し、変更時に評価し直してください。

## confidenceと証拠を分ける

応答を受け取ったコードは、質問ID・選択肢・モデルIDの一致、有限な0〜1の数値、確率の合計、最大確率の選択肢、[公式のChoice confidence計算](https://docs.typesafe.ai/confidence)との一致を検証します。計算の誤差は `1e-6` まで許容します。

`--min-confidence` は利用側が決める確認振り分けのしきい値です。例の `0.9` はこの分野の精度を測って決めた値ではありません。既知の問題・問題が見つからない範囲・証拠不足・矛盾する入力を含む、自分の評価データで調整してください。

| 条件 | `route` | 次の扱い |
| --- | --- | --- |
| confidenceがしきい値未満、または `unknown` | `needs-more-evidence` | 情報を追加するか、人が確認する |
| `concern-indicated` でしきい値以上 | `priority-review` | 指摘候補を優先して確認する |
| その他 | `review` | 適用条件や完了基準と照合する |

出力には、モデルID・しきい値・入力ハッシュ・観測情報IDを残します。どの選択肢でも点検結果の `status` は `unverified` のままです。適用外や充足の回答が高いconfidenceでも、実際の証拠を確認するまで `not-applicable` や `no-finding` には変換しません。確認を終えてから [共通の点検結果](consuming.md) を別に作り、`scripts/report.mjs` で検証します。

## 確認できた範囲

公式仕様に合わせた入力の生成、応答の形式・確率検証、未確認の維持をオフラインのテストで確認しています。この実装から実際のJev APIへ推論を依頼していないため、日本語・英語の判定精度、遅延、費用、対象環境における適切なしきい値は未確認です。
