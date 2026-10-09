# trunk-mail-2026 — TRUNK：不正アクセスの経緯と影響

事例 | Catalog: 0.6.1 | Record SHA-256: 91ddb9fc8db493646416017524132387a7eca749cdd138599f82140d9660ca7a

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

従業員メールへの不正アクセスと、そのアカウントを使ったなりすまし送信を確認しました。認証突破の方法は未公表です。 漏えいした可能性のある情報は424件です。

Organization: TRUNK | Outcome: confirmed-breach

Occurred: unknown | Disclosed: 2026-09-01 | Reviewed: 2026-10-09

Categories: unknown | CVEs: unspecified

## 根拠のある主張

- [confirmed / 公表で確認] 従業員メールへの不正アクセスと、そのアカウントを使ったなりすまし送信を確認しました。認証突破の方法は未公表です。 (s1; §§1-3)
- [confirmed / 公表で確認] 漏えいした可能性のある情報は424件です。 (s1; §§1-3)

## 公表された対応

- [confirmed / 公表で確認] パスワードを変更して不審メールの送信を止め、対象者へ通知しています。 (s1; §§1-3)

## 経緯

- 2026-09-01: 公表資料で確認できる開示日。 (s1)

## 編集上の点検提案

unknown: 侵入方法や修正の提供時期が分からず、防げたかは判断できません。関連ルールで権限、取得ログ、保存期限と稼働設定を点検します。 (s1)

## AI関与

[unknown / 不明] 確認した公表資料からは、攻撃者によるAI利用を判断できません。

## 未確認事項

- 侵入経路、攻撃開始日、情報取得の確定範囲は未公表です。

Rules: SEC-002, SEC-003, SEC-005, SEC-009, SEC-012

## 出典

- s1: [TRUNK：事故に関する公表資料](https://www.trunk-base.com/company/news/20260901/) — TRUNK; organization; published: unknown; reviewed: 2026-10-09
