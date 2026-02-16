import { getServerSession } from "next-auth";
// OR decode JWT manually

export async function getUserId() {
  const session = await getServerSession();
  if (!session?.user?.id) throw new Error("Unauthorized");
  return Number(session.user.id);
}


