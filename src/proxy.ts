import { NextRequest, NextResponse } from "next/server";

// Public routes (no auth required)
const PUBLIC_PREFIXES = [
  "/",
  "/about",
  "/services",
  "/events",
  "/contact",
  "/signin",
  // "/sign-up",
  // "/forgot-password",  // make sure your route name matches your pages
];

function isPublic(pathname: string) {
  // consider a route public if it equals the prefix or starts with "<prefix>/"
  return PUBLIC_PREFIXES.some((p) => pathname === p || pathname.startsWith(p + "/"));
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = request.cookies.get("token")?.value ?? null;

  const onPublic = isPublic(pathname);

  // If no token:
  if (!accessToken) {
    // allow all public pages, including /verify-email/[id]
    if (onPublic) return NextResponse.next();

    // Store the attempted URL so you can redirect them back after login
    const loginUrl = new URL("/signin", request.url);
    // This automatically handles special characters correctly
    // loginUrl.searchParams.set("callbackUrl", pathname + request.nextUrl.search);

    // otherwise force sign-in
    return NextResponse.redirect(loginUrl);
  }

  // If logged in and trying to access public auth pages, send home (or dashboard)
if (pathname === "/signin") {
    return NextResponse.redirect(new URL("/admin/dashboard", request.url));
  }
  // Add a header to prevent browser caching of sensitive pages
  const response = NextResponse.next();
  // response.headers.set('Cache-Control', 'no-store, max-age=0, must-revalidate');
  // response.headers.set('Pragma', 'no-cache');
  return response;
}

// Broad matcher to cover all pages except Next internals, static assets, and API routes
export const config = {
  matcher: [
    '/admin/:path*',
  ],
};

