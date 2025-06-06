import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const lowerPathname = pathname.toLowerCase()

  // Define the canonical path
  const canonicalPath = '/teacherZero'

  // Check if the lowercase path matches the target, but the original path does not match the canonical path
  if (lowerPathname === canonicalPath.toLowerCase() && pathname !== canonicalPath) {
    // Construct the new URL with the canonical path
    const url = request.nextUrl.clone()
    url.pathname = canonicalPath
    
    // Redirect permanently (308)
    return NextResponse.redirect(url, 308)
  }

  // --- YCombinator Product Path ---
  const canonicalYCPath = '/products/YCombinator'
  if (lowerPathname === canonicalYCPath.toLowerCase() && pathname !== canonicalYCPath) {
    const url = request.nextUrl.clone()
    url.pathname = canonicalYCPath
    return NextResponse.redirect(url, 308)
  }

  // Allow the request to continue if no redirect is needed
  return NextResponse.next()
}

// Configure the matcher to run only on paths related to 'teacherZero'
// This ensures the middleware doesn't run unnecessarily on every request.
export const config = {
  matcher: [
    // TeacherZero paths
    '/teacherzero', 
    '/Teacherzero', 
    '/TEACHERZERO', 
    '/TEACHERzero', 
    '/teacherZERO',
    // Add any other specific variations you anticipate, 
    // although the logic above handles any case variation.
    // Including the canonical path '/teacherZero' in the matcher is optional, 
    // but doesn't hurt, as the logic prevents redirecting if it's already correct.
    '/teacherZero',

    // YCombinator Product paths
    // Ensure middleware runs for these paths to normalize them:
    '/products/ycombinator',
    '/products/Ycombinator', // Mixed case for YCombinator
    '/products/yCombinator', // Mixed case for YCombinator
    '/PRODUCTS/YCOMBINATOR', // All caps
    '/Products/YCombinator', // Mixed case for products
    '/products/YCOMBINATOR', // All caps for YCombinator
    '/products/YCombinator'  // Canonical path
  ],
}
