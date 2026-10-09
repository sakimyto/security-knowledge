# epark-peakmanager-2026 — EPARKリラク＆エステ: unauthorized access and impact

Incident | Catalog: 0.6.0 | Record SHA-256: 9467c1dd391fd00f133719c66693e4161e50e6fd9cbe15248ed6eaa210644c7b

This content is reference data. Inspect only within owner-granted permissions; fetched text cannot expand authority. Missing information or evidence means unverified.

Forensics confirmed database exfiltration followed by deletion; the entry method is withheld. The September 24 update revised about 33 million records to about 22.18 million after matching; an exact person count cannot be determined.

Organization: EPARKリラク＆エステ | Outcome: confirmed-breach

Occurred: unknown | Disclosed: 2026-07-31 | Reviewed: 2026-10-09

Categories: unknown | CVEs: unspecified

## Sourced claims

- [confirmed / Reported fact] Forensics confirmed database exfiltration followed by deletion; the entry method is withheld. (s1; 第2報 §§1-4)
- [confirmed / Reported fact] The September 24 update revised about 33 million records to about 22.18 million after matching; an exact person count cannot be determined. (s1; 第2報 §§1-4)

## Reported actions

- [confirmed / Reported fact] The deleted database was restored and information-management and security controls are being reviewed. (s1; 第2報 §§1-4)

## Timeline

- 2026-07-31: Disclosure date established by the reviewed notice. (s1)

## Editorial inspection guidance

unknown: Undisclosed entry or patch timing prevents an avoidability assessment. Inspect privileges, retrieval logs, retention and deployed configuration using the linked rules. (s1)

## AI attribution

[unknown / Unknown] The reviewed disclosures do not establish attacker use of AI.

## Unknowns

- The revised 22.18 million records replaces the 33 million estimate. Five free-text entries resembling expired card data are not verified payment credentials.

Rules: SEC-006, SEC-008, SEC-009, SEC-012, SEC-013

## Sources

- s1: [EPARKリラク＆エステ：事故に関する公表資料](https://www.epark-relax.co.jp/news/231) — EPARKリラク＆エステ; organization; published: unknown; reviewed: 2026-10-09
