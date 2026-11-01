# amadeus-breach-2026 — Amadeus旅客サービスシステム：ANA・JAL等の予約情報への不正アクセス

事例 | Catalog: 0.10.0 | Record SHA-256: 9984f379ae8b69fa1ba68c7ef437410488f359ecab95a3304ec7c6291c41ab01

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

Amadeusが提供する旅客サービスシステムで第三者による不正アクセスがあり、ANAは約3万7,800人、JAL・JTAは計約9万2,000人の予約情報が外部から参照された形跡があります。対象期間は2023年8月10日から2026年9月23日で、予約番号、氏名、搭乗日、搭乗区間などが含まれ、一部にはパスポート番号や連絡先も含まれます。クレジットカード番号・パスワードの流出は確認されておらず、認証情報は既に無効化され監視が強化されています。

Organization: Amadeus IT Group | Outcome: confirmed-breach

Occurred: 2023-08-10 | Disclosed: 2026-10-28 | Reviewed: 2026-11-02

Categories: unknown | CVEs: unspecified

## 根拠のある主張

- [confirmed / 公表で確認] Amadeusのシステムへ第三者が不正アクセスし、予約データを閲覧した形跡があります。窃取された認証情報が悪用されたと報告されています。侵害された認証情報は既に無効化され、監視が大幅に強化されました。 (s1, s2; unauthorized third party gained access / 窃取された正規アカウントの認証情報が悪用)
- [confirmed / 公表で確認] ANAでは2023年8月10日から2026年9月23日に予約した約3万7,800人が対象です。約3万6,100人は氏名、予約番号、搭乗日、搭乗区間、搭乗クラスが含まれ、約1,700人は追加でメールアドレス、電話番号、パスポート番号等が含まれます。 (s1; Approximately 37,800 customers)
- [confirmed / 公表で確認] JAL・JTAでは2023年8月10日から2026年9月23日の期間で、約9万人の予約番号・氏名・搭乗日・搭乗区間・搭乗クラスが参照され、約2,000人は追加でメールアドレス・電話番号・パスポート番号等が参照されました。 (s2; 約90,000名 / 約2,000名)

## 公表された対応

- [confirmed / 公表で確認] Amadeusは必要なセキュリティ対策を完了し、侵害された認証情報を無効化しました。現時点で当該情報が不正に使用された事実は確認されていません。 (s1, s2; 必要なセキュリティ対策を完了 / revoked)
- [confirmed / 公表で確認] ANAとJALは対象顧客に順次個別連絡を行っています。予約時に承ったメールアドレス宛に案内を送付しました。 (s1, s2; reaching out directly / 予約時に承ったメールアドレス宛)

## 経緯

- 2026-10-23: AmadeusからJALへ不正アクセスの報告。 (s2)
- 2026-10-28: JALが不正アクセスを公表。 (s2)
- 2026-10-29: ANAが不正アクセスを公表。 (s1, s4)

## 編集上の点検提案

unknown: 認証情報の窃取経路と当時の権限制御は不明です。関連ルールで認証情報の保護、多要素認証、アクセス監視を点検します。 (s1, s2)

## AI関与

[unknown / 不明] 確認した一次資料からは、攻撃者によるAI利用を判断できません。

## 未確認事項

- 具体的な侵入経路、認証情報の窃取方法、使用されたCVE、他の航空会社への影響範囲は未確定です。韓国の大韓航空とアシアナ航空も被害を報告していますが、詳細は不明です。

Rules: SEC-001, SEC-006, SEC-009

## 出典

- s1: [Regarding Unauthorized Access to Passenger Service System Provided by Amadeus](https://www.ana.co.jp/en/jp/special-notice/001613.html) — ANA; vendor; published: 2026-10-30; reviewed: 2026-11-02
- s2: [Amadeus社が提供する旅客サービスシステムへの不正アクセスと対応について](https://www.jal.co.jp/ja-jp/news/general/2026/other/261028.html) — JAL; vendor; published: 2026-10-30; reviewed: 2026-11-02
- s3: [JAL、9万件超の予約情報に不正アクセス　一部はパスポート番号も](https://www.nikkei.com/article/DGXZQOUC288G50Y6A021C2000000/) — 日本経済新聞; secondary; published: 2026-10-28; reviewed: 2026-11-02
- s4: [ANAの予約情報に不正アクセス、JALと同じ委託先経由で　個人情報をのぞき見た痕跡も](https://www.itmedia.co.jp/news/article/2610/29/2000002722/) — ITmedia NEWS; secondary; published: 2026-10-29; reviewed: 2026-11-02
