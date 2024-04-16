import { connectMongoDB } from "@/lib/MongoDB";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { firstName, lastName, email, password } = await request.json();

  try {
    await connectMongoDB();
    await User.create({ firstName, lastName, email, password });

    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (e) {
    return NextResponse.json(
      { message: "Unable to create user. Something went wrong." },
      { status: 400 }
    );
  }
}
