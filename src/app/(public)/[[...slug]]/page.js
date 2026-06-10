import { notFound } from "next/navigation";
import { publicRoutes } from "@/components/pages/routes";

const routeMetadata = {
  "/": {
    title: "Avni Hospital - Best Multispeciality Hospital in Patna | Best Private Hospital in Bihar",
    description: "Avni Hospital is the best multispeciality hospital in Patna, Bihar. Offering 24/7 trauma care, best doctors in Patna, advanced surgery, heart treatment, ICU critical care, and pregnancy/maternity services.",
  },
  "/about": {
    title: "About Avni Hospital | Top Medical Facilities & Best Doctors in Patna",
    description: "Learn about Avni Hospital's mission, our highly experienced doctors, and state-of-the-art diagnostic facilities in Patna, Bihar.",
  },
  "/contact": {
    title: "Contact Avni Hospital | 24x7 Emergency & Appointment Booking",
    description: "Get in touch with Avni Hospital for appointments, inquiries, or 24/7 emergency care in Patna. Find our location and contact details.",
  }
};

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug ? `/${resolvedParams.slug.join("/")}` : "/";
  
  const meta = routeMetadata[slug] || routeMetadata["/"];
  
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `https://www.avnihospital.in${slug === "/" ? "" : slug}`,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://www.avnihospital.in${slug === "/" ? "" : slug}`,
    },
    twitter: {
      title: meta.title,
      description: meta.description,
    }
  };
}

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
  
  // Add Breadcrumb schema dynamically for inner pages
  let jsonLd = null;
  if (slug !== "/") {
    const titleName = slug === "/about" ? "About Us" : slug === "/contact" ? "Contact Us" : slug.replace("/", "");
    jsonLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.avnihospital.in"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": titleName,
          "item": `https://www.avnihospital.in${slug}`
        }
      ]
    };
  }
  
  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <Component />
    </>
  );
}
