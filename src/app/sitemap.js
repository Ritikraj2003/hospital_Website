import { publicRoutes } from "@/components/pages/routes";

export default function sitemap() {
  const baseUrl = "https://www.avnihospital.in";

  const routes = Object.keys(publicRoutes).map((route) => ({
    url: `${baseUrl}${route === "/" ? "" : route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "daily" : "weekly",
    priority: route === "/" ? 1.0 : (route === "/services" || route === "/about" || route === "/contact" || route === "/insurance-cashless-facility" ? 0.9 : 0.8),
  }));

  // We no longer need to manually append services because they are already 
  // explicitly defined in publicRoutes!
  return routes;
}
