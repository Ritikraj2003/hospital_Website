import { notFound } from "next/navigation";
import { publicRoutes } from "@/components/pages/routes";

export async function generateStaticParams() {
  return Object.keys(publicRoutes).map((route) => {
    if (route === "/") return { slug: [] };
    return { slug: route.replace(/^\//, "").split("/") };
  });
}

export default async function Page({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug ? `/${resolvedParams.slug.join("/")}` : "/";
  
  const Component = publicRoutes[slug];
  if (!Component) {
    notFound();
  }
  
  return <Component />;
}
