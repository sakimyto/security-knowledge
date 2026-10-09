# unit42-ai-assisted-2026 — Unit 42：AI支援の侵入でリポジトリの鍵を悪用

事例 | Catalog: 0.5.0 | Record SHA-256: 5df080af935d7269cf938146b76266693d1f5759a00b76a1bd874ae11b0741fd

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

Unit 42は、公開サービスへの侵入後、リポジトリの秘密情報を足がかりにクラウドへ広がった事案を報告しました。攻撃中のLLM呼び出しが観測されています。

Organization: Anonymous enterprise investigated by Unit 42 | Outcome: confirmed-breach

Occurred: unknown | Disclosed: 2026-09-02 | Reviewed: 2026-10-02

Categories: credentials, configuration | CVEs: unspecified

## 根拠のある主張

- [confirmed / 公表で確認] リポジトリ内のトークン、保管庫の認証情報、CIのクラウド鍵が侵害拡大に利用されました。 (s1; Repository / vault / CI stages)
- [confirmed / 公表で確認] バックドアを加える試みはブランチ保護に阻まれました。侵入全体はランサムウェアと確認されていません。 (s1; Branch protection / September corrections)
- [confirmed / 公表で確認] 調査元は攻撃中のLLM呼び出しと、複数のエージェントを使う操作を報告しました。 (s1; AI-assisted orchestration)

## 公表された対応

- [confirmed / 公表で確認] 調査元は、ブランチ保護によって攻撃者の変更が本番へ入るのを阻止したと報告しました。 (s1; Branch protection)

## 経緯

- 2026-09-02: この事案を公表。 (s1)

## 編集上の点検提案

operational-control: リポジトリに混入する鍵と、CI・保管庫・AI接続先の権限を点検します。コード変更に必要な承認と本番鍵を分離します。 (s1)

## AI関与

[confirmed / 公表で確認] Unit 42が攻撃中のLLM呼び出しを報告しています。全工程が自律実行されたことまでは確認していません。

## 未確認事項

- 被害組織名と最初の脆弱性の詳細は非公表です。人の操作とAIの自律行動の全範囲は未検証です。

Rules: SEC-004, SEC-005, SEC-006, SEC-007, SEC-008, SEC-009, SEC-011

## 出典

- s1: [An AI-assisted cyber attack: inside a Unit 42 investigation](https://unit42.paloaltonetworks.com/ai-assisted-cyber-attack-inside-a-unit-42-investigation/) — Palo Alto Networks Unit 42; investigator; published: 2026-09-02; reviewed: 2026-10-02
