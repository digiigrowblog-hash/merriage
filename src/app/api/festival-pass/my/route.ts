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

export async function GET() {
  try {
    const userId = await getUserId();
    const weekOf = getWeekStart();

    const pass = await prisma.festivalPass.findFirst({
      where: { userId, weekOf }
    });

    return NextResponse.json({ pass });

  } catch (e) {
    return NextResponse.json(
      { message: "Failed to fetch pass" },
      { status: 500 }
    );
  }
}
