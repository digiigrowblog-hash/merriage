import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyAccessToken } from "@/helper/authMiddleware";

export async function DELETE(req: NextRequest) {
  try {
    const accessToken = req.cookies.get("access_token")?.value;

    if (!accessToken) {
      return NextResponse.json(
        { message: "Access token is required for account deletion" },
        { status: 401 }
      );
    }

    const payload = verifyAccessToken(accessToken);
    if (!payload) {
      return NextResponse.json(
        { message: "Unauthorized: Invalid or expired token" },
        { status: 401 }
      );
    }

    const userId = payload.userId;

    // 1. Delete all sessions for the user
    await prisma.session.deleteMany({
      where: { userId },
    });

    // 2. Delete the user
    await prisma.user.delete({
      where: { id: userId },
    });

    // 3. Clear cookies
    const response = NextResponse.json(
      { message: "Account and all associated data deleted successfully" },
      { status: 200 }
    );

    const isProd = process.env.NODE_ENV === "production";

    response.cookies.set("access_token", "", {
      httpOnly: true,
      secure: isProd,
      sameSite: "lax",
      path: "/",
      maxAge: 0, // Immediately expire the cookie
    });

    response.cookies.set("refresh_token", "", {
      httpOnly: true,
      secure: isProd,
      sameSite: "lax",
      path: "/",
      maxAge: 0, // Immediately expire the cookie
    });

    return response;
  } catch (error) {
    console.error("Delete account error:", error);
    return NextResponse.json(
      { message: "Internal server error during account deletion" },
      { status: 500 }
    );
  }
}
