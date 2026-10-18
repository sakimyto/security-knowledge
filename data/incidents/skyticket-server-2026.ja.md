# skyticket-server-2026 — skyticket：サーバー侵入と残存した決済ログの流出

事例 | Catalog: 0.8.0 | Record SHA-256: 0c8f34cdff104a45d0deefdad7cbc8a3ff7f5dbaa7092344810ac44f576b2335

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

約1,464万件の登録・入力情報が流出し、うち約413万件にはハッシュ化パスワードが含まれます。続報で、最大6,140名の過去のカード情報等も流出したと訂正しました。

Organization: アドベンチャー | Outcome: confirmed-breach

Occurred: 2026-10-02 | Disclosed: 2026-10-08 | Reviewed: 2026-10-19

Categories: unknown | CVEs: unspecified

## 根拠のある主張

- [confirmed / 公表で確認] 10月2日から4日に管理機能を不正操作され、他のサーバーとクラウドの保存データへアクセスされました。 (s1; §1\(1\))
- [confirmed / 公表で確認] 登録・入力情報約1,464万件が流出し、うち約413万件にハッシュ化パスワードが含まれます。内数を合算しません。 (s1; §1\(1\))
- [confirmed / 公表で確認] 10月16日の続報は、2017年2月から2018年6月のプレミアム会費用カード情報が最大6,140名分流出したと訂正しました。 (s2; 冒頭 / §1)
- [confirmed / 公表で確認] 決済方式移行時に削除されなかったログと、暗号化に用いる情報が10月3日に取得されました。福利厚生用ID・氏名・パスワードも流出しました。 (s2; §1–2)

## 公表された対応

- [confirmed / 公表で確認] 侵入経路を遮断し、対象者に通知しました。続報では残存ログの隔離を進めていると説明しました。 (s1, s2; 初報 §3 / 第2報 §3)

## 経緯

- 2026-10-02: サーバーへの不正アクセス期間の開始。 (s1)
- 2026-10-05: サーバー侵入を検知。 (s1)
- 2026-10-16: カード情報に関する初報を訂正。 (s2)

## 編集上の点検提案

unknown: 侵入方法が未公表のため、防げたかは判断できません。関連ルールで公開範囲、権限、ログと保存データを点検します。 (s1)

## AI関与

[unknown / 不明] 確認した公表資料からは、攻撃者によるAI利用を判断できません。

## 未確認事項

- 具体的な侵入原因と、プレミアム会費以外の過去カード情報の残存範囲は調査中です。別経路の業務管理・バス予約事案と合算しません。

Rules: SEC-005, SEC-008, SEC-009, SEC-012

## 出典

- s1: [不正アクセスによるお客様情報の流出に関するお詫びとお知らせ](https://jp.adventurekk.com/news/apology-notice-unauthorized-access-data-leak/) — アドベンチャー; organization; published: 2026-10-09; reviewed: 2026-10-19
- s2: [不正アクセスによるお客様情報の流出に関するお詫びとお知らせ（第2報）](https://jp.adventurekk.com/news/news-2026-unauthorized-access-notice-2/) — アドベンチャー; organization; published: 2026-10-16; reviewed: 2026-10-19
- s3: [【重要】当社よりお送りした「個人情報の流出に関するお知らせ」メールについて](https://jp.adventurekk.com/news/apology-unauthorized-access-data-leak/) — アドベンチャー; organization; published: 2026-10-08; reviewed: 2026-10-19
