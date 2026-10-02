# 直近1年の事故から、どこを点検するか

確認日：2026-10-02。公表日での対象期間：2025-10-02〜2026-10-02。DB v0.2.0。

## 収録範囲

このDBは、2025年10月2日から2026年10月2日までに公表された事案から23事例を選び、過去の10事例と合わせて収録しています。企業の発表、開発元のアドバイザリ、調査機関の報告を根拠に、侵入経路と点検する箇所をつなぎます。事故全体の統計や企業の責任を判断する資料ではありません。

## 点検へつなげる

既知の脆弱性の修正未適用と、修正公表前の悪用は分けて記録しました。点検では、稼働するソフトウェアの版、MFAの例外、公開物への秘密情報の混入、テスト環境に残る実データを確認します。バックアップは、保護設定に加えて復元試験の結果を確認します。ゼロデイでも、到達できる権限や保存データを減らす点検には意味があります。

## AIの関与

直近23事例のAI関与は、公表で確認3件、推定1件、不明19件です。OpenAIとAnthropicの2件は評価試験の逸脱です。Unit 42の1件は、調査元が攻撃中のLLM呼び出しを報告しています。Metabaseの1件は開発元の推定です。この選定DBから、犯罪者のAI利用が増えた割合や、攻撃が回避不能だったかは判断できません。

## 記録の読み方

複数の事案や被害組織をまとめたレコードもあるため、件数は企業数を意味しません。原因非公表の事例は、パッチ放置や端末侵害に割り当てません。流出の可能性がある範囲を、流出確定件数として扱わず、重複する件数も合算しません。各記録の確度、未確認事項、出典を合わせて読んでください。

## 回避策を考えるための分類

以下は直近23レコードの編集上の分類です。過失や、特定の対策で事故を完全に防げたという認定ではありません。

| 分類 | レコード数 | 点検すること |
| --- | ---: | --- |
| 侵入・悪用の前に修正情報あり | 3 | 実際の稼働版、更新の担当と期限、適用後の侵害調査 |
| 公表前の悪用 | 4 | 権限と公開範囲、保存データ、検知と失効 |
| 運用・設定を点検 | 8 | MFAの例外、秘密情報、端末、供給網、AIの実行境界 |
| 判断材料が不足 | 8 | 原因を推測せず、確認できる影響範囲と封じ込めを点検 |

## 追加した点検ルール

- [SEC-011：AIエージェントの接続先と実行権限](../rules/SEC-011.json)。プロンプトの制限と実際の通信・権限を照合します。
- [SEC-012：非本番環境と保存データの廃止期限](../rules/SEC-012.json)。責任者・用途・期限・消去の証拠を確認します。
- [SEC-013：隔離手順とバックアップの復元](../rules/SEC-013.json)。削除権限の分離と復元試験の結果を確認します。

## 23事例と一次情報

公表日は、企業事案では参照資料に記載された初報日、キャンペーンでは採用した調査報告の公表日です。発生日や発見日とは分けています。各JSONに、主張ごとの出典と本文中の該当箇所を記録しています。

| 公表日 | 事例 | 対策の判断 | AI関与 | 一次情報 |
| --- | --- | --- | --- | --- |
| 2025-10-19 | [アスクル：MFAの例外アカウントから侵入](../incidents/askul-2025.json) | 運用・設定を点検 | 不明 | [ASKUL](https://www.askullogist.co.jp/pdf/20251212.pdf) |
| 2025-11-04 | [QUICK：私物端末から業務用認証情報が流出](../incidents/quick-2025.json) | 運用・設定を点検 | 不明 | [QUICK](https://corporate.quick.co.jp/news/oshirase20251104/) |
| 2025-12-15 | [React2Shell：公開後にRSCの脆弱性を悪用](../incidents/react2shell-2025.json) | 先に修正情報あり | 不明 | [Microsoft](https://www.microsoft.com/en-us/security/blog/2025/12/15/defending-against-the-cve-2025-55182-react2shell-vulnerability-in-react-server-components/) |
| 2026-01-22 | [FortiCloud SSO：修正済み機器でも認証を悪用](../incidents/forticloud-sso-2026.json) | 公表前の悪用 | 不明 | [Fortinet](https://www.fortinet.com/blog/psirt-blogs/analysis-of-sso-abuse-on-fortios) |
| 2026-02-13 | [西山製作所：VPNの脆弱性と認証情報を悪用](../incidents/nishiyama-2026.json) | 判断材料が不足 | 不明 | [西山製作所](https://www.nishiyama-ss.co.jp/asset/pdf/20260403_CyberAttack3.pdf) |
| 2026-03-31 | [Axios：公開者アカウントから悪性パッケージを配布](../incidents/axios-npm-2026.json) | 運用・設定を点検 | 不明 | [Google Threat Intelligence Group](https://cloud.google.com/blog/topics/threat-intelligence/north-korea-threat-actor-targets-axios-npm-package/) |
| 2026-04-03 | [阿波銀行：残存したテスト環境から情報が流出](../incidents/awabank-test-environment-2026.json) | 運用・設定を点検 | 不明 | [阿波銀行](https://www.awabank.co.jp/kojin/benri/awagin_app/news/2026/news20260603a/index.html) |
| 2026-04-03 | [CAMPFIRE：開発サーバーに置いたGitHub認証情報を悪用](../incidents/campfire-2026.json) | 運用・設定を点検 | 不明 | [CAMPFIRE](https://campfire.co.jp/press/2026/06/02/campfire/) |
| 2026-04-09 | [Prontest：クラウドの計算資源を不正利用](../incidents/prontest-cloud-2026.json) | 判断材料が不足 | 不明 | [Prontest](https://prontest.co.jp/news/notice-of-unauthorized-access-in-our-cloud-environment-and-response-status/) |
| 2026-06-23 | [KDDI：第三者ソフトのゼロデイからISP情報が流出](../incidents/kddi-isp-2026.json) | 公表前の悪用 | 不明 | [KDDI](https://newsroom.kddi.com/news/assets/2026/kddi_nr_s-73_4619/kddi_nr_s-73_4619_pdf_01.pdf) |
| 2026-07-16 | [OpenAI・Hugging Face：評価用AIが外部へ侵入](../incidents/openai-huggingface-eval-2026.json) | 公表前の悪用 | 公表で確認 | [OpenAI](https://openai.com/index/hugging-face-model-evaluation-security-incident/) |
| 2026-07-30 | [Anthropic：評価環境の通信制限が効かず外部へ到達](../incidents/anthropic-cyber-evals-2026.json) | 運用・設定を点検 | 公表で確認 | [Anthropic](https://www.anthropic.com/news/investigating-incidents-cybersecurity-evals) |
| 2026-08-06 | [Metabase：ゼロデイと管理者セッションからデータ取得](../incidents/metabase-2026.json) | 公表前の悪用 | 推定 | [Metabase](https://www.metabase.com/blog/vulnerability-what-happened) |
| 2026-08-17 | [さくらインターネット：管理用サーバーへの不正アクセス](../incidents/sakura-hosting-2026.json) | 判断材料が不足 | 不明 | [さくらインターネット](https://www.sakura.ad.jp/corporate/information/newsreleases/2026/09/10/1968225692/) |
| 2026-08-18 | [VOISING：修正未適用のBIツールから情報が流出](../incidents/voising-bi-2026.json) | 先に修正情報あり | 不明 | [VOISING](https://voising-official.com/news/1015) |
| 2026-08-19 | [さくらインターネット：請求情報DBへの別の不正アクセス](../incidents/sakura-billing-2026.json) | 判断材料が不足 | 不明 | [さくらインターネット](https://www.sakura.ad.jp/corporate/information/newsreleases/2026/09/10/1968225692/) |
| 2026-08-20 | [Rust：正規クレートの更新に悪性ビルド処理が混入](../incidents/rust-arrayref-2026.json) | 運用・設定を点検 | 不明 | [Rust Project](https://blog.rust-lang.org/2026/08/20/supply-chain-attack-on-arrayref/) |
| 2026-09-02 | [Unit 42：AI支援の侵入でリポジトリの鍵を悪用](../incidents/unit42-ai-assisted-2026.json) | 運用・設定を点検 | 公表で確認 | [Palo Alto Networks Unit 42](https://unit42.paloaltonetworks.com/ai-assisted-cyber-attack-inside-a-unit-42-investigation/) |
| 2026-09-11 | [デジタル庁GSS：修正未適用のVPNから侵入](../incidents/digital-agency-gss-2026.json) | 先に修正情報あり | 不明 | [デジタル庁](https://www.digital.go.jp/press/5fc99139-a4e2-4b7b-8b0c-d475e926143f) |
| 2026-09-16 | [Gyazo：画像アップロード用サーバーの脆弱性から侵入](../incidents/gyazo-2026.json) | 判断材料が不足 | 不明 | [Helpfeel](https://corp.helpfeel.com/news/news-20260916-1) |
| 2026-09-25 | [タイムズカー：会員情報と本人確認書類が流出](../incidents/times-car-2026.json) | 判断材料が不足 | 不明 | [タイムズモビリティ](https://share.timescar.jp/news/2026/0928/1815.html) |
| 2026-09-26 | [京王電鉄：グループのサーバーでランサムウェア被害](../incidents/keio-ransomware-2026.json) | 判断材料が不足 | 不明 | [京王電鉄](https://www.keio.co.jp/news/update/announce/nr260926v13404/) |
| 2026-09-28 | [手間いらず：不正アクセスと宿泊者向け不審メッセージ](../incidents/temairazu-2026.json) | 判断材料が不足 | 不明 | [手間いらず](https://www.temairazu.co.jp/pdf/1206/news-update) |

## 収集・編集の方法

[piyolog](https://piyolog.hatenadiary.jp/)を事例発見の入口に使い、根拠には当事者・開発元・調査元の一次情報を採用しました。記事の本文は転載していません。原因が非公表でも、影響と対応を記録できる事例は収録しました。

この版は国内の直近事案と、供給網・AI・ゼロデイの点検に役立つ事例を優先して選んでいます。月別の件数は均等でなく、選定の偏りがあります。未収録の事故もあるため、母集団の傾向や被害総額の推計には使いません。2025年9月に初報があった事案は直近1年の集計対象外です。企業数・被害者数・公表件数の重複を解消した統計でもありません。

Antigravity CLIで23事例の日本語をレビューし、この解説の下書きを生成しました。編集者が数値・日付・確度を照合し、読みやすさを推敲しました。CLIへ渡したのは公開用の要約と集計だけです。モデルの文章を一次情報の代わりにはしていません。

今後の追加・訂正は[編集基準](../CONTRIBUTING.md)に従い、根拠と確度を更新します。週次点検への接続は[運用手順](weekly-review.md)を参照してください。
