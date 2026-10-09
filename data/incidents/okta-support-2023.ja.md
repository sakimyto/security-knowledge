# okta-support-2023 — Okta：サポート添付ファイルのセッション情報を悪用

事例 | Catalog: 0.6.1 | Record SHA-256: ce2a745c071cd0822922d4da150d4c8c22b9b85503b2fc9041c1761718ea25de

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

盗まれたサービスアカウントでサポートシステム内のファイルへアクセスされました。HARファイル内のセッショントークンが、一部顧客への侵入に使われました。

Organization: Okta | Outcome: confirmed-breach

Occurred: 2023-09-28 | Disclosed: 2023-10-20 | Reviewed: 2026-10-02

Categories: credentials, endpoint | CVEs: unspecified

## 根拠のある主張

- [confirmed / 公表で確認] サポート用サービスアカウントが悪用され、HAR等の添付ファイルにアクセスされました。 (s1; Executive Summary)
- [inferred / 推定] 個人Googleアカウントへの認証情報の保存が確認され、個人アカウントか端末の侵害が有力な流出経路と説明されました。 (s1; Executive Summary)
- [confirmed / 公表で確認] 盗まれたセッショントークンで5顧客のセッションが乗っ取られたと公表しました。 (s1; Executive Summary)

## 公表された対応

- [confirmed / 公表で確認] 個人Chromeプロファイルへのログイン制限と監視強化を実施しました。 (s1; Remediation Tasks)

## 経緯

- 2023-09-28: 公表された不正アクセス期間の開始。 (s1)
- 2023-10-17: サービスアカウント停止と関連セッション失効。 (s1)
- 2023-10-20: 事故を公表。 (s1)

## 編集上の点検提案

operational-control: サポート用ファイルも秘密情報の持ち出し経路です。添付前の除去と、漏洩したセッションの失効を点検します。 (s1)

## AI関与

[unknown / 不明] 参照した一次情報に、攻撃でAIを利用したことを裏付ける記述はありません。AI不使用を意味しません。

## 未確認事項

- サービスアカウントの資格情報が流出した具体的な経路は、参照した原因報告でも推定です。

Rules: SEC-003, SEC-004, SEC-005, SEC-009

## 出典

- s1: [Unauthorized Access to Okta Support: Root Cause and Remediation](https://sec.okta.com/articles/2023/11/unauthorized-access-oktas-support-case-management-system-root-cause/) — Okta; organization; published: 2023-11-03; reviewed: 2026-10-02
