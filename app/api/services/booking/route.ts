import { NextRequest, NextResponse } from "next/server";
import firebaseApp from "@/utils/FirebaseConfig";
import { getFirestore } from "firebase-admin/firestore";
import { getServerSession } from "next-auth";
import { options } from "../../auth/[...nextauth]/options";

export async function POST(request: NextRequest) {
  const data = await request.json();

  const session = await getServerSession(options);
  const dateCreated = new Date();
  var dd = String(dateCreated.getDate()).padStart(2, "0");
  var mm = String(dateCreated.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = dateCreated.getFullYear();

  const dateCreatedString = dateCreated;

  try {
    const dateTimeString = `${data.date}T${data.time}:00`;
    const dateTime = new Date(dateTimeString);
    if (data.name == "" || data.description == "" || data.hours == 0) {
      throw new Error("Hehe");
    }
    const booking = {
      amenity_type: data.amenity,
      name: data.name,
      description: data.description,
      date_time: dateTime,
      hours: data.hours,
      date_created: dateCreatedString,
    };
    console.log(booking);
    const db = getFirestore(firebaseApp);

    await db.collection("bookings").add({
      ...booking,
      id: session?.user.id,
    });

    return NextResponse.json({ message: "success" });
  } catch (e) {
    console.log(e);
    const response = NextResponse.json({ error: { e } }, { status: 500 });

    return response;
  }
}
