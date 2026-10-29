# Accessibility Baseline & Repository Architecture Audit

A starter monorepo for RabTech Academy Task 02. It includes an audit worksheet, architecture notes, a small accessible feedback feature, and tests.

> **Evidence integrity:** The audit worksheet is intentionally marked `Pending verification`. Do not claim a Lighthouse result or website issue until you personally run the audit and capture evidence.

## Repository structure

```text
rabtech-task02-fullstack-audit/
├── client/
│   ├── index.html
│   ├── styles.css
│   └── app.js
├── server/
│   ├── package.json
│   └── src/
│       └── server.js
├── docs/
│   ├── accessibility-audit.md
│   ├── architecture.md
│   └── evidence/
│       └── README.md
├── test/
│   └── api.test.js
├── package.json
└── README.md
```

## Requirements

- Node.js 18 or newer
- npm

## Run locally

1. Open a terminal in the repository root.
2. Run `npm install`.
3. Run `npm start`.
4. Open `http://localhost:3000`.

The first vertical slice is an accessible feedback form: the client collects a message, sends it to the API, and displays a status message. This demo stores no personal data and does not persist submissions.

## Run tests

```bash
npm test
```

## Accessibility audit workflow

1. Choose one public-facing service website you are permitted to inspect.
2. Open it in Chrome, then open DevTools → Lighthouse.
3. Select **Accessibility** and run an audit. Save the report or take a screenshot that includes the page URL and score/findings.
4. Navigate the site using only `Tab`, `Shift+Tab`, `Enter`, `Space`, and arrow keys where appropriate. Record the exact page, control, observed behavior, and screenshot.
5. Add five **observed and evidenced** issues to `docs/accessibility-audit.md`. If you find fewer than five, test additional relevant pages; never invent issues.
6. Save screenshots/reports under `docs/evidence/` and reference each filename in the worksheet.

## Before submitting

- Replace all `Pending verification` placeholders with your actual observations.
- Add at least one Lighthouse screenshot/report and keyboard-test evidence.
- Ensure the repository is public and contains the requested files.
- Submit the public GitHub repository URL to the RabTech task.
