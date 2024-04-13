import { connectMongoDB } from "@/lib/MongoDB";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { mongoClient } = await connectMongoDB();
    return NextResponse.json({ message: "Successfully connected to DB." });
  } catch (e) {
    console.log({ e });
    return NextResponse.json({ message: "Failed to connect to DB." });
  }
}
