# Active Context: Portfolio Template Analysis

## 1. Current Focus

*   Finalizing Minimal Viable Legal Compliance (MVLC) pages by inserting drafted text.

## 2. Recent Changes

*   Created legal compliance pages with placeholder content:
    - `src/app/legal/privacy-policy/page.tsx` (EN)
    - `src/app/legal/privacy-policy/pt/page.tsx` (PT)
    - `src/app/legal/terms-conditions/page.tsx` (EN)
    - `src/app/legal/terms-conditions/pt/page.tsx` (PT)
*   Added links between EN/PT versions within each page.
*   Updated `src/app/resources/config.js` to allow access to all four new legal routes.
*   Updated `src/components/Footer.tsx` to include dynamic links to the legal pages, switching between EN/PT based on the current path.
*   **Inserted drafted legal text (EN and PT) into the four respective pages, including user-provided contact details and jurisdiction.** (Requires legal review by user).

## 3. Next Steps

*   Confirm that all four legal pages render with the inserted text.
*   Confirm that footer links work correctly.
*   Remind user that the inserted text (especially PT translation) requires legal review.
*   Update `currentTask.md` to reflect completion of MVLC text insertion.

## 4. Active Decisions & Considerations

*   Used subdirectory-based localization (`/pt`) for legal pages, matching the TeacherZero and site-wide pattern.
*   Footer links dynamically detect locale using the current path.
*   Placeholder content is clearly marked for future legal text insertion.

## 5. Learnings & Insights

*   The project uses Next.js (App Router), TypeScript, React, SCSS Modules, and PostCSS. No Tailwind CSS.
*   Content is managed centrally in `src/app/resources/content.js` and separate `.mdx` files for blog/projects.
*   Configuration (theme, colors, effects) is managed centrally in `src/app/resources/config.js`.
*   Styling is driven by the `src/once-ui` library, using SCSS and design tokens.
*   Theming (dark/light, accent colors) is applied dynamically using `data-*` attributes on the `<html>` element, controlled by `config.js` via `layout.tsx`.
*   The accent color *definition* is changed in `config.js`. Applying it likely involves using CSS classes or component props provided by `once-ui`.

## 6. Important Patterns & Preferences

*   (To be identified during analysis)
