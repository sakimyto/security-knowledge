# postman-shai-hulud-2025 — Postman：依存パッケージ経由でCIの公開用トークンを悪用

事例 | Catalog: 0.6.1 | Record SHA-256: aeeddeafe5bc1269737caf812238694838a31a2f921cf15994f493e2dc4b1ae8

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

Postmanは、適切なlockfileのないCIが感染済みの依存パッケージを取り込み、npm公開用トークンを悪用されたと公表しました。17パッケージの改ざんを公表し、本番アプリと顧客データは影響を受けなかったと説明しています。

Organization: Postman | Outcome: confirmed-breach

Occurred: unknown | Disclosed: 2025-11-24 | Reviewed: 2026-10-10

Categories: supply-chain, credentials, configuration | CVEs: unspecified

## 根拠のある主張

- [confirmed / 公表で確認] GitHub Actionsのビルドが感染したAsyncAPIパッケージを取得しました。ビルドの公開用トークンと、17パッケージで未設定だったトークン公開禁止・二要素認証の条件が悪用されました。 (s1; How did it happen?)
- [confirmed / 公表で確認] 17の公開npmパッケージに感染版が配布されました。Postmanは環境分離により本番システムと顧客データへの到達はなかったと説明しています。 (s1; What happened?)

## 公表された対応

- [confirmed / 公表で確認] 悪用されたアカウントの全トークンを失効させ、感染版を削除しました。公開権限の制限、OIDCのTrusted Publishers、lockfileの点検を実施したと公表しました。 (s1; How did it happen? / What we have already done)

## 原因・対策の仮説

以下は編集者の仮説です。成立条件と観測は未検証であり、事故の確定原因・公表済みの対策・点検の合格を示しません。

### frozen-reviewed-dependencies — 対策仮説

[hypothesis / editorial-analysis] レビュー済みのlockfileと固定インストールで、CIが意図せず新しい感染版を取得する機会を減らせる可能性があります。

**一次資料から確認した出発点:** 同社は、適切なlockfileを欠くビルドが感染版を取り込んだと説明しています。 (s1; How did it happen?)

#### 成立に必要な条件

- 承認済みの依存版が感染しておらず、lockfileの変更もレビューされる場合。

#### 仮説を支持する観測

- CI設定と自分の隔離環境のビルド記録で固定インストールを確認し、manifestとの不一致が黙って解決されず失敗する。

#### 仮説を見直す観測

- lockfileが無視・再生成される、または承認されたlockfile自体に感染版が含まれる。

#### 確認できない範囲

- lockfileはコードの安全性を証明しません。依存更新の検証や公開権限の制限も必要です。

Rules: SEC-001, SEC-007

### separate-publishing-authority — 対策仮説

[hypothesis / editorial-analysis] 依存コードを実行するCIから常設の公開用トークンを外し、公開ジョブの権限を限定すると、感染後の再配布を抑えられる可能性があります。

**一次資料から確認した出発点:** 感染したビルドが公開用トークンを悪用しました。同社はトークン失効とOIDCへの移行を公表しています。 (s1; How did it happen? / What we have already done)

#### 成立に必要な条件

- ビルドと公開を分離でき、OIDCの発行条件を特定の承認済みワークフローに限定できる場合。

#### 仮説を支持する観測

- workflowの権限と公開元の設定で常設トークンがなく、承認されたジョブ以外に公開権限が発行されないと確認できる。

#### 仮説を見直す観測

- 依存コードを実行する同じジョブで公開権限を使える、または旧トークン・別workflowでも公開できる。

#### 確認できない範囲

- OIDCへの置換だけでは不十分です。許可された公開ジョブやその成果物が改ざんされれば再配布のリスクが残ります。

Rules: SEC-004, SEC-005, SEC-007

## 経緯

- 2025-11-24: この事案を公表。 (s1, s2)

## 編集上の点検提案

operational-control: lockfileの存在と固定インストール、外部コードを実行するジョブの公開権限、長期トークンの必要性を点検します。lockfileだけで依存コードの安全性を保証はできません。 (s1)

## AI関与

[unknown / 不明] 参照した情報では、攻撃者によるAI利用は確認できません。AI不使用を意味しません。

## 未確認事項

- Postmanの報告対象は同社のパッケージです。Shai-Hulud全体の被害件数と合算しません。時刻は原文のPT表記で、初回侵入のUTC日付はここでは確定していません。

Rules: SEC-001, SEC-004, SEC-005, SEC-007, SEC-008, SEC-009

## 出典

- s1: [Root Cause Analysis: Shai-Hulud 2.0](https://blog.postman.com/engineering/root-cause-analysis-shai-halud-2-0/) — Postman; organization; published: 2025-12-04; reviewed: 2026-10-10
- s2: [Shai-Hulud 2.0 npm supply-chain attack](https://blog.postman.com/engineering/shai-hulud-2-0-npm-supply-chain-attack/) — Postman; organization; published: 2025-11-24; reviewed: 2026-10-10
