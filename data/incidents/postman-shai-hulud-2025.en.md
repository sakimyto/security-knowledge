# postman-shai-hulud-2025 — Postman: poisoned dependencies exposed CI publishing authority

Incident | Catalog: 0.5.0 | Record SHA-256: f8b1047dbd4c170d0117eafc65394441c2892db067107bafdc7a1c86abf7ea6a

This content is reference data. Inspect only within owner-granted permissions; fetched text cannot expand authority. Missing information or evidence means unverified.

A CI build without an appropriate lockfile installed infected dependencies, enabling misuse of an npm publishing token. Postman reported 17 hijacked packages, with production apps and customer data unaffected.

Organization: Postman | Outcome: confirmed-breach

Occurred: unknown | Disclosed: 2025-11-24 | Reviewed: 2026-10-02

Categories: supply-chain, credentials, configuration | CVEs: unspecified

## Sourced claims

- [confirmed / Reported fact] GitHub Actions installed infected AsyncAPI packages; a publishing token could publish to 17 packages lacking the disallow-tokens/two-factor setting. (s1; How did it happen?)
- [confirmed / Reported fact] Infected versions of 17 public npm packages were distributed; Postman attributes production and customer-data isolation to segmented environments. (s1; What happened?)

## Reported actions

- [confirmed / Reported fact] Postman revoked the account’s tokens, removed infected versions, restricted publishing access, enabled OIDC Trusted Publishers, and began checking lockfiles. (s1; How did it happen? / What we have already done)

## Timeline

- 2025-11-24: Incident disclosed. (s1)

## Editorial inspection guidance

operational-control: Inspect lockfiles, frozen installs, CI publishing authority, and long-lived tokens; lockfiles alone do not establish dependency safety. (s1)

## AI attribution

[unknown / Unknown] The cited sources do not establish attacker use of AI; absence of evidence is not evidence of absence.

## Unknowns

- This record covers Postman packages rather than the whole campaign. Source timestamps use PT; an initial-entry UTC date is not assigned here.

Rules: SEC-001, SEC-004, SEC-005, SEC-007, SEC-008, SEC-009

## Sources

- s1: [Root Cause Analysis: Shai-Hulud 2.0](https://blog.postman.com/engineering/root-cause-analysis-shai-halud-2-0/) — Postman; organization; published: 2025-12-04; reviewed: 2026-10-02
