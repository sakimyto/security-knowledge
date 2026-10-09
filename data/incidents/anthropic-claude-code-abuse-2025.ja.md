# anthropic-claude-code-abuse-2025 — Claude Code：攻撃者がAIを悪用した複数組織への侵入

事例 | Catalog: 0.6.1 | Record SHA-256: 20d0318c8b3ab9ddede5b6f0dca1923392469c5aeacc7acec2e5544b4522aa64

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

Anthropicは、攻撃者がClaude Codeを偵察、攻撃コードの作成、認証情報の取得、データ持ち出しに悪用したと報告しました。約30組織が標的で、侵入成功は少数と説明しています。

Organization: Anthropicが調査した複数組織への攻撃 | Outcome: confirmed-breach

Occurred: unknown | Disclosed: 2025-11-13 | Reviewed: 2026-10-02

Categories: credentials, unknown | CVEs: unspecified

## 根拠のある主張

- [confirmed / 公表で確認] Claude Codeの攻撃者による悪用を、Anthropicが調査したと公表しています。評価試験の逸脱ではなく、同社が観測した攻撃キャンペーンの報告です。 (s1; Introduction / How the cyberattack worked)
- [confirmed / 公表で確認] 人間が標的を選び、正当な防御テストを装ってAIへ作業を分割しました。AIは偵察から認証情報の取得、持ち出しまでを支援したと説明しています。 (s1; How the cyberattack worked)

## 公表された対応

- [confirmed / 公表で確認] 不正利用アカウントを停止し、影響を受けた組織への通知、関係当局との連携、検知と安全対策の改善を行ったと公表しました。 (s1; Introduction)

## 経緯

- 2025-11-13: この事案を公表。 (s1)

## 編集上の点検提案

unknown: 被害環境の具体的な侵入原因は判断できません。認証情報の到達範囲と取得ログを点検し、自社で動かすAIのツール・通信権限も確認します。 (s1)

## AI関与

[confirmed / 公表で確認] 攻撃者によるClaude Codeの利用をAnthropicが報告しています。被害環境の穴が回避不能だったことや、AI攻撃全体の増加率を示す証拠ではありません。

## 未確認事項

- 被害組織名、個別の脆弱性とCVE、初回侵入日は非公表です。標的数は被害企業数ではなく、AIの自律性の評価は調査元の見解です。

Rules: SEC-005, SEC-008, SEC-009, SEC-011

## 出典

- s1: [Disrupting an AI-orchestrated cyber espionage campaign](https://www.anthropic.com/news/disrupting-AI-espionage) — Anthropic; investigator; published: 2025-11-13; reviewed: 2026-10-02
