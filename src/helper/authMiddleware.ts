// lib/verifyJwt.ts
import jwt from "jsonwebtoken";

const ACCESS_SECRET = process.env.JWT_ACCESS_SECRET!;

export type AccessTokenPayload = {
  userId: number;
  iat: number;
  exp: number;
};

export function verifyAccessToken(
  token: string
): AccessTokenPayload | null {
  try {
    const decoded = jwt.verify(token, ACCESS_SECRET) as AccessTokenPayload;
    return decoded;
  } catch (err) {
    console.error("JWT verification failed:", err);
    return null;
  }
}
