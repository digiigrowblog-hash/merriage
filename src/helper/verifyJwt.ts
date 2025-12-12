// lib/verifyJwt.ts
import jwt, { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";

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
    if (err instanceof TokenExpiredError) {
      console.error("JWT verification failed: Token expired");
      return null; // Or you could return a specific error object if proxy.ts handles it
    } else if (err instanceof JsonWebTokenError) {
      console.error("JWT verification failed: Invalid token", err.message);
      return null; // Or a specific error object
    } else {
      console.error("JWT verification failed: An unknown error occurred", err);
      return null;
    }
  }
}
