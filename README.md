# React Kanban App

This is a simple Kanban board application built with React. The app allows users to manage tasks across three different states: TODO, In Progress, and Done.

## Project Structure

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd react-kanban-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Features

- Account Registration 
- Basic AI interaction to generate kahnbahn cards
- Ability order cards in the board
 

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features you would like to add.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## CI/CD Pipeline (simple overview)

This project now includes a simple CI and CD pipeline using GitHub Actions. The workflows are in `.github/workflows/`.

Pipeline points (clear mapped names used in the workflow steps):

- "1 - Type Check (typecheck)": runs `npm run typecheck` — verifies TypeScript types.
- "2 - Tests (test:ci)": runs `npm run test:ci` — runs the test suite in CI mode.
- "3 - Build (build)": runs `npm run build` — produces the production-ready `build/` folder.
- "Upload build artifact": uploads the `build/` folder as `build-artifact` (used by CI).
- "3 - Simulated Deploy": a placeholder deploy step used by the CD workflow (replace with a real deploy action for your host).

Files added:

- `.github/workflows/ci.yml` — runs on push and pull requests (and can be run manually). Performs install, typecheck, tests, build, then uploads the build artifact.
- `.github/workflows/cd.yml` — runs on push to `main` (and can be run manually). Performs install, typecheck, build, and then runs a simulated deploy step.

How to run a full test locally (fast check before pushing):

1. From the project root, install dependencies:

```bash
npm ci
```

2. Run the full sequence locally (typecheck, tests in CI mode, build):

```bash
npm run typecheck
npm run test:ci
npm run build
```

If all commands complete without error you have effectively run the same steps the CI workflow runs.

How to run the workflows on GitHub (novice-friendly):

1. Commit the new workflow files and push to your repository:

```bash
git add .github/workflows
git commit -m "chore(ci): add CI and CD GitHub Actions workflows"
git push origin main
```

2. Open your repository on GitHub and go to the Actions tab. You should see the `CI Pipeline` and `CD Pipeline (Simulated Deploy)` workflows.

3. To test CI for a branch or PR: push a branch and either open a pull request or run the `CI Pipeline` manually via the Actions UI (there's a "Run workflow" button because `workflow_dispatch` is enabled).

4. To test CD: push to the `main` branch (or run the CD workflow manually). The CD workflow will run a build and then run the simulated deploy step.

Notes and next steps:

- The CD workflow currently simulates deployment. Replace the simulated deploy step with a real deployment action or script specific to your hosting provider (for example, GitHub Pages, Netlify, Vercel, S3 + CloudFront, etc.).
- If you want to see the artifacts from a successful CI run, open that workflow run in GitHub Actions and download the `build-artifact` from the run summary.

If you'd like, I can next wire up a real deployment target (GitHub Pages or Netlify) and add a small test to strengthen CI (for example, a Jest test for a component). Let me know which provider you'd prefer.

## Security & Scheduled Audits

Short summary:

- Current status: CI audit shows 2 moderate vulnerabilities originating from `react-scripts` -> `webpack-dev-server` (development tooling). High and critical issues were resolved during dependency maintenance, but these two moderate issues remain because they are transitive dev-dependencies of Create React App.
- Impact: these are development-only vulnerabilities and do not affect production bundles. They should be monitored and re-evaluated when upstream packages (notably `react-scripts`) release fixes.

What we do in this repo:

- We run a scheduled audit weekly in GitHub Actions. The audit produces an `audit.json` artifact attached to the workflow run so you can inspect the current vulnerability counts without running anything locally.
- We record the current decision to keep `react-scripts` (stable, well-supported) and accept the remaining development-only moderate advisories until upstream fixes or a migration away from CRA is performed.

How to review the audit locally:

1. Mirror the CI install and run the audit:

```bash
# remove local modules
rm -rf node_modules

# install exactly from lockfile (CI-like)
npm ci

# run audit and save JSON
npm audit --json > audit.json

# inspect summary (if you have jq):
jq '.metadata.vulnerabilities' audit.json
```

How to change the policy:

- If you prefer to remove the dev-only advisories, options are:
   - Migrate off `react-scripts` to a modern bundler (Vite) — recommended for long-term maintenance.
   - Eject Create React App and manually upgrade dev tooling — more work and less reversible.
   - Keep `react-scripts` and monitor for upstream fixes (current approach).

If you'd like, I can open a follow-up PR that migrates the project to Vite and removes the transitive dev vulnerabilities (this requires updating scripts and minor code adjustments).