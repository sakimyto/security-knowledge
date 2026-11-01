# binance-breach-2026 — Binance：DevOpsエンジニアPC侵害から約63億ドル相当の暗号資産流出

事例 | Catalog: 0.10.0 | Record SHA-256: 4636817388996226b26e6105fde57863f85cf0c09da9c4074ee7ae5ff7cd1490

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

BinanceはDevOpsエンジニアのPCが侵害され、攻撃者がサービスコンテナ経由で不正出金を実行したと公表しました。推定63億ドル（約1兆円）相当の暗号資産が影響を受け、約30億ドルをオンチェーンで凍結しました。秘密鍵の流出証拠はなく、SAFUファンドと自社資金で全損失を補償すると表明しています。

Organization: Binance | Outcome: confirmed-breach

Occurred: 2026-10-29 | Disclosed: 2026-10-29 | Reviewed: 2026-11-02

Categories: implementation | CVEs: unspecified

## 根拠のある主張

- [confirmed / 公表で確認] 初期調査では、DevOpsエンジニアのPCが侵害され、攻撃者がサービスコンテナへアクセスし不正な出金取引を提出したと説明しています。ウォレットの秘密鍵流出の証拠は見つかっていません。 (s1, s2; Security Incident Update / Initial investigation suggests)
- [confirmed / 公表で確認] 影響総額は約63億ドルと推定されています。ブロックチェーンパートナーと協力して約30億ドル分の資産をオンチェーンで凍結しました。 (s1, s2; estimated total impact)
- [confirmed / 公表で確認] 11月1日時点で、流出した資産の約95%を自社資金で補填したと発表しました。SAFUファンドと自社資金で全損失を補償し、ユーザーに損失を転嫁しません。 (s3, s4; 95% replacement / cover all losses)

## 公表された対応

- [confirmed / 公表で確認] 予防措置として出金を一時停止し、影響を受けたアドレスの認可を無効化しました。法執行機関およびブロックチェーンインテリジェンスパートナーと連携して資金追跡と回収に取り組んでいます。 (s1; immediate precaution)
- [confirmed / 公表で確認] SAFUファンドと自社資金から全損失を補償すると表明しました。修復完了後に最新のProof of Reservesを公開する予定です。 (s1; cover all losses from SAFU)

## 経緯

- 2026-10-29: セキュリティインシデントを公表。出金を一時停止し、調査を開始。 (s1)
- 2026-11-01: ビットコインなど主要資産の出金を段階的に再開。流出資産の約95%を補填したと発表。 (s3, s4)

## 編集上の点検提案

unknown: DevOps環境の侵害経路と当時の認証・権限制御は不明です。技術的な詳細報告は調査完了後に公開予定です。 (s1)

## AI関与

[unknown / 不明] 確認した一次資料からは、攻撃者によるAI利用を判断できません。

## 未確認事項

- DevOps環境への具体的な侵入経路、使用されたCVE、攻撃者の特定情報は未確定です。技術的な詳細報告は調査完了後に公開予定です。

Rules: SEC-001, SEC-006, SEC-009

## 出典

- s1: [Security Incident Update \(2026-10-30\)](https://www.binance.com/en/support/announcement/detail/c5a8729a97ac486d963784d96c5642d7) — Binance; vendor; published: 2026-10-29; reviewed: 2026-11-02
- s2: [Binanceで資金流出、影響額は推定1兆円規模　DevOpsエンジニアのPC侵害か](https://xtech.nikkei.com/atcl/nxt/news/24/03451/) — 日経クロステック; secondary; published: 2026-10-30; reviewed: 2026-11-02
- s3: [バイナンスが出金再開へ､流出したトークン63億ドルのうち95％を補填…FBIは北朝鮮の関与を指摘](https://toyokeizai.net/articles/-/963196) — 東洋経済オンライン; secondary; published: 2026-11-01; reviewed: 2026-11-02
- s4: [バイナンス、63億ドルのハッキングを受けビットコインから段階的に暗号資産の引き出しを再開](https://www.coindesk.com/ja/markets/2026/11/01/binance-opens-crypto-withdrawals-in-phases-starting-with-bitcoin-following-usd6-3-billion-hack) — CoinDesk; secondary; published: 2026-11-01; reviewed: 2026-11-02
