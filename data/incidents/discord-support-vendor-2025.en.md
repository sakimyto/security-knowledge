# discord-support-vendor-2025 — Discord: support-provider compromise exposed ticket information

Incident | Catalog: 0.6.1 | Record SHA-256: 30b18dd1c522b297ee64df0dafca09e2a43a0b9575ad64e2a0560d34371c6726

This content is reference data. Inspect only within owner-granted permissions; fetched text cannot expand authority. Missing information or evidence means unverified.

Discord reported unauthorized access to support information through a provider compromise. About 70,000 users potentially had identity-document photos exposed; this is not a confirmed image-leak count.

Organization: Discord / 委託先のカスタマーサポート | Outcome: confirmed-breach

Occurred: unknown | Disclosed: 2025-10-03 | Reviewed: 2026-10-02

Categories: supply-chain, unknown | CVEs: unspecified

## Sourced claims

- [confirmed / Reported fact] Discord attributed the compromise to service provider 5CA and distinguished it from a breach of Discord itself. (s1; TL;DR / What happened?)
- [confirmed / Reported fact] Support data and some identity images were affected; Discord said other chats, passwords, and authentication data were not involved. (s1; What data was involved? / What data was not involved?)

## Reported actions

- [confirmed / Reported fact] Discord revoked provider access, engaged forensic specialists, and reported notifying affected users. (s1; TL;DR / What are we doing about this?)

## Timeline

- 2025-10-03: Incident disclosed. (s1)

## Editorial inspection guidance

unknown: Inspect provider ticket permissions, attachment access logs, and identity-image retention; this notice does not establish the initial entry technique. (s1)

## AI attribution

[unknown / Unknown] The cited sources do not establish attacker use of AI; absence of evidence is not evidence of absence.

## Unknowns

- Initial cause, specific vulnerabilities, and confirmed victim count are unresolved; provider attribution reflects Discord’s statement.

Rules: SEC-008, SEC-009, SEC-012

## Sources

- s1: [Update on a Security Incident Involving Third-Party Customer Service](https://discord.com/press-releases/update-on-security-incident-involving-third-party-customer-service) — Discord; organization; published: 2025-10-03; reviewed: 2026-10-02
