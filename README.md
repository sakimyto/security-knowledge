# Security Knowledge

実際のセキュリティ事故を一次情報から整理し、AIが自分の環境を点検するための手順へつなぐDBです。侵入経路、確定と推定、情報元、適用条件、見る箇所、完了の証拠を記録します。

2026-10-02確認の版は41事例・14ルールです。2025-10-02〜2026-10-02の公表日で選んだ国内外の31事例と、過去の10事例を収録しています。[この1年の整理・出典一覧・収集範囲](docs/recent-year-review.md)を公開しました。直近のAI関与は、公表で確認4件・推定1件・不明26件です。確認4件のうち2件は評価試験の逸脱で、犯罪者による利用とは区別します。

事故全体の統計や安全性の保証には使いません。トヨタの2事案は公開状態・漏洩可能性の記録であり、第三者の侵害が確認された記録とは区別しています。

- [AI・サービスへの取り込み方](docs/consuming.md)（URL・添付・1件ずつの点検・JSONL）
- [Jev / TypeSafe AIの接続手順](docs/jev.md)（選択式質問と応答検証）
- AI向け配布データ：[data/llms.txt](data/llms.txt)
- [事故DBと点検ルールのJSON](data/catalog.json)
- サイト連携時の入口：`/security`（英語は `/en/security`）
- 事故の正本：`incidents/<id>.json`
- 点検ルールの正本：`rules/SEC-xxx.json`
- 入出力形式：`schema/`
- [編集基準と追加手順](CONTRIBUTING.md)
- [週次点検の手順と状態管理](docs/weekly-review.md)

## 手元で検証する

Node.js 22以上で実行します。依存パッケージのインストールは不要です。このディレクトリ内で以下を実行してください。

```sh
node scripts/build.mjs --check
node --test scripts/*.test.mjs
node scripts/build.mjs
```

`dist/` に全データのJSON、個別の日本語・英語Markdown、JSONL、分野別資料、使い方の案内、5種類のJSON Schemaを生成します。`discovery.json` がファイルのパス・形式・サイズ・ハッシュをまとめています。JSONの配列順はファイル名で固定し、ビルド時刻は入れません。同じデータからは同じハッシュを生成します。

このリポジトリでは配布データを `data/` に保存します。事故やルールを編集したら、以下で配布データも更新してください。閲覧サイトは別実装です。

```sh
node scripts/build.mjs --out data
node scripts/distribution.mjs data
```

AIへ渡す公開用の入口は `https://raw.githubusercontent.com/sakimyto/security-knowledge/main/data/llms.txt` です。各ファイルの相対URLはこの入口を基準に解決します。

## 点検タスクを作る

```sh
mkdir -p .local
node scripts/plan.mjs --inventory examples/inventory.json > .local/plan.json
```

サンプルは架空の資産です。自分の資産ID、対象分野、環境のリビジョンへ置き換えます。秘密の値、顧客データ、認証Cookieは入力しません。`complete: false` は台帳に抜けがある可能性を意味し、一致する資産がないルールも `unverified` として残します。

CLIは調査対象の候補を作ります。セキュリティ検査そのものや自動修正は実行しません。外部AI、API、シェル内のコマンド、資格情報の操作を呼び出す機能はありません。点検には、各プロジェクトで許可されたツールと証拠が必要です。

前回のインデックスを渡すと、更新・削除されたレコードも比較できます。

```sh
node scripts/plan.mjs --inventory .local/inventory.json --previous .local/previous-index.json
```

DBが更新されなくても、環境の変更や週次の点検は省略しません。確認を終えたら、`report.schema.json` の形式で結果を作り、以下で検証します。

```sh
node scripts/report.mjs .local/report.json
```

形式検証に加え、全ルールの結果、現在のDB・ルールのハッシュ、証拠なしの合格、重複結果を検査します。これは検査結果の真偽を保証するものではありません。証拠が対象の環境・適用条件・完了条件を満たすかは別に確認します。

## データの読み方

各主張の `status` は `confirmed`、`inferred`、`unknown` です。`confirmed` は参照した発表や調査で確認できる意味であり、独立した再調査を行った意味ではありません。`sourceIds` と `locator` で主張の根拠へ戻れます。

`reportedActions` は組織や調査元が公表した対応です。ルールの `remediation` と事故の `prevention.assessment` は、このDBの編集上の提案・評価です。`provenance: editorial-guidance` によって区別します。過失や責任を認定するDBではありません。

ゼロデイと既知の脆弱性、AIの関与は別の軸です。公表前に悪用されたことだけでは、あらゆる被害が回避不能だったとは判断しません。既知の脆弱性を利用した事例だけでも、攻撃者がAIを使わなかったとは判断できません。

## 情報元とライセンス

企業の事故報告、開発元のアドバイザリ、調査機関の報告を優先します。出典は各事故の `sources` に、URL・発行元・公開日・確認日とともに記録しています。公開日が特定できない出典は `null` にします。`occurredAt` は侵入・悪用の日付が確認できる場合だけ記入し、発見日から推測しません。`unknown` 分類は原因の一部または全体が未特定・非公表の場合に使います。関連ルールは編集上の点検提案であり、その欠陥が実際の原因だったという意味ではありません。

このDBで作成した短い要約を収録しています。出典の権利は各権利者に帰属します。このディレクトリのオリジナルの要約・ルール・コードは [MIT](LICENSE) で提供します。

GitHub Actionsは `.github/workflows/check.yml` にあります。入力・参照・点検結果の契約とテストに加え、編集したデータと `data/` の一致を検証します。サイトや別のプロジェクトで使うときは、信頼するコミットを固定して配布JSONを取り込みます。
