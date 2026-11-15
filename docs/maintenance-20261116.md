# 2026年11月16日の週次確認

対象はJPCERT/CC Weekly Report 2026-10-07号の未判定9項目です。入口の公表日と事故の発生日を区別し、2026年11月16日に一次情報を確認します。前週の公開済みv0.11.0は再公開しません。

Cisco Catalyst SD-WAN Managerについては、Cisco PSIRTが2026年9月の実悪用を公表しています。単なる脆弱性の公表ではないため、被害先を特定しない実悪用の記録を1件追加します。被害組織・機器数・人数・個別侵入日・流出範囲・復旧状況は不明です。個別組織の事故を別に作らず、CVEと出典URLが既存記録と重複しないことを確認します。修正公開前の侵入やAI関与を推定しません。

- 根拠: [Ciscoのアドバイザリ](https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-sdwan-webauth-xr8beuuU)の「Exploitation and Public Announcements」「Summary」「Indicators of Compromise」「Fixed Software」。初公開日は2026-09-30です。
- OpenSSL・WatchGuard・Pgpool-II・Elasticは、参照した一次資料では個別事故を確認できない脆弱性情報として除外します。これは悪用が存在しないという判断ではありません。
- HPEは本文を取得できていないため未確認です。Appleは特定対象への悪用の可能性という報告であり、確認済みの事故へ変換せず未確認として残します。
- NCOのハンドブック公開とNICTの四半期観測統計公開は、独立した個別事故の候補としては除外します。NICT資料に記された感染の推定や観測ホスト数を、被害人数・事故件数へ変換しません。

収録後はv0.12.0とし、実データから件数と期間を数えます。参照する点検ルールSEC-001・SEC-006・SEC-009の双方向リンクと更新日を更新します。他の事例の確認日は変えません。

不変条件はPRIMARY-EVIDENCE（実悪用と潜在的影響を区別）、UNKNOWN-PRESERVED（未公表の原因・日付・件数・AIを補わない）、NO-DUPLICATE（ID・CVE・出典の重複を確認）、BIDIRECTIONAL-LINKS、RELEASE-IDENTITYです。既存のSchema・全Nodeテスト・報告契約・生成一致検査を使い、欠落出典・逆参照破損・hash破損の負例が拒否されることを確認します。有限の実データを検査するためZ3/TLA+は追加しません。形式検証は資料の真実性や全世界の事故の網羅性を保証しません。

v0.12.0は160記録・16ルールです。期間内141、期間外14、公表日不明5記録です。期間内のAI関与は確認4・推定1・不明136で、確認4のうち3記録は評価・内部利用の逸脱です。2025-11-13公表のClaude Code悪用記録が期間外に移り、Ciscoの記録が加わるため、期間内件数は141のままです。
