# yamato-pay-later-2026 — ヤマト運輸：代金後払いサービスへの不正アクセス

事例 | Catalog: 0.9.0 | Record SHA-256: 59a8d3fd5c8982eea8d124aa4e97fa62158d48aeb2e88aec79833656d5bb3852

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

9月28日に不正アクセスを確認し、代金後払いサービスを停止しました。顧客・加盟店・従業員情報に漏えいの可能性があり、10月9日にサービスを再開しました。

Organization: ヤマト運輸 | Outcome: confirmed-breach

Occurred: unknown | Disclosed: 2026-09-29 | Reviewed: 2026-10-19

Categories: unknown | CVEs: unspecified

## 根拠のある主張

- [confirmed / 公表で確認] 9月28日に第三者による不正アクセスを確認しました。侵入開始日は未公表です。 (s1; p.1 本文)
- [confirmed / 公表で確認] 顧客の連絡先・請求関連情報、加盟店名・コード、担当従業員名に漏えいの可能性があります。カード情報とパスワードは対象に含まれません。 (s2; p.1 §1)
- [confirmed / 公表で確認] 10月9日の再開後も、漏えいの可能性と範囲を調査しています。 (s3; 本文 第3段落)

## 公表された対応

- [confirmed / 公表で確認] 外部アクセスを制限し、専門機関と調査しました。10月9日にサービス再開を公表しました。 (s1, s3; 初報本文 / 第3報本文)

## 経緯

- 2026-09-28: 不正アクセスを確認し、22時28分にサービスを停止。 (s1)
- 2026-10-09: 13時にサービスを再開。 (s3)

## 編集上の点検提案

unknown: 侵入方法が未公表のため、防げたかは判断できません。関連ルールで公開範囲、権限、ログと保存データを点検します。 (s1)

## AI関与

[unknown / 不明] 確認した公表資料からは、攻撃者によるAI利用を判断できません。

## 未確認事項

- 侵入方法、漏えい人数と確定した流出範囲は未公表です。

Rules: SEC-006, SEC-008, SEC-009

## 出典

- s1: [「クロネコ代金後払いサービス」への不正アクセスの発生について](https://www.yamato-hd.co.jp/important/img/info_260929_1_1.pdf) — ヤマト運輸; organization; published: 2026-09-29; reviewed: 2026-10-19
- s2: [【第2報】「クロネコ代金後払いサービス」への不正アクセスの発生について](https://www.yamato-hd.co.jp/important/img/info_260929_1_6.pdf) — ヤマト運輸; organization; published: 2026-10-02; reviewed: 2026-10-19
- s3: [【第3報】「クロネコ代金後払いサービス」再開のお知らせ](https://www.yamato-hd.co.jp/important/info_260929_1.html) — ヤマト運輸; organization; published: 2026-10-09; reviewed: 2026-10-19
