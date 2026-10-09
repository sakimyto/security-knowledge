# asahi-pharma-digital-2026 — Pharma DIGITAL：委託先の会員DBへの不正アクセス

事例 | Catalog: 0.6.1 | Record SHA-256: 6109e35c4eb63bb73b6c2e7cea1793515ffd3ace7dbb5bf77698567bb566f964

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

運営を委託する医薬情報ネットから会員DBへの不正アクセスの報告を受けました。医療関係者と従業員の情報が閲覧・取得された可能性があり、原因の調査が続いています。

Organization: 旭化成セラピューティクス | Outcome: confirmed-breach

Occurred: unknown | Disclosed: 2026-10-06 | Reviewed: 2026-10-09

Categories: supply-chain, unknown | CVEs: unspecified

## 根拠のある主張

- [confirmed / 公表で確認] 委託先が会員DBへの不正アクセスを確認し、10月2日に報告しました。 (s1; 1. 概要)
- [confirmed / 公表で確認] 最大対象は医療関係者約514,000名と従業員約700名です。前者のうち約44,000名にはメールアドレスも含まれます。 (s1; 2. 漏えいした可能性がある情報)

## 公表された対応

- [confirmed / 公表で確認] サイトを停止し、侵入経路を是正。外部専門組織と調査しています。 (s1; 1. 概要 / 3. 現時点での状況と対応)

## 経緯

- 2026-10-02: 委託先から報告を受けました。 (s1)
- 2026-10-06: 対象範囲と対応を公表。 (s1)

## 編集上の点検提案

unknown: 委託先のアクセス権、取得ログ、保存する会員情報の範囲と期限を点検します。 (s1)

## AI関与

[unknown / 不明] 確認した公表資料からは、攻撃者によるAI利用を判断できません。

## 未確認事項

- 侵入方法と流出の確定範囲は未公表です。44,000名を514,000名に加算しません。

Rules: SEC-006, SEC-008, SEC-009, SEC-012

## 出典

- s1: [Pharma DIGITALへの不正アクセスおよび個人情報漏えいの可能性について](https://www.asahi-kasei.co.jp/pharma/oshirase_20261006.html) — 旭化成セラピューティクス; organization; published: 2026-10-06; reviewed: 2026-10-09
