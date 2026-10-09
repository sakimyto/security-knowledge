# dandm-vpn-ransomware-2026 — D&M：不正アクセスの経緯と影響

事例 | Catalog: 0.6.0 | Record SHA-256: bb99944206b32df33d824d17b5d4d63bff63df6e5c3bef43ec7412c8df7b2981

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

VPN機器を経由して社内ファイル共有サーバーへ侵入され、ランサムウェアに感染しました。VPNの具体的な侵害手段は未公表です。 過去約2年のFAX受注情報633件が流出した可能性があります。カードや銀行口座情報は確認されていません。

Organization: D&M | Outcome: confirmed-breach

Occurred: unknown | Disclosed: 2026-06-12 | Reviewed: 2026-10-09

Categories: unknown | CVEs: unspecified

## 根拠のある主張

- [confirmed / 公表で確認] VPN機器を経由して社内ファイル共有サーバーへ侵入され、ランサムウェアに感染しました。VPNの具体的な侵害手段は未公表です。 (s1; pp.1-2 概要 / 原因 / 現在の状況)
- [confirmed / 公表で確認] 過去約2年のFAX受注情報633件が流出した可能性があります。カードや銀行口座情報は確認されていません。 (s1; pp.1-2 概要 / 原因 / 現在の状況)

## 公表された対応

- [confirmed / 公表で確認] 対象サーバーをネットワークから切り離し、VPNへの対策を実施しました。 (s1; pp.1-2 概要 / 原因 / 現在の状況)

## 経緯

- 2026-06-12: 公表資料で確認できる開示日。 (s1)

## 編集上の点検提案

unknown: 侵入方法や修正の提供時期が分からず、防げたかは判断できません。関連ルールで権限、取得ログ、保存期限と稼働設定を点検します。 (s1)

## AI関与

[unknown / 不明] 確認した公表資料からは、攻撃者によるAI利用を判断できません。

## 未確認事項

- 侵入開始日、VPN機器の製品・CVE・修正提供時期、実際の流出は未確認です。

Rules: SEC-001, SEC-008, SEC-009, SEC-012, SEC-013

## 出典

- s1: [D&M：事故に関する公表資料](https://www.rext.jp/ir/attachment/?%2F%E9%80%A3%E7%B5%90%E5%AD%90%E4%BC%9A%E7%A4%BE%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8B%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC%E3%81%B8%E3%81%AE%E4%B8%8D%E6%AD%A3%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E3%81%8A%E8%A9%AB%E3%81%B3%E3%81%A8%E3%81%94%E5%A0%B1%E5%91%8A.pdf=&field=0&id=81&inline=1) — D&M; organization; published: unknown; reviewed: 2026-10-09
