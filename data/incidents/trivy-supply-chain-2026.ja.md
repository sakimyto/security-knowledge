# trivy-supply-chain-2026 — Trivy：失効漏れの資格情報から配布物とActionを改ざん

事例 | Catalog: 0.6.1 | Record SHA-256: cb35a6d0ed024d98b333585f5eb25ad4d4550664ccda998253132a9b849b8169

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

Aqua Securityは、GitHub Actionsの設定不備で特権トークンを取得され、初回対応の失効漏れを経て再び配布物を改ざんされたと報告しました。既存のActionタグも悪性コミットへ付け替えられました。

Organization: Aqua Security / Trivy | Outcome: confirmed-breach

Occurred: unknown | Disclosed: 2026-03-20 | Reviewed: 2026-10-02

Categories: supply-chain, credentials, configuration | CVEs: unspecified

## 根拠のある主張

- [confirmed / 公表で確認] 2月下旬の設定不備によるトークン取得後、3月1日の資格情報更新では一部の有効な資格情報が残り、3月19日の改ざんに利用されました。 (s2; Attack Timeline)
- [confirmed / 公表で確認] Trivy v0.69.4とGitHub Actionsに悪性コードが配布され、既存タグも付け替えられました。影響を受けたCIに渡された秘密情報は露出した可能性があると警告しています。 (s2; What Happened / What Was Affected)

## 公表された対応

- [confirmed / 公表で確認] 悪性配布物を削除し、資格情報の失効と更新、長期トークンからの移行、CIとアクセス制御の強化を進めていると公表しました。 (s2; Ongoing Actions / Attack Timeline)

## 経緯

- 2026-03-20: この事案を公表。 (s1)

## 編集上の点検提案

operational-control: Actionのタグだけでなく、検証したコミットを固定できているか確認します。初回対応で新しい鍵を作っただけにせず、全旧鍵の失効記録と利用先を照合します。 (s2)

## AI関与

[unknown / 不明] 参照した情報では、攻撃者によるAI利用は確認できません。AI不使用を意味しません。

## 未確認事項

- 2月下旬の初回侵入の正確な日は不明です。このレコードは3月19日の再侵害を中心に記録し、配布数を被害組織数とは扱いません。

Rules: SEC-001, SEC-004, SEC-005, SEC-007, SEC-008, SEC-009

## 出典

- s1: [Trivy Security incident 2026-03-19](https://github.com/aquasecurity/trivy/discussions/10425) — Aqua Security / Trivy maintainers; vendor; published: 2026-03-20; reviewed: 2026-10-02
- s2: [Trivy supply chain attack: ongoing investigation and remediation](https://www.aquasec.com/blog/trivy-supply-chain-attack-what-you-need-to-know/) — Aqua Security; vendor; published: 2026-03-22; reviewed: 2026-10-02
