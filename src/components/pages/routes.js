import Home from "./home/home";
import AboutPage from "./about/about";
import ContactPage from "./contact/contact";
import ServicesList from "./services/ServicesList";
import ServicesPage from "./services/Services";
import InsurancePage from "./insurance/InsurancePage";
import DoctorsPage from "./doctors/DoctorsPage";

export const publicRoutes = {
  "/": Home,
  "/about": AboutPage,
  "/contact": ContactPage,
  "/insurance-cashless-facility": InsurancePage,
  "/doctors": DoctorsPage,
  "/services": ServicesList,
  "/services/general-physician": ServicesPage,
  "/services/neurologist-physician": ServicesPage,
  "/services/urologist": ServicesPage,
  "/services/gynecologist": ServicesPage,
  "/services/cardiologist": ServicesPage,
  "/services/orthopaedics": ServicesPage,
  "/services/general-surgeon": ServicesPage,
  "/services/paediatric-surgeon": ServicesPage,
  "/services/anaesthesia": ServicesPage,
  "/services/dermatologist": ServicesPage,
  "/services/cosmetic-surgery": ServicesPage,
  "/services/general-medicine": ServicesPage,
  "/services/paediatrician": ServicesPage,
  "/services/plastic-surgeon": ServicesPage,
  "/services/psychiatrist": ServicesPage,
  "/services/pulmonologist": ServicesPage,
  "/services/gastrologist": ServicesPage,
  "/services/neuro-surgeon": ServicesPage,
  "/services/oncologist-surgeon": ServicesPage,
  "/services/oncologist": ServicesPage,
  "/services/nephrologist": ServicesPage,
  "/services/ent": ServicesPage,
  "/services/junior-resident": ServicesPage,
};
