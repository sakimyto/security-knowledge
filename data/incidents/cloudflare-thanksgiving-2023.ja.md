# cloudflare-thanksgiving-2023 — Cloudflare：失効漏れのトークンとアカウントから侵入

事例 | Catalog: 0.6.1 | Record SHA-256: 98665310d09970c4a288fdf4686f8e76fa0483ce3e5f05670bfef949f75001fa

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

以前のOkta事故で漏洩した資格情報のうち、更新されなかったトークンとアカウントが悪用されました。自己管理のAtlassian環境に侵入され、ソースコード等にアクセスされました。

Organization: Cloudflare | Outcome: confirmed-breach

Occurred: 2023-11-14 | Disclosed: 2024-02-01 | Reviewed: 2026-10-02

Categories: credentials | CVEs: unspecified

## 根拠のある主張

- [confirmed / 公表で確認] 未使用と誤認したサービス用トークン1つとアカウント3つが、更新されずに残っていました。 (s1; Credentials not rotated)
- [confirmed / 公表で確認] 侵入は自己管理のAtlassian環境に及びました。顧客データやグローバルネットワークへの影響はなかったと公表しました。 (s1; Executive summary)

## 公表された対応

- [confirmed / 公表で確認] 資格情報の広範な更新と、侵入範囲の調査を実施しました。 (s1; Remediation)

## 経緯

- 2023-11-14: 公表された偵察・アクセスの開始。 (s1)
- 2023-11-23: 侵入を検知。 (s1)
- 2023-11-24: 攻撃者のアクセスを停止。 (s1)
- 2024-02-01: 調査結果を公表。 (s1)

## 編集上の点検提案

operational-control: 更新した鍵の一覧だけでなく、対象の全資格情報と旧鍵の失効証拠を照合する点検が必要です。 (s1)

## AI関与

[unknown / 不明] 参照した一次情報に、攻撃でAIを利用したことを裏付ける記述はありません。AI不使用を意味しません。

## 未確認事項

- 対象資格情報の実値や内部の完全な権限構成は、公表資料から確認できません。

Rules: SEC-005, SEC-008, SEC-009

## 出典

- s1: [Thanksgiving 2023 security incident](https://blog.cloudflare.com/thanksgiving-2023-security-incident/) — Cloudflare; organization; published: 2024-02-01; reviewed: 2026-10-02
