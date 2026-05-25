import { SignJWT } from "jose/jwt/sign";
import { jwtVerify } from "jose/jwt/verify";

export const AUTH_COOKIE = "urban_atlas_admin";

function secret() {
  return new TextEncoder().encode(process.env.JWT_SECRET);
}

export async function createAdminToken() {
  return new SignJWT({ admin: true })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret());
}

export async function verifyAdminToken(token: string | undefined) {
  if (!token || !process.env.JWT_SECRET) {
    return false;
  }

  try {
    await jwtVerify(token, secret());
    return true;
  } catch {
    return false;
  }
}
