# innovation-github-2026 — イノベーション: unauthorized access and impact

Incident | Catalog: 0.6.1 | Record SHA-256: 9b337c09cb817904742b3eb705f49ec243fecb0b58d575ba6dd4cb480edf08de

This content is reference data. Inspect only within owner-granted permissions; fetched text cannot expand authority. Missing information or evidence means unverified.

A GitHub access token was embedded in a configuration file, acquired and abused by a third party. The August 7 final notice confirms leakage for 62,691 people; personal data stored in repositories was a separate contributing factor. No production-database intrusion was found.

Organization: イノベーション | Outcome: confirmed-breach

Occurred: unknown | Disclosed: 2026-08-04 | Reviewed: 2026-10-09

Categories: credentials, configuration | CVEs: unspecified

## Sourced claims

- [confirmed / Reported fact] A GitHub access token was embedded in a configuration file, acquired and abused by a third party. (s1; 確定報 §§1-4)
- [confirmed / Reported fact] The August 7 final notice confirms leakage for 62,691 people; personal data stored in repositories was a separate contributing factor. No production-database intrusion was found. (s1; 確定報 §§1-4)

## Reported actions

- [confirmed / Reported fact] The token was revoked, permissions and issuance governed, and personal-data audits and detection implemented. (s1; 確定報 §§1-4)

## Timeline

- 2026-08-04: Disclosure date established by the reviewed notice. (s1)

## Editorial inspection guidance

operational-control: Inspect the disclosed configuration, authorization or operational issue. Verify applicability and retain evidence of behavior after remediation. (s1)

## AI attribution

[unknown / Unknown] The reviewed disclosures do not establish attacker use of AI.

## Unknowns

- Hardcoded repository secrets and stored personal data are reported. The precise account-entry route remains undisclosed.

Rules: SEC-004, SEC-005, SEC-007, SEC-008, SEC-009, SEC-012

## Sources

- s1: [イノベーション：事故に関する公表資料](https://www.innovation.co.jp/2026/08/github%e3%81%b8%e3%81%ae%e4%b8%8d%e6%ad%a3%e3%82%a2%e3%82%af%e3%82%bb%e3%82%b9%e3%81%ab%e9%96%a2%e3%81%99%e3%82%8b%e8%a9%b3%e7%b4%b0%e8%aa%bf%e6%9f%bb%e3%81%ae%e5%ae%8c%e4%ba%86%e3%81%8a%e3%82%88/) — イノベーション; organization; published: unknown; reviewed: 2026-10-09
