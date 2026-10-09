# media4u-account-list-2026 — メディア4u：不正アクセスの経緯と影響

事例 | Catalog: 0.6.1 | Record SHA-256: 654609ed01e84214e9c82cfbaa412ec7f6f21829190aa8087c3d633a01e5c2f0

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

SMS配信サービスで不正アクセスがあり、管理情報が流出しました。初期侵入方法は未公表です。 管理一覧95,412件のうち個人情報を含みうる対象は22,928件です。1社のアカウントで不正SMS280通が送信されました。認証秘密は対象外です。

Organization: メディア4u | Outcome: confirmed-breach

Occurred: unknown | Disclosed: 2026-07-14 | Reviewed: 2026-10-09

Categories: unknown | CVEs: unspecified

## 根拠のある主張

- [confirmed / 公表で確認] SMS配信サービスで不正アクセスがあり、管理情報が流出しました。初期侵入方法は未公表です。 (s1; 7月17日第二報 §§1-4 / FAQ)
- [confirmed / 公表で確認] 管理一覧95,412件のうち個人情報を含みうる対象は22,928件です。1社のアカウントで不正SMS280通が送信されました。認証秘密は対象外です。 (s1; 7月17日第二報 §§1-4 / FAQ)

## 公表された対応

- [confirmed / 公表で確認] 通信遮断、管理用認証情報の失効・再発行、脆弱性修正と監視強化を行いました。 (s1, s2; 7月17日第二報 §§1-4 / FAQ)

## 経緯

- 2026-07-14: 公表資料で確認できる開示日。 (s1)

## 編集上の点検提案

unknown: 侵入方法や修正の提供時期が分からず、防げたかは判断できません。関連ルールで権限、取得ログ、保存期限と稼働設定を点検します。 (s1)

## AI関与

[unknown / 不明] 確認した公表資料からは、攻撃者によるAI利用を判断できません。

## 未確認事項

- 具体的な侵入方法、攻撃開始日、取得の確定範囲は未公表です。

Rules: SEC-001, SEC-005, SEC-008, SEC-009, SEC-012

## 出典

- s1: [メディア4u：事故に関する公表資料](https://www.media4u.co.jp/news/3354) — メディア4u; organization; published: unknown; reviewed: 2026-10-09
- s2: [メディア4u：事故に関する公表資料](https://www.media4u.co.jp/news/3351) — メディア4u; organization; published: unknown; reviewed: 2026-10-09
