# openai-mixpanel-2025 — Mixpanel：SMSを使うフィッシングと解析データの持ち出し

事例 | Catalog: 0.6.0 | Record SHA-256: 0b6f0fec769375ab00c2d6bb0b62379ea04ead5b1745d6db3490b0b8987d7cf5

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

MixpanelはSMSを使うフィッシングへの対応を公表し、OpenAIは委託先から利用者の解析データが持ち出されたと説明しました。OpenAIによると、パスワードやAPIキー、チャット内容は対象外です。

Organization: Mixpanel / OpenAI利用者の解析データ | Outcome: confirmed-breach

Occurred: unknown | Disclosed: 2025-11-26 | Reviewed: 2026-10-02

Categories: credentials, supply-chain | CVEs: unspecified

## 根拠のある主張

- [confirmed / 公表で確認] Mixpanelは11月8日にSMSを使うフィッシングを検知したと説明しています。OpenAIは、Mixpanelで解析データを含むデータセットが持ち出されたと公表しています。 (s1, s2; Mixpanel: introduction / OpenAI: What happened)
- [confirmed / 公表で確認] 氏名、メールアドレス、概略の位置情報などが対象です。OpenAIの12月19日追記では、一部のChatGPT利用者も対象に含むと明確化しています。APIキーや会話内容の流出とは区別します。 (s1; December 19 clarification / What this means for you)

## 公表された対応

- [confirmed / 公表で確認] Mixpanelはセッションの失効、資格情報の更新、認証・出力ログの調査を実施しました。OpenAIはMixpanelの本番利用を停止し、契約先の点検を拡大したと公表しました。 (s1, s2; Mixpanel: What we did in response / OpenAI: Our response)

## 経緯

- 2025-11-26: この事案を公表。 (s1)

## 編集上の点検提案

operational-control: SMSからの偽ログインとセッション失効の手順を点検します。解析先へ送る識別情報の必要性、取得・出力権限、保存期間も確認します。 (s1, s2)

## AI関与

[unknown / 不明] 参照した情報では、攻撃者によるAI利用は確認できません。AI不使用を意味しません。

## 未確認事項

- SMS経由の侵入の詳細、初回侵入日時、影響人数は参照資料から確定できません。11月8日と9日はそれぞれの公表元による検知・認知の日で、初回侵入日とは扱いません。

Rules: SEC-002, SEC-003, SEC-005, SEC-008, SEC-009, SEC-012

## 出典

- s1: [What to know about a recent Mixpanel security incident](https://openai.com/index/mixpanel-incident/) — OpenAI; organization; published: 2025-11-26; reviewed: 2026-10-02
- s2: [Our response to a recent security incident](https://mixpanel.com/blog/sms-security-incident/) — Mixpanel; organization; published: 2025-11-27; reviewed: 2026-10-02
