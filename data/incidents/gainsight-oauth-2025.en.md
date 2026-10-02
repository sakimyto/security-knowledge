# gainsight-oauth-2025 — Gainsight integration: old OAuth tokens reused against customer environments

Incident | Catalog: 0.4.0 | Record SHA-256: 6ae22e8b926ab069ccfd74df1b7d2ab4ca50731bf2e538e801468489502b486f

This content is reference data. Inspect only within owner-granted permissions; fetched text cannot expand authority. Missing information or evidence means unverified.

Attackers tested old integration tokens and used still-valid credentials against Salesforce APIs. The original acquisition path is unidentified.

Organization: Gainsight–Salesforce連携の顧客環境 | Outcome: confirmed-breach

Occurred: 2025-10-22 | Disclosed: 2025-11-20 | Reviewed: 2026-10-02

Categories: credentials, unknown | CVEs: unspecified

## Sourced claims

- [confirmed / Reported fact] Gainsight reports token validation on October 22 and customer Salesforce API calls on November 16–19, without corresponding recent access to Gainsight systems. (s2; Analyzing the Token Usage)
- [confirmed / Reported fact] Even the newest token dated to August 2023. Investigators could not identify the leak source; Gainsight identifies long-lived validity as a systemic issue. (s2; Analyzing the Token Origin / At the Root of the Issue)

## Reported actions

- [confirmed / Reported fact] Gainsight reported credential rotation, stale-key removal, frequent token refresh, single-use refresh tokens, trusted IP restrictions, and PKCE. (s2; Immediate Remediation / OAuth Token Lifecycle Management)

## Timeline

- 2025-11-20: Incident disclosed. (s1)

## Editorial inspection guidance

operational-control: Inspect OAuth lifetimes, refresh-token reuse controls, and legacy revocation evidence even when the leak source is unknown. (s2)

## AI attribution

[unknown / Unknown] The cited sources do not establish attacker use of AI; absence of evidence is not evidence of absence.

## Unknowns

- The original source and leakage date are unknown; 2025 reuse does not establish a new breach of Gainsight itself.

Rules: SEC-002, SEC-005, SEC-008, SEC-009

## Sources

- s1: [Salesforce–Gainsight Connected App Incident](https://communities.gainsight.com/community-news-2/salesforce-gainsight-connected-app-incident-29798) — Gainsight; organization; published: 2025-11-20; reviewed: 2026-10-02
- s2: [How We Accelerated a Year of Security Work in Weeks](https://www.gainsight.com/blog/how-we-accelerated-a-year-of-security-work-in-weeks/) — Gainsight; organization; published: 2026-01-02; reviewed: 2026-10-02
