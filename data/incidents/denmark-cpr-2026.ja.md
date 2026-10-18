# denmark-cpr-2026 — デンマークCPR：企業の正規照会権限を悪用した情報取得

事例 | Catalog: 0.8.0 | Record SHA-256: 3779f00af9b08581e405c8c1d38005f2e535fe4dca957f57c61dcaa2d5f3b171

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

民間企業の正規照会権限が悪用され、約880万人の登録情報が取得されました。死亡者・国外転出者も含む登録人数です。権限を得た具体的な方法は調査中です。

Organization: デンマーク中央個人登録簿（CPR） | Outcome: confirmed-breach

Occurred: unknown | Disclosed: 2026-10-05 | Reviewed: 2026-10-12

Categories: unknown | CVEs: unspecified

## 根拠のある主張

- [confirmed / 公表で確認] 民間企業に認めた正規のCPR照会権限を、第三者が不正に使ったと公表しました。 (s1, s2; 事故概要 / Fakta)
- [confirmed / 公表で確認] 約880万人の氏名・住所・CPR番号などが対象です。死亡者・国外転出者も含み、現住人口ではありません。氏名・住所の保護対象者は当該情報の取得範囲から除かれます。 (s1, s2; 事故概要 / Fakta)
- [confirmed / 公表で確認] 規制当局は10月4日に報告を受け、大量の自動照会による有効なCPR番号の探索を調査しています。 (s3; 通知と調査状況)

## 公表された対応

- [confirmed / 公表で確認] 対象企業のアクセスを停止し、調査とCPRの安全性点検を開始しました。 (s1, s2; 事故概要 / Fakta)
- [confirmed / 公表で確認] 移民関連の窓口では、電話の問い合わせに追加の本人確認を導入しました。 (s4; Ekstra kontrol ved telefoniske henvendelser)

## 経緯

- 2026-10-02: 9月中の不規則な挙動を認識したと公表しました。 (s1)
- 2026-10-04: 規制当局へ報告しました。 (s3)
- 2026-10-05: 政府とCPR管理者が事故を公表しました。 (s1, s2)

## 編集上の点検提案

unknown: 照会権限・取得量・ログと、漏えい後の本人確認を点検します。権限を悪用できた経路や当時の制御は未公表で、回避可能性は判断できません。 (s1, s3)

## AI関与

[unknown / 不明] 確認した一次資料からは、攻撃者によるAI利用を判断できません。

## 未確認事項

- 資格情報の窃取やソフトウェアの脆弱性悪用を、一次資料だけで確定できません。発生日と最終的な被害範囲は調査中です。

Rules: SEC-005, SEC-008, SEC-009, SEC-014

## 出典

- s1: [Omfattende uautoriseret adgang til borgeres CPR-oplysninger](https://fudm.dk/aktuelt/pressemeddelelser/2026/oktober/omfattende-uautoriseret-adgang-til-borgeres-cpr-oplysninger/) — デンマーク研究・教育・デジタル化省; government; published: 2026-10-05; reviewed: 2026-10-12
- s2: [Omfattende uautoriseret adgang til borgeres CPR-oplysninger](https://www.cpr.dk/cpr-nyt/nyhedsarkiv/2026/okt/omfattende-uautoriseret-adgang-til-borgeres-cpr-oplysninger) — CPR管理者; government; published: 2026-10-05; reviewed: 2026-10-12
- s3: [Datatilsynet er opmærksom på sag om opslag i CPR](https://www.datatilsynet.dk/presse-og-nyheder/nyhedsarkiv/2026/okt/datatilsynet-er-opmaerksom-paa-sag-om-opslag-i-cpr) — Datatilsynet; government; published: 2026-10-05; reviewed: 2026-10-12
- s4: [Uvedkommende har fået adgang til borgeres CPR-oplysninger](https://nyidanmark.dk/da/Nyheder/2026/10/Uvedkommende-har-faaet-adgang-til-borgeres-CPR-oplysninger) — Udlændingestyrelsen / SIRI; government; published: 2026-10-05; reviewed: 2026-10-12
