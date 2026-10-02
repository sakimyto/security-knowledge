# campfire-2026 — CAMPFIRE：開発サーバーに置いたGitHub認証情報を悪用

事例 | Catalog: 0.4.0 | Record SHA-256: 6ebd0adb88b55b1f734f6be5eb9eb9168c3977c7504da6a2c91087448117eca6

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

個人の開発サーバーに誤って置いたGitHub認証情報が悪用されました。同社は内部のクラウド管理領域への不正アクセスと、個人情報1件のクエリによる取得を確認しています。

Organization: CAMPFIRE | Outcome: confirmed-breach

Occurred: unknown | Disclosed: 2026-04-03 | Reviewed: 2026-10-02

Categories: credentials, configuration | CVEs: unspecified

## 根拠のある主張

- [confirmed / 公表で確認] 従業員が発行したGitHub認証情報を、個人の開発サーバーへ誤ってアップロードしていました。 (s1; 5. 原因)
- [inferred / 推定] GitHubから得た情報でクラウドの認証情報を取得したと同社は判断しています。 (s1; 5. 原因)
- [confirmed / 公表で確認] 個人情報1件の取得を確認しました。22万5,846人は影響の可能性がある範囲で、流出確認件数ではありません。 (s1; 3. 流出した可能性のある情報)

## 公表された対応

- [confirmed / 公表で確認] GitHubの接続解除、認証情報の無効化・更新、関連クラウド資源の停止を公表しました。 (s1; 4. 対応)

## 経緯

- 2026-04-03: この事案を公表。 (s1)

## 編集上の点検提案

operational-control: 公開物への秘密情報の混入と、GitHubから到達できるクラウド権限を点検します。旧鍵の失効も証拠で確認します。 (s1)

## AI関与

[unknown / 不明] 参照した情報では、攻撃者によるAI利用は確認できません。AI不使用を意味しません。

## 未確認事項

- 欠けたログがあり、取得・流出範囲の全体を確定できません。

Rules: SEC-004, SEC-005, SEC-006, SEC-008, SEC-009

## 出典

- s1: [不正アクセスに関する調査結果と再発防止策について](https://campfire.co.jp/press/2026/06/02/campfire/) — CAMPFIRE; organization; published: 2026-06-02; reviewed: 2026-10-02
