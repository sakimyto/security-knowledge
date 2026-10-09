# rizap-ai-data-handling-2026 — IHIグループ健康保険組合：情報の公開範囲・権限の問題

事例 | Catalog: 0.6.1 | Record SHA-256: fe7d44d7960301de77bf878518ff223ddf10a93042ed7739928316dab7914dec

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

委託先RIZAPの従業員が、データ抽出の際に保健指導対象者の個人情報を生成AIへ参照させました。攻撃者によるAI利用ではありません。 IHI健保の対象は210人です。AI提供事業者以外の閲覧とモデル学習の可能性はないと事業者への照会で確認したと報告しています。

Organization: IHIグループ健康保険組合 | Outcome: exposure-only

Occurred: unknown | Disclosed: 2026-09-02 | Reviewed: 2026-10-09

Categories: supply-chain, configuration | CVEs: unspecified

## 根拠のある主張

- [confirmed / 公表で確認] 委託先RIZAPの従業員が、データ抽出の際に保健指導対象者の個人情報を生成AIへ参照させました。攻撃者によるAI利用ではありません。 (s1; 2026/09/02 本文)
- [confirmed / 公表で確認] IHI健保の対象は210人です。AI提供事業者以外の閲覧とモデル学習の可能性はないと事業者への照会で確認したと報告しています。 (s1; 2026/09/02 本文)

## 公表された対応

- [confirmed / 公表で確認] 本人への通知と、委託先の情報管理・業務手順の見直しを進めています。 (s1; 2026/09/02 本文)

## 経緯

- 2026-09-02: 公表資料で確認できる開示日。 (s1)

## 編集上の点検提案

operational-control: 公表された設定・権限・運用上の問題に対応する点検です。適用条件を確認し、変更後の挙動と証拠を残します。 (s1)

## AI関与

[unknown / 不明] 確認した公表資料からは、攻撃者によるAI利用を判断できません。

## 未確認事項

- 生成AIの製品名・送信設定は未公表です。210人はIHI健保の範囲で、RIZAP全体の人数ではありません。

Rules: SEC-006, SEC-011, SEC-012

## 出典

- s1: [IHIグループ健康保険組合：事故に関する公表資料](https://www.ihikenpo.or.jp/asp/news/news.asp?articleid=189769&page=1) — IHIグループ健康保険組合; organization; published: unknown; reviewed: 2026-10-09
