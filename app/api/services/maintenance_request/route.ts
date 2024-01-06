import { NextRequest, NextResponse } from "next/server";
import { maintenanceRequestDetailsType } from "@/types";
import firebaseApp from "@/utils/FirebaseConfig";
import { getFirestore } from "firebase-admin/firestore";
import { getServerSession } from "next-auth";
import { options } from "../../auth/[...nextauth]/options";
import firebase from "firebase/compat/app";

export async function POST(request: NextRequest) {
  const data: maintenanceRequestDetailsType = await request.json();
  try {
    if (!data.user) {
      throw new Error("No user id");
    }
    const db = getFirestore(firebaseApp);
    const ref = await db.collection("maintenance_request").add(data);
    if (ref) {
      return new NextResponse(ref.id);
    } else {
      throw new Error();
    }
  } catch (error) {
    return new NextResponse(`${error}`, { status: 500 });
  }
}
