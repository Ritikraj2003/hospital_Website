import Dashboard from "./dashboard/Dashboard";
import AppointmentList from "./appointmentlist/AppointmentList";
import InquiryList from "./inquirylist/InquiryList";

export const adminRoutes = {
  "/admin": Dashboard,
  "/admin/dashboard": Dashboard,
  "/admin/appointment": AppointmentList,
  "/admin/appointments": AppointmentList,
  "/admin/inquiry": InquiryList,
  "/admin/inquiries": InquiryList,
};
