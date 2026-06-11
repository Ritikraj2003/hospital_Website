"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import AppointmentModal from "@/components/AppointmentModal";

const servicesList = [
  { id: "general-medicine", title: "General Medicine", subtitle: "Best physicians for comprehensive healthcare in Patna.", image: "/images/image(1).jpg" },
  { id: "cardiology", title: "Cardiology", subtitle: "Top cardiology hospital in Patna for advanced heart care.", image: "/images/image(4).jpg" },
  { id: "neuro-medicine", title: "Neuro Medicine", subtitle: "Expert neurologists for brain & spine care in Bihar.", image: "/images/image(7).jpg" },
  { id: "orthopedic", title: "Orthopedic", subtitle: "Best orthopedic hospital in Patna for bone & joint treatments.", image: "/images/image(10).jpg" },
  { id: "pediatrics", title: "Pediatrics", subtitle: "Top child specialists providing compassionate care in Patna.", image: "/images/image(13).jpg" },
  { id: "ent", title: "ENT", subtitle: "Advanced ENT specialist clinic & hospital in Patna.", image: "/images/image(16).jpg" },
  { id: "psychiatry", title: "Psychiatry", subtitle: "Leading mental health and well-being center in Bihar.", image: "/images/image(19).jpg" },
  { id: "dental", title: "Dental", subtitle: "Best dental clinic in Patna for complete oral care.", image: "/images/image(22).jpg" },
  { id: "plastic-surgery", title: "Plastic Surgery", subtitle: "Top reconstructive and aesthetic surgery in Patna.", image: "/images/image(25).jpg" },
  { id: "oncology", title: "Oncology", subtitle: "Comprehensive cancer care by leading oncologists in Patna.", image: "/images/image(3).jpg" }
];

export default function ServicesList() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="d-flex flex-column min-h-screen">
      <Header openAppointmentModal={() => setModalOpen(true)} />
      <main className="flex-grow">
        
        {/* Hero Section for Services List */}
        <section className="position-relative overflow-hidden" style={{ height: "40vh", minHeight: "300px", backgroundColor: "#000" }}>
          <div 
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{ 
              backgroundImage: `linear-gradient(rgba(0, 50, 40, 0.7), rgba(0, 0, 0, 0.5)), url(/images/image(12).jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          ></div>
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center text-center">
            <div className="container text-white">
              <h1 className="fw-bold display-4 mb-3" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
                Best Multispeciality Hospital in Patna
              </h1>
              <p className="lead fw-light" style={{ maxWidth: "800px", margin: "0 auto" }}>
                Avni Hospital is a leading multi super-speciality and trauma center in Patna, Bihar, offering world-class healthcare, advanced diagnostics, and 24x7 emergency care.
              </p>
            </div>
          </div>
        </section>

        <section className="py-5 bg-light">
          <div className="container py-5">
            <div className="text-center mb-5">
              <span className="badge bg-primary-color mb-2 px-3 py-2 fs_14 rounded-pill shadow-sm">Top Medical Facilities in Bihar</span>
              <h2 className="fw-bold text-dark fs_32">Explore Our Specialities</h2>
            </div>
            
            <div className="row g-4">
              {servicesList.map((service) => (
                <div key={service.id} className="col-lg-4 col-md-6">
                  <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden" style={{ transition: "transform 0.3s ease, box-shadow 0.3s ease" }}>
                    <div className="position-relative" style={{ height: "200px" }}>
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-100 h-100 object-fit-cover" 
                      />
                      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)" }}></div>
                      <h4 className="card-title fw-bold text-white position-absolute bottom-0 start-0 m-3 mb-2">{service.title}</h4>
                    </div>
                    <div className="card-body bg-white p-4 d-flex flex-column align-items-start">
                      <p className="text-muted fs_14 mb-4" style={{ minHeight: "45px" }}>
                        {service.subtitle}
                      </p>
                      <Link href={`/services/${service.id}`} className="btn btn-outline-primary mt-auto rounded-pill px-4 fw-medium w-100">
                        View Details →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer openAppointmentModal={() => setModalOpen(true)} />
      <AppointmentModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
