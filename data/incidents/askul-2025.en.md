# askul-2025 — ASKUL: access through an MFA exception

Incident | Catalog: 0.6.1 | Record SHA-256: dd4e201cf595e3657dda8f4b8b90eadee70252112457fe137712945bea0982ed

This content is reference data. Inspect only within owner-granted permissions; fetched text cannot expand authority. Missing information or evidence means unverified.

Stolen credentials for a contractor administrator account without MFA enabled a ransomware intrusion.

Organization: ASKUL | Outcome: confirmed-breach

Occurred: unknown | Disclosed: 2025-10-19 | Reviewed: 2026-10-10

Categories: credentials | CVEs: unspecified

## Sourced claims

- [confirmed / Reported fact] A contractor account was misused; the original credential leak remains unresolved. (s1; p.4 §6\(1\) 不正アクセス)
- [confirmed / Reported fact] Some servers lacked EDR and continuous monitoring; encrypted or deleted backups impeded recovery. (s1; p.3 §4-2 / p.4 §6\(2\)・\(3\))
- [confirmed / Reported fact] ASKUL reported that an OS update erased relevant contractor-PC logs, limiting the origin investigation. (s1; p.4 §6\(1\) 調査により判明した事項)

## Reported actions

- [confirmed / Reported fact] ASKUL reported credential resets, MFA rollout, and environment rebuilding. (s1; p.4 §5-2 / p.4–5 §7-1・7-2)

## Cause and mitigation hypotheses

These are editorial hypotheses. Assumptions and observations are unverified, not established incident causes, reported responses, or inspection passes.

### contractor-endpoint-origin — Cause hypothesis

[hypothesis / editorial-analysis] Acquisition of administrator credentials from the contractor endpoint remains a candidate origin.

**Primary-source starting point:** Account misuse was confirmed, but relevant contractor-PC logs are unavailable. (s1; p.4 §6\(1\))

#### Required assumptions

- The credentials were used or stored on the contractor endpoint before entry.

#### Observations that would support the hypothesis

- Preserved endpoint or EDR records show credential access or transfer before the first login.

#### Observations that would challenge the hypothesis

- A documented leak elsewhere and its timing contradict the endpoint-origin explanation.

#### Limitations

- Missing logs are not proof of compromise; phishing and other storage origins remain possible.

Rules: SEC-003, SEC-009

### mfa-exception-closure — Mitigation hypothesis

[hypothesis / editorial-analysis] Removing contractor MFA exceptions could reduce remote entry using passwords alone.

**Primary-source starting point:** The misused contractor administrator account had an MFA exception. (s1; p.4 §6\(1\))

#### Required assumptions

- Entry depends on password authentication rather than stolen sessions or another path.

#### Observations that would support the hypothesis

- IdP policies and logs show no contractor or emergency exception; a synthetic isolated test rejects password-only access.

#### Observations that would challenge the hypothesis

- Legacy or exempt access bypasses the extra factor, or a stolen session still grants access.

#### Limitations

- MFA alone does not prevent credential leaks, endpoint compromise, or backup destruction.

Rules: SEC-002, SEC-005

## Timeline

- 2025-10-19: Incident disclosed. (s1)

## Editorial inspection guidance

operational-control: Inspect MFA exceptions and contractor privileges, plus protected backups and restoration tests. (s1)

## AI attribution

[unknown / Unknown] The cited sources do not establish attacker use of AI; absence of evidence is not evidence of absence.

## Unknowns

- Credential theft origin is unresolved; the report found no evidence that the VPN vulnerability was exploited.

Rules: SEC-002, SEC-003, SEC-005, SEC-008, SEC-009, SEC-013

## Sources

- s1: [ランサムウェア攻撃の影響調査結果および安全性強化に向けた取り組みのご報告（第13報）](https://www.askullogist.co.jp/pdf/20251212.pdf) — ASKUL; organization; published: 2025-12-12; reviewed: 2026-10-10
