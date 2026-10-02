# rust-arrayref-2026 — Rust：正規クレートの更新に悪性ビルド処理が混入

事例 | Catalog: 0.4.0 | Record SHA-256: 636cf32e46b05d55895c1e34fda7bb20010e0d4d7bb0d25a61acf9a5eb673d50

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

Rustチームは、arrayrefなどの更新に悪性の依存関係が追加されたと報告しました。ビルド時にペイロードを取得する処理が含まれ、公開された悪性版は削除されました。

Organization: crates.io / arrayref and related crates | Outcome: confirmed-breach

Occurred: unknown | Disclosed: 2026-08-20 | Reviewed: 2026-10-02

Categories: supply-chain, credentials | CVEs: unspecified

## 根拠のある主張

- [confirmed / 公表で確認] arrayref、internment、append-only-vecの悪性版がproc-macro1に依存し、ビルド時にペイロードを取得しました。 (s1; Attack overview)
- [inferred / 推定] 8月20日の報告は、管理者の端末または認証情報の侵害が原因と推定しています。 (s1; Maintainer account)

## 公表された対応

- [confirmed / 公表で確認] Rustチームは悪性版の削除と公開者アカウントのロックを実施したと報告しました。 (s1; Response)

## 経緯

- 2026-08-20: この事案を公表。 (s1)

## 編集上の点検提案

operational-control: 依存版とビルドスクリプトの実行履歴を照合します。悪性版を実行した環境では、依存更新だけでなく鍵の露出と端末の状態を確認します。 (s1)

## AI関与

[unknown / 不明] 参照した情報では、攻撃者によるAI利用は確認できません。AI不使用を意味しません。

## 未確認事項

- 悪性版のダウンロード数は被害者数ではありません。利用先での侵害範囲は不明です。

Rules: SEC-001, SEC-003, SEC-004, SEC-005, SEC-007, SEC-009

## 出典

- s1: [Supply-chain attack on arrayref](https://blog.rust-lang.org/2026/08/20/supply-chain-attack-on-arrayref/) — Rust Project; vendor; published: 2026-08-20; reviewed: 2026-10-02
- s2: [Targeted attacks on Rust crate maintainers](https://blog.rust-lang.org/2026/09/17/targeted-attacks/) — Rust Project; vendor; published: 2026-09-17; reviewed: 2026-10-02
