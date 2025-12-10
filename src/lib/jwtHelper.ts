// lib/authTokens.ts
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { prisma } from "@/lib/prisma";

const ACCESS_TOKEN_EXP_MIN = 15; 
const REFRESH_TOKEN_EXP_DAYS = 30;

export async function createSessionAndTokens(
  userId: number, 
  opts?: { userAgent?: string; 
  ipAddress?: string }
) {
  const now = new Date();

  // 1) Access token (JWT)
  const accessToken = jwt.sign(
    { sub: userId },
    process.env.JWT_ACCESS_SECRET!,
    { expiresIn: `${ACCESS_TOKEN_EXP_MIN}m` }
  );

  // 2) Refresh token (random string)
  const refreshToken = crypto.randomBytes(32).toString("hex");

  // Hash refresh token before saving
  const refreshTokenHash = crypto
    .createHash("sha256")
    .update(refreshToken)
    .digest("hex");

  const refreshExpiresAt = new Date(
    now.getTime() + REFRESH_TOKEN_EXP_DAYS * 24 * 60 * 60 * 1000
  );

  // 3) Store session in DB
  await prisma.session.create({
    data: {
      userId,
      refreshTokenHash,
      userAgent: opts?.userAgent?? null, // or pass from request headers
      ipAddress: opts?.ipAddress?? null, // or pass from request headers
      expiresAt: refreshExpiresAt,
    },
  });

  return {
    accessToken,
    refreshToken,
    accessTokenExpiresInMinutes: ACCESS_TOKEN_EXP_MIN,
    refreshTokenExpiresAt: refreshExpiresAt,
  };
}
