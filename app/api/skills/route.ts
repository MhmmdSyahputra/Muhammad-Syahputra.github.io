import { NextRequest, NextResponse } from "next/server";
import clientPromise from "./../connectionDB/mongodb";
import { writeFile } from "fs/promises";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("muhammadsyahputra-web");
  const myskils = await db.collection("skills").find({}).toArray();
  return NextResponse.json({ status: 200, data: myskils });
}

export async function POST(request: NextRequest) {
  try {
    
    const formData = await request.formData();
    const file: File | null = formData.get("file") as unknown as File;
  
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const path = `public/img/skills/${formData.get('skill')}.jpg`;
    await writeFile(path, buffer);
  
    const newData = { 
      skill: formData.get('skill'),
      url_img: path.replace('public','')
     };
  
    const client = await clientPromise;
    const db = client.db("muhammadsyahputra-web");
    await db.collection("skills").insertOne(newData);
  
    return NextResponse.json({ status: 201, message: 'Data skill berhasil ditambah!' });
  } catch (error) {
    console.error("Error handling POST request:", error);
    return NextResponse.json({ status: 500, message: "Internal Server Error" });
  }
}
