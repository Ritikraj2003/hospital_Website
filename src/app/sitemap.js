import { publicRoutes } from "@/components/pages/routes";

export default function sitemap() {
  const baseUrl = "https://www.avnihospital.in";

  const routes = Object.keys(publicRoutes).map((route) => ({
    url: `${baseUrl}${route === "/" ? "" : route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "daily" : "weekly",
    priority: route === "/" ? 1.0 : 0.8,
  })); 

  const serviceIds = [
    "general-medicine", "cardiology", "neuro-medicine", "orthopedic", 
    "pediatrics", "ent", "psychiatry", "dental", "plastic-surgery", "oncology"
  ];

  const servicesMainRoute = {
    url: `${baseUrl}/services`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  };

  const serviceRoutes = serviceIds.map((id) => ({
    url: `${baseUrl}/services/${id}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    ...routes,
    servicesMainRoute,
    ...serviceRoutes,
  ];
}
