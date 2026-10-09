# postman-shai-hulud-2025 — Postman：依存パッケージ経由でCIの公開用トークンを悪用

事例 | Catalog: 0.5.0 | Record SHA-256: f8b1047dbd4c170d0117eafc65394441c2892db067107bafdc7a1c86abf7ea6a

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

Postmanは、適切なlockfileのないCIが感染済みの依存パッケージを取り込み、npm公開用トークンを悪用されたと公表しました。17パッケージの改ざんを公表し、本番アプリと顧客データは影響を受けなかったと説明しています。

Organization: Postman | Outcome: confirmed-breach

Occurred: unknown | Disclosed: 2025-11-24 | Reviewed: 2026-10-02

Categories: supply-chain, credentials, configuration | CVEs: unspecified

## 根拠のある主張

- [confirmed / 公表で確認] GitHub Actionsのビルドが感染したAsyncAPIパッケージを取得しました。ビルドの公開用トークンと、17パッケージで未設定だったトークン公開禁止・二要素認証の条件が悪用されました。 (s1; How did it happen?)
- [confirmed / 公表で確認] 17の公開npmパッケージに感染版が配布されました。Postmanは環境分離により本番システムと顧客データへの到達はなかったと説明しています。 (s1; What happened?)

## 公表された対応

- [confirmed / 公表で確認] 悪用されたアカウントの全トークンを失効させ、感染版を削除しました。公開権限の制限、OIDCのTrusted Publishers、lockfileの点検を実施したと公表しました。 (s1; How did it happen? / What we have already done)

## 経緯

- 2025-11-24: この事案を公表。 (s1)

## 編集上の点検提案

operational-control: lockfileの存在と固定インストール、外部コードを実行するジョブの公開権限、長期トークンの必要性を点検します。lockfileだけで依存コードの安全性を保証はできません。 (s1)

## AI関与

[unknown / 不明] 参照した情報では、攻撃者によるAI利用は確認できません。AI不使用を意味しません。

## 未確認事項

- Postmanの報告対象は同社のパッケージです。Shai-Hulud全体の被害件数と合算しません。時刻は原文のPT表記で、初回侵入のUTC日付はここでは確定していません。

Rules: SEC-001, SEC-004, SEC-005, SEC-007, SEC-008, SEC-009

## 出典

- s1: [Root Cause Analysis: Shai-Hulud 2.0](https://blog.postman.com/engineering/root-cause-analysis-shai-halud-2-0/) — Postman; organization; published: 2025-12-04; reviewed: 2026-10-02
