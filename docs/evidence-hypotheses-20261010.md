# 一次資料と仮説の追記

確認日：2026-10-10。v0.6.0では、国内4事例と海外2事例に、原因仮説4件・対策仮説7件を追加しました。136事例・16ルール、国内169候補の確認台帳を維持しています。

事実・公表された対応・編集者の仮説を分け、仮説には一次資料の根拠、成立条件、支持・反証に使う観測、判定の限界を付けます。原因やAI関与が不明な事例を、仮説だけで確認済みに変えません。

| 事例 | 確認する一次資料 | 追記の目的 |
| --- | --- | --- |
| [アスクル](../incidents/askul-2025.json) | [同社の調査結果PDF](https://www.askullogist.co.jp/pdf/20251212.pdf)、p.4 §6(1) | 委託先PCのログ欠落を記録し、端末からの資格情報流出という候補を確定事項から分ける |
| [CAMPFIRE](../incidents/campfire-2026.json) | [同社の調査結果](https://campfire.co.jp/press/2026/06/02/campfire/)、§5–7 | GitHubからクラウドへ到達する権限・資格情報の連鎖を点検へ結び付ける |
| [VOISING](../incidents/voising-bi-2026.json) | [同社の第4報](https://voising-official.com/news/1015)、§1・3 | 公開範囲と更新期限を組み合わせた対策を、条件と限界付きで示す |
| [nimoca](../incidents/nimoca-2026.json) | [同社の発表PDF](https://www.nimoca.jp/storage/files/information/107/20261006.pdf)、p.1 §2 | 自動メールを手掛かりに、正規機能の悪用という候補と認可の観測を示す |
| [Postman](../incidents/postman-shai-hulud-2025.json) | [同社の原因分析](https://blog.postman.com/engineering/root-cause-analysis-shai-halud-2-0/)、How did it happen? | 固定インストールと公開権限の分離を、異なる制御として点検する |
| [Gainsight連携](../incidents/gainsight-oauth-2025.json) | [同社の技術報告](https://www.gainsight.com/blog/how-we-accelerated-a-year-of-security-work-in-weeks/)、Where did these tokens come from? / [同社公表のMandiant調査要約](https://www.gainsight.com/blog/mandiant-investigation-summary/) | 過去の内部流出と外部環境からの取得を対立する候補として残し、旧トークンの失効を点検する |

今回の追記は選定した6事例だけです。他の130事例を再確認した更新ではありません。初報日と発生日は新しい資料で確認できた場合だけ変え、確認した出典の日付だけ更新します。未取得の資料や未確認の台帳項目を確認済みにしません。

検証では、形式・参照に加え、仮説の確定扱い、根拠の欠落、二次情報だけの根拠、重複ID、関連しないルール、不正フィールドを拒否することを確認します。日本語・英語の個別Markdownと全件テキストにも仮説と限界を出力し、JSON/JSONLとの一致を検証します。

v0.6.1では、アスクルの既存の被害説明と公表された対応の参照箇所を、PDFのp.3–5の実際の節番号へ訂正しました。内容・仮説・分類・件数は変えていません。
