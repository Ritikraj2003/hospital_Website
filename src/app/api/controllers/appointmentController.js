import { query } from "../utils/db";
import { sendAppointmentEmail } from "../utils/email";

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
    const cleanEmail = (email && email.trim() !== "") ? email.trim() : null;

    // 2. Create appointment in appointments table
    const insertAppointmentQuery = `
      INSERT INTO appointments (name, phone, email, dept, doctor, date, time, message)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *
    `;
    
    const appointmentResult = await query(insertAppointmentQuery, [
      name,
      phone,
      cleanEmail,
      dept,
      doctor,
      date,
      time,
      message || null
    ]);

    const newBooking = appointmentResult.rows[0];

    // 4. Send notification email using nodemailer
    try {
      await sendAppointmentEmail(newBooking);
    } catch (emailError) {
      console.error("Failed to send email notification:", emailError);
    }

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

// Handle deleting an appointment booking by ID
export async function deleteAppointment(id) {
  if (!id) {
    return {
      success: false,
      error: "Appointment ID is required.",
      status: 400,
    };
  }

  try {
    const deleteQuery = "DELETE FROM appointments WHERE id = $1 RETURNING *";
    const result = await query(deleteQuery, [id]);

    if (result.rows.length === 0) {
      return {
        success: false,
        error: "Appointment not found.",
        status: 404,
      };
    }

    return {
      success: true,
      message: "Appointment deleted successfully!",
      deletedBooking: result.rows[0],
      status: 200,
    };
  } catch (error) {
    console.error("Delete Controller Error:", error);
    return {
      success: false,
      error: error.message || "Failed to delete appointment.",
      status: 500,
    };
  }
}
