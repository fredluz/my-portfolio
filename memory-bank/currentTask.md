# Current Task: Minimal Viable Legal Compliance (MVLC) Pages

## Objective

Implement Privacy Policy and Terms & Conditions pages with English and Portuguese localization, drafted text, and clear footer links.

## Requirements

1.  Create four pages:
    - `/legal/privacy-policy` (EN)
    - `/legal/privacy-policy/pt` (PT)
    - `/legal/terms-conditions` (EN)
    - `/legal/terms-conditions/pt` (PT)
2.  Each page should have drafted legal text (based on user requirements) and a link to its counterpart language version.
3.  Update `src/app/resources/config.js` to allow access to all four routes.
4.  Update `src/components/Footer.tsx` to include dynamic links to the legal pages, switching between EN/PT based on the current path.
5.  Update Memory Bank documentation.

## Current Status

*   All four legal pages have been created.
*   Drafted legal text (EN and PT machine translation) inserted into respective pages, including user-provided contact details and jurisdiction.
*   `src/app/resources/config.js` updated to allow access to all four legal routes.
*   Footer updated to include dynamic links to legal pages, switching between EN/PT.
*   `activeContext.md` updated to reflect this work.

## Next Steps

1.  **User Verification:** User needs to verify the pages render correctly and the links work.
2.  **Legal Review:** User **must** get the drafted text (especially PT translation) reviewed by a legal professional.
3.  Task complete.
