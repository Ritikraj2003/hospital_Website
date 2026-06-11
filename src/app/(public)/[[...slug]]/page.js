import { notFound } from "next/navigation";
import { publicRoutes } from "@/components/pages/routes";
import ServicesPage from "@/components/pages/services/Services";
import ServicesList from "@/components/pages/services/ServicesList";
import { servicesData } from "@/lib/servicesData";

const routeMetadata = {
  "/": {
    title: "Avni Hospital - Best Multispeciality Hospital in Patna | Best Private Hospital in Bihar",
    description: "Avni Hospital is the best multispeciality hospital in Patna, Bihar. Offering 24/7 trauma care, best doctors in Patna, advanced surgery, heart treatment, ICU critical care, and pregnancy/maternity services.",
  },
  "/about": {
    title: "About Avni Hospital | Top 10 Hospital in Patna & Best Doctors",
    description: "Learn about Avni Hospital's mission, our highly experienced doctors, and why we are recognized as the best hospital in Patna, Bihar.",
  },
  "/contact": {
    title: "Contact Avni Hospital | 24x7 Emergency & Appointment Booking",
    description: "Get in touch with Avni Hospital for appointments, inquiries, or 24/7 emergency care in Patna. Find our location and contact details.",
  },
  "/services": {
    title: "Services at Avni Hospital | Top Service Provider Hospital in Patna",
    description: "Explore the wide range of specialized medical services and treatments offered at Avni Hospital, ranked among the top 10 private hospitals in Patna.",
  },
  "/insurance-cashless-facility": {
    title: "Best Insurance Hospital in Patna | Cashless TPA Facility | Avni Hospital",
    description: "Looking for the best insurance hospital in Patna? Avni Hospital, one of the top 10 hospitals in Patna, offers 24/7 cashless treatment and fast TPA claim support.",
  }
};

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slugArray = resolvedParams.slug || [];
  const slug = slugArray.length > 0 ? `/${slugArray.join("/")}` : "/";
  
  // Custom meta for dynamic service pages
  let serviceId = null;
  if (slug.startsWith("/services/") && slugArray.length === 2) {
    serviceId = slugArray[1];
  } else if (slugArray.length === 1 && servicesData[slugArray[0]]) {
    // Support for root level service urls
    serviceId = slugArray[0];
  }

  if (serviceId && servicesData[serviceId]) {
    const service = servicesData[serviceId];
    return {
      title: service.seoTitle,
      description: service.description,
      keywords: service.keywords,
      alternates: { canonical: `https://www.avnihospital.in/services/${serviceId}` },
      openGraph: { 
        title: service.seoTitle, 
        description: service.description,
        url: `https://www.avnihospital.in/services/${serviceId}`,
        type: 'website',
        siteName: 'Avni Hospital'
      },
      twitter: { 
        card: 'summary_large_image',
        title: service.seoTitle,
        description: service.description
      }
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
  const serviceIds = Object.keys(servicesData);

  // Both /services/:id and /:id for backwards compatibility or new SEO structure
  const serviceParams = serviceIds.map(id => ({ slug: ["services", id] }));
  const rootServiceParams = serviceIds.map(id => ({ slug: [id] }));
  
  serviceParams.push({ slug: ["services"] });

  return [...baseParams, ...serviceParams, ...rootServiceParams];
}

export default async function Page({ params }) {
  const resolvedParams = await params;
  const slugArray = resolvedParams.slug || [];
  const slug = slugArray.length > 0 ? `/${slugArray.join("/")}` : "/";
  
  let Component;
  let serviceId = null;

  if (slug === "/services") {
    Component = ServicesList;
  } else if (slug.startsWith("/services/") && slugArray.length === 2) {
    Component = ServicesPage;
    serviceId = slugArray[1];
  } else if (slugArray.length === 1 && servicesData[slugArray[0]]) {
    Component = ServicesPage;
    serviceId = slugArray[0];
  } else {
    Component = publicRoutes[slug];
  }

  if (!Component) {
    notFound();
  }
  
  const schemas = [];

  // Breadcrumb Schema
  if (slug !== "/") {
    let titleName = slug.replace("/", "").replace(/-/g, " ");
    if (serviceId && servicesData[serviceId]) {
       titleName = servicesData[serviceId].title;
    } else if (slug === "/about") {
       titleName = "About Us";
    } else if (slug === "/contact") {
       titleName = "Contact Us";
    }

    schemas.push({
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
    });
  }

  // Service Specific Schemas (YMYL / E-E-A-T)
  if (serviceId && servicesData[serviceId]) {
    const service = servicesData[serviceId];
    
    // MedicalClinic & MedicalSpecialty Schema
    schemas.push({
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "name": `Avni Hospital - ${service.title} Department`,
      "url": `https://www.avnihospital.in/${serviceId}`,
      "logo": "https://www.avnihospital.in/images/logo.png",
      "image": `https://www.avnihospital.in${service.images?.[0] || '/images/default.jpg'}`,
      "description": service.description,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Patna",
        "addressRegion": "Bihar",
        "addressCountry": "IN"
      },
      "medicalSpecialty": {
        "@type": "MedicalSpecialty",
        "name": service.title
      },
      "telephone": "+919931212664"
    });

    // FAQ Schema
    if (service.faqs && service.faqs.length > 0) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": service.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      });
    }

    // Physician Schema
    if (service.specialists && service.specialists.length > 0) {
      service.specialists.forEach(doc => {
        schemas.push({
          "@context": "https://schema.org",
          "@type": "Physician",
          "name": doc.name,
          "medicalSpecialty": {
            "@type": "MedicalSpecialty",
            "name": service.title
          },
          "worksFor": {
            "@type": "Hospital",
            "name": "Avni Hospital"
          }
        });
      });
    }
  }
  
  return (
    <>
      {schemas.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.length === 1 ? schemas[0] : schemas) }}
        />
      )}
      <Component serviceId={serviceId} />
    </>
  );
}
