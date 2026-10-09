# kddi-isp-2026 — KDDI：第三者ソフトのゼロデイからISP情報が流出

事例 | Catalog: 0.6.1 | Record SHA-256: 39e8d7d7e2c170f2e4134b750493f6fa127f9d2ec76f4c5cdb87182811848709

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

5月16日からソフトウェアの脆弱性を悪用され、ISP利用者の情報が流出しました。KDDIは、6月17日の発見時点で提供元も把握していなかった脆弱性と説明しています。

Organization: KDDI | Outcome: confirmed-breach

Occurred: 2026-05-16 | Disclosed: 2026-06-23 | Reviewed: 2026-10-09

Categories: zero-day | CVEs: unspecified

## 根拠のある主張

- [confirmed / 公表で確認] 悪用は5月16日から始まり、6月17日の発見時点で提供元も未把握の脆弱性でした。 (s1; 3. 発生原因および対応)
- [confirmed / 公表で確認] 7月21日の訂正後の対象はメールアドレス1,223万1,954人、うちパスワード流出761万6,173人です。 (s1; 2. 情報流出の詳細（7月21日訂正）)

## 公表された対応

- [confirmed / 公表で確認] 6月17日のシステム修正、EDR導入と、ISPパスワードのリセット対応を公表しました。 (s1; 3. 対応 / 4. お願い)

## 経緯

- 2026-06-23: この事案を公表。 (s1)

## 編集上の点検提案

pre-disclosure-exploitation: 公表前の悪用を含みます。依存製品の把握に加え、流出範囲を限定する権限・保存情報・検知を確認します。 (s1)

## AI関与

[unknown / 不明] 対策でのAI利用は記載されていますが、攻撃者のAI利用は確認できません。

## 未確認事項

- 製品名とCVEは非公表です。漏れたパスワードすべての保存形式はこの資料だけでは判断できません。

Rules: SEC-001, SEC-005, SEC-006, SEC-008, SEC-009

## 出典

- s1: [当社ISPサービスのお客さま情報の流出について（第2報・訂正）](https://newsroom.kddi.com/news/assets/2026/kddi_nr_s-73_4619/kddi_nr_s-73_4619_pdf_01.pdf) — KDDI; organization; published: 2026-07-06; reviewed: 2026-10-09
- s2: [当社ISPサービスのお客さま情報の流出について](https://newsroom.kddi.com/news/assets/2026/kddi_nr_s-71_4593/kddi_nr_s-71_4593_pdf_01.pdf) — KDDI; organization; published: 2026-06-23; reviewed: 2026-10-09
