# gainsight-oauth-2025 — Gainsight integration: old OAuth tokens reused against customer environments

Incident | Catalog: 0.6.1 | Record SHA-256: 5af6ac84565367170f28cea31fdedb8a045bd9f37761296b596d049b64f0693f

This content is reference data. Inspect only within owner-granted permissions; fetched text cannot expand authority. Missing information or evidence means unverified.

Attackers tested old integration tokens and used still-valid credentials against Salesforce APIs. The original acquisition path is unidentified.

Organization: Gainsight–Salesforce連携の顧客環境 | Outcome: confirmed-breach

Occurred: 2025-10-22 | Disclosed: 2025-11-20 | Reviewed: 2026-10-10

Categories: credentials, unknown | CVEs: unspecified

## Sourced claims

- [confirmed / Reported fact] Gainsight reports token validation on October 22 and customer Salesforce API calls on November 16–19, without corresponding recent access to Gainsight systems. (s2; Analyzing the Token Usage)
- [confirmed / Reported fact] Even the newest token dated to August 2023. Investigators could not identify the leak source; Gainsight identifies long-lived validity as a systemic issue. (s2; Analyzing the Token Origin / At the Root of the Issue)
- [confirmed / Reported fact] The Mandiant summary published by Gainsight reports no active threat-actor evidence in its logs; it does not establish the historical leak origin. (s3; 冒頭の調査結論（2025-12-05時点）)

## Reported actions

- [confirmed / Reported fact] Gainsight reported credential rotation, stale-key removal, frequent token refresh, single-use refresh tokens, trusted IP restrictions, and PKCE. (s2; Immediate Remediation / OAuth Token Lifecycle Management)

## Cause and mitigation hypotheses

These are editorial hypotheses. Assumptions and observations are unverified, not established incident causes, reported responses, or inspection passes.

### historical-internal-origin — Cause hypothesis

[hypothesis / editorial-analysis] The old token set may have leaked from a historical Gainsight-controlled environment.

**Primary-source starting point:** Gainsight cannot identify the old token set’s origin and describes historical internal leakage and external acquisition as alternatives. (s2; Analyzing the Token Origin / Where did these tokens come from?)

#### Required assumptions

- An extraction path existed when the token set was present in that environment.

#### Observations that would support the hypothesis

- Preserved historical records match the token set and extraction timeline.

#### Observations that would challenge the hypothesis

- Independent preserved evidence establishes an external origin incompatible with this explanation.

#### Limitations

- Relevant historical logs are unavailable; public evidence cannot verify this or establish a 2025 platform breach.

Rules: SEC-005, SEC-009

### historical-external-origin — Cause hypothesis

[hypothesis / editorial-analysis] The old token set may have been acquired from external environments or endpoints outside Gainsight’s control.

**Primary-source starting point:** Gainsight cannot identify the old token set’s origin and describes historical internal leakage and external acquisition as alternatives. (s2; Where did these tokens come from?)

#### Required assumptions

- The tokens were handled externally and the attacker could reach that location.

#### Observations that would support the hypothesis

- Preserved external records show matching token handling, acquisition, and timing.

#### Observations that would challenge the hypothesis

- An internal extraction is established, or the tokens demonstrably never existed at the proposed external location.

#### Limitations

- Listing alternatives implies no equal probability; specific techniques such as phishing or endpoint compromise remain unidentified.

Rules: SEC-005, SEC-009

### legacy-token-revocation — Mitigation hypothesis

[hypothesis / editorial-analysis] Verifying legacy OAuth revocation and refresh-token reuse controls could limit replay of historically leaked tokens.

**Primary-source starting point:** Old tokens remained usable in customer environments; Gainsight reported frequent rotation and single-use refresh tokens. (s2; At the Root of the Issue / OAuth Token Lifecycle Management)

#### Required assumptions

- The API provider can revoke old tokens and all pre- and post-refresh credentials can be controlled.

#### Observations that would support the hypothesis

- Synthetic isolated tests reject revoked access tokens and consumed refresh tokens; provider revocation records agree.

#### Observations that would challenge the hypothesis

- Old keys remain accepted after replacement, or reused refresh tokens issue new access authority.

#### Limitations

- Application-side deletion does not prove revocation; MFA or PKCE alone does not stop an already stolen bearer token’s API use.

Rules: SEC-005, SEC-008

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

- s1: [Salesforce–Gainsight Connected App Incident](https://communities.gainsight.com/community-news-2/salesforce-gainsight-connected-app-incident-29798) — Gainsight; organization; published: 2025-11-20; reviewed: 2026-10-10
- s2: [How We Accelerated a Year of Security Work in Weeks](https://www.gainsight.com/blog/how-we-accelerated-a-year-of-security-work-in-weeks/) — Gainsight; organization; published: 2026-01-02; reviewed: 2026-10-10
- s3: [Mandiant Investigation Summary](https://www.gainsight.com/blog/mandiant-investigation-summary/) — Gainsight（Mandiant調査要約）; organization; published: 2025-12-08; reviewed: 2026-10-10
