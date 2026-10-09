# awabank-test-environment-2026 — 阿波銀行：残存したテスト環境から情報が流出

事例 | Catalog: 0.6.1 | Record SHA-256: 274695977d4b0103725da2aef85bb23722b25dde5a57ad8c0d4d2c1e25ee7b74

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

廃止・データ消去が必要だったテスト環境が、AI高度化の検証用として残っていました。ID・パスワードによる不正アクセスを受け、顧客・株主の情報が流出したと公表しています。

Organization: 阿波銀行 | Outcome: confirmed-breach

Occurred: unknown | Disclosed: 2026-04-03 | Reviewed: 2026-10-02

Categories: credentials, configuration | CVEs: unspecified

## 根拠のある主張

- [confirmed / 公表で確認] 外部からテスト環境へID・パスワードを用いた不正アクセスがありました。 (s1; 原因)
- [confirmed / 公表で確認] 開発後の環境廃止・データ消去が行われず、アクセス制御も不十分だったと報告しました。 (s1; 原因 / 再発防止策)

## 公表された対応

- [confirmed / 公表で確認] 警察の調査後の環境廃止と、システム管理・アクセス制御の見直しを予定すると公表しました。 (s1; 再発防止策)

## 経緯

- 2026-04-03: この事案を公表。 (s1)

## 編集上の点検提案

operational-control: 非本番環境の実データ、公開範囲、責任者、廃止期限と消去の証拠を点検します。 (s1)

## AI関与

[unknown / 不明] AIは環境を残した業務目的として記載されています。攻撃者のAI利用を示す根拠ではありません。

## 未確認事項

- 認証情報の入手経路と、非本番環境を残した判断の詳細は不明です。

Rules: SEC-002, SEC-005, SEC-006, SEC-009, SEC-012

## 出典

- s1: [情報流出に関する調査結果および再発防止策について](https://www.awabank.co.jp/kojin/benri/awagin_app/news/2026/news20260603a/index.html) — 阿波銀行; organization; published: 2026-06-03; reviewed: 2026-10-02
