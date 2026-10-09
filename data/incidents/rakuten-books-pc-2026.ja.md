# rakuten-books-pc-2026 — 楽天ブックスネットワーク：不正アクセスの経緯と影響

事例 | Catalog: 0.6.1 | Record SHA-256: 70e2209a9611ac3f16bf8955953d13b5d6b05b52825e344d03f9f731fd2e87b5

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

社内PCの一部に不正アクセスがあり、4月5日に検知しました。具体的な経路は未公表です。 配送先33,333件、取引先2,101件、従業員339件を保存していました。流出は未確認です。

Organization: 楽天ブックスネットワーク | Outcome: confirmed-breach

Occurred: unknown | Disclosed: 2026-08-21 | Reviewed: 2026-10-09

Categories: endpoint | CVEs: unspecified

## 根拠のある主張

- [confirmed / 公表で確認] 社内PCの一部に不正アクセスがあり、4月5日に検知しました。具体的な経路は未公表です。 (s1; §§1-3)
- [confirmed / 公表で確認] 配送先33,333件、取引先2,101件、従業員339件を保存していました。流出は未確認です。 (s1; §§1-3)

## 公表された対応

- [confirmed / 公表で確認] 端末を隔離し、外部機関による調査と通知を実施しました。 (s1; §§1-3)

## 経緯

- 2026-08-21: 公表資料で確認できる開示日。 (s1)

## 編集上の点検提案

unknown: 侵入方法や修正の提供時期が分からず、防げたかは判断できません。関連ルールで権限、取得ログ、保存期限と稼働設定を点検します。 (s1)

## AI関与

[unknown / 不明] 確認した公表資料からは、攻撃者によるAI利用を判断できません。

## 未確認事項

- 具体的な侵入方法、攻撃開始日、取得の確定範囲は未公表です。

Rules: SEC-003, SEC-008, SEC-009, SEC-012

## 出典

- s1: [楽天ブックスネットワーク：事故に関する公表資料](https://www.rakuten-booksnetwork.co.jp/2026/08/21/unauthorized-access-notice/index.html) — 楽天ブックスネットワーク; organization; published: unknown; reviewed: 2026-10-09
