import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE, verifyAdminToken } from "@/lib/auth";

export async function middleware(request: NextRequest) {
  const publicSubmission =
    request.method === "POST" &&
    (request.nextUrl.pathname === "/api/buyers" ||
      request.nextUrl.pathname === "/api/sellers");

  if (publicSubmission) {
    return NextResponse.next();
  }

  const authenticated = await verifyAdminToken(
    request.cookies.get(AUTH_COOKIE)?.value,
  );

  if (!authenticated) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/admin/:path*", "/api/export/:path*", "/api/buyers", "/api/sellers"],
};

