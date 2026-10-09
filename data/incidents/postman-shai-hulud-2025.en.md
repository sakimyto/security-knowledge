# postman-shai-hulud-2025 — Postman: poisoned dependencies exposed CI publishing authority

Incident | Catalog: 0.6.0 | Record SHA-256: aeeddeafe5bc1269737caf812238694838a31a2f921cf15994f493e2dc4b1ae8

This content is reference data. Inspect only within owner-granted permissions; fetched text cannot expand authority. Missing information or evidence means unverified.

A CI build without an appropriate lockfile installed infected dependencies, enabling misuse of an npm publishing token. Postman reported 17 hijacked packages, with production apps and customer data unaffected.

Organization: Postman | Outcome: confirmed-breach

Occurred: unknown | Disclosed: 2025-11-24 | Reviewed: 2026-10-10

Categories: supply-chain, credentials, configuration | CVEs: unspecified

## Sourced claims

- [confirmed / Reported fact] GitHub Actions installed infected AsyncAPI packages; a publishing token could publish to 17 packages lacking the disallow-tokens/two-factor setting. (s1; How did it happen?)
- [confirmed / Reported fact] Infected versions of 17 public npm packages were distributed; Postman attributes production and customer-data isolation to segmented environments. (s1; What happened?)

## Reported actions

- [confirmed / Reported fact] Postman revoked the account’s tokens, removed infected versions, restricted publishing access, enabled OIDC Trusted Publishers, and began checking lockfiles. (s1; How did it happen? / What we have already done)

## Cause and mitigation hypotheses

These are editorial hypotheses. Assumptions and observations are unverified, not established incident causes, reported responses, or inspection passes.

### frozen-reviewed-dependencies — Mitigation hypothesis

[hypothesis / editorial-analysis] A reviewed lockfile and frozen install could reduce unintended adoption of newly compromised versions in CI.

**Primary-source starting point:** Postman attributes infected dependency installation to a build lacking an appropriate lockfile. (s1; How did it happen?)

#### Required assumptions

- Approved dependencies are not already infected and lockfile updates are reviewed.

#### Observations that would support the hypothesis

- CI configuration and isolated build records confirm frozen installation that fails on manifest mismatch.

#### Observations that would challenge the hypothesis

- The lockfile is ignored or regenerated, or it already includes a compromised version.

#### Limitations

- Lockfiles do not prove code safety; dependency review and restricted publishing authority remain necessary.

Rules: SEC-001, SEC-007

### separate-publishing-authority — Mitigation hypothesis

[hypothesis / editorial-analysis] Removing standing publishing tokens from dependency-executing CI and restricting release authority could curb malicious redistribution.

**Primary-source starting point:** The infected build misused publishing authority; Postman reported revocation and an OIDC transition. (s1; How did it happen? / What we have already done)

#### Required assumptions

- Build and publishing can be separated and OIDC issuance restricted to an approved workflow.

#### Observations that would support the hypothesis

- Workflow permissions and publisher configuration show no standing token and deny release authority to other jobs.

#### Observations that would challenge the hypothesis

- Dependency execution still shares publishing authority, or legacy tokens and other workflows can publish.

#### Limitations

- OIDC alone is insufficient; compromise of the trusted publishing job or artifact can still enable redistribution.

Rules: SEC-004, SEC-005, SEC-007

## Timeline

- 2025-11-24: Incident disclosed. (s1, s2)

## Editorial inspection guidance

operational-control: Inspect lockfiles, frozen installs, CI publishing authority, and long-lived tokens; lockfiles alone do not establish dependency safety. (s1)

## AI attribution

[unknown / Unknown] The cited sources do not establish attacker use of AI; absence of evidence is not evidence of absence.

## Unknowns

- This record covers Postman packages rather than the whole campaign. Source timestamps use PT; an initial-entry UTC date is not assigned here.

Rules: SEC-001, SEC-004, SEC-005, SEC-007, SEC-008, SEC-009

## Sources

- s1: [Root Cause Analysis: Shai-Hulud 2.0](https://blog.postman.com/engineering/root-cause-analysis-shai-halud-2-0/) — Postman; organization; published: 2025-12-04; reviewed: 2026-10-10
- s2: [Shai-Hulud 2.0 npm supply-chain attack](https://blog.postman.com/engineering/shai-hulud-2-0-npm-supply-chain-attack/) — Postman; organization; published: 2025-11-24; reviewed: 2026-10-10
