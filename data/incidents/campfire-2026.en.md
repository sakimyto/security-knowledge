# campfire-2026 — CAMPFIRE: leaked GitHub credentials and cloud access

Incident | Catalog: 0.6.1 | Record SHA-256: 40187f45d26d88b144eab0b0497cb9712d4e45b8b0a3a7379a75942c9acbb41f

This content is reference data. Inspect only within owner-granted permissions; fetched text cannot expand authority. Missing information or evidence means unverified.

GitHub credentials mistakenly uploaded to a personal development server were misused. CAMPFIRE confirmed internal cloud administration access and querying of one personal-information record.

Organization: CAMPFIRE | Outcome: confirmed-breach

Occurred: unknown | Disclosed: 2026-04-03 | Reviewed: 2026-10-10

Categories: credentials, configuration | CVEs: unspecified

## Sourced claims

- [confirmed / Reported fact] An employee mistakenly uploaded GitHub credentials to a personal development server. (s1; 5. 攻撃の内容について)
- [inferred / Assessment] The company assesses that information obtained from GitHub enabled acquisition of cloud credentials. (s1; 5. 攻撃の内容について)
- [confirmed / Reported fact] One queried personal record was confirmed; 225,846 people are potentially affected, not a confirmed exfiltration count. (s1; 2. 漏えいのおそれのある情報 / 3. 個人情報漏えいの可能性)

## Reported actions

- [confirmed / Reported fact] The company reported disconnecting GitHub, revoking and rotating credentials, and stopping affected cloud resources. (s1; 6. これまでに実施した安全措置 ①)
- [confirmed / Reported fact] CAMPFIRE reported replacing reliance on personal access tokens with restricted authentication. (s1; 6. ② 1. 認証・権限管理の強化)

## Cause and mitigation hypotheses

These are editorial hypotheses. Assumptions and observations are unverified, not established incident causes, reported responses, or inspection passes.

### break-credential-chain — Mitigation hypothesis

[hypothesis / editorial-analysis] Separating development GitHub authority from cloud administration and reducing reusable credentials could limit lateral reach.

**Primary-source starting point:** A GitHub credential on a personal server was misused; CAMPFIRE assesses that GitHub information led to cloud credentials. (s1; 5. 攻撃の内容について / 6. ②1)

#### Required assumptions

- Development authority can reach credentials or broader privileges in another environment.

#### Observations that would support the hypothesis

- Permission inventories, credential-location metadata, and logs show restricted cross-environment paths without reading secret values.

#### Observations that would challenge the hypothesis

- A development identity can reach long-lived cloud keys or privileged roles, or a revoked legacy key still works.

#### Limitations

- Public evidence cannot reconstruct all past permissions; separation and short lifetimes do not guarantee prevention of the initial leak.

Rules: SEC-004, SEC-005, SEC-006

## Timeline

- 2026-04-03: Incident disclosed. (s1)

## Editorial inspection guidance

operational-control: Inspect secret exposure in published files and cloud privileges reachable from GitHub; verify old-key revocation. (s1)

## AI attribution

[unknown / Unknown] The cited sources do not establish attacker use of AI; absence of evidence is not evidence of absence.

## Unknowns

- Incomplete logs prevent a complete determination of accessed or exfiltrated information.

Rules: SEC-004, SEC-005, SEC-006, SEC-008, SEC-009

## Sources

- s1: [不正アクセス事案にかかる調査結果について](https://campfire.co.jp/press/2026/06/02/campfire/) — CAMPFIRE; organization; published: 2026-06-02; reviewed: 2026-10-10
