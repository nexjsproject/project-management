// Import necessary modules and functions
import connectDB from "@/db";
import User from "@/model/User";
import { generateToken } from "@/utils/auth";
import { NextResponse } from "next/server";

// Define the POST request handler
export async function POST(request) {
  try {
    // Parse JSON data from the request body
    const data = await request.json();
    console.log(data);
    // Connect to the MongoDB database
    await connectDB();

    // Check if a user with the provided email already exists
    const existingUser = await User.findOne({ email: data.email });

    // If a user with the email exists, return an error response
    if (existingUser) {
      return NextResponse.json({ status: 400, msg: "User already exists" });
    }

    // Create a new user in the database
    const newUser = await User.create(data);

    // Generate a JWT token for the new user
    const token = generateToken(newUser._id);

    // Return a JSON response containing the token
    return NextResponse.json({ token });
  } catch (error) {
    // If an error occurs, log the error and return a server error response
    console.error("Error creating user:", error);
    return NextResponse.json({ status: 400, msg: "Something wromg" });
  }
}

export async function GET() {
  await connectDB();
  const data = await User.find();
  return NextResponse.json({ data });
}
