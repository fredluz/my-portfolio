# System Patterns: Portfolio Template

## 1. Architecture Overview

*   **Component-Based Architecture:** Confirmed. Uses React components within Next.js. Key directories: `src/components` (app-specific), `src/once-ui` (core UI library).
*   **Next.js App Router:** Confirmed by `src/app` structure and `layout.tsx`. Enables SSR/SSG capabilities.
*   **Configuration-Driven UI:** Key aspects like theme, colors, and effects are controlled via `src/app/resources/config.js` and applied globally via `layout.tsx`.
*   **Separation of Concerns:**
    *   **Content:** Primarily in `src/app/resources/content.js` and `.mdx` files (`src/app/blog/posts/`, `src/app/work/projects/`).
    *   **Configuration:** `src/app/resources/config.js`.
    *   **Styling/UI Logic:** Encapsulated within `src/once-ui` and component-specific SCSS modules.
    *   **Routing/Layout:** Handled by Next.js App Router (`src/app/`).

## 2. Key Technical Decisions

*   **Framework:** Next.js (App Router).
*   **UI Library:** React with TypeScript.
*   **Styling:** SCSS Modules (`.module.scss`) for component-specific styles, plus a global styling system within `src/once-ui` likely using SCSS variables and design tokens (`src/once-ui/tokens/index.scss`). Theming is applied via `data-*` attributes on the `<html>` tag. **No Tailwind CSS.**
*   **Content Management:** Centralized JavaScript objects (`content.js`, `config.js`) for site-wide text/data and configuration. MDX (`.mdx` files) for rich content pages (blog posts, projects).
*   **CSS Processing:** PostCSS is used for compatibility (`postcss-preset-env`) and handling global data like breakpoints (`@csstools/postcss-global-data`).

## 3. Design Patterns

*   **Component Composition:** Core principle, evident in `src/components` and `src/once-ui`.
*   **Configuration Object Pattern:** Centralizing site settings (`config.js`) and content (`content.js`) in structured JavaScript objects.
*   **CSS Modules:** Used for component-level style encapsulation.
*   **Design Tokens:** Using SCSS variables (`src/once-ui/tokens/`) for consistent styling (colors, spacing, etc.).
*   **Attribute-Based Theming:** Applying theme variations (dark/light, accent colors) using `data-*` attributes on a high-level element (`<html>`).
*   **MDX for Content:** Combining Markdown with React components for flexible content creation in blog/project pages.

## 4. Component Relationships

*   `src/app/layout.tsx`: Root layout. Imports global styles/tokens, applies theme `data-*` attributes, includes `Header`, `Footer`, and the main content area (`children`). Uses `Background` component from `once-ui`.
*   `src/app/**/page.tsx`: Define the content for specific routes, likely importing data from `content.js` or fetching MDX content.
*   `src/components/`: Contains application-specific composite components (e.g., `Header`, `Footer`, `ProjectCard`) which likely utilize components from `src/once-ui`.
*   `src/once-ui/`: Core UI component library. Provides foundational elements (Buttons, Cards, Text, etc.) and the styling system (tokens, global styles). Components here likely consume the theme `data-*` attributes for styling.

## 5. Critical Implementation Paths

*   **Content Rendering:** Data from `content.js` is imported directly into page/component files. MDX content is likely processed using `next-mdx-remote` or `@next/mdx` based on `package.json`.
*   **Styling Application:**
    1.  Global styles/tokens from `src/once-ui/styles/index.scss` and `src/once-ui/tokens/index.scss` are imported in `layout.tsx`.
    2.  `layout.tsx` reads `config.js` and sets `data-*` attributes (e.g., `data-theme`, `data-accent`) on `<html>`.
    3.  `once-ui` SCSS uses these attributes and defined tokens/variables to apply styles globally and within its components.
    4.  Application-specific components (`src/components/`) use SCSS Modules for local styles and compose `once-ui` components.
*   **Routing:** Handled by Next.js App Router file-system based routing (`src/app/`).
*   **Configuration Flow:** `config.js` -> `layout.tsx` -> `data-*` attributes -> `once-ui` SCSS -> Applied Styles.
