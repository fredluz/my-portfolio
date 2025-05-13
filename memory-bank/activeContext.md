# Active Context: Portfolio Template Analysis

## 1. Current Focus

*   Finalizing the YC application product link page, ensuring URL case-insensitivity.

## 2. Recent Changes

*   **YC Product Page URL Case-Insensitivity:**
    *   Updated `src/middleware.ts` to normalize the URL for `/products/YCombinator`, redirecting any case variations to the canonical path.
*   **YC Product Page Creation (Completed Previously):**
    *   Created `src/app/products/YCombinator/page.tsx`.
    *   The page includes a heading "Product for YCombinator" and a link "download teacherZero" with a placeholder href.
*   **Klaviyo Integration (Completed Previously):**
    *   Added Klaviyo onsite JavaScript snippet to `src/app/layout.tsx`.
    *   Replaced the Google Form link in the Beta signup section of `src/app/teacherZero/components/TeacherZeroENContent.tsx` with the Klaviyo form embed div (`<div class="klaviyo-form-Tv7V5D"></div>`).
*   **MVLC Pages (Completed Previously):**
    *   Created legal compliance pages (`privacy-policy`, `terms-conditions`) with EN/PT versions.
    *   Inserted drafted legal text (requires user legal review).
    *   Updated `config.js` and `Footer.tsx` for routing and linking.

## 3. Next Steps

*   Task complete. User to verify the new page at `/products/YCombinator` and its case-insensitivity.

## 4. Active Decisions & Considerations

*   Middleware (`src/middleware.ts`) is used to enforce canonical URLs and handle case-insensitivity for specific paths.
*   The new page `src/app/products/YCombinator/page.tsx` follows the Next.js App Router structure.
*   Used subdirectory-based localization (`/pt`) for legal pages, matching the TeacherZero and site-wide pattern.
*   Footer links dynamically detect locale using the current path.
*   Placeholder content is clearly marked for future legal text insertion.

## 5. Learnings & Insights

*   Next.js middleware can be used to normalize URLs, including handling case variations by redirecting to a canonical path.
*   The project uses Next.js (App Router), TypeScript, React, SCSS Modules, and PostCSS. No Tailwind CSS.
*   Content is managed centrally in `src/app/resources/content.js` and separate `.mdx` files for blog/projects.
*   Configuration (theme, colors, effects) is managed centrally in `src/app/resources/config.js`.
*   Styling is driven by the `src/once-ui` library, using SCSS and design tokens.
*   Theming (dark/light, accent colors) is applied dynamically using `data-*` attributes on the `<html>` element, controlled by `config.js` via `layout.tsx`.
*   The accent color *definition* is changed in `config.js`. Applying it likely involves using CSS classes or component props provided by `once-ui`.

## 6. Important Patterns & Preferences

*   New pages are created within the `src/app` directory, using a folder structure that maps to the desired URL path (e.g., `src/app/products/YCombinator/page.tsx` for `/products/YCombinator`).
*   URL normalization and case-insensitivity for specific routes are handled in `src/middleware.ts`.
