# toyota-github-2022 — トヨタ：公開ソースコードにアクセスキーが残存

事例 | Catalog: 0.4.1 | Record SHA-256: 43212999882c7072a980d356ca9ffceb30fb5eb838a0e95b78cceef75be465bb

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

T-Connectのソースコードの一部がGitHubで公開され、データサーバーのアクセスキーも含まれていました。漏洩の可能性が公表されましたが、第三者のアクセスは確認されていません。

Organization: Toyota / Toyota Connected | Outcome: exposure-only

Occurred: unknown | Disclosed: 2022-10-07 | Reviewed: 2026-10-02

Categories: credentials, configuration | CVEs: unspecified

## 根拠のある主張

- [confirmed / 公表で確認] 2017年12月から2022年9月15日まで、アクセスキーを含むコードが公開されていました。 (s1; 経緯と対応)
- [confirmed / 公表で確認] 約29.6万件のメールアドレス等の漏洩可能性があり、第三者のアクセスは確認も完全な否定もできないと公表しました。 (s1; 本文)

## 公表された対応

- [confirmed / 公表で確認] コードの非公開化とアクセスキーの変更を実施しました。 (s1; 経緯と対応)

## 経緯

- 2022-09-15: 公開を確認し、コードを非公開化。 (s1)
- 2022-09-17: アクセスキーを変更。 (s1)
- 2022-10-07: 漏洩の可能性を公表。 (s1)

## 編集上の点検提案

operational-control: リポジトリの公開設定と秘密情報の混入を別々に点検します。公開を止めても、既に取得された鍵は失効が必要です。 (s1)

## AI関与

[unknown / 不明] 参照した一次情報に、攻撃でAIを利用したことを裏付ける記述はありません。AI不使用を意味しません。

## 未確認事項

- 実際の不正アクセスや個人情報の取得は、参照した発表では確認されていません。

Rules: SEC-004, SEC-005

## 出典

- s1: [お客様のメールアドレス等の漏洩可能性に関するお詫びとお知らせ](https://global.toyota/jp/newsroom/corporate/38095972.html) — トヨタ自動車; organization; published: 2022-10-07; reviewed: 2026-10-02
