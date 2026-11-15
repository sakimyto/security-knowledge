# cisco-sdwan-auth-bypass-2026 — Cisco SD-WAN Manager：認証回避の実悪用

事例 | Catalog: 0.12.0 | Record SHA-256: 195a4e350b99f1663485e0f9ec5692fa5fcd22850883be22a53d7b41a596433b

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

Ciscoは2026年9月、CVE-2026-76504の実際の悪用を把握しました。URIエンコードの処理不備によって管理者権限でAPIへアクセスできる問題です。被害組織や件数は公表していません。

Organization: Cisco Catalyst SD-WAN Manager users \(organizations not disclosed\) | Outcome: confirmed-breach

Occurred: unknown | Disclosed: 2026-09-30 | Reviewed: 2026-11-16

Categories: implementation | CVEs: CVE-2026-76504

## 根拠のある主張

- [confirmed / 公表で確認] Cisco PSIRTは2026年9月に実際の悪用を把握したと公表しています。個別組織の侵入日ではありません。 (s1; Exploitation and Public Announcements)
- [confirmed / 公表で確認] URIエンコードの不適切な処理により、未認証の遠隔攻撃者が認証ルールを回避し、管理者権限でAPIへアクセスできます。 (s1; Summary)

## 公表された対応

- [confirmed / 公表で確認] Ciscoは修正版と侵害調査の案内を公開しました。 (s1; Summary / Indicators of Compromise / Fixed Software)

## 経緯

- 2026-09-30: Ciscoが実悪用を含むアドバイザリを初公開。 (s1)

## 編集上の点検提案

unknown: 各侵入と修正公開の前後関係は不明です。稼働版・公開範囲・ログを確認します。 (s1)

## AI関与

[unknown / 不明] 参照した資料ではAI関与を確認できません。

## 未確認事項

- 被害組織・人数・機器数・個別の侵入日・流出範囲・復旧状況は不明です。ログの例だけでは侵害を断定できません。

Rules: SEC-001, SEC-006, SEC-009

## 出典

- s1: [Cisco Catalyst SD-WAN Manager API Authentication Bypass Vulnerability](https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-sdwan-webauth-xr8beuuU) — Cisco PSIRT; vendor; published: 2026-09-30; reviewed: 2026-11-16
