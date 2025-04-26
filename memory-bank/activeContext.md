# Active Context: Portfolio Template Analysis

## 1. Current Focus

*   Resolving the issue where the `/teacherZero` route renders the application's custom 404 page (`not-found.tsx`) instead of the intended landing page content.

## 2. Recent Changes

*   Created `memory-bank/currentTask.md` to track the TeacherZero integration task.
*   Renamed `src/app/teacherzero` to `src/app/teacherZero` to match the desired URL casing.
*   Stopped the dev server, cleared the `.next` cache, and restarted the server to resolve build conflicts caused by the rename on a case-insensitive filesystem.
*   Analyzed `src/app/teacherZero/page.tsx` (found OK).
*   Analyzed `src/app/teacherZero/layout.tsx` (found and fixed incorrect `<html>`/`<body>` tags).
*   Analyzed `src/app/layout.tsx` (identified `<RouteGuard>` as potentially relevant).
*   Analyzed `src/components/RouteGuard.tsx` (identified it as the cause of the 404 rendering).
*   Analyzed `src/app/resources/index.ts` and `src/app/resources/config.js` (located the `routes` object).
*   **Fix Applied:** Added `"/teacherZero": true` to the `routes` object in `src/app/resources/config.js` to allow `RouteGuard` to permit access.

## 3. Next Steps

*   Ask the user to verify if `http://localhost:3000/teacherZero` now renders the correct landing page content.
*   If successful, conclude the task. If not, further investigation is needed.

## 4. Active Decisions & Considerations

*   Prioritizing analysis of configuration and resource files (`config.js`, `content.js`) as they seem central to customization based on file names.
*   Need to confirm the exact styling mechanisms (SCSS Modules confirmed, No Tailwind, `once-ui` specifics are key).
*   Theming relies heavily on `data-*` attributes set in `layout.tsx` based on `config.js`.

## 5. Learnings & Insights

*   The project uses Next.js (App Router), TypeScript, React, SCSS Modules, and PostCSS. No Tailwind CSS.
*   Content is managed centrally in `src/app/resources/content.js` and separate `.mdx` files for blog/projects.
*   Configuration (theme, colors, effects) is managed centrally in `src/app/resources/config.js`.
*   Styling is driven by the `src/once-ui` library, using SCSS and design tokens.
*   Theming (dark/light, accent colors) is applied dynamically using `data-*` attributes on the `<html>` element, controlled by `config.js` via `layout.tsx`.
*   The accent color *definition* is changed in `config.js`. Applying it likely involves using CSS classes or component props provided by `once-ui`.

## 6. Important Patterns & Preferences

*   (To be identified during analysis)
