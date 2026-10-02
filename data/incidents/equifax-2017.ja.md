# equifax-2017 — Equifax：未修正のApache Strutsから侵入

事例 | Catalog: 0.4.0 | Record SHA-256: 0954c174783b7f496ec4a924a31369007b98b19efba85df4a6f8e54c2dfa7e5d

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

既知のApache Struts脆弱性がオンライン異議申立てサイトで悪用され、個人情報が流出しました。更新指示があっても、適用の確認が必要だった事例です。

Organization: Equifax | Outcome: confirmed-breach

Occurred: 2017-05-13 | Disclosed: 2017-09-07 | Reviewed: 2026-10-02

Categories: known-vulnerability | CVEs: CVE-2017-5638

## 根拠のある主張

- [confirmed / 公表で確認] Apache StrutsのCVE-2017-5638が侵入に使われました。 (s1; Attack vector)
- [confirmed / 公表で確認] 脆弱性は組織に通知されていましたが、対象のサイトに修正が適用されていませんでした。 (s2; GAO-18-559, p. 15: Identification)

## 公表された対応

- [confirmed / 公表で確認] 対象のWebアプリケーションを停止し、調査と対策を実施しました。 (s1; 本文 / Main text)

## 経緯

- 2017-07-29: 不審なネットワーク通信を検出。 (s1)
- 2017-09-07: 事故を公表。 (s1)

## 編集上の点検提案

patch-available: 事前に知られていた脆弱性です。更新の通知から実際の稼働バージョン確認までを一つの点検として扱います。 (s1, s2)

## AI関与

[unknown / 不明] 参照した一次情報に、攻撃でAIを利用したことを裏付ける記述はありません。AI不使用を意味しません。

## 未確認事項

- この要約だけでは、当時の全資産の状態や担当者ごとの判断は評価できません。

Rules: SEC-001

## 出典

- s1: [Equifax Releases Details on Cybersecurity Incident](https://investor.equifax.com/news-events/press-releases/detail/237/equifax-releases-details-on-cybersecurity-incident) — Equifax; organization; published: 2017-09-15; reviewed: 2026-10-02
- s2: [Data Protection: Actions Taken in Response to the 2017 Breach](https://www.gao.gov/assets/gao-18-559.pdf) — U.S. GAO; government; published: 2018-08-30; reviewed: 2026-10-02
