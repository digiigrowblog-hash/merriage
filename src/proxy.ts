// src/proxy.ts (or proxy.ts in project root)
import { NextRequest, NextResponse } from "next/server";
import { verifyAccessToken } from "@/helper/verifyJwt"; // use your verifyJwt helper

const PUBLIC_PATHS = [
  "/",
  "/signin",
  "/signup",
  "/verify-otp",
  "/auth/signin",
  "/auth/signup",
];

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Completely skip auth check for public pages
  if (PUBLIC_PATHS.includes(pathname)) {
    return NextResponse.next();
  }

  // 1) Skip auth for auth APIs: /api/auth/*
  if (pathname.startsWith("/api/auth/")) {
    return NextResponse.next();
  }

  // 2) Read access token from cookies
  const accessToken = req.cookies.get("access_token")?.value;

  if (!accessToken) {
    if (pathname.startsWith("/api/")) {
      return NextResponse.json(
        { error: "Unauthorized: access token missing" },
        { status: 401 }
      );
    }

    const loginUrl = new URL("/auth/signin", req.url);
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // 3) Verify token
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

  // 4) Forward user id
  const res = NextResponse.next({
    request: { headers: new Headers(req.headers) },
  });
  res.headers.set("x-user-id", String(payload.userId));
  return res;
}

export const config = {
  matcher: [
    // Run proxy on all API routes
    "/api/:path*",
    // And all app routes except static assets
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
