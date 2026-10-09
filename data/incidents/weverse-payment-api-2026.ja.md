# weverse-payment-api-2026 — Weverse Company：不正アクセスの経緯と影響

事例 | Catalog: 0.5.0 | Record SHA-256: 883706606f889a12eb54d23039bd1340ceac42c7ab219526af4e09879ba8ce09

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

外部の脆弱性指摘を受けて調査し、決済情報APIの情報流出を確認しました。アクセス制御を強化しています。 アカウントID基準で422,584件の内部識別値などが流出しました。氏名・連絡先やカード番号の流出とは公表されていません。日本の利用者だけの件数とは示されていません。

Organization: Weverse Company | Outcome: confirmed-breach

Occurred: unknown | Disclosed: 2026-09-06 | Reviewed: 2026-10-09

Categories: implementation | CVEs: unspecified

## 根拠のある主張

- [inferred / 推定] 外部の脆弱性指摘を受けて調査し、決済情報APIの情報流出を確認しました。アクセス制御を強化しています。 (s1; §§1-2)
- [confirmed / 公表で確認] アカウントID基準で422,584件の内部識別値などが流出しました。氏名・連絡先やカード番号の流出とは公表されていません。日本の利用者だけの件数とは示されていません。 (s1; §§1-2)

## 公表された対応

- [confirmed / 公表で確認] APIのアクセス制御を強化し内部識別値を除去しました。外部公開APIの全数点検と監視強化を計画しています。 (s1; §§1-2)

## 経緯

- 2026-09-06: 公表資料で確認できる開示日。 (s1)

## 編集上の点検提案

operational-control: 公表された設定・権限・運用上の問題に対応する点検です。適用条件を確認し、変更後の挙動と証拠を残します。 (s1)

## AI関与

[unknown / 不明] 確認した公表資料からは、攻撃者によるAI利用を判断できません。

## 未確認事項

- 脆弱性の具体的な技術内容、取得開始日、対象国別の内訳は未公表です。

Rules: SEC-008, SEC-009, SEC-014

## 出典

- s1: [Weverse Company：事故に関する公表資料](https://shop.weverse.io/ja/shop/JPY/artists/0/notices/14265) — Weverse Company; organization; published: unknown; reviewed: 2026-10-09
