# Accessibility Baseline & Repository Architecture Audit

## 1. Audit Details

- **Website:** India Post
- **URL:** https://www.indiapost.gov.in/
- **Audit date:** 29 October 2026
- **Tool:** Google Chrome Lighthouse 13.5.0
- **Device:** Desktop
- **Audit scope:** Accessibility, browser best practices, SEO, and manual keyboard navigation.

## 2. Lighthouse Results

| Category | Score |
|---|---:|
| Accessibility | 100/100 |
| Best Practices | 77/100 |
| SEO | 100/100 |

The Accessibility score indicates that Lighthouse did not identify failing automated accessibility checks during this run. Automated results do not replace manual testing.

## 3. Manual Keyboard Test

- Tab: Focus moves between page elements.
- Shift + Tab: Focus moves backwards.
- Enter: Activates the focused element where supported.
- Header/menu: Keyboard opening behavior needs further verification.
- Overall result: Basic keyboard navigation works; menu behavior remains unverified.

## 4. Findings and Remediation Priorities

These are audit follow-up items, not claims of confirmed security vulnerabilities. Validate each item before treating it as a defect.

### Finding 1: Third-party cookie usage
- **Evidence:** Lighthouse Best Practices report mentioned 34 third-party cookies.
- **Priority:** Medium.
- **Recommendation:** Identify the services setting these cookies and remove unnecessary third-party dependencies. Review consent and privacy requirements.

### Finding 2: Content Security Policy (CSP)
- **Evidence:** Lighthouse displayed a recommendation to ensure CSP is effective against XSS.
- **Priority:** High — validate configuration.
- **Recommendation:** Review the site's Content Security Policy and adopt restrictive directives where compatible.

### Finding 3: Cross-Origin Opener Policy (COOP)
- **Evidence:** Lighthouse displayed a recommendation to ensure proper origin isolation with COOP.
- **Priority:** Medium — validate applicability.
- **Recommendation:** Review cross-origin isolation requirements and configure COOP where appropriate.

### Finding 4: Trusted Types
- **Evidence:** Lighthouse displayed a recommendation about mitigating DOM-based XSS with Trusted Types.
- **Priority:** Medium — validate applicability.
- **Recommendation:** Review DOM injection sinks and assess whether Trusted Types can be introduced safely.

### Finding 5: Keyboard access to the header/menu
- **Evidence:** During manual testing, Tab and Shift + Tab moved focus and Enter activated focused elements, but the menu did not visibly open during the initial attempt.
- **Priority:** Medium — further testing required.
- **Recommendation:** Confirm that the correct menu control receives focus. Test Enter and Space, visible focus indication, and keyboard operation before recording a confirmed defect.

## 5. Architecture Review

The companion repository uses a separated structure for client, server, documentation, and tests. This separation supports maintainability and future full-stack development.

```text
client/
server/
  src/
docs/
  evidence/
test/
README.md
package.json
```

Recommended improvements:
1. Keep frontend and backend responsibilities separate.
2. Document environment variables without committing secrets.
3. Add server tests and document how to run them.
4. Record audit evidence and remediation status.
5. Add setup instructions and dependency documentation.

## 6. Evidence

Screenshots should be saved in `docs/evidence/` and referenced here.

- `lighthouse-results.png` — Lighthouse category scores.
- `keyboard-navigation.png` — Manual keyboard test, if captured.

## 7. Limitations

This was a single desktop Lighthouse run and a preliminary manual keyboard test. No penetration test or comprehensive screen-reader audit was performed. The recommendations above require validation before being classified as confirmed defects.

## 8. Conclusion

The tested page received 100/100 for Accessibility and SEO and 77/100 for Best Practices. Basic keyboard focus movement was observed. Further checks are needed for menu operation and the security-related Lighthouse recommendations. This report distinguishes observed results from items requiring additional verification.