import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getUserId } from "@/lib/getUser";

function getWeekStart() {
  const d = new Date();
  d.setHours(0,0,0,0);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  d.setDate(diff);
  return d;
}

export async function POST(req: Request) {
  try {
    const userId = await getUserId();
    const body = await req.json();
    const isFree = body?.isFree ?? false;

    const weekOf = getWeekStart();

    const existing = await prisma.festivalPass.findUnique({
      where: {
        userId_weekOf: { userId, weekOf }
      }
    });

    if (existing) {
      return NextResponse.json(
        { message: "Pass already exists this week" },
        { status: 400 }
      );
    }

    const pass = await prisma.festivalPass.create({
      data: { userId, isFree, weekOf }
    });

    return NextResponse.json(pass);

  } catch (e) {
    return NextResponse.json(
      { message: "Failed to create pass" },
      { status: 500 }
    );
  }
}
