import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const { name, phone, locality, plotSize, price } = await request.json();

    await db.seller.create({
      data: { name, phone, locality, plotSize, price },
    });

    return NextResponse.json({ success: true });
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

export async function GET() {
  try {
    const sellers = await db.seller.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(sellers);
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

