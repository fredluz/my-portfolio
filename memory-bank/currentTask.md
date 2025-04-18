# Current Task: Analyze Portfolio Template & Explain Customization

## Objective

Analyze the provided Next.js portfolio template to understand its structure, functionality, and customization methods. Provide a clear explanation to the user, including how to change the color of a specific line of text to the site's accent color.

## Key Questions to Answer

1.  **How does the template work?**
    *   What is the technology stack? (Confirmed: Next.js, React, TypeScript, SCSS Modules, potentially Tailwind, `once-ui` library)
    *   How is the project structured? (File/folder organization)
    *   Where is the main configuration managed?
    *   How is page content (text, images) managed?
    *   How is styling handled (global, component-level, UI library)?
2.  **How can the user customize it?**
    *   Where to change text content?
    *   Where to change images?
    *   Where to adjust site settings (e.g., name, social links)?
    *   How to modify colors, fonts, and other styles?
3.  **Specific Customization: Changing Text Color**
    *   How is the "accent color" defined in the template?
    *   What is the recommended way to apply this accent color to a specific piece of text? (e.g., using a CSS class, utility class, inline style, component prop).

## Plan

1.  Read key configuration, content, and layout files (`package.json`, `postcss.config.js`, `src/app/resources/config.js`, `src/app/resources/content.js`, `src/app/layout.tsx`).
2.  Investigate the `src/once-ui` directory to understand its role and styling system.
3.  Analyze the findings to answer the key questions.
4.  Update Memory Bank files (`systemPatterns.md`, `techContext.md`, `activeContext.md`).
5.  Present the analysis and customization plan to the user.
