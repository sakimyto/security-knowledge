# kindal-phishing-2026 — カインドオル: unauthorized access and impact

Incident | Catalog: 0.5.0 | Record SHA-256: ddd8f0650f26c8616c586bf663b8fbcefbe2a9026029ac80776c8cfc73412519

This content is reference data. Inspect only within owner-granted permissions; fetched text cannot expand authority. Missing information or evidence means unverified.

An employee entered staff credentials into a phishing site; the account lacked two-step authentication. Two bulk exports occurred on August 23, affecting 136,464 customers.

Organization: カインドオル | Outcome: confirmed-breach

Occurred: 2026-08-23 | Disclosed: 2026-08-28 | Reviewed: 2026-10-09

Categories: credentials | CVEs: unspecified

## Sourced claims

- [confirmed / Reported fact] An employee entered staff credentials into a phishing site; the account lacked two-step authentication. (s1; §§1-4,6)
- [confirmed / Reported fact] Two bulk exports occurred on August 23, affecting 136,464 customers. (s1; §§1-4,6)

## Reported actions

- [confirmed / Reported fact] The compromised account was deleted and two-step authentication required for all staff. (s1; §§1-4,6)

## Timeline

- 2026-08-23: Event date reported by the source. (s1)
- 2026-08-28: Disclosure date established by the reviewed notice. (s1)

## Editorial inspection guidance

operational-control: Inspect the disclosed configuration, authorization or operational issue. Verify applicability and retain evidence of behavior after remediation. (s1)

## AI attribution

[unknown / Unknown] The reviewed disclosures do not establish attacker use of AI.

## Unknowns

- Phishing, weak passwords and absent MFA are reported; the exact original compromise date and extraction completeness are undisclosed.

Rules: SEC-002, SEC-005, SEC-008, SEC-009

## Sources

- s1: [カインドオル：事故に関する公表資料](https://www.kind.co.jp/notice-20260828) — カインドオル; organization; published: unknown; reviewed: 2026-10-09
