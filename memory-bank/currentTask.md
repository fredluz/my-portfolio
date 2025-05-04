# Current Task: Klaviyo Integration

## Objective

Integrate Klaviyo form and tracking script into the TeacherZero English landing page.

## Requirements

1.  Replace the existing Beta signup form (Google Form link) in `src/app/teacherZero/components/TeacherZeroENContent.tsx` with the Klaviyo form embed code: `<div class="klaviyo-form-Tv7V5D"></div>`.
2.  Add the Klaviyo onsite JavaScript snippet `<script async type='text/javascript' src='https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=VdCij5'></script>` to the main site template (`src/app/layout.tsx`) before the closing `</body>` tag equivalent.

## Current Status

*   Klaviyo script added to `src/app/layout.tsx`.
*   Google Form link in `src/app/teacherZero/components/TeacherZeroENContent.tsx` replaced with the Klaviyo form div.

## Next Steps

1.  Update `activeContext.md`.
2.  Verify the changes in the browser.
3.  Task complete.
new form