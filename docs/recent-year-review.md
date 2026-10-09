# 直近1年の事故から、どこを点検するか

DB v0.5.0。確認日：2026-10-09。公表日での対象期間：2025-10-09〜2026-10-09。既存事例の確認日は各レコードに記録しています。

## 収録範囲

期間内120事例、期間外11事例、公表日不明5事例の計136事例を収録した選定DBです。公開状態のみの16事例、評価試験、共通の委託先事故も含みます。事故全体の統計、企業数、被害人数の総計ではありません。国内169候補は[確認記録](domestic-intake-20261009.md)と[全件台帳](../intake/domestic-20261009.json)で追跡できます。

## 原因と対策の読み方

既知の修正が侵入前に未適用だった事例と、公表前の悪用は分けます。製品名や修正時期が未公表なら、パッチ放置やゼロデイを推測で決めません。端末への遠隔操作、認証情報の取得、実装・設定の欠陥は、主張の確度と根拠を合わせて確認してください。

各点検ルールは適用条件、見る箇所、確認方法、修正の方向、完了の証拠を含みます。侵入後の権限や保存情報を減らす点検も行えますが、その対策で当時の事故が完全に防げたと認定するものではありません。

## AIの関与

期間内120事例のAI関与は、公表で確認4件、推定1件、不明115件です。確認4件のうち2件は評価試験、2件は観測された攻撃です。利用者自身の業務上の生成AIへの情報送信は、攻撃者によるAI利用と分けています。未公表とAI不使用は同じではありません。この選定DBからAI攻撃の増加率や不可避性は判断できません。

## 対策の判断に使える情報

| 分類 | 期間内レコード数 | 点検すること |
| --- | ---: | --- |
| 修正情報あり | 4 | 稼働版、更新履歴、担当と期限、更新後の侵害調査 |
| 公表前の悪用を報告 | 4 | 到達権限、公開範囲、検知と失効 |
| 運用・設定の点検対象 | 47 | 認証、端末、実装・設定、秘密の保管、供給網 |
| 判断材料が不足 | 65 | 未公表を保ち、影響範囲と封じ込め、保存期限を確認 |

分類は過失の認定ではありません。「修正情報あり」の4件には、更新不備の関与を会社が推定したLEAN BODYの1件を含みます。`claims.status: inferred` と説明を合わせて読んでください。

## 一次情報へ戻る

公表日は、一次資料で確認できる初報日を使います。公表日不明の5事例は期間集計から除き、事故DBには残しています。本文中の該当箇所は各JSONの `locator` へ記録しました。

| 公表日 | 事例 | 対策の判断 | AI関与 | 一次情報 |
| --- | --- | --- | --- | --- |
| 2025-10-19 | [アスクル：MFAの例外アカウントから侵入](../incidents/askul-2025.json) | 運用・設定の点検対象 | 不明 | [ASKUL](https://www.askullogist.co.jp/pdf/20251212.pdf) |
| 2025-11-04 | [QUICK：私物端末から業務用認証情報が流出](../incidents/quick-2025.json) | 運用・設定の点検対象 | 不明 | [QUICK](https://corporate.quick.co.jp/news/oshirase20251104/) |
| 2025-11-13 | [Claude Code：攻撃者がAIを悪用した複数組織への侵入](../incidents/anthropic-claude-code-abuse-2025.json) | 判断材料が不足 | 公表で確認 | [Anthropic](https://www.anthropic.com/news/disrupting-AI-espionage) |
| 2025-11-20 | [Gainsight連携：古いOAuthトークンを顧客環境へのアクセスに悪用](../incidents/gainsight-oauth-2025.json) | 運用・設定の点検対象 | 不明 | [Gainsight](https://communities.gainsight.com/community-news-2/salesforce-gainsight-connected-app-incident-29798) |
| 2025-11-24 | [Postman：依存パッケージ経由でCIの公開用トークンを悪用](../incidents/postman-shai-hulud-2025.json) | 運用・設定の点検対象 | 不明 | [Postman](https://blog.postman.com/engineering/root-cause-analysis-shai-halud-2-0/) |
| 2025-11-26 | [Mixpanel：SMSを使うフィッシングと解析データの持ち出し](../incidents/openai-mixpanel-2025.json) | 運用・設定の点検対象 | 不明 | [OpenAI](https://openai.com/index/mixpanel-incident/) |
| 2025-12-08 | [ロジックベイン：不正アクセスの経緯と影響](../incidents/logicvein-2025.json) | 判断材料が不足 | 不明 | [ロジックベイン](https://www.lvi.co.jp/company-news/2026/08/17/post-2244/) |
| 2025-12-15 | [React2Shell：公開後にRSCの脆弱性を悪用](../incidents/react2shell-2025.json) | 修正情報あり | 不明 | [Microsoft](https://www.microsoft.com/en-us/security/blog/2025/12/15/defending-against-the-cve-2025-55182-react2shell-vulnerability-in-react-server-components/) |
| 2025-12-18 | [インク革命：不正アクセスの経緯と影響](../incidents/inkrevolution-payment-2025.json) | 判断材料が不足 | 不明 | [インク革命](https://ink-revolution.com/pages/info-2026-07-15) |
| 2026-01-22 | [FortiCloud SSO：修正済み機器でも認証を悪用](../incidents/forticloud-sso-2026.json) | 公表前の悪用を報告 | 不明 | [Fortinet](https://www.fortinet.com/blog/psirt-blogs/analysis-of-sso-abuse-on-fortios) |
| 2026-02-06 | [ジェックス：不正アクセスの経緯と影響](../incidents/gex-ransomware-2026.json) | 判断材料が不足 | 不明 | [ジェックス](https://www.gex-fp.co.jp/news/20260819/) |
| 2026-02-13 | [西山製作所：VPNの脆弱性と認証情報を悪用](../incidents/nishiyama-2026.json) | 判断材料が不足 | 不明 | [西山製作所](https://www.nishiyama-ss.co.jp/asset/pdf/20260403_CyberAttack3.pdf) |
| 2026-03-17 | [日本テレネット：不正アクセスの経緯と影響](../incidents/nihontelenet-ransomware-2026.json) | 判断材料が不足 | 不明 | [日本テレネット](https://www.nippon-tele.net/release/20260317_4599/) |
| 2026-03-20 | [Trivy：失効漏れの資格情報から配布物とActionを改ざん](../incidents/trivy-supply-chain-2026.json) | 運用・設定の点検対象 | 不明 | [Aqua Security / Trivy maintainers](https://github.com/aquasecurity/trivy/discussions/10425) |
| 2026-03-30 | [コタ：不正アクセスの経緯と影響](../incidents/cota-2026.json) | 判断材料が不足 | 不明 | [コタ](https://media.cota.co.jp/media/c461e507-b70e-4543-81b6-38210d442a3b.pdf) |
| 2026-03-31 | [Axios：公開者アカウントから悪性パッケージを配布](../incidents/axios-npm-2026.json) | 運用・設定の点検対象 | 不明 | [Google Threat Intelligence Group](https://cloud.google.com/blog/topics/threat-intelligence/north-korea-threat-actor-targets-axios-npm-package/) |
| 2026-04-03 | [阿波銀行：残存したテスト環境から情報が流出](../incidents/awabank-test-environment-2026.json) | 運用・設定の点検対象 | 不明 | [阿波銀行](https://www.awabank.co.jp/kojin/benri/awagin_app/news/2026/news20260603a/index.html) |
| 2026-04-03 | [CAMPFIRE：開発サーバーに置いたGitHub認証情報を悪用](../incidents/campfire-2026.json) | 運用・設定の点検対象 | 不明 | [CAMPFIRE](https://campfire.co.jp/press/2026/06/02/campfire/) |
| 2026-04-09 | [Prontest：クラウドの計算資源を不正利用](../incidents/prontest-cloud-2026.json) | 判断材料が不足 | 不明 | [Prontest](https://prontest.co.jp/news/notice-of-unauthorized-access-in-our-cloud-environment-and-response-status/) |
| 2026-04-23 | [2りんかんイエローハット：不正アクセスの経緯と影響](../incidents/2rinkan-api-2026.json) | 判断材料が不足 | 不明 | [2りんかんイエローハット](https://2rinkan.jp/annai/20260423/) |
| 2026-06-03 | [藤田医科大学病院：不正アクセスの経緯と影響](../incidents/fujita-personal-pc-scam-2026.json) | 運用・設定の点検対象 | 不明 | [藤田医科大学病院](https://hospital.fujita-hu.ac.jp/topics/i05j6a0000003uai.html) |
| 2026-06-04 | [ビジュアルアーツ：不正アクセスの経緯と影響](../incidents/visualarts-cloud-credentials-2026.json) | 運用・設定の点検対象 | 不明 | [ビジュアルアーツ](https://visual-arts.jp/wp/wp-content/uploads/2026/06/VA20260604.pdf) |
| 2026-06-05 | [エン：不正アクセスの経緯と影響](../incidents/en-midcareer-credential-stuffing-2026.json) | 運用・設定の点検対象 | 不明 | [エン](https://s3-ap-northeast-1.amazonaws.com/enjapanhp/wp-content/uploads/20260605094031/20260605_%E3%80%8C%E3%83%9F%E3%83%89%E3%83%AB%E3%81%AE%E8%BB%A2%E8%81%B7%E3%80%8D%E3%81%B8%E3%81%AE%E4%B8%8D%E6%AD%A3%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9%E7%99%BA%E7%94%9F%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E3%81%8A%E8%A9%AB%E3%81%B3%E3%81%A8%E3%81%94%E5%A0%B1%E5%91%8A.pdf) |
| 2026-06-12 | [D&M：不正アクセスの経緯と影響](../incidents/dandm-vpn-ransomware-2026.json) | 判断材料が不足 | 不明 | [D&M](https://www.rext.jp/ir/attachment/?%2F%E9%80%A3%E7%B5%90%E5%AD%90%E4%BC%9A%E7%A4%BE%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8B%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC%E3%81%B8%E3%81%AE%E4%B8%8D%E6%AD%A3%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E3%81%8A%E8%A9%AB%E3%81%B3%E3%81%A8%E3%81%94%E5%A0%B1%E5%91%8A.pdf=&field=0&id=81&inline=1) |
| 2026-06-15 | [佐嘉平川屋：不正アクセスの経緯と影響](../incidents/saga-hirakawaya-payment-2026.json) | 判断材料が不足 | 不明 | [佐嘉平川屋](https://www.saga-hirakawaya.jp/documents/pdf/202606-public-notice.pdf) |
| 2026-06-16 | [小松製作所：情報の公開範囲・権限の問題](../incidents/komatsu-user-directory-exposure-2026.json) | 運用・設定の点検対象 | 不明 | [小松製作所](https://www.komatsu.jp/ja/newsroom/2026/20260915) |
| 2026-06-23 | [KDDI：第三者ソフトのゼロデイからISP情報が流出](../incidents/kddi-isp-2026.json) | 公表前の悪用を報告 | 不明 | [KDDI](https://newsroom.kddi.com/news/assets/2026/kddi_nr_s-73_4619/kddi_nr_s-73_4619_pdf_01.pdf) |
| 2026-06-30 | [アフラック：通常の利用に似たアクセスで大量のデータを照会](../incidents/aflac-japan-2026.json) | 運用・設定の点検対象 | 不明 | [アフラック生命保険](https://www.aflac.co.jp/static/corp/profile/news/2026/2026073100.pdf) |
| 2026-06-30 | [ピックルボールワン：不正アクセスの経緯と影響](../incidents/pickleballone-plugin-2026.json) | 判断材料が不足 | 不明 | [ピックルボールワン](https://company.pickle-one.com/news/20260630) |
| 2026-07-01 | [加賀ソルネット：不正アクセスの経緯と影響](../incidents/kaga-solnet-2026.json) | 判断材料が不足 | 不明 | [加賀ソルネット](https://www.solnet.ne.jp/news/20260817) |
| 2026-07-03 | [テレビ朝日メディアプレックス：不正アクセスの経緯と影響](../incidents/mediaplex-2026.json) | 判断材料が不足 | 不明 | [テレビ朝日メディアプレックス](https://www.mediaplex.co.jp/wp-content/uploads/20260730.pdf) |
| 2026-07-08 | [杏林学園：不正アクセスの経緯と影響](../incidents/kyorin-remote-pc-2026.json) | 運用・設定の点検対象 | 不明 | [杏林学園](https://www.kyorin-u.ac.jp/univ/news/4087/) |
| 2026-07-09 | [福岡大学：不正アクセスの経緯と影響](../incidents/nostrum-smartspi-2026.json) | 判断材料が不足 | 不明 | [福岡大学](https://www.fukuoka-u.ac.jp/news/26/07/08175927.html) |
| 2026-07-13 | [ニチレイ：不正アクセスの経緯と影響](../incidents/nichirei-2026.json) | 判断材料が不足 | 不明 | [ニチレイ](https://www.nichirei.co.jp/news/2026/524.html) |
| 2026-07-14 | [ファイブフォックス：不正アクセスの経緯と影響](../incidents/five-foxes-2026.json) | 判断材料が不足 | 不明 | [ファイブフォックス](https://www.fivefoxes.co.jp/2026/09/post-23.html) |
| 2026-07-14 | [K9ナチュラルジャパン：不正アクセスの経緯と影響](../incidents/k9natural-2026.json) | 判断材料が不足 | 不明 | [K9ナチュラルジャパン](https://www.k9natural.jp/blogs/news/%E4%B8%8D%E6%AD%A3%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9%E3%81%AB%E3%82%88%E3%82%8B%E3%81%8A%E5%AE%A2%E6%A7%98%E6%83%85%E5%A0%B1%E6%B5%81%E5%87%BA%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E8%AA%BF%E6%9F%BB%E7%B5%90%E6%9E%9C%E3%81%AE%E3%81%94%E5%A0%B1%E5%91%8A) |
| 2026-07-14 | [メディア4u：不正アクセスの経緯と影響](../incidents/media4u-account-list-2026.json) | 判断材料が不足 | 不明 | [メディア4u](https://www.media4u.co.jp/news/3354) |
| 2026-07-16 | [OpenAI・Hugging Face：評価用AIが外部へ侵入](../incidents/openai-huggingface-eval-2026.json) | 公表前の悪用を報告 | 公表で確認 | [OpenAI](https://openai.com/index/hugging-face-model-evaluation-security-incident/) |
| 2026-07-22 | [扶桑電通：不正アクセスの経緯と影響](../incidents/fuso-cloud-storage-2026.json) | 運用・設定の点検対象 | 不明 | [扶桑電通](https://www.fusodentsu.co.jp/news/news_cp_20260910.html) |
| 2026-07-22 | [三重県立久居農林高等学校：情報の公開範囲・権限の問題](../incidents/mie-school-form-exposure-2026.json) | 運用・設定の点検対象 | 不明 | [三重県立久居農林高等学校](https://www.pref.mie.lg.jp/TOPICS/m0053100002.htm) |
| 2026-07-24 | [旭化成セラピューティクス・シミックHCI：不正アクセスの経緯と影響](../incidents/cmic-ra-connect-2026.json) | 運用・設定の点検対象 | 不明 | [旭化成セラピューティクス・シミックHCI](https://www.cmic-hci.com/news/20260724) |
| 2026-07-24 | [ムラウチドットコム：不正アクセスの経緯と影響](../incidents/murauchi-2026.json) | 判断材料が不足 | 不明 | [ムラウチドットコム](https://murauchi.com/static-pages/privacy/pressrelease.html) |
| 2026-07-24 | [ニデック（医療機器）：Webサイトで使うソフトの脆弱性を悪用](../incidents/nidek-website-2026.json) | 判断材料が不足 | 不明 | [NIDEK](https://www.nidek.co.jp/news/20260724_news/) |
| 2026-07-28 | [タカラトミー：情報の公開範囲・権限の問題](../incidents/takaratomy-dmp-auth-2026.json) | 運用・設定の点検対象 | 不明 | [タカラトミー](https://www.takaratomy.co.jp/support/pdf/dmp20260728.pdf) |
| 2026-07-29 | [生命保険協会：情報の公開範囲・権限の問題](../incidents/seiho-contract-lookup-2026.json) | 判断材料が不足 | 不明 | [生命保険協会](https://www.seiho.or.jp/info/news/shared/mt-item/20260729.pdf) |
| 2026-07-30 | [Anthropic：評価環境の通信制限が効かず外部へ到達](../incidents/anthropic-cyber-evals-2026.json) | 運用・設定の点検対象 | 公表で確認 | [Anthropic](https://www.anthropic.com/news/investigating-incidents-cybersecurity-evals) |
| 2026-07-31 | [EPARKリラク＆エステ：不正アクセスの経緯と影響](../incidents/epark-peakmanager-2026.json) | 判断材料が不足 | 不明 | [EPARKリラク＆エステ](https://www.epark-relax.co.jp/news/231) |
| 2026-08-01 | [ショップサーブ：不正アクセスの経緯と影響](../incidents/estore-shopserve-2026.json) | 判断材料が不足 | 不明 | [ショップサーブ](https://estore.jp/press/20260802/) |
| 2026-08-03 | [講談社：不正アクセスの経緯と影響](../incidents/kodansha-phishing-2026.json) | 運用・設定の点検対象 | 不明 | [講談社](https://www.kodansha.co.jp/notices/723) |
| 2026-08-04 | [中部電力：不正アクセスの経緯と影響](../incidents/chubu-business-credentials-2026.json) | 運用・設定の点検対象 | 不明 | [中部電力](https://www.chuden.co.jp/publicity/press/1218169_3273.html) |
| 2026-08-04 | [イノベーション：不正アクセスの経緯と影響](../incidents/innovation-github-2026.json) | 運用・設定の点検対象 | 不明 | [イノベーション](https://www.innovation.co.jp/2026/08/github%e3%81%b8%e3%81%ae%e4%b8%8d%e6%ad%a3%e3%82%a2%e3%82%af%e3%82%bb%e3%82%b9%e3%81%ab%e9%96%a2%e3%81%99%e3%82%8b%e8%a9%b3%e7%b4%b0%e8%aa%bf%e6%9f%bb%e3%81%ae%e5%ae%8c%e4%ba%86%e3%81%8a%e3%82%88/) |
| 2026-08-04 | [京都府 KYO育tv：情報の公開範囲・権限の問題](../incidents/kyoto-kyotv-exposure-2026.json) | 運用・設定の点検対象 | 不明 | [京都府 KYO育tv](https://www.pref.kyoto.jp/press/documents/26080407.pdf) |
| 2026-08-06 | [一正蒲鉾：不正アクセスの経緯と影響](../incidents/ichimasa-mail-2026.json) | 判断材料が不足 | 不明 | [一正蒲鉾](https://contents.xj-storage.jp/xcontents/AS00463/e2f21951/695f/4a06/9479/dab1be29f32e/20260806085229423s.pdf) |
| 2026-08-06 | [Metabase：ゼロデイと管理者セッションからデータ取得](../incidents/metabase-2026.json) | 公表前の悪用を報告 | 推定 | [Metabase](https://www.metabase.com/blog/vulnerability-what-happened) |
| 2026-08-06 | [ナイス：不正アクセスの経緯と影響](../incidents/nice-mail-2026.json) | 判断材料が不足 | 不明 | [ナイス](https://www.nice.co.jp/release/2026_08_06.html) |
| 2026-08-07 | [科学技術振興機構：不正アクセスの経緯と影響](../incidents/jst-mail-2026.json) | 判断材料が不足 | 不明 | [科学技術振興機構](https://www.jst.go.jp/osirase/2026/20260807-2.html) |
| 2026-08-12 | [ホワイトエッセンス：不正アクセスの経緯と影響](../incidents/white-essence-2026.json) | 判断材料が不足 | 不明 | [ホワイトエッセンス](https://www.whiteessence.com/news/news/20261005/) |
| 2026-08-13 | [チャーム：不正アクセスの経緯と影響](../incidents/charm-2026.json) | 判断材料が不足 | 不明 | [チャーム](https://www.charm.co.jp/honten/info/notice/20260901.html) |
| 2026-08-17 | [教育ソフトウェア：不正アクセスの経緯と影響](../incidents/education-software-dormant-2026.json) | 運用・設定の点検対象 | 不明 | [教育ソフトウェア](https://www.kyoikusw.co.jp/news/20260817/) |
| 2026-08-17 | [さくらインターネット：管理用サーバーへの不正アクセス](../incidents/sakura-hosting-2026.json) | 判断材料が不足 | 不明 | [さくらインターネット](https://www.sakura.ad.jp/corporate/information/newsreleases/2026/09/10/1968225692/) |
| 2026-08-18 | [VOISING：修正未適用のBIツールから情報が流出](../incidents/voising-bi-2026.json) | 修正情報あり | 不明 | [VOISING](https://voising-official.com/news/1015) |
| 2026-08-18 | [ウェブライフ：不正アクセスの経緯と影響](../incidents/weblife-oem-2026.json) | 運用・設定の点検対象 | 不明 | [ウェブライフ](https://web-life.co.jp/news/6551/) |
| 2026-08-19 | [さくらインターネット：請求情報DBへの別の不正アクセス](../incidents/sakura-billing-2026.json) | 判断材料が不足 | 不明 | [さくらインターネット](https://www.sakura.ad.jp/corporate/information/newsreleases/2026/09/10/1968225692/) |
| 2026-08-19 | [静岡県：情報の公開範囲・権限の問題](../incidents/shizuoka-form-exposure-2026.json) | 運用・設定の点検対象 | 不明 | [静岡県](https://www.pref.shizuoka.jp/_res/projects/default_project/_page_/001/085/031/02_0819boujou.pdf) |
| 2026-08-20 | [2025年日本国際博覧会協会：不正アクセスの経緯と影響](../incidents/expo-subcontractor-mail-2026.json) | 運用・設定の点検対象 | 不明 | [2025年日本国際博覧会協会](https://www.expo2025.or.jp/news/news-20260820-01/) |
| 2026-08-20 | [Rust：正規クレートの更新に悪性ビルド処理が混入](../incidents/rust-arrayref-2026.json) | 運用・設定の点検対象 | 不明 | [Rust Project](https://blog.rust-lang.org/2026/08/20/supply-chain-attack-on-arrayref/) |
| 2026-08-21 | [楽天ブックスネットワーク：不正アクセスの経緯と影響](../incidents/rakuten-books-pc-2026.json) | 判断材料が不足 | 不明 | [楽天ブックスネットワーク](https://www.rakuten-booksnetwork.co.jp/2026/08/21/unauthorized-access-notice/index.html) |
| 2026-08-24 | [ファンくる：不正アクセスの経緯と影響](../incidents/fancrew-credential-stuffing-2026.json) | 運用・設定の点検対象 | 不明 | [ファンくる](https://www.fancrew.co.jp/news/news-press-release/2609_final-report-unauthorized-account-access.html) |
| 2026-08-27 | [チューリッヒ保険：不正アクセスの経緯と影響](../incidents/zurich-zdash-2026.json) | 判断材料が不足 | 不明 | [チューリッヒ保険](https://www.zurich.co.jp/aboutus/news/news/2026/0827/) |
| 2026-08-28 | [コープやまぐち：不正アクセスの経緯と影響](../incidents/coop-yamaguchi-2026.json) | 判断材料が不足 | 不明 | [コープやまぐち](https://www.yamaguti-coop.or.jp/line-miniapp-incident-report2/) |
| 2026-08-28 | [コロナ：不正アクセスの経緯と影響](../incidents/corona-cloud-2026.json) | 判断材料が不足 | 不明 | [コロナ](https://www.corona.co.jp/news/other/post-439.html) |
| 2026-08-28 | [カインドオル：不正アクセスの経緯と影響](../incidents/kindal-phishing-2026.json) | 運用・設定の点検対象 | 不明 | [カインドオル](https://www.kind.co.jp/notice-20260828) |
| 2026-08-28 | [イエローハット：不正アクセスの経緯と影響](../incidents/yellowhat-booking-2026.json) | 判断材料が不足 | 不明 | [イエローハット](https://www.yellowhat.jp/information/yellowhat/202608.html) |
| 2026-09-01 | [千葉県生物多様性センター：不正アクセスの経緯と影響](../incidents/chiba-biodiversity-2026.json) | 判断材料が不足 | 不明 | [千葉県生物多様性センター](https://www.pref.chiba.lg.jp/shizen/press/2026/260901hompageerror.html) |
| 2026-09-01 | [関西学院大学：情報の公開範囲・権限の問題](../incidents/kwansei-external-sns-2026.json) | 運用・設定の点検対象 | 不明 | [関西学院大学](https://www.kwansei.ac.jp/news/06656.html) |
| 2026-09-01 | [三井不動産：不正アクセスの経緯と影響](../incidents/mitsui-fudosan-directory-2026.json) | 運用・設定の点検対象 | 不明 | [三井不動産](https://www.mitsuifudosan.co.jp/letter/260901/download/260901.pdf) |
| 2026-09-01 | [TRUNK：不正アクセスの経緯と影響](../incidents/trunk-mail-2026.json) | 判断材料が不足 | 不明 | [TRUNK](https://www.trunk-base.com/company/news/20260901/) |
| 2026-09-02 | [IHIグループ健康保険組合：情報の公開範囲・権限の問題](../incidents/rizap-ai-data-handling-2026.json) | 運用・設定の点検対象 | 不明 | [IHIグループ健康保険組合](https://www.ihikenpo.or.jp/asp/news/news.asp?articleid=189769&page=1) |
| 2026-09-02 | [Unit 42：AI支援の侵入でリポジトリの鍵を悪用](../incidents/unit42-ai-assisted-2026.json) | 運用・設定の点検対象 | 公表で確認 | [Palo Alto Networks Unit 42](https://unit42.paloaltonetworks.com/ai-assisted-cyber-attack-inside-a-unit-42-investigation/) |
| 2026-09-04 | [大田区文化振興協会：不正アクセスの経緯と影響](../incidents/ota-cultural-pc-scam-2026.json) | 運用・設定の点検対象 | 不明 | [大田区文化振興協会](https://www.ota-bunka.or.jp/news/detail?110295) |
| 2026-09-06 | [Weverse Company：不正アクセスの経緯と影響](../incidents/weverse-payment-api-2026.json) | 運用・設定の点検対象 | 不明 | [Weverse Company](https://shop.weverse.io/ja/shop/JPY/artists/0/notices/14265) |
| 2026-09-09 | [ApplyNow（吉野家・橿原市・富士市）：不正アクセスの経緯と影響](../incidents/applynow-bi-2026.json) | 判断材料が不足 | 不明 | [ApplyNow](https://applynow.co.jp/news/20260909) |
| 2026-09-09 | [鴨川市：情報の公開範囲・権限の問題](../incidents/kamogawa-form-exposure-2026.json) | 運用・設定の点検対象 | 不明 | [鴨川市](https://www.city.kamogawa.lg.jp/site/furusatotax/45030.html) |
| 2026-09-11 | [デジタル庁GSS：修正未適用のVPNから侵入](../incidents/digital-agency-gss-2026.json) | 修正情報あり | 不明 | [デジタル庁](https://www.digital.go.jp/press/5fc99139-a4e2-4b7b-8b0c-d475e926143f) |
| 2026-09-11 | [日本エネルギー経済研究所：不正アクセスの経緯と影響](../incidents/ieej-mail-2026.json) | 判断材料が不足 | 不明 | [日本エネルギー経済研究所](https://eneken.ieej.or.jp/press/press261002.pdf) |
| 2026-09-15 | [あいの風とやま鉄道：不正アクセスの経緯と影響](../incidents/ainokaze-reservations-2026.json) | 判断材料が不足 | 不明 | [あいの風とやま鉄道](https://ainokaze.co.jp/24166) |
| 2026-09-15 | [LEAN BODY：不正アクセスの経緯と影響](../incidents/leanbody-metabase-2026.json) | 修正情報あり | 不明 | [LEAN BODY](https://lean-body.co.jp/news/JlBWMCs7) |
| 2026-09-15 | [大阪市行政委員会事務局：不正アクセスの経緯と影響](../incidents/osaka-recruitment-vendor-2026.json) | 判断材料が不足 | 不明 | [大阪市行政委員会事務局](https://www.city.osaka.lg.jp/hodoshiryo/gyouseiiinkai/0000687493.html) |
| 2026-09-16 | [Gyazo：画像アップロード用サーバーの脆弱性から侵入](../incidents/gyazo-2026.json) | 判断材料が不足 | 不明 | [Helpfeel](https://corp.helpfeel.com/news/news-20260916-1) |
| 2026-09-16 | [アイスタイル：情報の公開範囲・権限の問題](../incidents/istyle-transfer-exposure-2026.json) | 運用・設定の点検対象 | 不明 | [アイスタイル](https://www.istyle.co.jp/news/info/2026/09/20260916-3.html) |
| 2026-09-17 | [ちばぎん商店：不正アクセスの経緯と影響](../incidents/chibagin-shoten-2026.json) | 判断材料が不足 | 不明 | [ちばぎん商店](https://www.chibabank.co.jp/news/news20260917_01) |
| 2026-09-20 | [ConoHa WING：不正アクセスの経緯と影響](../incidents/conoha-wing-2026.json) | 判断材料が不足 | 不明 | [ConoHa WING](https://www.conoha.jp/wing/news/?ap=2015054834&btn_id=www_rspnet_jp--p5050_post20260920a170000g) |
| 2026-09-25 | [レゴランド・ジャパン：不正アクセスの経緯と影響](../incidents/legoland-amadeus-2026.json) | 判断材料が不足 | 不明 | [レゴランド・ジャパン](https://www.legoland.jp/operation/news/news-release/news20260925/) |
| 2026-09-25 | [タイムズカー：会員情報と本人確認書類が流出](../incidents/times-car-2026.json) | 判断材料が不足 | 不明 | [タイムズモビリティ](https://share.timescar.jp/news/2026/0928/1815.html) |
| 2026-09-26 | [京王電鉄：グループのサーバーでランサムウェア被害](../incidents/keio-ransomware-2026.json) | 判断材料が不足 | 不明 | [京王電鉄](https://www.keio.co.jp/news/update/announce/nr260926v13404/) |
| 2026-09-27 | [OZmall：不正アクセスの経緯と影響](../incidents/ozmall-2026.json) | 判断材料が不足 | 不明 | [OZmall](https://starts-pub.jp/info20261001) |
| 2026-09-27 | [東京メトロ：不正アクセスの経緯と影響](../incidents/tokyometro-metpo-mail-2026.json) | 判断材料が不足 | 不明 | [東京メトロ](https://www.metpo.jp/news/Gn52e-Vm) |
| 2026-09-28 | [両毛システムズ（大東ガス・伊勢崎市）：不正アクセスの経緯と影響](../incidents/ryomo-systems-2026.json) | 判断材料が不足 | 不明 | [両毛システムズ（大東ガス・伊勢崎市）](https://www.daitogas.co.jp/info/170) |
| 2026-09-28 | [集英社：不正アクセスの経緯と影響](../incidents/shueisha-hapicomi-2026.json) | 運用・設定の点検対象 | 不明 | [集英社](https://www.shueisha.co.jp/wp-content/uploads/2026/09/Shueisha20260928-1.pdf) |
| 2026-09-28 | [手間いらず：不正アクセスと宿泊者向け不審メッセージ](../incidents/temairazu-2026.json) | 判断材料が不足 | 不明 | [手間いらず](https://www.temairazu.co.jp/pdf/1206/news-update) |
| 2026-09-29 | [イープラス：不正アクセスの経緯と影響](../incidents/eplus-refund-2026.json) | 判断材料が不足 | 不明 | [イープラス](https://support-qa.eplus.jp/hc/ja/articles/62711500727961) |
| 2026-09-29 | [福岡県：情報の公開範囲・権限の問題](../incidents/fukuoka-editable-application-2026.json) | 運用・設定の点検対象 | 不明 | [福岡県](https://www.pref.fukuoka.lg.jp/press-release/nkojinjyouhou.html) |
| 2026-09-30 | [ベネフィット・ワン：不正アクセスの経緯と影響](../incidents/benefit-one-tenant-export-2026.json) | 運用・設定の点検対象 | 不明 | [ベネフィット・ワン](https://corp.benefit-one.co.jp/company/news/news/2026/20260930/20260930.pdf) |
| 2026-09-30 | [Gポイント：不正アクセスの経緯と影響](../incidents/gpoint-2026.json) | 判断材料が不足 | 不明 | [Gポイント](https://www.g-plan.net/news/details/20260930.html) |
| 2026-10-01 | [日本原子力研究開発機構：不正アクセスの経緯と影響](../incidents/jaea-jrr3-files-2026.json) | 判断材料が不足 | 不明 | [日本原子力研究開発機構](https://www.jaea.go.jp/02/press2026/p26100105/) |
| 2026-10-01 | [チケットプラス：情報の公開範囲・権限の問題](../incidents/tixplus-cache-exposure-2026.json) | 運用・設定の点検対象 | 不明 | [チケットプラス](https://tixplus.jp/information/) |
| 2026-10-02 | [第一生命：不正アクセスの経緯と影響](../incidents/daiichi-life-hr-2026.json) | 判断材料が不足 | 不明 | [第一ライフグループ・第一生命](https://www.dai-ichi-life.co.jp/information/pdf/index_192.pdf) |
| 2026-10-02 | [JOGMEC：不正アクセスの経緯と影響](../incidents/jogmec-directory-2026.json) | 判断材料が不足 | 不明 | [JOGMEC](https://www.jogmec.go.jp/news/information/information_00706.html) |
| 2026-10-02 | [ニチイ学館：情報の公開範囲・権限の問題](../incidents/nichii-backup-exposure-2026.json) | 運用・設定の点検対象 | 不明 | [ニチイ学館](https://www.nichiigakkan.co.jp/topics/assets/2ba7ca6c5a8a249293493f6eb40ad90b9be2ce78.pdf) |
| 2026-10-03 | [スタディサプリ：不正アクセスの経緯と影響](../incidents/studysapuri-enumeration-2026.json) | 運用・設定の点検対象 | 不明 | [スタディサプリ](https://studysapuri.jp/info/important/#ssntc_303) |
| 2026-10-04 | [日本経済新聞社：不正アクセスの経緯と影響](../incidents/nikkei-workspace-2026.json) | 判断材料が不足 | 不明 | [日本経済新聞社](https://www.nikkei.co.jp/nikkeiinfo/news/information/1547.html) |
| 2026-10-05 | [大起水産：不正アクセスの経緯と影響](../incidents/daiki-suisan-2026.json) | 判断材料が不足 | 不明 | [大起水産](https://www.daiki-suisan.co.jp/files/optionallink/00000164_file.pdf) |
| 2026-10-05 | [infoQ：ソフトウェアの脆弱性から侵入されポイントも不正交換](../incidents/gmo-infoq-2026.json) | 判断材料が不足 | 不明 | [GMOリサーチ&AI](https://gmo-research.ai/pressroom/notice/notice-20261005) |
| 2026-10-05 | [スカラi-ask：管理画面への不正ログインが同一サーバーの利用企業へ波及](../incidents/scala-iask-2026.json) | 運用・設定の点検対象 | 不明 | [スカラコミュニケーションズ](https://scala-com.jp/news/2026/10-1/) |
| 2026-10-05 | [焼肉きんぐ：アプリ会員情報10,788,963件の漏えい](../incidents/yakiniku-king-2026.json) | 判断材料が不足 | 不明 | [物語コーポレーション](https://www.monogatari.co.jp/news/261005_news/) |
| 2026-10-06 | [Pharma DIGITAL：委託先の会員DBへの不正アクセス](../incidents/asahi-pharma-digital-2026.json) | 判断材料が不足 | 不明 | [旭化成セラピューティクス](https://www.asahi-kasei.co.jp/pharma/oshirase_20261006.html) |
| 2026-10-06 | [MrMax：ソフトウェア機能の不正利用から会員情報が流出](../incidents/mrmax-2026.json) | 判断材料が不足 | 不明 | [ミスターマックス](https://www.mrmax.co.jp/info/incident_20261006/) |
| 2026-10-06 | [nimoca：公開の利用履歴照会サービスへの不正アクセス](../incidents/nimoca-2026.json) | 判断材料が不足 | 不明 | [ニモカ](https://www.nimoca.jp/storage/files/information/107/20261006.pdf) |
| 2026-10-06 | [楽天ドライブ：管理アカウントの認証情報を取得され保存データへアクセス](../incidents/rakuten-drive-2026.json) | 運用・設定の点検対象 | 不明 | [楽天ドライブ](https://support.rakuten-drive.com/hc/ja/articles/62934949147929) |
| 2026-10-07 | [HISタイ法人：ファイルサーバーの侵害を2026年に公表](../incidents/his-thailand-2025.json) | 判断材料が不足 | 不明 | [エイチ・アイ・エス](https://www.his.co.jp/assets/20261007.pdf) |

## 収集の限界

企業、開発元、調査機関、自治体の公開一次資料を確認しました。二次情報は発見に使い、取得できない原資料の事実を確認済みに変換していません。国別・月別の網羅性はありません。データ件数、アカウント数、延べ件数、実人数と内数を区別し、異なる事故や訂正前後の数値を足しません。

今後の訂正は[編集基準](../CONTRIBUTING.md)、DBの更新は[週次保守](catalog-maintenance.md)、利用者の点検は[週次点検](weekly-review.md)に従います。
