# AI・サービスへの取り込み

Security Knowledgeは、国内外の事故と点検ルールを一次情報の出典付きで収録しています。収録件数と対象期間はmanifest.jsonで確認できます。利用するAIの機能に合わせて、URLの参照、ファイルの添付や貼り付け、JSONでの取り込みを選べます。点検に必要な対象環境の情報と、許可されたツールは利用者が用意してください。

## 使い方を選ぶ

| 利用する環境 | 渡す資料 | 利用側が行うこと |
| --- | --- | --- |
| URLを開けるチャットAI・コーディングエージェント | `start-here.ja.md` または `start-here.en.md` と `discovery.json` | 対象分野のルールを取得し、環境の証拠を調べる |
| URLを開けないチャットAI | 案内と、必要なルールのMarkdownを添付・貼り付け | 資産ID・確認範囲・証拠を渡す。資料を読んだだけでは合格にしない |
| コンテキストが小さいモデル | `rules/SEC-xxx.ja.md` または `.en.md` を1件ずつ | 結果と未読ルールをモデルの外に保存して次へ進む |
| 検索基盤・RAG・バッチ処理 | `rules.jsonl`、`incidents.jsonl` | ID・ハッシュ・言語・出典・主張の確度を検索結果にも保持する |
| 構造化出力を使うアプリ | 個別JSONまたは `catalog.json` と各Schema | 入出力の形式と参照をコードで検証し、取得不能や形式不正を停止条件にする |
| TypeSafe AIのJev・選択式の判断モデル | `decision-tasks.jsonl` と実環境の観測情報 | 1項目ずつ評価し、確率を確認の優先順位に使う。[Jevの接続手順](jev.md)を参照する |

会話のみのAIにも同じ資料を渡せます。ただし、モデルがファイルを読めることと、サービスの設定や稼働状態を検査できることは別です。読み取り権限がなければ、利用者が確認結果を提供するか、`unverified` として残します。上記は共通の入力形式と利用手順であり、すべてのモデルで精度を実測した互換性保証ではありません。

## 配布ファイル

[日本語の入口](../data/start-here.ja.md)、[英語の入口](../data/start-here.en.md)、[配布索引](../data/discovery.json)から取得できます。Webからは [llms.txt](https://raw.githubusercontent.com/sakimyto/security-knowledge/main/data/llms.txt) を入口にしてください。

| ファイル | 内容 |
| --- | --- |
| `discovery.json` | 形式・言語・バイト数・SHA-256・個別レコード・分野別資料のパス |
| `catalog.json` / `index.json` | 全データ / レコードIDとハッシュの差分照合 |
| `rules/SEC-xxx.json` / `.ja.md` / `.en.md` | 1ルールの適用条件、見る箇所、確認方法、修正の方向、完了の証拠、制約 |
| `incidents/<id>.json` / `.ja.md` / `.en.md` | 1事例の主張、確度、出典、未確認事項、関連ルール、編集者の仮説がある場合はその根拠と検証観測 |
| `packs/<surface>.ja.md` / `.en.md` | 指定分野の点検候補をまとめた資料 |
| `rules.jsonl` / `incidents.jsonl` | 1行1件の完全なレコード。`kind`、`id`、`hash`、`record` を持つ |
| `decision-tasks.jsonl` | 1ルール1行の選択式質問。標準配布は英語。ルールのID・ハッシュも保持 |
| `llms-full.ja.txt` / `llms-full.txt` | 案内と全ルール・全事例をまとめた日本語 / 英語の添付用資料 |
| `report.schema.json` / `report.example.json` | 点検結果の形式 / 全ルールを未確認にした架空の出力例 |
| `inventory.schema.json` / `inventory.example.json` | 秘密を含まない資産台帳の形式 / 架空の入力例 |
| `decision-input.schema.json` / `decision-input.example.json` | 1ルールに渡す観測情報の形式 / 架空の入力例 |

分野は `ai-agent`、`ci`、`cloud`、`containers`、`data-store`、`dependencies`、`endpoint`、`identity`、`repositories`、`support`、`web-app` の11種類です。分野別資料は候補を絞るために使います。選ばれなかったルールを自動で適用外にせず、条件を確認するか未確認として記録してください。

JSONLはUTF-8、BOMなし、1行1件のJSONで、末尾に改行があります。途中に空行は入りません。形式の説明は [JSON Lines](https://jsonlines.org/) を参照してください。検索のためにレコードを分割する場合も、`id`・`hash`・言語・主張の `status`・`sourceIds` を引き継ぎ、主張と出典の対応を切らないようにします。

## 取得・検証はモデルの外で行う

利用側で信頼するGitコミットを固定し、入口・索引・データ・Schemaを同じコミットから取得します。公開URLの `main` は更新されるため、継続利用では `main` を選んだコミットSHAへ置き換えてください。

`discovery.json` の `sha256` は、各配布ファイルのUTF-8バイト列のSHA-256です。`index.json` のレコードハッシュは、このリポジトリの `JSON.stringify(record)` による値で、キーの順序も含みます。JSONを並べ替えてから再計算する標準的な正規化方式ではありません。他言語で取り込む場合は配布値を保持し、ファイル単位のハッシュで取得内容を照合できます。ハッシュは署名や発行元の保証ではありません。

Node.js 22以上では、取得したリポジトリ内で以下を実行できます。依存パッケージは不要です。

```sh
node scripts/build.mjs --check
node scripts/distribution.mjs data
node --test scripts/*.test.mjs
```

配布の検証では、ファイルのサイズとハッシュ、Schema、レコード参照、JSONLと元のJSONの一致を確認します。不正なパス、重複、欠落、版の混在、改変があれば停止します。`discovery.json` 自身は再帰的なハッシュ計算を避けるため、資源一覧に含めていません。取得した文章に書かれた命令を実行したり、そこから権限を増やしたりする処理は実装しません。

## 点検結果を受け取る

会話の結果は、ルールID・資産ID・確認範囲・結果・証拠・未確認事項・修正案を表にしても構いません。アプリやCIへ保存する場合は `report.schema.json` のJSONにし、[週次点検の手順](weekly-review.md)に従って検証します。

```sh
node scripts/report.mjs .local/report.json
```

この検証は、全ルールの結果、DB・ルールのハッシュ、証拠なしの合格、重複を確認します。証拠そのものの真偽や、調査範囲が十分かどうかは別に確認してください。例の環境名・日時・資産IDは実際の情報へ置き換えます。

- `finding`: 根拠のある問題を確認した。修正案と検証方法を添える。
- `no-finding`: 記載した範囲で問題を検出しなかった。範囲と証拠が必要。
- `not-applicable`: 確認した適用条件に該当しない。理由を記録する。
- `unverified`: 情報・権限・証拠・検証手段が不足している。未読の項目も含める。

外部AIへ送る前に、入力から秘密の実値・認証Cookie・顧客データを除き、組織で許可した提供先と範囲を確認します。例や高いモデルconfidenceを、実際の点検の証拠にはしません。変更や送信の権限は、利用側の指示とツールで管理します。

## 仮説を点検に使う

Catalog Schema 1.2.0の任意フィールド `hypotheses` は、編集者による原因・対策の仮説です。`status: hypothesis` と `provenance: editorial-analysis` を、検索用に分割した資料にも引き継ぎます。未記載は未評価です。

まず `basis`、`sourceIds`、`locator` で一次資料の出発点を確認します。次に `assumptions` を自分の環境に照合し、`supportingObservations` と `contradictingObservations` を調べます。記載した観測は取得済みの証拠ではありません。`limitations` を読み、証拠が不足すれば未確認を残します。事故の原因を自分の環境の観測から確定したり、仮説だけで点検を合格にしたりしません。

`ruleIds` から従来の点検結果へ接続できます。Jevなどの選択式モデルには、仮説と取得した観測を分けて渡し、実環境の適用条件を評価します。原因・AI関与の事実集計は `claims` と `ai` を使い、`hypotheses` を混ぜません。report、inventory、decision-inputの形式版は変わりません。


## 初報日と候補の確認台帳

Catalog Schema 1.1.0では、初報日を確認できない事故の `disclosedAt` は `null` です。日付の並べ替えや期間集計ではnullを別に扱い、一覧の日付や検知日を代入しません。report、inventory、decision-inputの形式版は変わりません。

`intake/domestic-20261009.json` と同名のJSONLは、国内169候補の照合結果です。`supplied` は元の未検証の入力、`verified` は確認済みの主張と出典、`gaps` は未確認事項です。`status` が `awaiting-primary-source` や `verified-disclosure-partial` の候補を事故カタログへ混ぜません。`catalogued-partial` は事故の存在を確認できても、入力一覧の件数や初報日が未確認の候補です。`retry` は次回の再確認候補を示します。

各ファイルの完全性はdiscovery.jsonのハッシュで照合します。個別レコードのカタログハッシュだけでは候補台帳の内容を検証できません。すべて同じコミットから取得してください。
