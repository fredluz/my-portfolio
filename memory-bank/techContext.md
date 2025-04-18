# Tech Context: Portfolio Template

## 1. Core Technologies

*   **Framework:** Next.js (v14.2.16, App Router confirmed) - React framework for SSR/SSG.
*   **Language:** TypeScript (v5).
*   **UI Library:** React (v18.3.1).
*   **Styling:**
    *   SCSS (`sass` v1.77.6 dependency) - CSS preprocessor.
    *   CSS Modules - For locally scoped component styles.
    *   **No Tailwind CSS.**
    *   `src/once-ui`: Core UI component library providing components and a global styling system based on SCSS variables/tokens and `data-*` attribute theming.
    *   PostCSS (`postcss` v8.4.39, `postcss-preset-env`, etc.) - For CSS processing (autoprefixer, custom media queries via `@csstools/postcss-global-data`).
*   **Package Manager:** npm.
*   **Linting/Formatting:** ESLint, Biome (`biome.json`).
*   **Content:** MDX (`@mdx-js/loader`, `@next/mdx`, `next-mdx-remote`) for rich content in blog/projects, combined with JavaScript objects (`content.js`).

## 2. Development Setup

*   **Installation:** `npm install` (based on `package.json`).
*   **Running Locally:** `npm run dev` (confirmed in `package.json`).
*   **Building for Production:** `npm run build` (confirmed in `package.json`).

## 3. Technical Constraints

*   Requires Node.js and npm installed.
*   Customization is primarily managed through `config.js` (styling/behavior) and `content.js` / `.mdx` files (text/data). Understanding the `once-ui` component props and CSS classes is necessary for fine-grained styling adjustments.

## 4. Key Dependencies (Confirmed via `package.json`)

*   `next`: ^14.2.16
*   `react`: ^18.3.1
*   `react-dom`: ^18.3.1
*   `typescript`: ^5
*   `sass`: ^1.77.6
*   `postcss`: ^8.4.39
*   `@next/mdx`: ^14.2.16
*   `next-mdx-remote`: ^5.0.0
*   `classnames`: ^2.5.1 (Utility for conditionally joining class names)
*   `gray-matter`: ^4.0.3 (For parsing frontmatter from MDX/Markdown)

## 5. Tool Usage Patterns

*   Content is managed via JavaScript objects (`src/app/resources/content.js`) and MDX files.
*   Configuration is managed via a JavaScript object (`src/app/resources/config.js`).
*   Styling uses SCSS Modules for local scope and a global SCSS system within `once-ui` (tokens, attribute-based theming).
*   `once-ui` provides the core reusable UI components.
*   `layout.tsx` integrates configuration, global styles, and core layout structure.
