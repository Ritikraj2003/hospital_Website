import Appointment from "../models/Appointment";

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
    // 2. Database saving logic
    // Optional: Connect to your database here (e.g., dbConnect())
    
    // Create new appointment entry
    // If mongoose is connected, you can run:
    // const newAppointment = await Appointment.create(data);
    
    // For now, logging to console as a placeholder/backup
    console.log("Appointment processed by controller:", data);

    return {
      success: true,
      message: "Appointment booked successfully!",
      booking: { name, doctor, date, time },
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
