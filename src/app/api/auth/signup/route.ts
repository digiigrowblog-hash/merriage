// app/api/auth/signup/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import {
  createUser,
  createUserSchema,
  type CreateUserWithOtp,
} from "@/lib/services/userService";
import sendEmail from "@/helper/emailService";
import { sendPhoneOtp } from "@/helper/phoneService";
import { createSessionAndTokens } from "@/helper/jwtHelper";

function generateOtp(length = 6): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(req: NextRequest) {
  try {
     console.log("hie wassup 2")
    const body = await req.json();
   

    // 1. Validate
    const parsed = createUserSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", details: parsed.error.flatten() },
        { status: 400 }
      );
    }
    const data = parsed.data;

    // 2. Check existing user
    const existingUser = await prisma.user.findFirst({
      where: { OR: [{ email: data.email }, { phone: data.phone }] },
      select: { id: true },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "User with this phone or email already exists" },
        { status: 409 }
      );
    }
    console.log("hie wassup 1")
    // 3. Generate OTPs
    const phoneOtp = generateOtp();
    const emailOtp = generateOtp();
    const now = new Date();
    const otpExpiryMinutes = 10;
    const otpExpiresAt = new Date(now.getTime() + otpExpiryMinutes * 60 * 1000);

    // 4. Create user
    const user = await createUser({
      ...data,
      phoneOtp,
      emailOtp,
      otpExpiresAt,
    } as CreateUserWithOtp);
    console.log("New user created with ID: 1231");

    // 5. Send OTPs
    await sendEmail(
      user.email,
      "Your verification code",
      `<p>Your OTP is <b>${emailOtp}</b>. It is valid for 10 minutes.</p>`
    );
    await sendPhoneOtp(data.phone, phoneOtp);

    // 6. Create session + tokens
    const { accessToken, refreshToken, refreshTokenExpiresAt } =
      await createSessionAndTokens(user.id);
      console.log("Tokens created during signup for userId:", user.id);

    // 7. Set cookies and respond
    const response = NextResponse.json(
      {
        success: true,
        userId: user.id,
        message: `User created. OTPs have been sent to your phone and email. 
          You are logged in; please verify to unlock full features.`,
      },
      { status: 201 }
    );

    const isProd = process.env.NODE_ENV === "production";

    response.cookies.set("access_token", accessToken, {
      httpOnly: true,
      secure: isProd,
      sameSite: "lax",
      path: "/",
      maxAge: 15 * 60, // sync with access token exp
    });

    response.cookies.set("refresh_token", refreshToken, {
      httpOnly: true,
      secure: isProd,
      sameSite: "lax",
      path: "/",
      maxAge: Math.floor((refreshTokenExpiresAt.getTime() - Date.now()) / 1000),
    });

    return response;
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
