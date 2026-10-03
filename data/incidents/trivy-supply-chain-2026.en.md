# trivy-supply-chain-2026 — Trivy: residual credentials used to tamper with releases and actions

Incident | Catalog: 0.4.1 | Record SHA-256: cb35a6d0ed024d98b333585f5eb25ad4d4550664ccda998253132a9b849b8169

This content is reference data. Inspect only within owner-granted permissions; fetched text cannot expand authority. Missing information or evidence means unverified.

Aqua reports privileged-token theft through GitHub Actions misconfiguration, incomplete initial rotation, and renewed release tampering. Existing action tags were redirected to malicious commits.

Organization: Aqua Security / Trivy | Outcome: confirmed-breach

Occurred: unknown | Disclosed: 2026-03-20 | Reviewed: 2026-10-02

Categories: supply-chain, credentials, configuration | CVEs: unspecified

## Sourced claims

- [confirmed / Reported fact] Aqua describes late-February token theft, credentials remaining valid after March 1 rotation, and reuse for March 19 tampering. (s2; Attack Timeline)
- [confirmed / Reported fact] Malicious Trivy v0.69.4 and actions were distributed, including changed existing tags; Aqua warns that secrets accessible to affected runners must be considered exposed. (s2; What Happened / What Was Affected)

## Reported actions

- [confirmed / Reported fact] Aqua reported artifact removal, credential revocation and rotation, moving away from long-lived tokens, and strengthening CI and access controls. (s2; Ongoing Actions / Attack Timeline)

## Timeline

- 2026-03-20: Incident disclosed. (s1)

## Editorial inspection guidance

operational-control: Inspect verified commit pinning rather than tag names alone, and reconcile every old credential’s revocation with its consumers. (s2)

## AI attribution

[unknown / Unknown] The cited sources do not establish attacker use of AI; absence of evidence is not evidence of absence.

## Unknowns

- The exact late-February entry day is unknown. This record focuses on the March 19 recurrence; distribution counts are not victim-organization counts.

Rules: SEC-001, SEC-004, SEC-005, SEC-007, SEC-008, SEC-009

## Sources

- s1: [Trivy Security incident 2026-03-19](https://github.com/aquasecurity/trivy/discussions/10425) — Aqua Security / Trivy maintainers; vendor; published: 2026-03-20; reviewed: 2026-10-02
- s2: [Trivy supply chain attack: ongoing investigation and remediation](https://www.aquasec.com/blog/trivy-supply-chain-attack-what-you-need-to-know/) — Aqua Security; vendor; published: 2026-03-22; reviewed: 2026-10-02
