import nodemailer from "nodemailer";

export async function sendAppointmentEmail(appointment) {
  const { name, phone, email, dept, doctor, date, time, message } = appointment;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // 1. Email for Admin
  const adminMailOptions = {
    from: `"Avni Hospital Booking" <${process.env.EMAIL_USER}>`,
    to: "avnihospital2026@gmail.com",
    subject: `New Appointment Booking - ${name}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
        <div style="background-color: #006D5B; color: white; padding: 20px; text-align: center;">
          <h2 style="margin: 0; font-size: 24px; font-weight: bold;">New Appointment</h2>
          <p style="margin: 5px 0 0 0; opacity: 0.9;">Avni Hospital Booking System</p>
        </div>
        <div style="padding: 24px; background-color: #ffffff;">
          <h3 style="color: #333333; margin-top: 0; border-bottom: 2px solid #006D5B; padding-bottom: 8px;">Booking Details</h3>
          <table cellpadding="8" style="width: 100%; border-collapse: collapse; text-align: left;">
            <tr>
              <td style="width: 35%; font-weight: bold; color: #555555; border-bottom: 1px solid #f0f0f0; padding: 10px 0;">Patient Name:</td>
              <td style="color: #222222; border-bottom: 1px solid #f0f0f0; padding: 10px 0;">${name}</td>
            </tr>
            <tr>
              <td style="font-weight: bold; color: #555555; border-bottom: 1px solid #f0f0f0; padding: 10px 0;">Phone:</td>
              <td style="color: #222222; border-bottom: 1px solid #f0f0f0; padding: 10px 0;">${phone}</td>
            </tr>
            <tr>
              <td style="font-weight: bold; color: #555555; border-bottom: 1px solid #f0f0f0; padding: 10px 0;">Email:</td>
              <td style="color: #222222; border-bottom: 1px solid #f0f0f0; padding: 10px 0;">${email || "Not Provided"}</td>
            </tr>
            <tr>
              <td style="font-weight: bold; color: #555555; border-bottom: 1px solid #f0f0f0; padding: 10px 0;">Department:</td>
              <td style="color: #222222; border-bottom: 1px solid #f0f0f0; padding: 10px 0;">${dept}</td>
            </tr>
            <tr>
              <td style="font-weight: bold; color: #555555; border-bottom: 1px solid #f0f0f0; padding: 10px 0;">Doctor:</td>
              <td style="color: #222222; border-bottom: 1px solid #f0f0f0; padding: 10px 0;">${doctor}</td>
            </tr>
            <tr>
              <td style="font-weight: bold; color: #555555; border-bottom: 1px solid #f0f0f0; padding: 10px 0;">Date:</td>
              <td style="color: #222222; border-bottom: 1px solid #f0f0f0; padding: 10px 0;">${date}</td>
            </tr>
            <tr>
              <td style="font-weight: bold; color: #555555; border-bottom: 1px solid #f0f0f0; padding: 10px 0;">Time Slot:</td>
              <td style="color: #222222; border-bottom: 1px solid #f0f0f0; padding: 10px 0;">${time}</td>
            </tr>
            <tr>
              <td style="font-weight: bold; color: #555555; vertical-align: top; padding: 10px 0;">Message:</td>
              <td style="color: #222222; padding: 10px 0;">${message || "No Message"}</td>
            </tr>
          </table>
        </div>
        <div style="background-color: #f9f9f9; padding: 15px; text-align: center; border-top: 1px solid #eeeeee; font-size: 12px; color: #888888;">
          This is an automated notification from the Avni Hospital booking platform.
        </div>
      </div>
    `,
  };

  try {
    // Send admin email
    const adminInfo = await transporter.sendMail(adminMailOptions);
    console.log("Admin email notification sent successfully:", adminInfo.messageId);

    // 2. Email for Patient (if email is provided)
    if (email && email.trim() !== "") {
      const patientMailOptions = {
        from: `"Avni Hospital" <${process.env.EMAIL_USER}>`,
        to: email.trim(),
        subject: `Appointment Confirmed - Avni Hospital`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
            <div style="background-color: #006D5B; color: white; padding: 25px; text-align: center;">
              <h1 style="margin: 0; font-size: 26px; font-weight: bold;">Booking Confirmed!</h1>
              <p style="margin: 5px 0 0 0; opacity: 0.9;">Thank you for choosing Avni Hospital</p>
            </div>
            <div style="padding: 24px; background-color: #ffffff;">
              <p style="color: #333333; font-size: 16px; line-height: 1.5; margin-top: 0;">
                Dear <strong>${name}</strong>,
              </p>
              <p style="color: #555555; font-size: 14px; line-height: 1.5;">
                We are pleased to inform you that your appointment at Avni Hospital has been successfully scheduled. Below are the details of your visit:
              </p>
              
              <div style="background-color: #f6faf9; border-left: 4px solid #006D5B; padding: 15px; margin: 20px 0; border-radius: 4px;">
                <table cellpadding="6" style="width: 100%; border-collapse: collapse; text-align: left; font-size: 14px;">
                  <tr>
                    <td style="width: 35%; font-weight: bold; color: #555555; padding: 6px 0;">Doctor:</td>
                    <td style="color: #222222; padding: 6px 0;"><strong>${doctor}</strong></td>
                  </tr>
                  <tr>
                    <td style="font-weight: bold; color: #555555; padding: 6px 0;">Department:</td>
                    <td style="color: #222222; padding: 6px 0;">${dept}</td>
                  </tr>
                  <tr>
                    <td style="font-weight: bold; color: #555555; padding: 6px 0;">Date:</td>
                    <td style="color: #222222; padding: 6px 0;">${date}</td>
                  </tr>
                  <tr>
                    <td style="font-weight: bold; color: #555555; padding: 6px 0;">Time Slot:</td>
                    <td style="color: #222222; padding: 6px 0;">${time}</td>
                  </tr>
                </table>
              </div>

              <h4 style="color: #333333; margin-bottom: 8px;">Important Instructions:</h4>
              <ul style="color: #555555; font-size: 13px; line-height: 1.6; padding-left: 20px; margin-top: 0;">
                <li>Please arrive at least 15 minutes before your scheduled appointment time.</li>
                <li>Bring your ID card and any previous medical records or prescriptions related to your visit.</li>
                <li>If you need to reschedule or cancel your appointment, please contact the hospital desk.</li>
              </ul>

              <div style="margin-top: 30px; padding-top: 15px; border-top: 1px solid #eeeeee; text-align: center;">
                <p style="margin: 0; font-weight: bold; color: #006D5B; font-size: 14px;">Avni Hospital, Patna</p>
                <p style="margin: 5px 0 0 0; color: #777777; font-size: 12px;">📞 For support or queries, call us directly.</p>
              </div>
            </div>
            <div style="background-color: #f9f9f9; padding: 15px; text-align: center; border-top: 1px solid #eeeeee; font-size: 12px; color: #888888;">
              This is an automated confirmation email. Please do not reply directly to this message.
            </div>
          </div>
        `,
      };

      const patientInfo = await transporter.sendMail(patientMailOptions);
      console.log("Patient confirmation email sent successfully:", patientInfo.messageId);
    }

    return adminInfo;
  } catch (error) {
    console.error("Nodemailer error:", error);
    throw error;
  }
}
