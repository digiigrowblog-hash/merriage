import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyAccessToken } from "@/helper/authMiddleware";

export async function GET(req: NextRequest) {
  try {
    const accessToken = req.cookies.get("access_token")?.value;

    if (!accessToken) {
      return NextResponse.json(
        { message: "Access token is required" },
        { status: 401 }
      );
    }

    const payload = verifyAccessToken(accessToken);
    if (!payload) {
      return NextResponse.json(
        { message: "Unauthorized: invalid or expired token" },
        { status: 401 }
      );
    }

    const user = await prisma.user.findFirst({
      where: { id: payload.userId },
    });

    if (!user) {
      return NextResponse.json(
        {
          message: "User not found",
        },
        { status: 404 }
      );
    }
    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.log("All Profile error:", error);
    return NextResponse.json(
      {
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}
