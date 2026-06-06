import Dashboard from "./dashboard/Dashboard";
import AppointmentList from "./appointmentlist/AppointmentList";

export const adminRoutes = {
  "/admin": Dashboard,
  "/admin/dashboard": Dashboard,
  "/admin/appointment": AppointmentList,
  "/admin/appointments": AppointmentList,
};
