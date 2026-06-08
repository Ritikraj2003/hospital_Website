import { NextResponse } from "next/server";
import { createInquiry, getInquiries, deleteInquiry } from "../controllers/inquiryController";

export async function POST(request) {
  try {
    const body = await request.json();
    const { status, ...resData } = await createInquiry(body);
    return NextResponse.json(resData, { status });
  } catch (error) {
    console.error("Inquiry API Route POST Error:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const { status, ...resData } = await getInquiries();
    return NextResponse.json(resData, { status });
  } catch (error) {
    console.error("Inquiry API Route GET Error:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ success: false, error: "Inquiry ID is required" }, { status: 400 });
    }

    const { status, ...resData } = await deleteInquiry(id);
    return NextResponse.json(resData, { status });
  } catch (error) {
    console.error("Inquiry API Route DELETE Error:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
