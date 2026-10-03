# gainsight-oauth-2025 — Gainsight連携：古いOAuthトークンを顧客環境へのアクセスに悪用

事例 | Catalog: 0.4.1 | Record SHA-256: 6ae22e8b926ab069ccfd74df1b7d2ab4ca50731bf2e538e801468489502b486f

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

攻撃者は、古い連携トークンの有効性を調べ、失効されていないものをSalesforce APIへのアクセスに使いました。トークンを最初に取得した経路は特定されていません。

Organization: Gainsight–Salesforce連携の顧客環境 | Outcome: confirmed-breach

Occurred: 2025-10-22 | Disclosed: 2025-11-20 | Reviewed: 2026-10-02

Categories: credentials, unknown | CVEs: unspecified

## 根拠のある主張

- [confirmed / 公表で確認] 10月22日にトークンを検証し、11月16〜19日に顧客のSalesforce環境でAPIを呼び出したと報告しています。Gainsight環境への同時期の侵入を示すものではありません。 (s2; Analyzing the Token Usage)
- [confirmed / 公表で確認] 最も新しいトークンも2023年8月発行でした。調査元は漏えい元を特定できず、失効や更新まで長期間有効な設計を問題として説明しています。 (s2; Analyzing the Token Origin / At the Root of the Issue)

## 公表された対応

- [confirmed / 公表で確認] 全システムの資格情報を更新し、古い鍵を削除しました。連携トークンの頻繁な更新、単回使用の更新トークン、接続元制限、PKCEを導入したと公表しました。 (s2; Immediate Remediation / OAuth Token Lifecycle Management)

## 経緯

- 2025-11-20: この事案を公表。 (s1)

## 編集上の点検提案

operational-control: OAuthの有効期限、更新トークンの再利用制御、旧トークンの失効結果を確認します。漏えい元が不明でも、鍵を長期間使い続けられる範囲は点検できます。 (s2)

## AI関与

[unknown / 不明] 参照した情報では、攻撃者によるAI利用は確認できません。AI不使用を意味しません。

## 未確認事項

- 漏えい元と最初の漏えい時期は不明です。古いトークンの再利用を、2025年のGainsight本体への侵入と同一視しません。

Rules: SEC-002, SEC-005, SEC-008, SEC-009

## 出典

- s1: [Salesforce–Gainsight Connected App Incident](https://communities.gainsight.com/community-news-2/salesforce-gainsight-connected-app-incident-29798) — Gainsight; organization; published: 2025-11-20; reviewed: 2026-10-02
- s2: [How We Accelerated a Year of Security Work in Weeks](https://www.gainsight.com/blog/how-we-accelerated-a-year-of-security-work-in-weeks/) — Gainsight; organization; published: 2026-01-02; reviewed: 2026-10-02
