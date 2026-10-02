# forticloud-sso-2026 — FortiCloud SSO：修正済み機器でも認証を悪用

事例 | Catalog: 0.4.0 | Record SHA-256: 0a7f90420b23c4dfb973bdcaff05e36e1eb84dc5c20fa128b3a09de3ba9ff80b

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

Fortinetは、最新の修正を適用したFortiOSでもFortiCloud SSOから不正ログインされる事案を公表しました。攻撃者による管理者アカウントの作成も確認されています。

Organization: Fortinet / FortiCloud SSO users | Outcome: confirmed-breach

Occurred: unknown | Disclosed: 2026-01-22 | Reviewed: 2026-10-02

Categories: zero-day, implementation | CVEs: CVE-2026-24858

## 根拠のある主張

- [confirmed / 公表で確認] 1月22日時点で最新の修正済み機器への不正SSOログインを確認しました。対象はFortiCloud SSOで、第三者SAML IdP全般ではありません。 (s1; Update Jan 22 / Update Jan 28)
- [confirmed / 公表で確認] Fortinetが登録したCVE-2026-24858はFortiCloud SSOの認証回避を扱います。 (s2; Description / vendor references)

## 公表された対応

- [confirmed / 公表で確認] Fortinetは不正なクラウドアカウントの無効化、SSOの停止、修正版への接続制限を公表しました。 (s1; Updates Jan 22–30)

## 経緯

- 2026-01-22: この事案を公表。 (s1)

## 編集上の点検提案

pre-disclosure-exploitation: 公表前の悪用を含みます。更新に加え、FortiCloud SSOの使用状況と管理者の追加履歴を確認します。 (s1)

## AI関与

[unknown / 不明] 参照した情報では、攻撃者によるAI利用は確認できません。AI不使用を意味しません。

## 未確認事項

- 各組織への侵入日と被害範囲は不明です。CVEの影響製品・修正版は最新の公式情報で確認します。

Rules: SEC-001, SEC-002, SEC-005, SEC-006, SEC-008, SEC-009

## 出典

- s1: [Analysis of SSO abuse on FortiOS](https://www.fortinet.com/blog/psirt-blogs/analysis-of-sso-abuse-on-fortios) — Fortinet; vendor; published: 2026-01-22; reviewed: 2026-10-02
- s2: [CVE-2026-24858](https://nvd.nist.gov/vuln/detail/CVE-2026-24858) — NIST / Fortinet; government; published: unknown; reviewed: 2026-10-02
