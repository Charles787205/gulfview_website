import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { options } from "../auth/[...nextauth]/options";
import path from "path";
import { writeFile } from "fs/promises";

//transfer image to the website
const transferImage = async (file: File, rawFilename: String) => {
  const parts = file.name.split(".");
  var extension = parts.pop();

  if (extension?.includes(".")) {
    const lastPeriodIndex = extension.lastIndexOf(".");
    extension = extension.substring(lastPeriodIndex + 1);
  }
  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = rawFilename + `.${extension}`;
  try {
    await writeFile(
      path.join(process.cwd(), "public/uploads/" + filename),
      buffer
    );
    return filename;
  } catch (error) {
    console.log("News upload Error", error);
  }
};

export async function POST(request: NextRequest) {
  const session = await getServerSession(options);

  if (session) {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    if (!file) {
      return NextResponse.json({ error: "No files recieved" }, { status: 400 });
    }
    const rawFilename = Date.now() + session.user.id;
    transferImage(file, rawFilename).then((filename) => {
      if (filename) {
        //if successfully uploaded then upload to database

        return NextResponse.json({ Message: "Success", status: 201 });
      } else {
        return NextResponse.json({ Message: "Failed", status: 500 });
      }
    });

    console.log(rawFilename);
    console.log(file);
    return Response.json({ success: "success" });
  }
}

export async function GET(request: NextRequest | null) {
  return NextResponse.json("news");
}
