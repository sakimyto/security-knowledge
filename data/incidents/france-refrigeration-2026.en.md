# france-refrigeration-2026 — France: compromises of remote refrigeration controllers

Incident | Catalog: 0.9.0 | Record SHA-256: fbd7f3213ff2a5a4fd8cf6c1cd1c518803ddf7c88f29563653854a0ea19ff3c5

This content is reference data. Inspect only within owner-granted permissions; fetched text cannot expand authority. Missing information or evidence means unverified.

CERT-FR reported numerous compromises of remote refrigeration controllers and urged removal of internet-exposed management interfaces. Store counts and exact intrusion methods are unresolved.

Organization: CERT-FRが確認した冷凍冷蔵制御装置の侵害 | Outcome: confirmed-breach

Occurred: unknown | Disclosed: 2026-10-12 | Reviewed: 2026-10-26

Categories: unknown | CVEs: unspecified

## Sourced claims

- [confirmed / Reported fact] CERT-FR reports numerous compromises involving Danfoss AK-SM/AK-SC, Copeland xweb and Dixell xweb controllers. (s1; Résumé / Systèmes affectés)
- [confirmed / Reported fact] CERT-FR warns against internet-exposed management interfaces and distinguishes recovery guidance for compromised and uncompromised units. (s1; Résumé / Solutions)

## Reported actions

- [confirmed / Reported fact] CERT-FR recommends removing public exposure, restoring access through protected networks/VPNs, reviewing configuration and applying vendor guidance; this is not a claim of completed victim remediation. (s1; Solutions)

## Timeline

- 2026-10-12: CERT-FR published the initial alert. (s1)
- 2026-10-13: Added other targeted equipment. (s1)
- 2026-10-16: Updated recommended actions. (s1)

## Editorial inspection guidance

unknown: The exact entry method and prior controls are unresolved. Inspect exposure, privileges and logs using the linked rules. (s1)

## AI attribution

[unknown / Unknown] The reviewed primary evidence does not establish attacker AI use in this incident.

## Unknowns

- This is one campaign-level record. Affected-store counts, losses, exploitation of specific CVEs, intrusion start and AI use are unconfirmed.

Rules: SEC-006, SEC-005, SEC-008, SEC-009, SEC-013

## Sources

- s1: [Incident de sécurité ciblant les contrôleurs à distance des installations de réfrigération](https://www.cert.ssi.gouv.fr/alerte/CERTFR-2026-ALE-012/) — CERT-FR / ANSSI; government; published: 2026-10-12; reviewed: 2026-10-26
