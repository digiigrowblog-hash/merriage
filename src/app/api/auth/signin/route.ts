import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import sendEmail from "@/lib/emailService";
import { sendPhoneOtp } from "@/lib/phoneService";
import { createSessionAndTokens } from "@/lib/jwtHelper";

function generateOtp(length = 6): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { identifier } = body as { identifier?: string };

    // identifier can be either phone or email
    if (!identifier) {
      return NextResponse.json(
        { error: "identifier (phone or email) is required" },
        { status: 400 }
      );
    }

    const looksLikeEmail = identifier.includes("@");

    // 1. Find user by email OR phone
    const user = await prisma.user.findFirst({
      where: looksLikeEmail ? { email: identifier } : { phone: identifier },
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found. Please sign up first." },
        { status: 404 }
      );
    }

    // 2. Generate OTP + expiry
    const now = new Date();
    const otpExpiryMinutes = 10;
    const otpExpiresAt = new Date(
      now.getTime() + otpExpiryMinutes * 60 * 1000
    );
    const otp = generateOtp();

    // 3. Update the correct OTP field
    const dataToUpdate = looksLikeEmail
      ? {
          emailOtp: otp,
          emailOtpExpiresAt: otpExpiresAt,
        }
      : {
          phoneOtp: otp,
          phoneOtpExpiresAt: otpExpiresAt,
        };

    await prisma.user.update({
      where: { id: user.id },
      data: dataToUpdate,
    });

    // 4. Send OTP via chosen channel
    if (looksLikeEmail) {
      await sendEmail(
        user.email,
        "Your login verification code",
        `<p>Your OTP is <b>${otp}</b>. It is valid for 10 minutes.</p>`
      );
    } else {
      await sendPhoneOtp(user.phone, otp);
    }

    
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    const ua = req.headers.get("user-agent") || "unknown";

    const response = NextResponse.json(
      {
        success: true,
        userId: user.id,
        channel: looksLikeEmail ? "email" : "phone",
        message: "Login OTP sent. Please verify to complete sign-in.",
      },
      { status: 200 }
    );

    const { accessToken, refreshToken, refreshTokenExpiresAt } =
      await createSessionAndTokens(user.id, {
        ipAddress: ip,
        userAgent: ua,
      });

    const isProd = process.env.NODE_ENV === "production";

    response.cookies.set("access_token", accessToken, {
      httpOnly: true,
      secure: isProd,
      sameSite: "lax",
      path: "/",
      maxAge: 15 * 60,
    });

    response.cookies.set("refresh_token", refreshToken, {
      httpOnly: true,
      secure: isProd,
      sameSite: "lax",
      path: "/",
      maxAge: Math.floor(
        (refreshTokenExpiresAt.getTime() - Date.now()) / 1000
      ),
    });

    return response;
    


  } catch (error) {
    console.error("Signin error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
