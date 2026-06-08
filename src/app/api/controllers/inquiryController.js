import { query } from "../utils/db";

// Handle creating a new inquiry
export async function createInquiry(data) {
  const { name, phone, email, department, message } = data;

  if (!name || !phone || !email || !department || !message) {
    return {
      success: false,
      error: "All fields are required.",
      status: 400,
    };
  }

  try {
    const insertQuery = `
      INSERT INTO inquiries (name, phone, email, department, message)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
    `;
    const result = await query(insertQuery, [
      name.trim(),
      phone.trim(),
      email.trim(),
      department.trim(),
      message.trim(),
    ]);

    return {
      success: true,
      message: "Inquiry submitted successfully!",
      inquiry: result.rows[0],
      status: 201,
    };
  } catch (error) {
    console.error("Controller createInquiry Error:", error);
    return {
      success: false,
      error: error.message || "Failed to submit inquiry.",
      status: 500,
    };
  }
}

// Handle fetching all inquiries
export async function getInquiries() {
  try {
    const result = await query("SELECT * FROM inquiries ORDER BY created_at DESC");
    return {
      success: true,
      inquiries: result.rows,
      status: 200,
    };
  } catch (error) {
    console.error("Controller getInquiries Error:", error);
    return {
      success: false,
      error: error.message || "Failed to retrieve inquiries.",
      status: 500,
    };
  }
}

// Handle deleting an inquiry
export async function deleteInquiry(id) {
  if (!id) {
    return {
      success: false,
      error: "Inquiry ID is required.",
      status: 400,
    };
  }

  try {
    const deleteQuery = "DELETE FROM inquiries WHERE id = $1 RETURNING *";
    const result = await query(deleteQuery, [id]);

    if (result.rows.length === 0) {
      return {
        success: false,
        error: "Inquiry not found.",
        status: 404,
      };
    }

    return {
      success: true,
      message: "Inquiry deleted successfully!",
      deletedInquiry: result.rows[0],
      status: 200,
    };
  } catch (error) {
    console.error("Controller deleteInquiry Error:", error);
    return {
      success: false,
      error: error.message || "Failed to delete inquiry.",
      status: 500,
    };
  }
}
