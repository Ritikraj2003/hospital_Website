import { NextResponse } from "next/server";
import { query } from "../utils/db";

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    
    if (!email || !password) {
      return NextResponse.json({ success: false, error: "Email and password are required." }, { status: 400 });
    }

    const userResult = await query("SELECT * FROM users WHERE email = $1 LIMIT 1", [email.trim().toLowerCase()]);
    
    if (userResult.rows.length === 0) {
      return NextResponse.json({ success: false, error: "Invalid email or password." }, { status: 401 });
    }

    const user = userResult.rows[0];
    
    // Check password
    if (user.password !== password) {
      return NextResponse.json({ success: false, error: "Invalid email or password." }, { status: 401 });
    }

    return NextResponse.json({ 
      success: true, 
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    console.error("Login API Route Error:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
