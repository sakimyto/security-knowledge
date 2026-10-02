# gyazo-2026 — Gyazo：画像アップロード用サーバーの脆弱性から侵入

事例 | Catalog: 0.4.0 | Record SHA-256: dcfbe0fdc99c01508af80909bf27ebcc40c68ff910badfd997a051e6b57dbbbf

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

画像アップロード用サーバーの脆弱性を悪用され、ユーザー情報と画像メタデータが取得されました。公表されたユーザーレコードには、匿名ユーザーとメール登録者の両方が含まれます。

Organization: Helpfeel / Gyazo | Outcome: confirmed-breach

Occurred: 2026-09-11 | Disclosed: 2026-09-16 | Reviewed: 2026-10-02

Categories: unknown | CVEs: unspecified

## 根拠のある主張

- [confirmed / 公表で確認] 9月11日に画像アップロード用サーバーへのコード実行があり、同日夜に検知しました。 (s2; 調査で判明した経緯)
- [confirmed / 公表で確認] ユーザー情報2,362万件と画像メタデータの取得を確認しました。メタデータ件数は画像ファイルの流出件数ではありません。 (s2; 影響範囲)

## 公表された対応

- [confirmed / 公表で確認] 脆弱性の修正、接続トークンの失効、停止中の調査を実施し、9月27日にサービスを再開したと公表しました。 (s2; 対応状況 / 9月27日追記)

## 経緯

- 2026-09-16: この事案を公表。 (s1)

## 編集上の点検提案

unknown: 修正提供時期が不明なため、パッチ放置とは判断できません。アップロード処理とDBへ到達する権限、削除済みデータの保持を確認します。 (s1)

## AI関与

[unknown / 不明] 参照した情報では、攻撃者によるAI利用は確認できません。AI不使用を意味しません。

## 未確認事項

- 具体的な脆弱性、CVE、侵入前の修正提供状況は不明です。ユーザーレコード数は実人数を意味しません。

Rules: SEC-001, SEC-005, SEC-006, SEC-008, SEC-009, SEC-010, SEC-012

## 出典

- s1: [Gyazoにおける不正アクセスに関するお知らせ](https://corp.helpfeel.com/news/news-20260916-1) — Helpfeel; organization; published: 2026-09-16; reviewed: 2026-10-02
- s2: [Gyazoにおける不正アクセスに関するお知らせ（第2報）](https://corp.helpfeel.com/news/news-20260925-01) — Helpfeel; organization; published: 2026-09-25; reviewed: 2026-10-02
