// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { verifyAccessToken } from "@/helper/authMiddleware";

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // 1. Public paths that never require auth
  const publicPaths = [
    "/",
    "/auth/signin",
    "/auth/signup",
    "/auth/verify-otp",
    // API versions of public auth routes
    "/api/auth/signin",
    "/api/auth/signup",
    "/api/auth/verify-otp",
  ];

  if (publicPaths.includes(pathname)) {
    return NextResponse.next();
  }

  // 2. Read access token from cookies
  const accessCookie = req.cookies.get("access_token");
  const accessToken = accessCookie?.value;

  if (!accessToken) {
    // If API route, return JSON 401
    if (pathname.startsWith("/api/")) {
      return NextResponse.json(
        { error: "Unauthorized: access token missing" },
        { status: 401 }
      );
    }

    // If page route, redirect to signin
    const loginUrl = new URL("/auth/signin", req.url);
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // 3. Verify access token
  const payload = verifyAccessToken(accessToken);

  if (!payload) {
    if (pathname.startsWith("/api/")) {
      return NextResponse.json(
        { error: "Unauthorized: invalid or expired token" },
        { status: 401 }
      );
    }

    const loginUrl = new URL("/auth/signin", req.url);
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // 4. Optionally forward userId to downstream via headers
  const res = NextResponse.next();
  res.headers.set("x-user-id", String(payload.userId));
  return res;
}

// 5. Configure which routes use this middleware
export const config = {
  matcher: [
    // protect all API routes except auth
    "/api/:path*",

    // protect app routes except auth and static assets
    "/((?!_next/static|_next/image|favicon.ico|auth/signin|auth/signup|auth/verify-otp).*)",
  ],
};