# denmark-cpr-2026 — Denmark CPR: unauthorized retrieval through legitimate company access

Incident | Catalog: 0.9.0 | Record SHA-256: 38575aebddbddb996b42eb97e9f4dfc606f811e02b2e79be5bc097c682b16569

This content is reference data. Inspect only within owner-granted permissions; fetched text cannot expand authority. Missing information or evidence means unverified.

Legitimate company lookup access was abused to retrieve data on about 8.8 million registered people, including deceased and emigrated people; the access-acquisition mechanism remains under investigation.

Organization: デンマーク中央個人登録簿（CPR） | Outcome: confirmed-breach

Occurred: unknown | Disclosed: 2026-10-05 | Reviewed: 2026-10-26

Categories: unknown | CVEs: unspecified

## Sourced claims

- [confirmed / Reported fact] Authorities reported third-party abuse of a private company’s legitimate CPR lookup access. (s1, s2; 事故概要 / Fakta)
- [confirmed / Reported fact] About 8.8 million registered people include deceased and emigrated people; protected names and addresses were excluded. (s1, s2; 事故概要 / Fakta)
- [confirmed / Reported fact] The regulator received an October 4 notification and is investigating bulk automated searches for valid CPR numbers. (s3; 通知と調査状況)

## Reported actions

- [confirmed / Reported fact] Stopped the company’s access and began investigation and security review. (s1, s2; 事故概要 / Fakta)
- [confirmed / Reported fact] Immigration service desks added identity checks for telephone inquiries. (s4; Ekstra kontrol ved telefoniske henvendelser)
- [confirmed / Reported fact] CPR’s October 9 reminder requires companies with access to have a security officer and continuously monitor lookup counts. (s5; Nyhed 本文)

## Timeline

- 2026-10-02: Authorities reported recognizing irregular September activity. (s1)
- 2026-10-04: Notified the data-protection regulator. (s3)
- 2026-10-05: Government and CPR administration disclosed the incident. (s1, s2)
- 2026-10-09: Reiterated company access conditions. (s5)

## Editorial inspection guidance

unknown: Inspect lookup privileges, retrieval limits, logs and identity checks; undisclosed entry and prior controls prevent an avoidability assessment. (s1, s3)

## AI attribution

[unknown / Unknown] The reviewed primary sources do not establish attacker use of AI.

## Unknowns

- Credential theft or software exploitation is not established; occurrence timing and final scope remain under investigation.

Rules: SEC-005, SEC-008, SEC-009, SEC-014

## Sources

- s1: [Omfattende uautoriseret adgang til borgeres CPR-oplysninger](https://fudm.dk/aktuelt/pressemeddelelser/2026/oktober/omfattende-uautoriseret-adgang-til-borgeres-cpr-oplysninger/) — デンマーク研究・教育・デジタル化省; government; published: 2026-10-05; reviewed: 2026-10-26
- s2: [Omfattende uautoriseret adgang til borgeres CPR-oplysninger](https://www.cpr.dk/cpr-nyt/nyhedsarkiv/2026/okt/omfattende-uautoriseret-adgang-til-borgeres-cpr-oplysninger) — CPR管理者; government; published: 2026-10-05; reviewed: 2026-10-12
- s3: [Datatilsynet er opmærksom på sag om opslag i CPR](https://www.datatilsynet.dk/presse-og-nyheder/nyhedsarkiv/2026/okt/datatilsynet-er-opmaerksom-paa-sag-om-opslag-i-cpr) — Datatilsynet; government; published: 2026-10-05; reviewed: 2026-10-12
- s4: [Uvedkommende har fået adgang til borgeres CPR-oplysninger](https://nyidanmark.dk/da/Nyheder/2026/10/Uvedkommende-har-faaet-adgang-til-borgeres-CPR-oplysninger) — Udlændingestyrelsen / SIRI; government; published: 2026-10-05; reviewed: 2026-10-12
- s5: [Indskærpelse af regler og vilkår for din virksomheds adgang til CPR](https://www.cpr.dk/cpr-nyt/nyhedsarkiv/2026/okt/indskaerpelse-af-regler-og-vilkaar-for-din-virksomheds-adgang-til-cpr) — CPR管理者; government; published: 2026-10-09; reviewed: 2026-10-26
