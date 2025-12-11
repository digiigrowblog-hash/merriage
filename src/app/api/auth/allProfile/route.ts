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
        { message: "Invalid access token" },
        { status: 401 }
      );
    }

    const users = await prisma.user.findMany({
      
      orderBy: { createdAt: "desc" },
      // select: { id: true, name: true, age: true, gender: true, images: true, ... }
    });

    return NextResponse.json({ users  }, { status: 200 });
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
