import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { options } from "../../auth/[...nextauth]/options";

export async function GET() {
  const session = await getServerSession(options);

  if (session) {
    const prisma = new PrismaClient();
    const user = await prisma.user.findUnique({
      where: {
        id: session.user.id,
      },
    });
    const officer = await prisma.officerProfile.findUnique({
      where: {
        userId: user?.id,
      },
    });
    if (officer != null) {
      const newUser = { ...user, position: officer.position };
      console.log(newUser);
      return Response.json(newUser);
    }

    return Response.json(user);
  }
  return Response.json({});
}

export async function POST({ params }: { params: { id: number } }) {
  console.log(params.id);
}

export async function PATCH(request: NextRequest) {
  const user = await request.json();
  const prisma = new PrismaClient();
  const newUser = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      firstName: user?.firstName,
      lastName: user?.lastName,
    },
  });
  return Response.json(newUser);
}
