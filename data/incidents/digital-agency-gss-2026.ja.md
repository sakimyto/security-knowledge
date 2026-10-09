# digital-agency-gss-2026 — デジタル庁GSS：修正未適用のVPNから侵入

事例 | Catalog: 0.5.0 | Record SHA-256: 3bace779bb84ced753b9ca8b43af12f97ad9bc8c16e55301e16cbbef6de329fe

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

GSSの保守環境で、VPNの既知の脆弱性を利用した不正アクセスを確認しました。修正が未適用で、約24万6千件の情報が流出した可能性を公表しています。

Organization: デジタル庁 | Outcome: confirmed-breach

Occurred: unknown | Disclosed: 2026-09-11 | Reviewed: 2026-10-09

Categories: known-vulnerability, credentials | CVEs: unspecified

## 根拠のある主張

- [confirmed / 公表で確認] 侵入前に公表されていたVPNの脆弱性への修正が未適用でした。公表時の深刻度はMediumでした。 (s1; Q&A：原因と脆弱性の対応)
- [confirmed / 公表で確認] 約24万6千件は流出の可能性がある範囲です。確定した流出件数ではありません。 (s1; Q&A：流出の可能性)

## 公表された対応

- [confirmed / 公表で確認] 保守用アカウントと通信の停止、修正、パスワード変更などを公表しました。 (s1; Q&A：実施した対応)

## 経緯

- 2026-09-11: この事案を公表。 (s1)

## 編集上の点検提案

patch-available: CVSSだけで優先度を決めず、外部到達性と保守権限を合わせて点検します。修正の適用済み証拠を残します。 (s1)

## AI関与

[unknown / 不明] 参照した情報では、攻撃者によるAI利用は確認できません。AI不使用を意味しません。

## 未確認事項

- VPN製品名とCVEは非公表です。6月25日は異常検知日で、侵入開始日は特定できません。

Rules: SEC-001, SEC-002, SEC-005, SEC-006, SEC-008, SEC-009

## 出典

- s1: [GSSにおける不正アクセスについて（Q&A）](https://www.digital.go.jp/press/5fc99139-a4e2-4b7b-8b0c-d475e926143f) — デジタル庁; government; published: 2026-09-12; reviewed: 2026-10-09
