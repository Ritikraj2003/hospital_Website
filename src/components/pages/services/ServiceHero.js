"use client";
import React, { useState, useEffect } from "react";
import AppointmentModal from "@/components/AppointmentModal";

export default function ServiceHero({ service }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!service.images || service.images.length === 0) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % service.images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [service.images]);

  const images = service.images || ["/images/default-service.jpg"];

  return (
    <>
      <section className="position-relative overflow-hidden" style={{ height: "70vh", minHeight: "500px", backgroundColor: "#000" }}>
        {images.map((img, idx) => (
          <div
            key={idx}
            className="position-absolute top-0 start-0 w-100 h-100 transition-opacity"
            style={{
              opacity: currentSlide === idx ? 1 : 0,
              transition: "opacity 1s ease-in-out",
              backgroundImage: `linear-gradient(rgba(0, 50, 40, 0.7), rgba(0, 0, 0, 0.5)), url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          ></div>
        ))}

        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center">
          <div className="container">
            <div className="row align-items-center g-5">
              {/* Left Text */}
              <div className="col-lg-7 text-white">
                <span className="badge bg-primary-color mb-3 px-3 py-2 fs_14 rounded-pill shadow-sm" style={{ backgroundColor: "#006D5B" }}>
                  Avni Hospital, Patna
                </span>
                <div className="fw-bold display-4 mb-3" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
                  {service.title}
                </div>
                <p className="lead fw-light mb-4" style={{ maxWidth: "700px" }}>
                  {service.description}
                </p>
                <button
                  onClick={() => setModalOpen(true)}
                  className="btn btn-lg btn-light fw-bold px-4 py-2 rounded-pill shadow"
                  style={{ color: "#006D5B" }}
                >
                  Book Appointment
                </button>
              </div>

              {/* Right Insurance Card */}
              <div className="col-lg-5 d-none d-lg-block">
                <div style={{ background: "rgba(255, 255, 255, 0.95)", backdropFilter: "blur(10px)", padding: "32px", borderRadius: "16px", boxShadow: "0 12px 40px rgba(0, 0, 0, 0.3)", maxWidth: "420px", marginLeft: "auto", borderTop: "5px solid #005344" }}>
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <span style={{ fontSize: "28px" }}>🛡️</span>
                    <h3 style={{ fontSize: "22px", fontWeight: "800", color: "#005344", margin: 0 }}>Cashless Insurance</h3>
                  </div>
                  <p style={{ fontSize: "15px", color: "#404947", marginBottom: "20px", lineHeight: "1.6" }}>
                    Focus on your recovery while we handle the paperwork. Avni Hospital is empaneled with all major health insurance providers (TPAs) for a seamless, 100% cashless hospitalization experience.
                  </p>
                  
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    <span className="badge bg-light text-dark border p-2">Star Health</span>
                    <span className="badge bg-light text-dark border p-2">HDFC ERGO</span>
                    <span className="badge bg-light text-dark border p-2">ICICI Lombard</span>
                    <span className="badge bg-light text-dark border p-2">+ 20 More</span>
                  </div>

                  <a href="/insurance-cashless-facility" className="btn w-100 fw-bold p-3" style={{ backgroundColor: "#005344", color: "#fff", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                    View All Insurance Partners
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Slider Indicators */}
        <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4 d-flex gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`rounded-circle border-0 ${currentSlide === idx ? "bg-white" : "bg-white bg-opacity-50"}`}
              style={{ width: "12px", height: "12px", transition: "all 0.3s" }}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>
      <AppointmentModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
