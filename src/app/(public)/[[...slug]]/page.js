import { notFound } from "next/navigation";
import { publicRoutes } from "@/components/pages/routes";
import ServicesPage from "@/components/pages/services/Services";
import ServicesList from "@/components/pages/services/ServicesList";

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
  },
  "/services": {
    title: "Services at Avni Hospital | Comprehensive Medical Care",
    description: "Explore the wide range of specialized medical services and treatments offered at Avni Hospital, Patna.",
  }
};

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slugArray = resolvedParams.slug || [];
  const slug = slugArray.length > 0 ? `/${slugArray.join("/")}` : "/";
  
  // Custom meta for dynamic service pages
  if (slug.startsWith("/services/") && slugArray.length === 2) {
    const serviceName = slugArray[1].split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    return {
      title: `${serviceName} | Avni Hospital Services`,
      description: `Learn more about our specialized ${serviceName} treatments and care at Avni Hospital, Patna.`,
      alternates: { canonical: `https://www.avnihospital.in${slug}` },
      openGraph: { title: `${serviceName} | Avni Hospital`, url: `https://www.avnihospital.in${slug}` },
      twitter: { title: `${serviceName} | Avni Hospital` }
    };
  }

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
  const baseParams = Object.keys(publicRoutes).map((route) => {
    if (route === "/") return { slug: [] };
    return { slug: route.replace(/^\//, "").split("/") };
  });

  // Adding dynamic service paths
  const serviceIds = [
    "general-medicine", "cardiology", "neuro-medicine", "orthopedic", 
    "pediatrics", "ent", "psychiatry", "dental", "plastic-surgery", "oncology"
  ];

  const serviceParams = serviceIds.map(id => ({ slug: ["services", id] }));
  serviceParams.push({ slug: ["services"] });

  return [...baseParams, ...serviceParams];
}

export default async function Page({ params }) {
  const resolvedParams = await params;
  const slugArray = resolvedParams.slug || [];
  const slug = slugArray.length > 0 ? `/${slugArray.join("/")}` : "/";
  
  // Custom routing logic for services
  let Component;
  let serviceId = null;

  if (slug === "/services") {
    Component = ServicesList;
  } else if (slug.startsWith("/services/") && slugArray.length === 2) {
    Component = ServicesPage;
    serviceId = slugArray[1];
  } else {
    Component = publicRoutes[slug];
  }

  if (!Component) {
    notFound();
  }
  
  // Add Breadcrumb schema dynamically for inner pages
  let jsonLd = null;
  if (slug !== "/") {
    const titleName = slug === "/about" ? "About Us" : slug === "/contact" ? "Contact Us" : slug === "/services" ? "Services" : (slugArray[1] ? slugArray[1].replace(/-/g, ' ') : slug.replace("/", ""));
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
          "name": titleName.replace(/\b\w/g, l => l.toUpperCase()),
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
      <Component serviceId={serviceId} />
    </>
  );
}
