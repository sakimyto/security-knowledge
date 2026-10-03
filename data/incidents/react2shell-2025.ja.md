# react2shell-2025 — React2Shell：公開後にRSCの脆弱性を悪用

事例 | Catalog: 0.4.1 | Record SHA-256: e1fdfa5bfd246913e92ba9225eeda9a0f496fe731af6f782f90ea416e924444a

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

Microsoftは、React Server Componentsの認証不要のコード実行脆弱性による数百台の侵害を報告しました。脆弱性と修正は12月3日に公表されていました。

Organization: React ecosystem / Microsoft observed campaign | Outcome: confirmed-breach

Occurred: unknown | Disclosed: 2025-12-15 | Reviewed: 2026-10-02

Categories: known-vulnerability, implementation | CVEs: CVE-2025-55182

## 根拠のある主張

- [confirmed / 公表で確認] MicrosoftはCVE-2025-55182による複数組織の端末侵害を観測しました。成功例にはレッドチームの評価も含まれます。 (s1; Analyzing CVE-2025-55182 exploitation activity)
- [confirmed / 公表で確認] Reactは12月3日に脆弱性と修正を公表しました。 (s2; Critical Security Vulnerability)

## 公表された対応

- [confirmed / 公表で確認] Microsoftは更新、公開範囲の確認、侵害の調査、影響する秘密情報の更新を推奨しています。 (s1; Mitigation and protection guidance)

## 経緯

- 2025-12-15: この事案を公表。 (s1)

## 編集上の点検提案

patch-available: 稼働するRSC・関連フレームワークのバージョンを最新のアドバイザリと照合します。修正済みでも侵害の痕跡と鍵の利用を確認します。 (s1)

## AI関与

[unknown / 不明] 参照した情報では、攻撃者によるAI利用は確認できません。AI不使用を意味しません。

## 未確認事項

- キャンペーンをまとめた記録です。各被害組織の侵入日や、修正を適用しなかった理由は不明です。

Rules: SEC-001, SEC-005, SEC-006, SEC-008, SEC-009

## 出典

- s1: [Defending against CVE-2025-55182 \(React2Shell\)](https://www.microsoft.com/en-us/security/blog/2025/12/15/defending-against-the-cve-2025-55182-react2shell-vulnerability-in-react-server-components/) — Microsoft; investigator; published: 2025-12-15; reviewed: 2026-10-02
- s2: [Critical Security Vulnerability in React Server Components](https://react.dev/blog/2025/12/03/critical-security-vulnerability-in-react-server-components) — React; vendor; published: 2025-12-03; reviewed: 2026-10-02
