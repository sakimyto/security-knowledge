# codecov-2021 — Codecov：イメージ内の鍵からCIスクリプトを改ざん

事例 | Catalog: 0.6.0 | Record SHA-256: 8eddabe999ec0a13dcb7fa03264b806636affbbbaf6806b6faf99fe164fdb1be

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

公開Dockerイメージの中間レイヤーにあった鍵が悪用され、Bash Uploaderが改ざんされました。実行した利用者のCI環境変数などが外部へ送信される攻撃でした。

Organization: Codecov | Outcome: confirmed-breach

Occurred: 2021-01-31 | Disclosed: 2021-04-15 | Reviewed: 2026-10-02

Categories: credentials, supply-chain | CVEs: unspecified

## 根拠のある主張

- [confirmed / 公表で確認] 公開Dockerイメージの中間レイヤーから、配布物を書き換えられるHMAC鍵が取得されました。 (s2; Root Cause)
- [confirmed / 公表で確認] 改ざんされたUploaderは環境変数とGitリモート情報を外部へ送信しました。 (s1; About the Event)

## 公表された対応

- [confirmed / 公表で確認] 鍵の失効・更新と、公開イメージのビルド方法の変更を実施しました。 (s2; Recovery)

## 経緯

- 2021-01-31: 改ざんが始まった時期。 (s1)
- 2021-04-01: 利用者のチェックサム検査を契機に発覚。 (s2)
- 2021-04-15: 事故と利用者向けの対応を公表。 (s1)

## 編集上の点検提案

operational-control: 鍵を最終イメージのファイルから消すだけでは、中間レイヤーに残る場合があります。配布物全体とCIの実行権限を点検します。 (s1, s2)

## AI関与

[unknown / 不明] 参照した一次情報に、攻撃でAIを利用したことを裏付ける記述はありません。AI不使用を意味しません。

## 未確認事項

- 利用者ごとの漏洩範囲は、当時のCI環境と実行履歴に依存します。

Rules: SEC-004, SEC-005, SEC-007

## 出典

- s1: [Bash Uploader Security Update](https://about.codecov.io/security-update/) — Codecov; organization; published: 2021-04-15; reviewed: 2026-10-02
- s2: [Post-Mortem / Root Cause Analysis \(April 2021\)](https://about.codecov.io/apr-2021-post-mortem/) — Codecov; organization; published: unknown; reviewed: 2026-10-02
