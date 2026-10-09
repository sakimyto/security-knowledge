# weblife-oem-2026 — ウェブライフ: unauthorized access and impact

Incident | Catalog: 0.6.1 | Record SHA-256: 2749fc94c9cf16402df9563ad4de536747895378af9caf3faa2906f2f43908ab

This content is reference data. Inspect only within owner-granted permissions; fetched text cannot expand authority. Missing information or evidence means unverified.

A customer-management access-control defect enabled unauthorized activity from August 14 to 17. Up to 7,425 people were affected; the August 28 update ruled out exposure of names, addresses, phone numbers and other fields, while email exposure remains possible.

Organization: ウェブライフ | Outcome: confirmed-breach

Occurred: 2026-08-14 | Disclosed: 2026-08-18 | Reviewed: 2026-10-09

Categories: implementation | CVEs: unspecified

## Sourced claims

- [confirmed / Reported fact] A customer-management access-control defect enabled unauthorized activity from August 14 to 17. (s1; 初報 §§1-4 / 続報 §§2-4)
- [confirmed / Reported fact] Up to 7,425 people were affected; the August 28 update ruled out exposure of names, addresses, phone numbers and other fields, while email exposure remains possible. (s1; 初報 §§1-4 / 続報 §§2-4)

## Reported actions

- [confirmed / Reported fact] Access controls were fixed and the same retrieval path verified blocked. (s1; 初報 §§1-4 / 続報 §§2-4)

## Timeline

- 2026-08-14: Event date reported by the source. (s1)
- 2026-08-18: Disclosure date established by the reviewed notice. (s1)

## Editorial inspection guidance

operational-control: Inspect the disclosed configuration, authorization or operational issue. Verify applicability and retain evidence of behavior after remediation. (s1)

## AI attribution

[unknown / Unknown] The reviewed disclosures do not establish attacker use of AI.

## Unknowns

- The exact implementation defect and confirmed email extraction scope are undisclosed.

Rules: SEC-009, SEC-014

## Sources

- s1: [ウェブライフ：事故に関する公表資料](https://web-life.co.jp/news/6551/) — ウェブライフ; organization; published: unknown; reviewed: 2026-10-09
