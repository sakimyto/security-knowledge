# data-store

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

この分野の点検候補だけを収録しています。残るルールも条件を確認するか、未確認として記録してください。

# SEC-005 — 更新対象の資格情報と旧鍵の失効を照合する

点検ルール | Catalog: 0.4.0 | Record SHA-256: 4b6c2d63dde3bd985a945c313d3ddbf204f4b2830230426efbd8029bb2cbe5c0

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

資格情報の漏洩・侵害・供給元事故が疑われる環境。通常点検では実値を含まない台帳と失効手順を確認します。

Version: 1.2.0 | Updated: 2026-10-02 | Surfaces: identity, ci, cloud, data-store

Execution: read-only-by-default | Provenance: editorial-guidance

## 適用条件

資格情報の漏洩・侵害・供給元事故が疑われる環境。通常点検では実値を含まない台帳と失効手順を確認します。

## 見る箇所

- 鍵・トークン・サービスアカウントのメタデータ台帳
- 旧鍵の失効結果・利用先・失効後の監査ログ
- OAuthの有効期限・更新トークンの再利用・未使用連携の失効記録

## 確認方法

- 使用中と誤認されたものだけでなく、全対象のID・所有者・利用先・失効方法を照合する。
- 新しい鍵の発行と旧鍵の失効を分けて確認し、未知の追加アカウントや永続化も調査対象へ渡す。
- 長期間有効な連携トークンと更新トークンを棚卸しし、有効期限・再利用制御・失効後の拒否をメタデータと承認済みの試験証拠で確認する。

## 修正の方向

- 利用先への切替と旧鍵の失効を段階的に行う計画を作る。本番の失効・権限変更は既存の承認範囲で実施する。

## 完了の証拠

- 台帳の全対象に失効結果が対応し、旧鍵が拒否される検証または供給元の失効記録を残す。

## 確認できない範囲

- 新しい鍵を作っただけでは完了ではありません。漏洩した鍵をAIへ渡さず、権限不足なら未確認とします。

## 関連事例

anthropic-claude-code-abuse-2025, anthropic-cyber-evals-2026, askul-2025, awabank-test-environment-2026, axios-npm-2026, campfire-2026, circleci-2023, cloudflare-thanksgiving-2023, codecov-2021, digital-agency-gss-2026, forticloud-sso-2026, gainsight-oauth-2025, gyazo-2026, kddi-isp-2026, metabase-2026, nishiyama-2026, okta-support-2023, openai-huggingface-eval-2026, openai-mixpanel-2025, postman-shai-hulud-2025, prontest-cloud-2026, quick-2025, react2shell-2025, rust-arrayref-2026, sakura-billing-2026, sakura-hosting-2026, temairazu-2026, times-car-2026, toyota-github-2022, trivy-supply-chain-2026, unit42-ai-assisted-2026, voising-bi-2026

## 出典

一次情報のURLと主張の確度は、関連事例の sources と claims で確認できます。事例を必要なときに取得し、点検ルールと実際の原因を同一視しません。

# SEC-006 — 稼働環境の公開範囲を確認する

点検ルール | Catalog: 0.4.0 | Record SHA-256: ef322bf44c1b8241baf2b84ce08f6422b46075b59a85e88eb927713bbef64e8a

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

クラウド・データ基盤・管理画面・ファイル転送を持つ環境。委託先が管理する資産も対象です。

Version: 1.2.0 | Updated: 2026-10-02 | Surfaces: cloud, data-store, web-app

Execution: read-only-by-default | Provenance: editorial-guidance

## 適用条件

クラウド・データ基盤・管理画面・ファイル転送を持つ環境。委託先が管理する資産も対象です。

## 見る箇所

- IaC・実環境の公開設定・ネットワークポリシー
- 管理画面・データ保存先・委託先の資産一覧

## 確認方法

- 意図した公開先と実際の設定を照合し、匿名アクセスや広い接続元許可を確認する。
- 許可された資産だけで、データを取得せずに拒否を確認する。実環境へアクセスできなければ未確認とする。

## 修正の方向

- 公開が不要な経路を制限し、設定変更を検知する監査と責任者を用意する。

## 完了の証拠

- 実環境の設定証拠と、想定外の接続元を拒否する確認結果を残す。

## 確認できない範囲

- IaCだけの確認では実環境の手動変更を見つけられません。公開サイトの存在自体を欠陥とは判断しません。

## 関連事例

anthropic-cyber-evals-2026, awabank-test-environment-2026, campfire-2026, digital-agency-gss-2026, forticloud-sso-2026, gyazo-2026, kddi-isp-2026, metabase-2026, moveit-2023, nidek-website-2026, nishiyama-2026, openai-huggingface-eval-2026, prontest-cloud-2026, react2shell-2025, sakura-billing-2026, sakura-hosting-2026, snowflake-unc5537-2024, temairazu-2026, times-car-2026, toyota-cloud-2023, unit42-ai-assisted-2026, voising-bi-2026

## 出典

一次情報のURLと主張の確度は、関連事例の sources と claims で確認できます。事例を必要なときに取得し、点検ルールと実際の原因を同一視しません。

# SEC-008 — 侵害後に広がる管理権限を確認する

点検ルール | Catalog: 0.4.0 | Record SHA-256: f2471e2ab224669a418afa7fb130562e051bccc70c7a79cd70cb39641c967464

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

管理者・サービスアカウント・CIが本番や別のデータ基盤へアクセスする環境。

Version: 1.2.0 | Updated: 2026-10-02 | Surfaces: identity, cloud, data-store, ci

Execution: read-only-by-default | Provenance: editorial-guidance

## 適用条件

管理者・サービスアカウント・CIが本番や別のデータ基盤へアクセスする環境。

## 見る箇所

- IAM・ロール・サービスアカウント
- 本番トークン発行経路・環境間の接続

## 確認方法

- 通常業務に必要な権限と、鍵の発行・データ一括取得・権限追加が可能な範囲を比較する。
- 一つのセッションや鍵の侵害で他の環境へ到達できる経路を記録する。

## 修正の方向

- 権限の縮小と環境の分離を提案し、必要な業務への影響を検証する。

## 完了の証拠

- 許可した操作が成功し、許可していない操作が拒否されるテストを残す。

## 確認できない範囲

- 権限の広さだけで侵害を断定しません。本番ロールの変更は所有者の承認範囲に従います。

## 関連事例

aflac-japan-2026, anthropic-claude-code-abuse-2025, anthropic-cyber-evals-2026, askul-2025, campfire-2026, circleci-2023, cloudflare-thanksgiving-2023, digital-agency-gss-2026, discord-support-vendor-2025, forticloud-sso-2026, gainsight-oauth-2025, gyazo-2026, kddi-isp-2026, metabase-2026, openai-huggingface-eval-2026, openai-mixpanel-2025, postman-shai-hulud-2025, quick-2025, react2shell-2025, sakura-billing-2026, sakura-hosting-2026, snowflake-unc5537-2024, temairazu-2026, times-car-2026, trivy-supply-chain-2026, unit42-ai-assisted-2026, voising-bi-2026

## 出典

一次情報のURLと主張の確度は、関連事例の sources と claims で確認できます。事例を必要なときに取得し、点検ルールと実際の原因を同一視しません。

# SEC-009 — 取得・管理操作のログが揃っているか確認する

点検ルール | Catalog: 0.4.0 | Record SHA-256: ee5ca8e3ff31cae2c3818e2446db3453376e07ac498d71a4b9bd54aa2678f745

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

ファイル取得・データ一括出力・鍵発行・管理操作を提供する環境。

Version: 1.2.0 | Updated: 2026-10-02 | Surfaces: identity, data-store, support

Execution: read-only-by-default | Provenance: editorial-guidance

## 適用条件

ファイル取得・データ一括出力・鍵発行・管理操作を提供する環境。

## 見る箇所

- 監査ログの種類・保管・検索クエリ
- ファイル直接取得・鍵発行・不審な認証の通知

## 確認方法

- 画面経由と直接API経由の操作が両方記録され、取得漏れがないか合成イベントで確認する。
- 大量取得や想定外の管理操作に通知が届くか確認し、秘密や個人情報はログへ出さない。

## 修正の方向

- 不足するイベントの記録と通知を整え、保存期間と調査担当者を決める。

## 完了の証拠

- 合成イベントの操作から記録・検索・通知までの一連の証拠を残す。

## 確認できない範囲

- ログがないことは侵害がない証拠ではありません。ログを取得できなければ未確認とします。

## 関連事例

aflac-japan-2026, anthropic-claude-code-abuse-2025, anthropic-cyber-evals-2026, askul-2025, awabank-test-environment-2026, axios-npm-2026, campfire-2026, cloudflare-thanksgiving-2023, digital-agency-gss-2026, discord-support-vendor-2025, forticloud-sso-2026, gainsight-oauth-2025, gyazo-2026, kddi-isp-2026, keio-ransomware-2026, metabase-2026, nidek-website-2026, nishiyama-2026, okta-support-2023, openai-huggingface-eval-2026, openai-mixpanel-2025, postman-shai-hulud-2025, prontest-cloud-2026, quick-2025, react2shell-2025, rust-arrayref-2026, sakura-billing-2026, sakura-hosting-2026, snowflake-unc5537-2024, temairazu-2026, times-car-2026, trivy-supply-chain-2026, unit42-ai-assisted-2026, voising-bi-2026

## 出典

一次情報のURLと主張の確度は、関連事例の sources と claims で確認できます。事例を必要なときに取得し、点検ルールと実際の原因を同一視しません。

# SEC-010 — 外部入力とSQLの組み立てを確認する

点検ルール | Catalog: 0.4.0 | Record SHA-256: 057e3ecf2e5f444da0fa1a37d2696bce79690ae193150a0ea534ec07542be6ff

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

自社でSQLを実行するコードを持つ環境。閉じた製品は内部実装を推測せず、SEC-001の製品点検へ渡します。

Version: 1.1.0 | Updated: 2026-10-02 | Surfaces: web-app, data-store

Execution: read-only-by-default | Provenance: editorial-guidance

## 適用条件

自社でSQLを実行するコードを持つ環境。閉じた製品は内部実装を推測せず、SEC-001の製品点検へ渡します。

## 見る箇所

- API入力・検索条件・データアクセス層
- raw SQL・文字列連結・動的識別子

## 確認方法

- 入力が値としてバインドされるか、SQLの構文へ直接連結されないか追跡する。
- 動的な列名やソート指定は許可リストで扱い、代表・境界・不正入力を合成データで検証する。

## 修正の方向

- 値はパラメータ化し、識別子には許可リストを使う。必要な検索動作を保つ回帰テストを追加する。

## 完了の証拠

- 不正入力がSQL構造を変えず、許可された操作だけが成立するテストを残す。

## 確認できない範囲

- MOVEitは製品側の欠陥の事例です。このルールはそこから導いた一般点検であり、同じ実装原因を自社コードへ断定しません。

## 関連事例

anthropic-cyber-evals-2026, gyazo-2026, metabase-2026, moveit-2023

## 出典

一次情報のURLと主張の確度は、関連事例の sources と claims で確認できます。事例を必要なときに取得し、点検ルールと実際の原因を同一視しません。

- [OWASP SQL Injection Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html)

# SEC-012 — 非本番環境と保存データの廃止期限を確認する

点検ルール | Catalog: 0.4.0 | Record SHA-256: a263b1e54e292b97464b5b6e1494a948a77571813c642c26eec1ed994473b833

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

クラウドやDBに顧客データ、本人確認書類、初期認証情報、テスト用コピーを保存する環境に適用します。

Version: 1.1.0 | Updated: 2026-10-02 | Surfaces: cloud, data-store

Execution: read-only-by-default | Provenance: editorial-guidance

## 適用条件

クラウドやDBに顧客データ、本人確認書類、初期認証情報、テスト用コピーを保存する環境に適用します。

## 見る箇所

- 開発・検証・BI・バックアップのデータコピー、退会者と登録未完了者の保存データ。
- 環境とデータの責任者、用途、アクセス権、保持期限、廃止・消去の記録。

## 確認方法

- 資産一覧と実環境を照合し、用途を終えた環境と期限超過のデータを探す。
- 本番データをテストへ持ち込む必要性と匿名化・最小化、外部公開と認証の設定を確認する。
- 保持・消去の運用がDB本体だけでなく、コピー・復元・検索・バックアップにどう適用されるか確認する。

## 修正の方向

- 所有者と合意した保持方針に合わせて、不要な環境を廃止しデータを最小化する。削除は承認範囲と復旧要件に従う。
- 環境作成時に責任者・期限・アクセス制限を必須にし、期限超過を検知する。

## 完了の証拠

- 環境リビジョンに対応する資産・保持期限の一覧と、対象を明記した消去・匿名化の記録。
- 本番コピー、退会者、未完了申込者、バックアップへの適用を確認した結果。

## 確認できない範囲

- 法令や契約上の保持要件はこのDBで判断できません。必要なデータを独断で削除しません。
- 設定や期限の定義だけでは消去の実施を証明できません。実施記録がない範囲は未確認です。

## 関連事例

aflac-japan-2026, awabank-test-environment-2026, discord-support-vendor-2025, gyazo-2026, nidek-website-2026, openai-mixpanel-2025, sakura-billing-2026, temairazu-2026, times-car-2026, voising-bi-2026

## 出典

一次情報のURLと主張の確度は、関連事例の sources と claims で確認できます。事例を必要なときに取得し、点検ルールと実際の原因を同一視しません。

- [阿波銀行の調査結果](https://www.awabank.co.jp/kojin/benri/awagin_app/news/2026/news20260603a/index.html)
- [タイムズカー第3報](https://share.timescar.jp/news/2026/0929/1816.html)

# SEC-013 — 隔離手順とバックアップの復元を確認する

点検ルール | Catalog: 0.4.0 | Record SHA-256: 0e16048f65f44638a3e7858bde158f737c2fa74751e5b12580da67ab0a3e7856

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

共有システム、クラウド、データ保存先がある場合に、侵害時の被害拡大と復旧を点検します。

Version: 1.0.0 | Updated: 2026-10-02 | Surfaces: cloud, data-store

Execution: read-only-by-default | Provenance: editorial-guidance

## 適用条件

共有システム、クラウド、データ保存先がある場合に、侵害時の被害拡大と復旧を点検します。

## 見る箇所

- システム間の依存関係、ネットワーク隔離と実行の責任者、バックアップの保存先と削除権限。

## 確認方法

- 侵害された本番権限からバックアップを変更・削除できるかを権限情報で確認する。
- 復元試験の日時・対象リビジョン・成功結果を確認し、目標復旧時間とデータ損失の要件と照合する。
- 共有システムの隔離手順、業務影響、連絡・判断の担当を記録と照合する。

## 修正の方向

- バックアップの権限と管理経路を本番から分け、保護・保持の方針を設定する。
- 承認された環境で復元・隔離の試験を行い、結果に基づき手順を更新する。

## 完了の証拠

- バックアップの権限・保護設定と、対象リビジョンを明記した復元試験の記録。
- 隔離の判断者、手順、業務依存を確認した記録。

## 確認できない範囲

- バックアップが存在することだけでは復元成功を証明できません。復元試験の証拠がなければ未確認です。
- 本番通信の遮断や破壊的な復旧操作は、この点検ルールだけでは許可されません。

## 関連事例

askul-2025, keio-ransomware-2026, nishiyama-2026, sakura-hosting-2026

## 出典

一次情報のURLと主張の確度は、関連事例の sources と claims で確認できます。事例を必要なときに取得し、点検ルールと実際の原因を同一視しません。

- [アスクル調査結果](https://www.askullogist.co.jp/pdf/20251212.pdf)
- [京王電鉄の障害公表](https://www.keio.co.jp/news/update/announce/nr260926v13404/)

# SEC-014 — 照会APIの認可と取得量の制御を確認する

点検ルール | Catalog: 0.4.0 | Record SHA-256: 40889eb24f568c0135a0c8abe83471c8d3cf585ac435d86a668dbc910a6fc471

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

会員・顧客・組織の情報を照会、一覧表示、一括出力するWebアプリやAPI。

Version: 1.0.0 | Updated: 2026-10-02 | Surfaces: web-app, identity, data-store

Execution: read-only-by-default | Provenance: editorial-guidance

## 適用条件

利用者のIDや所属組織に応じて取得可能なデータが変わる環境。大量照会の制御も対象です。

## 見る箇所

- APIルート・認可処理・組織IDによる絞り込み・DBへの照会
- ページ送り・一括出力・取得量の上限・監視設定

## 確認方法

- 画面の表示制限に加え、各APIが呼び出し元の権限とデータの所属を照合するか確認する。未認証・権限不足・別組織の試験データが拒否されるか、許可されたテスト環境の証拠で確認する。
- 通常形式のリクエストを繰り返した場合も、利用者・組織ごとの取得量を制限・検知できるか確認する。ページ送りや複数のAPIに分けた取得も試験計画に含める。

## 修正の方向

- 認可をサーバー側で共通化し、業務に合う取得量の上限と通知を設ける。許可された操作の成功と、許可していない照会の拒否を試験データで確認する。

## 完了の証拠

- 対象API、権限とデータ所属の組合せ、許可・拒否の試験結果、取得量の上限と通知の証拠を残す。未検査のAPIや一括出力は明記する。

## 確認できない範囲

- 取得量の制限だけでは認可の欠陥を直せません。本番での大量リクエストや実顧客データへの照会を点検のために実行せず、権限や試験証拠が不足すれば未確認とします。

## 関連事例

aflac-japan-2026

## 出典

一次情報のURLと主張の確度は、関連事例の sources と claims で確認できます。事例を必要なときに取得し、点検ルールと実際の原因を同一視しません。

- [アフラック生命保険：調査結果と再発防止策](https://www.aflac.co.jp/static/corp/profile/news/2026/2026073100.pdf)
