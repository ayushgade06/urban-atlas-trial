import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const { name, phone, locality, budget } = await request.json();

    await db.buyer.create({
      data: { name, phone, locality, budget },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("POST /api/buyers failed:", error);
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
    const buyers = await db.buyer.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(buyers);
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
