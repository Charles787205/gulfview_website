import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { options } from "../../auth/[...nextauth]/options";
import firebaseApp from "@/utils/FirebaseConfig";
import { getFirestore } from "firebase-admin/firestore";
export async function GET() {
  const session = await getServerSession(options);
  const db = getFirestore(firebaseApp);

  if (session) {
    //check if user is admin if officer add the position and return
    const userRef = await db.collection("users").doc(session.user.id).get();

    return Response.json({ ...userRef.data() });
  }
  return Response.json({});
}

export async function PATCH(request: NextRequest) {
  const user = await request.json();
  console.log(user);
  const db = getFirestore(firebaseApp);
  await db.collection("users").doc(user.id).update({
    firstName: user.firstName,
    lastName: user.lastName,
  });

  return Response.json({});
}
