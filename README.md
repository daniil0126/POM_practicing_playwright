# Playwright POM Practice

End-to-end test suite built to practice the Page Object Model with Playwright, against [practice.expandtesting.com](https://practice.expandtesting.com)'s login flow.

## What's covered

- Login flow: fills credentials, submits, asserts the redirect to `/secure`.
- Page objects (`src/pages/`) encapsulate locators and actions so the spec (`tests/login.spec.js`) only describes the scenario, not the DOM.
- A `pretest` script (`src/utils/make-consent-state.js`) pre-accepts the site's cookie consent banner and saves it as Playwright `storageState`, so tests don't have to dismiss it on every run.
- Runs against Chromium, Firefox and WebKit; CI workflow in `.github/workflows/playwright.yml` runs the suite on push.

## Run it

```bash
npm install
npx playwright install   # browser binaries
```

Create a `.env` with test credentials:

```env
LOGIN_NAME=...
LOGIN_PASSWORD=...
```

```bash
npm test
```

Playwright's HTML report is generated after the run (`npx playwright show-report`).

## Why

Practicing the Page Object Model pattern and Playwright's auto-waiting/locator API on a real (if small) login flow, plus wiring up CI so the suite runs on every push instead of only locally.
