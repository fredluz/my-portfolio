# Current Task: Create YC Product Page, Ensure Case-Insensitive URL, and Update Product Link

## Objective

Create a new page at `/products/YCombinator` for the YC application. Ensure the URL is case-insensitive and the product link points to the correct Google Drive URL.

## Requirements

1.  Create a new page file at `src/app/products/YCombinator/page.tsx`.
2.  The page should display a heading (e.g., "Product for YCombinator").
3.  The page should include a link with the text "download teacherZero" pointing to `https://drive.google.com/file/d/1R2COCBtpABpFq4HB9fcprAndnQyF3E4M/view?usp=sharing`.
4.  The URL `/products/YCombinator` should be case-insensitive, redirecting variations to the canonical path.

## Current Status

*   The file `src/app/products/YCombinator/page.tsx` has been created with the specified heading and the product link has been updated to the Google Drive URL.
*   `src/middleware.ts` has been updated to handle case-insensitivity for the `/products/YCombinator` URL by redirecting to the canonical path.

## Next Steps

1.  Update `activeContext.md`.
2.  Task complete.
