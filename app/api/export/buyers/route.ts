import { NextResponse } from "next/server";
import { db } from "@/lib/db";

function csvValue(value: string) {
  return `"${value.replaceAll('"', '""')}"`;
}

export async function GET() {
  try {
    const buyers = await db.buyer.findMany({
      orderBy: { createdAt: "desc" },
    });
    const rows = buyers.map((buyer) =>
      [
        buyer.name,
        buyer.phone,
        buyer.locality,
        buyer.budget,
        buyer.createdAt.toISOString(),
      ]
        .map(csvValue)
        .join(","),
    );
    const csv = ["name,phone,locality,budget,createdAt", ...rows].join("\n");

    return new NextResponse(csv, {
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": 'attachment; filename="buyers.csv"',
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

