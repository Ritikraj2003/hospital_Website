import { NextResponse } from "next/server";
import { createAppointment, deleteAppointment } from "../controllers/appointmentController";

import { query } from "../utils/db";

export async function POST(request) {
  try {
    const { status, ...resData } = await createAppointment(await request.json());
    return NextResponse.json(resData, { status });
  } catch (error) {
    console.error("Appointment API Route Error:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const result = await query("SELECT * FROM appointments ORDER BY created_at DESC");
    return NextResponse.json({ success: true, bookings: result.rows });
  } catch (error) {
    console.error("Appointment API Route GET Error:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    
    if (!id) {
      return NextResponse.json({ success: false, error: "ID is required" }, { status: 400 });
    }

    const { status, ...resData } = await deleteAppointment(id);
    return NextResponse.json(resData, { status });
  } catch (error) {
    console.error("Appointment API Route DELETE Error:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}

