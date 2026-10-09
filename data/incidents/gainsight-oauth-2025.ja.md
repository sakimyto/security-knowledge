# gainsight-oauth-2025 — Gainsight連携：古いOAuthトークンを顧客環境へのアクセスに悪用

事例 | Catalog: 0.6.1 | Record SHA-256: 5af6ac84565367170f28cea31fdedb8a045bd9f37761296b596d049b64f0693f

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

攻撃者は、古い連携トークンの有効性を調べ、失効されていないものをSalesforce APIへのアクセスに使いました。トークンを最初に取得した経路は特定されていません。

Organization: Gainsight–Salesforce連携の顧客環境 | Outcome: confirmed-breach

Occurred: 2025-10-22 | Disclosed: 2025-11-20 | Reviewed: 2026-10-10

Categories: credentials, unknown | CVEs: unspecified

## 根拠のある主張

- [confirmed / 公表で確認] 10月22日にトークンを検証し、11月16〜19日に顧客のSalesforce環境でAPIを呼び出したと報告しています。Gainsight環境への同時期の侵入を示すものではありません。 (s2; Analyzing the Token Usage)
- [confirmed / 公表で確認] 最も新しいトークンも2023年8月発行でした。調査元は漏えい元を特定できず、失効や更新まで長期間有効な設計を問題として説明しています。 (s2; Analyzing the Token Origin / At the Root of the Issue)
- [confirmed / 公表で確認] Gainsightが公表したMandiant調査要約では、同社のログに活動中の攻撃者の証拠は見つからなかったと報告しています。過去の流出経路を特定した結果ではありません。 (s3; 冒頭の調査結論（2025-12-05時点）)

## 公表された対応

- [confirmed / 公表で確認] 全システムの資格情報を更新し、古い鍵を削除しました。連携トークンの頻繁な更新、単回使用の更新トークン、接続元制限、PKCEを導入したと公表しました。 (s2; Immediate Remediation / OAuth Token Lifecycle Management)

## 原因・対策の仮説

以下は編集者の仮説です。成立条件と観測は未検証であり、事故の確定原因・公表済みの対策・点検の合格を示しません。

### historical-internal-origin — 原因仮説

[hypothesis / editorial-analysis] 古いトークン群が、過去のGainsight管理下の環境から流出した可能性があります。

**一次資料から確認した出発点:** 同社は、古いトークン群の取得元を特定できず、過去の内部流出と外部環境からの取得の2候補を示しています。 (s2; Analyzing the Token Origin / Where did these tokens come from?)

#### 成立に必要な条件

- 当該トークン群が存在した時期に、その環境から情報を取得できる経路があった場合。

#### 仮説を支持する観測

- 当時の保全資料で、対象トークン群と持ち出し操作の時系列が一致する。

#### 仮説を見直す観測

- 外部環境での取得が別の保全記録から確定し、内部由来という説明と矛盾する。

#### 確認できない範囲

- 当時のログがなく、公開資料だけでは検証できません。2025年の本体侵入を示すものではありません。

Rules: SEC-005, SEC-009

### historical-external-origin — 原因仮説

[hypothesis / editorial-analysis] 古いトークン群が、Gainsightの管理外の環境・端末から取得された可能性があります。

**一次資料から確認した出発点:** 同社は、古いトークン群の取得元を特定できず、過去の内部流出と外部環境からの取得の2候補を示しています。 (s2; Where did these tokens come from?)

#### 成立に必要な条件

- 当該トークンが外部の環境や端末でも扱われ、攻撃者がそこへ到達できた場合。

#### 仮説を支持する観測

- 外部環境の保全記録に当該トークンの利用と取得の痕跡があり、取得時期が合う。

#### 仮説を見直す観測

- 内部環境からの持ち出しが確定する、または候補の外部環境に当該トークンが存在しなかったと証明できる。

#### 確認できない範囲

- 候補を並べても同じ確率を意味しません。フィッシングや端末侵害という具体的手法は未特定です。

Rules: SEC-005, SEC-009

### legacy-token-revocation — 対策仮説

[hypothesis / editorial-analysis] 旧OAuthトークンの失効と更新時の再利用制御を検証すると、過去に漏れたトークンの再利用を抑えられる可能性があります。

**一次資料から確認した出発点:** 古いトークンが未失効の顧客環境で悪用され、同社は更新頻度と単回使用の更新トークンを導入したと説明しています。 (s2; At the Root of the Issue / OAuth Token Lifecycle Management)

#### 成立に必要な条件

- API側でも旧トークンを失効でき、更新前後の全資格情報を制御できる場合。

#### 仮説を支持する観測

- 自分の隔離環境の架空トークンで、失効したaccess tokenと使用済みrefresh tokenが拒否され、接続先の失効記録とも一致する。

#### 仮説を見直す観測

- 新しい鍵を発行しても旧鍵が通る、または更新トークンを再使用して新しいアクセス権を得られる。

#### 確認できない範囲

- アプリ側の削除だけでは失効の証拠になりません。MFAやPKCEだけで窃取済みbearer tokenのAPI利用は止まりません。

Rules: SEC-005, SEC-008

## 経緯

- 2025-11-20: この事案を公表。 (s1)

## 編集上の点検提案

operational-control: OAuthの有効期限、更新トークンの再利用制御、旧トークンの失効結果を確認します。漏えい元が不明でも、鍵を長期間使い続けられる範囲は点検できます。 (s2)

## AI関与

[unknown / 不明] 参照した情報では、攻撃者によるAI利用は確認できません。AI不使用を意味しません。

## 未確認事項

- 漏えい元と最初の漏えい時期は不明です。古いトークンの再利用を、2025年のGainsight本体への侵入と同一視しません。

Rules: SEC-002, SEC-005, SEC-008, SEC-009

## 出典

- s1: [Salesforce–Gainsight Connected App Incident](https://communities.gainsight.com/community-news-2/salesforce-gainsight-connected-app-incident-29798) — Gainsight; organization; published: 2025-11-20; reviewed: 2026-10-10
- s2: [How We Accelerated a Year of Security Work in Weeks](https://www.gainsight.com/blog/how-we-accelerated-a-year-of-security-work-in-weeks/) — Gainsight; organization; published: 2026-01-02; reviewed: 2026-10-10
- s3: [Mandiant Investigation Summary](https://www.gainsight.com/blog/mandiant-investigation-summary/) — Gainsight（Mandiant調査要約）; organization; published: 2025-12-08; reviewed: 2026-10-10
