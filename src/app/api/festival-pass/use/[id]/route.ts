import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getUserId } from "@/lib/getUser";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await getUserId(); // ensure logged in

    const pass = await prisma.festivalPass.update({
      where: { id: Number(params.id) },
      data: { used: true }
    });

    return NextResponse.json(pass);

  } catch {
    return NextResponse.json(
      { message: "Failed to use pass" },
      { status: 500 }
    );
  }
}
