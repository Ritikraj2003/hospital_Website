import "./globals.css";
import AmbulanceWidget from "./AmbulanceWidget";

export const metadata = {
  title: "Avni Hospital - Best Multispeciality Hospital in Patna | Best Private Hospital in Bihar",
  description: "Avni Hospital is the best multispeciality hospital in Patna, Bihar. Offering 24/7 trauma care, best doctors in Patna, advanced surgery, heart treatment, ICU critical care, and pregnancy/maternity services.",
  verification: {
    google: "wzySxLaO-8yM6ZZfRqgYzIJ6eKVQoq_gcZho-qEvyas",
  },
  keywords: [
    "Avni Hospital Patna",
    "Best Hospital for Heart Treatment in Patna",
    "Best Hospital for Surgery in Patna",
    "Best Hospital for Pregnancy Care in Patna",
    "Affordable Hospital in Patna",
    "24 Hour Hospital in Patna",
    "Hospital Near Me in Patna",
    "Best Private Hospital in Patna",
    "Best Hospital in Patna",
    "Multispeciality Hospital in Patna",
    "Hospital in Patna",
    "Best Hospital in Bihar",
    "Emergency Hospital in Patna",
    "24x7 Hospital in Patna",
    "ICU Hospital in Patna",
    "Cardiology Hospital in Patna",
    "Heart Hospital in Patna",
    "Neurology Hospital in Patna",
    "Neurosurgery Hospital in Patna",
    "Orthopedic Hospital in Patna",
    "Joint Replacement Hospital in Patna",
    "Gynecology Hospital in Patna",
    "Maternity Hospital in Patna",
    "Pediatric Hospital in Patna",
    "Child Specialist Hospital in Patna",
    "Urology Hospital in Patna",
    "Nephrology Hospital in Patna",
    "Cancer Hospital in Patna",
    "Trauma Center in Patna",
    "Critical Care Hospital in Patna",
    "Best Doctors in Patna",
    "Private Hospital in Patna"
  ],
  openGraph: {
    title: "Avni Hospital - Best Multispeciality Hospital in Patna, Bihar",
    description: "Looking for the best private hospital in Patna? Avni Hospital is a premier 24-hour hospital offering cardiology, orthopedics, neurology, urology, gynecology, and emergency critical care.",
    url: "https://www.avnihospital.in",
    siteName: "Avni Hospital",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avni Hospital - Best Multispeciality Hospital in Patna",
    description: "Affordable private hospital in Patna offering 24x7 trauma center, ICU, neurology, urology, gynecology, and cardiology care.",
  },
  alternates: {
    canonical: "https://www.avnihospital.in",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Hospital", "MedicalOrganization", "LocalBusiness"],
  "name": "Avni Hospital",
  "url": "https://www.avnihospital.in",
  "logo": "https://www.avnihospital.in/images/logo.png",
  "image": "https://www.avnihospital.in/images/image(3).svg",
  "description": "Avni Hospital is a premier multispeciality hospital in Patna, Bihar. Recognized as the best hospital in Patna for heart treatment, surgery, pregnancy care, orthopedics, neurology, urology, and 24x7 emergency critical care.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Patna",
    "addressLocality": "Patna",
    "addressRegion": "Bihar",
    "postalCode": "800026",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9931212664",
    "contactType": "Emergency and Appointments",
    "areaServed": "IN",
    "availableLanguage": ["English", "Hindi"]
  },
  "medicalSpecialty": [
    "General Surgery",
    "Gynaecology",
    "Obstetrics",
    "Emergency Care",
    "Laparoscopic Surgery",
    "Cardiology"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=block" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-slate-50 text-slate-900 antialiased m-0 p-0 relative" suppressHydrationWarning>
        {children}
        
        {/* Moving Ambulance Widget */}
        <AmbulanceWidget />
      </body>
    </html>
  );
}
