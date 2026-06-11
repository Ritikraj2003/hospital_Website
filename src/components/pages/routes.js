import Home from "./home/home";
import AboutPage from "./about/about";
import ContactPage from "./contact/contact";
import ServicesList from "./services/ServicesList";
import ServicesPage from "./services/Services";
import InsurancePage from "./insurance/InsurancePage";

export const publicRoutes = {
  "/": Home,
  "/about": AboutPage,
  "/contact": ContactPage,
  "/insurance-cashless-facility": InsurancePage,
  "/services": ServicesList,
  "/services/general-medicine": ServicesPage,
  "/services/cardiology": ServicesPage,
  "/services/neuro-medicine": ServicesPage,
  "/services/orthopedic": ServicesPage,
  "/services/pediatrics": ServicesPage,
  "/services/ent": ServicesPage,
  "/services/psychiatry": ServicesPage,
  "/services/dental": ServicesPage,
  "/services/plastic-surgery": ServicesPage,
  "/services/oncology": ServicesPage,
};
