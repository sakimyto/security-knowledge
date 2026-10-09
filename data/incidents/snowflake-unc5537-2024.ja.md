# snowflake-unc5537-2024 — Snowflake顧客：窃取済み認証情報でデータ取得

事例 | Catalog: 0.6.0 | Record SHA-256: 24174c9c99c67f8211c4e3c0cf1b613975a33a0eaf02a73d422670a9a81fce03

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

Mandiantが調査した顧客環境では、過去の情報窃取型マルウェア等で盗まれた認証情報が使われました。MFA未適用、資格情報の未更新、接続元の制限不足が共通要因でした。

Organization: Snowflake customer environments | Outcome: confirmed-breach

Occurred: unknown | Disclosed: 2024-06-10 | Reviewed: 2026-10-02

Categories: credentials, endpoint, configuration | CVEs: unspecified

## 根拠のある主張

- [confirmed / 公表で確認] 調査した侵害は盗まれた顧客の資格情報に追跡でき、Snowflake本体の侵害が原因だという証拠は見つからなかったとしています。 (s1; Initial access)
- [confirmed / 公表で確認] 影響を受けた調査対象では、MFA・資格情報更新・ネットワーク許可リストに不足がありました。 (s1; Three primary factors)

## 公表された対応

- [confirmed / 公表で確認] MandiantはMFA適用、資格情報の管理、信頼できる接続元への制限、異常アクセスの検知を推奨しました。 (s1; Recommendations)

## 経緯

- 2024-06-10: Mandiantが調査結果を公表。 (s1)
- 2024-06-17: 脅威ハンティングのガイドを追加。 (s1)

## 編集上の点検提案

operational-control: 調査対象の共通要因であり、全Snowflake利用者の状態を表すものではありません。利用者側の設定と監査ログを点検します。 (s1)

## AI関与

[unknown / 不明] 参照した一次情報に、攻撃でAIを利用したことを裏付ける記述はありません。AI不使用を意味しません。

## 未確認事項

- 個別の被害組織の侵入日と被害範囲は、このキャンペーン単位の記録では確定しません。

Rules: SEC-002, SEC-006, SEC-008, SEC-009

## 出典

- s1: [UNC5537 Targets Snowflake Customer Instances for Data Theft and Extortion](https://cloud.google.com/blog/topics/threat-intelligence/unc5537-snowflake-data-theft-extortion) — Mandiant; investigator; published: 2024-06-10; reviewed: 2026-10-02
