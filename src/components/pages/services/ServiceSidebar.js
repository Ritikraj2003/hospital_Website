"use client";
import React, { useState } from "react";
import AppointmentModal from "@/components/AppointmentModal";

export default function ServiceSidebar() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="rounded-4 p-4 text-white shadow-lg sticky-top" style={{ top: "100px", backgroundColor: "#006D5B" }}>
        <h3 className="fw-bold mb-3 border-bottom border-light pb-2">Emergency Care</h3>
        <p className="mb-4 text-white-50 fs_14">
          For severe medical emergencies in Patna, Avni Hospital provides 24/7 ambulance and trauma care services.
        </p>
        <a href="tel:1066" className="btn btn-light w-100 fw-bold py-3 mb-3 rounded-3 shadow-sm d-flex align-items-center justify-content-center gap-2 fs_18" style={{ color: "#006D5B" }}>
          <span>📞</span> Call 1066
        </a>
        <a href="tel:+919931212664" className="btn btn-outline-light w-100 fw-bold py-2 rounded-3 d-flex align-items-center justify-content-center gap-2">
          <span>🚑</span> Ambulance Service
        </a>
        
        <div className="mt-4 pt-4 border-top border-light">
          <h4 className="fw-bold mb-3 fs_18">Hospital Timings</h4>
          <ul className="list-unstyled mb-0 text-white-50">
            <li className="d-flex justify-content-between mb-2 pb-2 border-bottom border-secondary">
              <span>Emergency:</span> <span className="fw-bold text-white">24/7 Open</span>
            </li>
            <li className="d-flex justify-content-between">
              <span>OPD:</span> <span className="fw-bold text-white">9:00 AM - 8:00 PM</span>
            </li>
          </ul>
        </div>

        <div className="mt-4 pt-4 border-top border-light text-center">
          <h4 className="fw-bold mb-3 fs_18">Need Expert Advice?</h4>
          <button 
            onClick={() => setModalOpen(true)}
            className="btn btn-warning w-100 fw-bold py-2 rounded-3 text-dark shadow"
          >
            Book a Consultation
          </button>
        </div>
      </div>
      <AppointmentModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
