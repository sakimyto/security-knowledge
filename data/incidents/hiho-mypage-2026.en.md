# hiho-mypage-2026 — hi-ho: unauthorized customer login using information obtained through solicitation

Incident | Catalog: 0.9.0 | Record SHA-256: 3c6c37a3081a6965e25b582be577d1164ea9803c5a7f60f8013f04a4b51c061f

This content is reference data. Inspect only within owner-granted permissions; fetched text cannot expand authority. Missing information or evidence means unverified.

The company confirmed impersonation using solicited information, reported 38,509 affected contracts rather than people, and ended login using phone number, postal code and birth date.

Organization: ハイホー | Outcome: confirmed-breach

Occurred: unknown | Disclosed: 2026-10-08 | Reviewed: 2026-10-12

Categories: credentials | CVEs: unspecified

## Sourced claims

- [confirmed / Reported fact] Third parties obtained login information through calls and impersonated customers; other acquisition paths may exist. (s1; §2 発生した事象)
- [confirmed / Reported fact] The 38,509 count represents contracts, counting multiple contracts of one customer separately. (s1; §4 不正ログインの件数)
- [confirmed / Reported fact] System intrusion, vulnerability exploitation and secondary harm were not established at publication. (s1; §7 システムへの侵入および二次被害の状況)

## Reported actions

- [confirmed / Reported fact] Blocked suspicious sources, removed personal-detail login and began moving to stronger authentication. (s1; §5 本件の対応)

## Timeline

- 2026-10-08: Disclosed unauthorized logins and responses. (s1)

## Editorial inspection guidance

operational-control: Inspect authentication based on obtainable personal details, MFA and access logs; prior MFA coverage is undisclosed. (s1)

## AI attribution

[unknown / Unknown] The reviewed primary sources do not establish attacker use of AI.

## Unknowns

- Event and detection dates, other acquisition paths and full viewing scope are undisclosed; arrest-report counts are separate.

Rules: SEC-002, SEC-005, SEC-009, SEC-014

## Sources

- s1: [お客様情報への第三者によるアクセスが確認された事案に関するご報告](https://hi-ho.co.jp/%E3%80%90%E9%87%8D%E8%A6%81%E3%81%AA%E3%81%8A%E7%9F%A5%E3%82%89%E3%81%9B%E3%80%91%E3%81%8A%E5%AE%A2%E6%A7%98%E6%83%85%E5%A0%B1%E3%81%B8%E3%81%AE%E7%AC%AC%E4%B8%89%E8%80%85%E3%81%AB%E3%82%88%E3%82%8B) — ハイホー; organization; published: 2026-10-08; reviewed: 2026-10-12
