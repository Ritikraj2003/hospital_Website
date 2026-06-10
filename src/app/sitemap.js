import { publicRoutes } from "@/components/pages/routes";

export default function sitemap() {
  const baseUrl = "https://www.avnihospital.in";

  const routes = Object.keys(publicRoutes).map((route) => ({
    url: `${baseUrl}${route === "/" ? "" : route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "daily" : "weekly",
    priority: route === "/" ? 1.0 : 0.8,
  }));

  return [
    ...routes,
  ];
}
