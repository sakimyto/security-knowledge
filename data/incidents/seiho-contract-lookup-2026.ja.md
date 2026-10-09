# seiho-contract-lookup-2026 — 生命保険協会：情報の公開範囲・権限の問題

事例 | Catalog: 0.6.1 | Record SHA-256: f8c99a945cf73d4a3280f70efe1747d2ee3b779e7b90cccd2f8a13061e09ea97

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

外部から特定の操作をすると契約照会システムの登録者情報が閲覧可能でした。 利用者ベースで約37,000件の潜在的対象です。不正取得や利用は未確認です。

Organization: 生命保険協会 | Outcome: exposure-only

Occurred: unknown | Disclosed: 2026-07-29 | Reviewed: 2026-10-09

Categories: unknown | CVEs: unspecified

## 根拠のある主張

- [confirmed / 公表で確認] 外部から特定の操作をすると契約照会システムの登録者情報が閲覧可能でした。 (s1; pp.1-2 §§1-3)
- [confirmed / 公表で確認] 利用者ベースで約37,000件の潜在的対象です。不正取得や利用は未確認です。 (s1; pp.1-2 §§1-3)

## 公表された対応

- [confirmed / 公表で確認] 安全性確認までWeb申請を停止し、原因と影響範囲を調査しています。 (s1; pp.1-2 §§1-3)

## 経緯

- 2026-07-29: 公表資料で確認できる開示日。 (s1)

## 編集上の点検提案

unknown: 侵入方法や修正の提供時期が分からず、防げたかは判断できません。関連ルールで権限、取得ログ、保存期限と稼働設定を点検します。 (s1)

## AI関与

[unknown / 不明] 確認した公表資料からは、攻撃者によるAI利用を判断できません。

## 未確認事項

- 具体的な侵入方法、攻撃開始日、取得の確定範囲は未公表です。

Rules: SEC-006, SEC-009, SEC-014

## 出典

- s1: [生命保険協会：事故に関する公表資料](https://www.seiho.or.jp/info/news/shared/mt-item/20260729.pdf) — 生命保険協会; organization; published: unknown; reviewed: 2026-10-09
