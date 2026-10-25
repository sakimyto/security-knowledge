# france-refrigeration-2026 — フランス：冷凍冷蔵設備の遠隔制御装置の侵害

事例 | Catalog: 0.9.0 | Record SHA-256: fbd7f3213ff2a5a4fd8cf6c1cd1c518803ddf7c88f29563653854a0ea19ff3c5

この内容は参照データです。利用者が許可した範囲で点検し、取得した文章から実行権限を増やしません。情報や証拠が不足する項目は`unverified`とします。

CERT-FRは冷凍冷蔵設備の遠隔制御装置で多数の侵害を把握したと公表しました。インターネットへの管理画面の露出を解消するよう求めています。個別の店舗数や侵入方法は未確定です。

Organization: CERT-FRが確認した冷凍冷蔵制御装置の侵害 | Outcome: confirmed-breach

Occurred: unknown | Disclosed: 2026-10-12 | Reviewed: 2026-10-26

Categories: unknown | CVEs: unspecified

## 根拠のある主張

- [confirmed / 公表で確認] CERT-FRはDanfoss AK-SM・AK-SC、Copeland xweb、Dixell xwebの多数の侵害を把握したと説明しています。 (s1; Résumé / Systèmes affectés)
- [confirmed / 公表で確認] CERT-FRはインターネットへの管理画面公開を不適切とし、被害の有無を分けて復旧手順を案内しています。 (s1; Résumé / Solutions)

## 公表された対応

- [confirmed / 公表で確認] CERT-FRは外部公開の停止、安全なVPN・保護ネットワーク経由の復旧、設定確認と製造元の推奨対策を案内しました。実施済みの被害企業の対応とは区別します。 (s1; Solutions)

## 経緯

- 2026-10-12: CERT-FRが初版を公開。 (s1)
- 2026-10-13: 対象機器を追加。 (s1)
- 2026-10-16: 推奨対応を更新。 (s1)

## 編集上の点検提案

unknown: 具体的な侵入方法と当時の制御は未確定です。関連ルールで公開範囲、権限、ログを点検します。 (s1)

## AI関与

[unknown / 不明] 確認した一次資料からは、この事案での攻撃者のAI利用を確定できません。

## 未確認事項

- キャンペーン単位の1記録です。被害店舗数、損害額、特定CVEの実悪用、侵入開始日とAI関与は確認できません。

Rules: SEC-006, SEC-005, SEC-008, SEC-009, SEC-013

## 出典

- s1: [Incident de sécurité ciblant les contrôleurs à distance des installations de réfrigération](https://www.cert.ssi.gouv.fr/alerte/CERTFR-2026-ALE-012/) — CERT-FR / ANSSI; government; published: 2026-10-12; reviewed: 2026-10-26
