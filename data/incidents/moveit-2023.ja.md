# moveit-2023 — MOVEit：公開前のSQLインジェクション悪用

事例 | Catalog: 0.4.0 | Record SHA-256: 45b350a8a188702b74a004f233526410807f88335b0bca600f2fdba3d548bfef

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

MOVEit TransferのSQLインジェクション脆弱性が、公表前から悪用されました。調査ではWebシェルの設置とデータ窃取が確認され、更新だけでなく侵害調査が必要でした。

Organization: Progress MOVEit customers | Outcome: confirmed-breach

Occurred: 2023-05-27 | Disclosed: 2023-05-31 | Reviewed: 2026-10-02

Categories: zero-day, implementation | CVEs: CVE-2023-34362

## 根拠のある主張

- [confirmed / 公表で確認] 調査で確認された最も早い悪用の証拠は2023年5月27日でした。 (s1; Overview)
- [confirmed / 公表で確認] 製品のSQLインジェクション脆弱性はCVE-2023-34362として公表されました。 (s2; CVE-2023-34362)

## 公表された対応

- [confirmed / 公表で確認] 開発元は利用者に緩和策と修正版の適用を案内しました。 (s3; Customer response)

## 経緯

- 2023-05-27: 調査で確認された悪用の証拠。 (s1)
- 2023-05-31: 開発元が脆弱性を公表。 (s3)

## 編集上の点検提案

pre-disclosure-exploitation: 公表前の侵害に、後から公開されたパッチを適用できなかった責任は付けられません。公開範囲の制限と侵害時の調査・復旧も点検します。 (s1, s2, s3)

## AI関与

[unknown / 不明] 参照した一次情報に、攻撃でAIを利用したことを裏付ける記述はありません。AI不使用を意味しません。

## 未確認事項

- 個別の被害組織がいつ侵害されたかは一様ではありません。自社実装のSQL注入と製品側の欠陥を区別します。

Rules: SEC-001, SEC-006, SEC-010

## 出典

- s1: [Zero-Day Vulnerability in MOVEit Transfer Exploited for Data Theft](https://cloud.google.com/blog/topics/threat-intelligence/zero-day-moveit-data-theft) — Mandiant; investigator; published: 2023-06-02; reviewed: 2026-10-02
- s2: [CVE-2023-34362 Detail](https://nvd.nist.gov/vuln/detail/CVE-2023-34362) — NIST NVD; government; published: 2023-06-02; reviewed: 2026-10-02
- s3: [An Update on the Steps We are Taking to Protect MOVEit Customers](https://www.progress.com/blogs/update-steps-we-are-taking-protect-moveit-customers) — Progress; vendor; published: unknown; reviewed: 2026-10-02
