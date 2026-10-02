# nidek-website-2026 — ニデック（医療機器）：Webサイトで使うソフトの脆弱性を悪用

事例 | Catalog: 0.4.0 | Record SHA-256: ccd806ce45a04c06b083881c61fbaec18e1ed24c2a721b9d7de02493c77f4c62

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

同社は、Webサイトのソフトウェアの脆弱性を悪用されたと説明しています。会員や問い合わせ情報へのアクセスの可能性がありますが、参照したFAQでは外部への流出は未確認です。

Organization: ニデック（医療機器・NIDEK） | Outcome: confirmed-breach

Occurred: 2026-07-20 | Disclosed: 2026-07-24 | Reviewed: 2026-10-02

Categories: unknown | CVEs: unspecified

## 根拠のある主張

- [confirmed / 公表で確認] 7月20日午前1時ごろ（日本時間）の初回不正アクセスと、7月24日の検知を報告しています。原因はサイトで使うソフトウェアの脆弱性と説明しています。 (s2; FAQ Q1 / Q3 / Q14)
- [confirmed / 公表で確認] 会員情報と問い合わせ情報がアクセス対象となった可能性があります。約28,000会員は影響を受けた可能性のある範囲で、流出確定人数ではありません。 (s2; FAQ Q2 / Q7 / Q17)

## 公表された対応

- [confirmed / 公表で確認] 検知日にソフトウェアを更新し、専門家と調査しています。過去の問い合わせ情報はサイトから削除し、調査・保護措置のため別の場所で保持すると説明しています。 (s2; FAQ Q4 / Q10 / Q14)

## 経緯

- 2026-07-24: この事案を公表。 (s1)

## 編集上の点検提案

unknown: ソフトの稼働版と更新記録、問い合わせ情報の保持先と削除条件を点検します。侵入前の修正提供時期が不明なため、パッチ放置とは判断できません。 (s2)

## AI関与

[unknown / 不明] 参照した情報では、攻撃者によるAI利用は確認できません。AI不使用を意味しません。

## 未確認事項

- 製品名、CVE、修正提供時期、流出の確定範囲は参照資料から特定できません。NIDEKはモーター企業のNIDECとは別会社です。

Rules: SEC-001, SEC-006, SEC-009, SEC-012

## 出典

- s1: [当社Webサイトへの不正アクセスに関するお知らせ](https://www.nidek.co.jp/news/20260724_news/) — NIDEK; organization; published: 2026-07-24; reviewed: 2026-10-02
- s2: [FAQ Regarding Unauthorized Access to Our Website](https://www.nidek-intl.com/information/customer_faq/) — NIDEK; organization; published: 2026-08-19; reviewed: 2026-10-02
