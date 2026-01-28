import { NextResponse , NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { userId, planId } = body;

    if (!userId || !planId) {
      return NextResponse.json(
        { error: "userId and planId are required" },
        { status: 400 }
      );
    }

    // Fetch plan
    const plan = await prisma.plan.findUnique({
      where: { id: planId },
    });

    if (!plan) {
      return NextResponse.json(
        { error: "Plan not found" },
        { status: 404 }
      );
    }

    // Calculate expiry
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + plan.duration);

    // Create membership
    const membership = await prisma.membership.create({
      data: {
        userId,
        planId,
        status: "active",
        expiresAt,
      },
    });

    return NextResponse.json(membership, { status: 201 });
  } catch (error: any) {
    console.error(error);

    // Handle unique constraint error (duplicate membership)
    if (error.code === "P2002") {
      return NextResponse.json(
        { error: "Membership already exists for this plan" },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: "Failed to create membership" },
      { status: 500 }
    );
  }
}



export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = Number(searchParams.get("userId"));

    if (!userId) {
      return NextResponse.json(
        { error: "userId is required" },
        { status: 400 }
      );
    }

    const memberships = await prisma.membership.findMany({
      where: { userId },
      include: {
        plan: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(memberships);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch memberships" },
      { status: 500 }
    );
  }
}


