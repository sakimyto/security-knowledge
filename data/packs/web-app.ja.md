# web-app

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

この分野の点検候補だけを収録しています。残るルールも条件を確認するか、未確認として記録してください。

# SEC-001 — 修正対象と稼働バージョンを照合する

点検ルール | Catalog: 0.6.0 | Record SHA-256: 67a3397e78c18fd3cf3303bf454c613d89623c43468980a489e4beb63612710c

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

依存パッケージや自前運用の製品を使う環境。ソースのlockfileだけでなく、実際に配布・稼働するものが対象です。

Version: 1.1.0 | Updated: 2026-10-09 | Surfaces: dependencies, web-app

Execution: read-only-by-default | Provenance: editorial-guidance

## 適用条件

依存パッケージや自前運用の製品を使う環境。ソースのlockfileだけでなく、実際に配布・稼働するものが対象です。

## 見る箇所

- lockfile・パッケージ定義・SBOM
- 製品台帳・コンテナのダイジェスト・稼働バージョン

## 確認方法

- OSV・開発元の最新アドバイザリとバージョンを照合し、影響条件と根拠を記録する。
- 悪用が確認されたものと外部から到達可能なものを優先し、更新が本番に反映されたか確認する。

## 修正の方向

- 互換性を確認して更新し、すぐ更新できない場合は開発元の回避策と公開範囲の制限を検討する。

## 完了の証拠

- 稼働バージョン・対象アドバイザリ・適用した更新・必要な動作確認の結果を残す。

## 確認できない範囲

- このDBにCVEがないことは安全の証拠になりません。閉じた製品の内部実装や実際の侵害は別途調査が必要です。

## 関連事例

applynow-bi-2026, axios-npm-2026, dandm-vpn-ransomware-2026, digital-agency-gss-2026, education-software-dormant-2026, equifax-2017, forticloud-sso-2026, gmo-infoq-2026, gyazo-2026, inkrevolution-payment-2025, kaga-solnet-2026, kddi-isp-2026, leanbody-metabase-2026, logicvein-2025, media4u-account-list-2026, metabase-2026, moveit-2023, mrmax-2026, nidek-website-2026, nishiyama-2026, openai-huggingface-eval-2026, osaka-recruitment-vendor-2026, ozmall-2026, pickleballone-plugin-2026, postman-shai-hulud-2025, prontest-cloud-2026, react2shell-2025, rust-arrayref-2026, saga-hirakawaya-payment-2026, trivy-supply-chain-2026, voising-bi-2026, white-essence-2026, zurich-zdash-2026

## 出典

一次情報のURLと主張の確度は、関連事例の sources と claims で確認できます。事例を必要なときに取得し、点検ルールと実際の原因を同一視しません。

- [OSV API](https://google.github.io/osv.dev/api/)
- [CISA KEV](https://www.cisa.gov/known-exploited-vulnerabilities-catalog)

# SEC-006 — 稼働環境の公開範囲を確認する

点検ルール | Catalog: 0.6.0 | Record SHA-256: 03bdd270e4914e6e5c436bbc77ecc0b77a78bbf9eb2983b485d635ef5a111e25

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

クラウド・データ基盤・管理画面・ファイル転送を持つ環境。委託先が管理する資産も対象です。

Version: 1.1.0 | Updated: 2026-10-09 | Surfaces: cloud, data-store, web-app

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

anthropic-cyber-evals-2026, asahi-pharma-digital-2026, awabank-test-environment-2026, campfire-2026, chibagin-shoten-2026, cmic-ra-connect-2026, daiichi-life-hr-2026, daiki-suisan-2026, digital-agency-gss-2026, education-software-dormant-2026, epark-peakmanager-2026, eplus-refund-2026, forticloud-sso-2026, fukuoka-editable-application-2026, fuso-cloud-storage-2026, gyazo-2026, his-thailand-2025, istyle-transfer-exposure-2026, jaea-jrr3-files-2026, kamogawa-form-exposure-2026, kddi-isp-2026, komatsu-user-directory-exposure-2026, kwansei-external-sns-2026, kyoto-kyotv-exposure-2026, metabase-2026, mie-school-form-exposure-2026, moveit-2023, mrmax-2026, nichii-backup-exposure-2026, nidek-website-2026, nishiyama-2026, openai-huggingface-eval-2026, prontest-cloud-2026, react2shell-2025, rizap-ai-data-handling-2026, sakura-billing-2026, sakura-hosting-2026, scala-iask-2026, seiho-contract-lookup-2026, shizuoka-form-exposure-2026, snowflake-unc5537-2024, temairazu-2026, times-car-2026, toyota-cloud-2023, unit42-ai-assisted-2026, voising-bi-2026, yakiniku-king-2026

## 出典

一次情報のURLと主張の確度は、関連事例の sources と claims で確認できます。事例を必要なときに取得し、点検ルールと実際の原因を同一視しません。

# SEC-010 — 外部入力とSQLの組み立てを確認する

点検ルール | Catalog: 0.6.0 | Record SHA-256: 057e3ecf2e5f444da0fa1a37d2696bce79690ae193150a0ea534ec07542be6ff

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

# SEC-014 — 照会APIの認可と取得量の制御を確認する

点検ルール | Catalog: 0.6.0 | Record SHA-256: ba83f5606c6bc7750f81821ef96169dd4e8621b75200040ea500ef2c24b521b3

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

会員・顧客・組織の情報を照会、一覧表示、一括出力するWebアプリやAPI。

Version: 1.1.0 | Updated: 2026-10-09 | Surfaces: web-app, identity, data-store

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

2rinkan-api-2026, aflac-japan-2026, benefit-one-tenant-export-2026, en-midcareer-credential-stuffing-2026, fancrew-credential-stuffing-2026, fines-reservations-2026, gmo-infoq-2026, gpoint-2026, jaea-jrr3-files-2026, kaga-solnet-2026, komatsu-user-directory-exposure-2026, kwansei-external-sns-2026, kyoto-kyotv-exposure-2026, nimoca-2026, osaka-high-court-teams-2026, saga-hirakawaya-payment-2026, seicomart-app-2026, seiho-contract-lookup-2026, shizuoka-form-exposure-2026, shueisha-hapicomi-2026, studysapuri-enumeration-2026, takaratomy-dmp-auth-2026, tixplus-cache-exposure-2026, weblife-oem-2026, weverse-payment-api-2026

## 出典

一次情報のURLと主張の確度は、関連事例の sources と claims で確認できます。事例を必要なときに取得し、点検ルールと実際の原因を同一視しません。

- [アフラック生命保険：調査結果と再発防止策](https://www.aflac.co.jp/static/corp/profile/news/2026/2026073100.pdf)

# SEC-015 — アップロードしたファイルの実行を制限する

点検ルール | Catalog: 0.6.0 | Record SHA-256: 1dfd83077658a79d47897d199f646eb9f69aa4d92c7646c57f2b82a715fde44c

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

利用者や外部システムから受け取るファイルの保存先と、実行できる範囲を点検します。

Version: 1.0.0 | Updated: 2026-10-09 | Surfaces: web-app, cloud, data-store

Execution: read-only-by-default | Provenance: editorial-guidance

## 適用条件

ファイルのアップロード、取り込み、保存、配信を行うサービス。

## 見る箇所

- アップロードの保存先、配信設定、実行ハンドラー、処理用アカウントの権限

## 確認方法

- 保存先がアプリの実行領域やコード配布先と重ならないか、設定と構成を照合する。
- 保存したファイルをプログラムとして実行できる経路と、別の環境へ到達する権限を確認する。
- 所有者が許可した検証環境の試験結果を確認する。証拠がなければunverifiedとし、攻撃用ファイルを本番へ送らない。

## 修正の方向

- ファイルの保存・配信とコード実行を分離し、保存先の実行ハンドラーと不要な権限を取り除く。

## 完了の証拠

- 保存先で実行が拒否される設定と試験証拠、通常の保存・配信が成功する試験証拠を残す。

## 確認できない範囲

- 拡張子の制限だけでは実行の可否を確認できません。画像処理ライブラリや変換処理の脆弱性は別に照合します。
- このルールへの接続は点検の提案です。アップロード機能が事故の侵入原因だったという認定ではありません。

## 関連事例

chiba-biodiversity-2026, conoha-wing-2026, inkrevolution-payment-2025, pickleballone-plugin-2026, saga-hirakawaya-payment-2026, scala-iask-2026

## 出典

一次情報のURLと主張の確度は、関連事例の sources と claims で確認できます。事例を必要なときに取得し、点検ルールと実際の原因を同一視しません。

# SEC-016 — 利用者ごとのレスポンスをキャッシュで混在させない

点検ルール | Catalog: 0.6.0 | Record SHA-256: cce435bbacb6fef88c9e9d661222b081d8463e4f025448a7796cdcddd7548488

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

CDN、プロキシ、アプリのキャッシュで、別の利用者や組織の情報が返らないことを確認します。

Version: 1.0.0 | Updated: 2026-10-09 | Surfaces: web-app, cloud, data-store

Execution: read-only-by-default | Provenance: editorial-guidance

## 適用条件

ログイン状態や組織、権限によってレスポンスが変わり、キャッシュを利用するサービス。

## 見る箇所

- CDN・プロキシの保存条件、キャッシュキー、Cookie・Authorizationの扱い、認証後のページとAPI

## 確認方法

- 個人情報を含むレスポンスの保存条件とキャッシュキーを照合し、利用者・組織・権限の違いを正しく扱っているか確認する。
- 所有者が許可した検証環境の試験証拠で、Aの後にBが同じURLへアクセスしてもAのデータが返らず、未ログイン・ログアウト後にもデータが残らないことを確認する。
- 通常、エラー、リダイレクト、再認証のレスポンスとキャッシュ無効化後の挙動を確認する。設定だけで証明できなければunverifiedとする。

## 修正の方向

- 個別レスポンスの共有キャッシュを止めるか、必要な識別子と権限を含む分離を設計し、変更時には既存キャッシュも無効化する。

## 完了の証拠

- 変更した設定と、異なる利用者・組織・未ログイン状態の順序を変えても混在しない試験結果を残す。通常の配信も成功することを確認する。

## 確認できない範囲

- Cache-Controlの記載だけでは、CDNやアプリ独自の保存処理まで保証できません。認可そのものはSEC-014で別に確認します。
- 事故へのリンクは点検の提案です。各サービスに同じ設定不備があるという認定ではありません。

## 関連事例

tixplus-cache-exposure-2026

## 出典

一次情報のURLと主張の確度は、関連事例の sources と claims で確認できます。事例を必要なときに取得し、点検ルールと実際の原因を同一視しません。
