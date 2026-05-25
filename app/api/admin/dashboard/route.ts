import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const [buyerCount, sellerCount, recentBuyers, recentSellers] =
      await Promise.all([
        db.buyer.count(),
        db.seller.count(),
        db.buyer.findMany({
          orderBy: { createdAt: "desc" },
          take: 5,
        }),
        db.seller.findMany({
          orderBy: { createdAt: "desc" },
          take: 5,
        }),
      ]);

    return NextResponse.json({
      buyerCount,
      sellerCount,
      recentBuyers,
      recentSellers,
    });
  } catch {
    return NextResponse.json(
      {
        error: "Something went wrong",
      },
      {
        status: 500,
      },
    );
  }
}

