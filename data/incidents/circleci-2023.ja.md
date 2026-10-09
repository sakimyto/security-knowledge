# circleci-2023 — CircleCI：端末からSSOセッションを窃取

事例 | Catalog: 0.5.0 | Record SHA-256: 2d1c93b1f50bbfabd2c13b0abd6cd587cc5dcf2ddb4569710345a43e627a9788

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

従業員端末のマルウェアが、二要素認証済みのSSOセッションを窃取しました。従業員の権限が悪用され、本番の一部と顧客の環境変数・鍵などへアクセスされました。

Organization: CircleCI | Outcome: confirmed-breach

Occurred: 2022-12-16 | Disclosed: 2023-01-04 | Reviewed: 2026-10-02

Categories: endpoint, credentials | CVEs: unspecified

## 根拠のある主張

- [confirmed / 公表で確認] マルウェアによるセッションCookieの窃取が侵入経路でした。 (s1; What happened?)
- [confirmed / 公表で確認] 対象従業員は本番アクセストークンを発行できる権限を持ち、攻撃者がその権限を利用しました。 (s1; What happened?)

## 公表された対応

- [confirmed / 公表で確認] 端末検知の強化とアクセス制御の変更を実施し、顧客に鍵等の更新・失効を要請しました。 (s1; Remediation / customer guidance)

## 経緯

- 2022-12-16: 従業員端末が侵害されたと調査で判明。 (s1)
- 2023-01-04: 顧客に秘密情報の更新を呼びかけ。 (s2)

## 編集上の点検提案

operational-control: MFAの導入後も、セッション窃取と端末侵害への対策、管理権限の範囲を点検します。 (s1, s2)

## AI関与

[unknown / 不明] 参照した一次情報に、攻撃でAIを利用したことを裏付ける記述はありません。AI不使用を意味しません。

## 未確認事項

- 顧客側の二次被害の全体像や、個々の鍵の利用状況はこの記録では評価できません。

Rules: SEC-003, SEC-005, SEC-008

## 出典

- s1: [CircleCI Jan 4, 2023 security incident report](https://circleci.com/blog/jan-4-2023-incident-report/) — CircleCI; organization; published: 2023-01-12; reviewed: 2026-10-02
- s2: [CircleCI security alert: Rotate any secrets](https://circleci.com/blog/january-4-2023-security-alert/) — CircleCI; organization; published: 2023-01-04; reviewed: 2026-10-02
