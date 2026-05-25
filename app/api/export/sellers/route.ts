import { NextResponse } from "next/server";
import { db } from "@/lib/db";

function csvValue(value: string) {
  return `"${value.replaceAll('"', '""')}"`;
}

export async function GET() {
  try {
    const sellers = await db.seller.findMany({
      orderBy: { createdAt: "desc" },
    });
    const rows = sellers.map((seller) =>
      [
        seller.name,
        seller.phone,
        seller.locality,
        seller.plotSize,
        seller.price,
        seller.createdAt.toISOString(),
      ]
        .map(csvValue)
        .join(","),
    );
    const csv = ["name,phone,locality,plotSize,price,createdAt", ...rows].join(
      "\n",
    );

    return new NextResponse(csv, {
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": 'attachment; filename="sellers.csv"',
      },
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

