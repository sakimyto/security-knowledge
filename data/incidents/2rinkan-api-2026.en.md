# 2rinkan-api-2026 — 2りんかんイエローハット: unauthorized access and impact

Incident | Catalog: 0.6.1 | Record SHA-256: b23feebb0460c883d9d52b449f48c4c1ad2f0da3ce64ee7816bfdab4bc972590

This content is reference data. Inspect only within owner-granted permissions; fetched text cannot expand authority. Missing information or evidence means unverified.

The application API was abused to retrieve membership data; the specific authorization defect or vulnerability is undisclosed. Membership information for 3,179,454 people was leaked, revised from a maximum of 3,455,754. Separately managed payment data was excluded.

Organization: 2りんかんイエローハット | Outcome: confirmed-breach

Occurred: unknown | Disclosed: 2026-04-23 | Reviewed: 2026-10-09

Categories: unknown | CVEs: unspecified

## Sourced claims

- [confirmed / Reported fact] The application API was abused to retrieve membership data; the specific authorization defect or vulnerability is undisclosed. (s1; 6月19日最終報 §§1-3 / 4月23日第一報)
- [confirmed / Reported fact] Membership information for 3,179,454 people was leaked, revised from a maximum of 3,455,754. Separately managed payment data was excluded. (s1; 6月19日最終報 §§1-3 / 4月23日第一報)

## Reported actions

- [confirmed / Reported fact] Individual notification is complete; the suspended application is being rebuilt. Logout and password reset are planned on reopening. (s1; 6月19日最終報 §§1-3 / 4月23日第一報)

## Timeline

- 2026-04-23: Disclosure date established by the reviewed notice. (s1)

## Editorial inspection guidance

unknown: Undisclosed entry or patch timing prevents an avoidability assessment. Inspect privileges, retrieval logs, retention and deployed configuration using the linked rules. (s1)

## AI attribution

[unknown / Unknown] The reviewed disclosures do not establish attacker use of AI.

## Unknowns

- The API abuse is established; the notice does not establish a specific IDOR or SQL injection flaw. Revised records replace the original estimate.

Rules: SEC-005, SEC-008, SEC-009, SEC-012, SEC-014

## Sources

- s1: [2りんかんイエローハット：事故に関する公表資料](https://2rinkan.jp/annai/20260423/) — 2りんかんイエローハット; organization; published: unknown; reviewed: 2026-10-09
