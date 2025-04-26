# Task: Refactor Next.js Layouts using Route Groups

## Goal

Separate the layout for the `/teacherZero` landing page from the main portfolio layout. The `/teacherZero` page should only inherit the root `<html>`, `<body>`, global styles/providers, and the `<Header>` component from the root layout. All other portfolio pages (`/`, `/about`, `/work`, `/contact`) should inherit the root layout *plus* a specific portfolio layout containing the main content wrapper and the `<Footer>`.

## Current State

- The project uses Next.js App Router.
- A `/teacherZero` page exists at `src/app/teacherZero/page.tsx` with a minimal layout at `src/app/teacherZero/layout.tsx`.
- The root layout (`src/app/layout.tsx`) currently contains the `<html>`, `<body>`, `<Header>`, `<Footer>`, global styles/providers, and a main content wrapper structure.
- All pages, including `/teacherZero`, currently inherit this full root layout, causing `/teacherZero` to have unwanted portfolio styling (content wrapper, footer).

## Instructions

### 1. Create Portfolio Route Group

Create a new directory: `src/app/(portfolio)`

### 2. Create Portfolio Layout File

Create a new file: `src/app/(portfolio)/layout.tsx`

### 3. Move Portfolio Pages into Group

Move the following directories and their contents into `src/app/(portfolio)/`:
- `src/app/about` -> `src/app/(portfolio)/about`
- `src/app/work` -> `src/app/(portfolio)/work`
- `src/app/contact` -> `src/app/(portfolio)/contact`
- *(Note: If `/blog` exists and should have the portfolio layout, move it too: `src/app/blog` -> `src/app/(portfolio)/blog`)*

Move the root page files into `src/app/(portfolio)/`:
- `src/app/page.tsx` -> `src/app/(portfolio)/page.tsx`
- `src/app/home.module.scss` -> `src/app/(portfolio)/home.module.scss` (Update the import in the moved `page.tsx` if necessary)

### 4. Refactor Root Layout (`src/app/layout.tsx`)

1. Read the current content of `src/app/layout.tsx`
2. **Identify:**
   - The main content wrapper element (likely a `<Flex>` component wrapping `<RouteGuard>{children}</RouteGuard>`)
   - The `<Footer />` component import and usage
3. **Modify `src/app/layout.tsx`:**
   - Keep:
     - `<html>` (`<Flex as="html">`)
     - `<body>` (`<Column as="body">`)
     - `<Header />`
     - `<Background />`
     - `<ToastProvider>`
     - Font definitions
     - Global style imports
     - Metadata
   - **Remove:**
     - `<Footer />` component import and usage
     - Main content wrapper element
   - The `{children}` (wrapped by `<RouteGuard>`) should become a more direct child of the `<Column as="body">` (potentially keeping the top padding `<Flex fillWidth minHeight="16"></Flex>` if desired globally)
   - The structure should roughly be: `<body> -> Background -> Top Padding -> Header -> RouteGuard -> children -> Vercel Analytics/SpeedInsights -> </body>`

### 5. Implement Portfolio Layout (`src/app/(portfolio)/layout.tsx`)

1. Create a basic React component structure that accepts `children`
2. Copy the main content wrapper element (the `<Flex position="relative"...>`) from the *original* `src/app/layout.tsx`
3. Import and add the `<Footer />` component *inside* this portfolio layout
4. Import any necessary components (like `Flex`, `Footer`, `RouteGuard` if it was inside the wrapper)

### 6. Verify TeacherZero Layout (`src/app/teacherZero/layout.tsx`)

Ensure this file remains minimal, essentially just returning `<>{children}</>`. It should *not* contain the portfolio content wrapper or footer.

## Verification

1. Check that portfolio pages (`/`, `/about`, etc.) render correctly with:
   - Header
   - Main content wrapper styling
   - Footer
2. Check that the `/teacherZero` page renders correctly with:
   - **Only** the Header
   - Its own content
   - **Without** the portfolio content wrapper styling
   - **Without** the Footer

## Implementation Notes

- The Route Group name `(portfolio)` is wrapped in parentheses to indicate it's a grouping construct and should not affect the URL paths
- Moving files may require stopping and restarting the development server
- You might need to clear the `.next` cache after moving files
- Update any imports that reference moved files to use their new paths
- Test each route after the changes to ensure proper rendering and navigation
