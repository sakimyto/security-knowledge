# nishiyama-2026 — 西山製作所：VPNの脆弱性と認証情報を悪用

事例 | Catalog: 0.6.1 | Record SHA-256: 68eb5c7416f2f56fd3f4f2ac4fa0687e7d61f69d46847577f531c1ce0af5304a

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

同社は、VPNの脆弱性と特定のアカウント情報を悪用した侵入を報告しました。データの暗号化や流出への対応として、VPNの廃止と環境の初期化を公表しています。

Organization: 西山製作所 | Outcome: confirmed-breach

Occurred: unknown | Disclosed: 2026-02-13 | Reviewed: 2026-10-02

Categories: unknown, credentials | CVEs: unspecified

## 根拠のある主張

- [confirmed / 公表で確認] 侵入にはVPNの脆弱性と特定のアカウント情報が悪用されたと公表しました。 (s1; 調査結果)
- [confirmed / 公表で確認] 一部データの復元は困難で、流出情報の監視を継続すると公表しました。 (s1; 復旧状況 / 情報流出)

## 公表された対応

- [confirmed / 公表で確認] VPNの廃止、認証情報の更新、端末・サーバーの初期化、バックアップ方式の変更を公表しました。 (s1; 再発防止策)

## 経緯

- 2026-02-13: この事案を公表。 (s1)

## 編集上の点検提案

unknown: 製品や修正時期が不明なため、パッチ放置とは判断できません。VPNの稼働情報、認証情報、バックアップを確認します。 (s1)

## AI関与

[unknown / 不明] 参照した情報では、攻撃者によるAI利用は確認できません。AI不使用を意味しません。

## 未確認事項

- VPN製品名、CVE、悪用前の修正提供状況、認証情報の流出元は不明です。

Rules: SEC-001, SEC-002, SEC-005, SEC-006, SEC-009, SEC-013

## 出典

- s1: [サイバー攻撃に関するお知らせ（第3報）](https://www.nishiyama-ss.co.jp/asset/pdf/20260403_CyberAttack3.pdf) — 西山製作所; organization; published: 2026-04-03; reviewed: 2026-10-02
