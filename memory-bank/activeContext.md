# Active Context: Portfolio Template Analysis

## 1. Current Focus

*   Initial analysis of the portfolio template structure and technology stack.
*   Identifying key files for configuration, content, and styling.
*   Understanding how to perform basic customizations, specifically changing text color to the accent color.

## 2. Recent Changes

*   Initialized the Memory Bank by creating core documentation files:
    *   `projectbrief.md`
    *   `productContext.md`
    *   `systemPatterns.md` (initial structure)
    *   `techContext.md` (initial structure)
    *   `activeContext.md` (this file)

## 3. Next Steps

*   Update `systemPatterns.md` and `techContext.md` with consolidated findings based on file analysis.
*   Investigate `src/once-ui/styles/index.scss` or `src/once-ui/tokens/index.scss` briefly to confirm how colors/accent are likely applied via CSS/SCSS.
*   Formulate the explanation and customization plan for the user using `plan_mode_respond`.

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
