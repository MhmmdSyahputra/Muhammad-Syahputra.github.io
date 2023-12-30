import { NextRequest, NextResponse } from "next/server";
import clientPromise from "./../connectionDB/mongodb";
import { ObjectId } from "mongodb";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("muhammadsyahputra-web");
  const myskils = await db.collection("projects").find({}).toArray();
  return NextResponse.json({ status: 200, data: myskils });
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const client = await clientPromise;
    const db = client.db("muhammadsyahputra-web");
    await db.collection("projects").insertOne(data);

    return NextResponse.json({
      status: 201,
      message: "Data project berhasil ditambah!",
    });
  } catch (error) {
    console.error("Error handling POST request:", error);
    return NextResponse.json({ status: 500, message: "Internal Server Error" });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const client = await clientPromise;
    const db = client.db("muhammadsyahputra-web");

    // Menggunakan parameter untuk menghapus data dari database
    await db.collection("projects").deleteOne({ _id: new ObjectId(id as string) });

    return NextResponse.json({ status: 200, message: "Data project berhasil dihapus!" });
  } catch (error) {
    console.error("Error handling POST request:", error);
    return NextResponse.json({ status: 500, message: "Internal Server Error" });
  }
}
