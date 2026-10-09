# forticloud-sso-2026 — FortiCloud SSO: abuse on fully patched devices

Incident | Catalog: 0.6.1 | Record SHA-256: 0a7f90420b23c4dfb973bdcaff05e36e1eb84dc5c20fa128b3a09de3ba9ff80b

This content is reference data. Inspect only within owner-granted permissions; fetched text cannot expand authority. Missing information or evidence means unverified.

Fortinet disclosed FortiCloud SSO abuse affecting fully patched FortiOS and attacker-created administrator accounts.

Organization: Fortinet / FortiCloud SSO users | Outcome: confirmed-breach

Occurred: unknown | Disclosed: 2026-01-22 | Reviewed: 2026-10-02

Categories: zero-day, implementation | CVEs: CVE-2026-24858

## Sourced claims

- [confirmed / Reported fact] Unauthorized SSO logins affected fully patched devices on January 22; the issue concerns FortiCloud SSO, not all third-party SAML IdPs. (s1; Update Jan 22 / Update Jan 28)
- [confirmed / Reported fact] The Fortinet-submitted CVE-2026-24858 describes FortiCloud SSO authentication bypass. (s2; Description / vendor references)

## Reported actions

- [confirmed / Reported fact] Fortinet reported disabling malicious cloud accounts, suspending SSO, and restricting connections to patched versions. (s1; Updates Jan 22–30)

## Timeline

- 2026-01-22: Incident disclosed. (s1)

## Editorial inspection guidance

pre-disclosure-exploitation: Exploitation preceded disclosure. Inspect FortiCloud SSO use and administrator creation in addition to patching. (s1)

## AI attribution

[unknown / Unknown] The cited sources do not establish attacker use of AI; absence of evidence is not evidence of absence.

## Unknowns

- Individual intrusion dates and impact are unknown; affected products and fixes require current vendor guidance.

Rules: SEC-001, SEC-002, SEC-005, SEC-006, SEC-008, SEC-009

## Sources

- s1: [Analysis of SSO abuse on FortiOS](https://www.fortinet.com/blog/psirt-blogs/analysis-of-sso-abuse-on-fortios) — Fortinet; vendor; published: 2026-01-22; reviewed: 2026-10-02
- s2: [CVE-2026-24858](https://nvd.nist.gov/vuln/detail/CVE-2026-24858) — NIST / Fortinet; government; published: unknown; reviewed: 2026-10-02
