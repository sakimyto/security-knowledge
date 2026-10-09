# axios-npm-2026 — Axios：公開者アカウントから悪性パッケージを配布

事例 | Catalog: 0.6.1 | Record SHA-256: 209e538cd359db5c738022789123f0e56efcc115d5b00ac67d20585ee32bb450

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

Googleの調査チームは、Axiosの公開者アカウントが侵害され、悪性の依存パッケージを含む版が公開されたと報告しました。インストール時の処理が複数OS向けのバックドアを配布します。

Organization: Axios npm project | Outcome: confirmed-breach

Occurred: unknown | Disclosed: 2026-03-31 | Reviewed: 2026-10-02

Categories: supply-chain, credentials | CVEs: unspecified

## 根拠のある主張

- [confirmed / 公表で確認] 公開者アカウントが侵害され、Axios 1.14.1と0.30.4が悪性版として報告されました。 (s1; Overview / Remediation)
- [confirmed / 公表で確認] plain-crypto-jsのインストール処理がWindows・macOS・Linux向けのペイロードを取得します。 (s1; Initial stage)

## 公表された対応

- [confirmed / 公表で確認] 調査元は依存関係の照合、影響端末の隔離、露出した鍵の更新、キャッシュの除去を推奨しました。 (s1; Remediation)

## 経緯

- 2026-03-31: この事案を公表。 (s1)

## 編集上の点検提案

operational-control: ロックファイルと実際のビルド環境を照合し、インストール処理の実行履歴を確認します。版の固定だけでは悪性版の安全性を保証できません。 (s1)

## AI関与

[unknown / 不明] 参照した情報では、攻撃者によるAI利用は確認できません。AI不使用を意味しません。

## 未確認事項

- 公開者アカウントの侵害方法と、実際に影響した利用者の総数は不明です。

Rules: SEC-001, SEC-003, SEC-004, SEC-005, SEC-007, SEC-009

## 出典

- s1: [North Korea-Nexus Threat Actor Compromises Widely Used Axios NPM Package](https://cloud.google.com/blog/topics/threat-intelligence/north-korea-threat-actor-targets-axios-npm-package/) — Google Threat Intelligence Group; investigator; published: 2026-03-31; reviewed: 2026-10-02
