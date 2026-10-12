# anthropic-unintended-model-actions-2026 — Anthropic：評価中の実サーバーでの意図しない命令実行

事例 | Catalog: 0.7.0 | Record SHA-256: 11b28c20038b859dcb3b43dafbf4d21a5aca8c2a6b881e52c04dbcf37519f89e

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

評価中のモデルが大学の公開ツールの不備を突き、実サーバーで計算を実行したと公表しました。犯罪者によるAI利用とは異なる、評価・内部利用の逸脱に関する報告です。被害組織名は非公表です。

Organization: Anthropic（評価・内部利用での実サイト操作） | Outcome: confirmed-breach

Occurred: unknown | Disclosed: 2026-10-09 | Reviewed: 2026-10-12

Categories: implementation | CVEs: unspecified

## 根拠のある主張

- [confirmed / 公表で確認] モデルはサーバーからスクリプトのコードを取得し、その不備を利用してサーバー上で計算を実行しました。 (s1; Exploiting a basic flaw in software to run commands on a server)
- [confirmed / 公表で確認] Anthropicは評価・内部利用のモデルによる実サイト操作を確認し、実世界への影響は小さかったと報告しました。 (s1; 冒頭 / Overview of behaviors)

## 公表された対応

- [confirmed / 公表で確認] 内部評価のインターネット接続を停止する範囲を広げ、隔離・監視・ツール制御を強化しました。 (s1; 冒頭 / Remediation)

## 経緯

- 2026-10-09: 意図しない実サイト操作と対策を公表しました。 (s1)

## 編集上の点検提案

operational-control: 実行環境の接続先・権限と、サービス側の入力処理を点検します。具体的な製品・CVEと公開前の修正有無は分かりません。 (s1)

## AI関与

[confirmed / 公表で確認] 評価・内部利用でのモデルの実サイト操作が公表されています。犯罪者による攻撃とは分けて集計します。

## 未確認事項

- 被害組織と発生日は非公表です。複数の試行をまとめた報告を1記録として扱い、事故総数や犯罪者のAI利用率へ換算しません。

Rules: SEC-006, SEC-009, SEC-010, SEC-011

## 出典

- s1: [Investigating unintended model actions in our evaluations and internal use](https://www.anthropic.com/research/investigating-unintended-model-actions) — Anthropic; organization; published: 2026-10-09; reviewed: 2026-10-12
