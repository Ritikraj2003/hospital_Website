import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema(
  {
    name:    { type: String, required: [true, "Please provide patient name"], trim: true },
    phone:   { type: String, required: [true, "Please provide phone number"], trim: true },
    email:   { type: String, trim: true },
    dept:    { type: String, required: [true, "Please select department"], trim: true },
    doctor:  { type: String, required: [true, "Please select doctor"], trim: true },
    date:    { type: String, required: [true, "Please select appointment date"], trim: true },
    time:    { type: String, required: [true, "Please select time slot"], trim: true },
    message: { type: String, trim: true }
  },
  {
    timestamps: true
  }
);

// Prevent compiling model multiple times in Next.js development mode
export default mongoose.models.Appointment || mongoose.model("Appointment", AppointmentSchema);
