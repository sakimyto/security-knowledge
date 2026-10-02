# metabase-2026 — Metabase：ゼロデイと管理者セッションからデータ取得

事例 | Catalog: 0.4.0 | Record SHA-256: 053252ba1c260199433f8a2d6153668f9bde48f01bc0164cb9a05c534d6404f5

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

Metabaseは8月3日の異常なAPIキー利用を調査し、未知の脆弱性を使った侵入を確認しました。入力処理とORMの挙動がつながり、管理者セッションを得た攻撃者がデータを取得しました。

Organization: Metabase / affected customers | Outcome: confirmed-breach

Occurred: unknown | Disclosed: 2026-08-06 | Reviewed: 2026-10-02

Categories: zero-day, implementation | CVEs: CVE-2026-72898

## 根拠のある主張

- [confirmed / 公表で確認] 過剰な入力キー、パスワードリセット処理、SQL式を受け付けるORMの挙動が攻撃経路につながりました。 (s1; Technical root cause)
- [confirmed / 公表で確認] 同社クラウドの顧客の3%未満と、一部の公開された自己運用環境で侵害を確認しました。 (s1; Scope of impact)
- [inferred / 推定] 複数のコード上の挙動とUser-Agentを根拠に、開発元は高度なLLMが関与した可能性を示しています。 (s1; Was this AI?)
- [confirmed / 公表で確認] 開発元のアドバイザリは、認証不要のSQLインジェクションと管理者権限の取得をCVE-2026-72898として公表しています。 (s3; Summary / CVE ID)

## 公表された対応

- [confirmed / 公表で確認] クラウドの修正、自己運用向けの修正版、入力とSQL式の扱いの強化を公表しました。 (s1; Remediation)

## 経緯

- 2026-08-06: この事案を公表。 (s1)

## 編集上の点検提案

pre-disclosure-exploitation: 公表前の悪用を含みます。BIの公開範囲、APIキー、取得権限を確認し、自社実装では入力の許可リストとSQL式の境界を点検します。 (s1)

## AI関与

[inferred / 推定] 開発元はLLM関与を推定していますが、攻撃者のモデルや利用実態を確認した報告ではありません。

## 未確認事項

- AI関与は開発元の推定です。自己運用環境の被害総数と個別の侵入開始日は不明です。

Rules: SEC-001, SEC-005, SEC-006, SEC-008, SEC-009, SEC-010

## 出典

- s1: [Vulnerability: what happened](https://www.metabase.com/blog/vulnerability-what-happened) — Metabase; vendor; published: 2026-08-27; reviewed: 2026-10-02
- s2: [Security update, 6 Aug 2026](https://www.metabase.com/blog/security-update-6-aug-2026) — Metabase; vendor; published: 2026-08-06; reviewed: 2026-10-02
- s3: [SQL injection using an unauthenticated endpoint leading to admin access](https://github.com/metabase/metabase/security/advisories/GHSA-vwf4-m7j8-wcjf) — Metabase; vendor; published: 2026-08-06; reviewed: 2026-10-02
