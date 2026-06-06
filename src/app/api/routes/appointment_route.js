import { NextResponse } from "next/server";
import { createAppointment } from "../controllers/appointmentController";

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
    const bookings = global.appointments || [];
    return NextResponse.json({ success: true, bookings });
  } catch (error) {
    console.error("Appointment API Route GET Error:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
