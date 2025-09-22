import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const mountains = await prisma.mountain.findMany();
  return NextResponse.json(mountains);
}
