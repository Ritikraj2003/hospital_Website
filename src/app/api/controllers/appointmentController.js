import Appointment from "../models/Appointment";

// Setup global in-memory appointments store with pre-populated mock data
if (!global.appointments) {
  global.appointments = [
    {
      id: "bk-1",
      name: "Ramesh Kumar",
      phone: "+91 98765 43210",
      email: "ramesh@gmail.com",
      dept: "Cardiology",
      doctor: "Dr. Manohar CV",
      date: "2026-06-08",
      time: "10:00 AM",
      message: "Regular cardiovascular checkup and prescription refill.",
      createdAt: new Date(Date.now() - 3600000 * 24).toISOString()
    },
    {
      id: "bk-2",
      name: "Sita Kumari",
      phone: "+91 91234 56789",
      email: "sita.kumari@yahoo.com",
      dept: "Gynaecology",
      doctor: "Dr. Anika Parrikar",
      date: "2026-06-09",
      time: "02:00 PM",
      message: "Routine prenatal consultation.",
      createdAt: new Date(Date.now() - 3600000 * 12).toISOString()
    },
    {
      id: "bk-3",
      name: "Amit Sharma",
      phone: "+91 88990 11223",
      email: "amit.sharma@outlook.com",
      dept: "Orthopaedics",
      doctor: "Dr. Rakshith M",
      date: "2026-06-10",
      time: "11:00 AM",
      message: "Consultation for knee joint stiffness.",
      createdAt: new Date(Date.now() - 3600000 * 4).toISOString()
    }
  ];
}

// Handle creating a new appointment booking
export async function createAppointment(data) {
  const { name, phone, email, dept, doctor, date, time, message } = data;

  // 1. Validation
  if (!name || !phone || !dept || !doctor || !date || !time) {
    return {
      success: false,
      error: "Missing required fields.",
      status: 400,
    };
  }

  try {
    const newBooking = {
      id: "bk-" + Math.random().toString(36).substring(2, 9),
      name,
      phone,
      email: email || "",
      dept,
      doctor,
      date,
      time,
      message: message || "",
      createdAt: new Date().toISOString()
    };

    global.appointments.push(newBooking);
    console.log("Appointment processed and saved in-memory:", newBooking);

    return {
      success: true,
      message: "Appointment booked successfully!",
      booking: newBooking,
      status: 201,
    };
  } catch (error) {
    console.error("Controller Error:", error);
    return {
      success: false,
      error: error.message || "Failed to process appointment.",
      status: 500,
    };
  }
}
