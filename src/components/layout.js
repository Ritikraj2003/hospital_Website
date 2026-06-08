import "./globals.css";
import AmbulanceWidget from "./AmbulanceWidget";

export const metadata = {
  title: "Avni Hospital - Best Multispeciality Hospital in Patna, Bihar",
  description: "Avni Hospital is a premier multispeciality hospital in Patna offering expert care in Laparoscopic Surgery, Gynaecology, Emergency Care, and more. 24/7 Trauma Care.",
  keywords: ["Avni Hospital Patna", "Best Hospital in Patna", "Multispeciality Hospital Patna", "Laparoscopic Surgeon Patna", "Gynaecologist in Patna", "Emergency Care Patna"],
  openGraph: {
    title: "Avni Hospital - Best Multispeciality Hospital in Patna",
    description: "Avni Hospital is a premier multispeciality hospital in Patna offering expert care in Laparoscopic Surgery, Gynaecology, Emergency Care, and more.",
    url: "https://www.avnihospital.in",
    siteName: "Avni Hospital",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avni Hospital - Best Multispeciality Hospital in Patna",
    description: "Top-tier Laparoscopic Surgery, Gynaecology, and 24/7 Emergency Care in Patna.",
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
  "description": "Avni Hospital is a premier multispeciality hospital in Patna offering expert care in Laparoscopic Surgery, Gynaecology, Emergency Care, and more.",
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
