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
  return NextResponse.json({ Message: "Success", status: 201 });
}

export async function GET(request: NextRequest) {
  return NextResponse.json("news");
}
