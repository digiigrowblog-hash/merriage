import { NextRequest , NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyAccessToken } from "@/helper/authMiddleware"; // Assuming a similar middleware for refresh token


export async function POST(req: NextRequest) {
 
    try {
        const accessToken = req.cookies.get("access_token")?.value;
        const refreshToken = req.cookies.get("refresh_token")?.value;

        if (!accessToken && !refreshToken) {
            return NextResponse.json({ message: "No active session to log out from" }, { status: 400 });
        }

        let userId: number | undefined;
        if (accessToken) {
            const payload = verifyAccessToken(accessToken);
            if (payload) {
                userId = payload.userId;
            }
        }

        // If accessToken didn't provide userId, try refreshToken (if you have a verifyRefreshToken function)
        // For simplicity, we'll proceed with userId from access token or mark as unauthorized if none
        if (!userId) {
          return NextResponse.json({ message: "Unauthorized: Invalid or missing token" }, { status: 401 });
        }
        
       // Delete all sessions for this user
         await prisma.session.deleteMany({
             where: { userId },
        });

        const response = NextResponse.json({ message: 'Logged out successfully' }, { status: 200 });

        const isProd = process.env.NODE_ENV === "production";

        // Clear cookies
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
        console.error("Logout error:", error);
        return NextResponse.json({
            message:"Internal server error"
        }, { status: 500 }
    );
        
    }
}