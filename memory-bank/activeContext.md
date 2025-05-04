# Active Context: Portfolio Template Analysis

## 1. Current Focus

*   Integrating Klaviyo form and tracking script into the TeacherZero English landing page.

## 2. Recent Changes

*   **Klaviyo Integration:**
    *   Added Klaviyo onsite JavaScript snippet to `src/app/layout.tsx`.
    *   Replaced the Google Form link in the Beta signup section of `src/app/teacherZero/components/TeacherZeroENContent.tsx` with the Klaviyo form embed div (`<div class="klaviyo-form-Tv7V5D"></div>`).
*   **MVLC Pages (Completed Previously):**
    *   Created legal compliance pages (`privacy-policy`, `terms-conditions`) with EN/PT versions.
    *   Inserted drafted legal text (requires user legal review).
    *   Updated `config.js` and `Footer.tsx` for routing and linking.

## 3. Next Steps

*   Verify the Klaviyo form displays correctly on the TeacherZero English page.
*   Verify the Klaviyo script is loaded (e.g., check browser network tools or Klaviyo dashboard).
*   Update `currentTask.md` (already done).

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
