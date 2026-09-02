"use client";

import React, { useState } from "react";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import AppointmentModal from "@/components/AppointmentModal";
import { allDoctors } from "@/lib/doctorsData";
import "@/components/pages/home/home.css"; // Reuse card styles

export default function DoctorsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeDept, setActiveDept] = useState("All");
  const openAppointmentModal = () => setIsModalOpen(true);
  const closeAppointmentModal = () => setIsModalOpen(false);

  const groupedDoctors = allDoctors.reduce((acc, doc) => {
    if (!acc[doc.dept]) acc[doc.dept] = [];
    acc[doc.dept].push(doc);
    return acc;
  }, {});

  const departments = ["All", ...Object.keys(groupedDoctors)];
  const displayedDepartments = activeDept === "All" ? Object.keys(groupedDoctors) : [activeDept];

  return (
    <>
      <Header />
      <main className="flex-grow">
        {/* Page Hero & Filter Section */}
        <section style={{ background: "linear-gradient(135deg, #F0F4F8 0%, #FFF3E0 100%)", padding: "40px 0 30px", borderBottom: "1px solid #EAEAEA" }}>
          <div className="container-fluid" style={{ maxWidth: "1300px" }}>
            <div className="text-center mb-4">
              <h1 className="hp_section_h2" style={{ color: "#0A3D91", fontSize: "2.4rem", marginBottom: "10px", fontWeight: "800" }}>Our Specialist Doctors</h1>
              <p className="hp_section_sub" style={{ maxWidth: "750px", margin: "0 auto", fontSize: "1rem", color: "#555" }}>
                Avni Hospital takes pride in its extensive team of over 60 highly specialized and experienced doctors across various medical fields. Explore our departments below.
              </p>
            </div>
            
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center", maxWidth: "100%", margin: "0 auto" }}>
              {departments.map((dept, index) => (
                <button 
                  key={index} 
                  onClick={() => setActiveDept(dept)}
                  style={{
                    padding: "6px 16px", 
                    borderRadius: "50px", 
                    border: `1px solid ${activeDept === dept ? "#0A3D91" : "#D1D5DB"}`,
                    background: activeDept === dept ? "#0A3D91" : "#fff",
                    color: activeDept === dept ? "#fff" : "#4B5563",
                    fontWeight: activeDept === dept ? "600" : "500",
                    fontSize: "0.85rem",
                    transition: "all 0.2s ease-in-out",
                    cursor: "pointer",
                    boxShadow: activeDept === dept ? "0 4px 6px rgba(10, 61, 145, 0.2)" : "none"
                  }}
                  onMouseOver={(e) => {
                    if (activeDept !== dept) {
                      e.target.style.background = "#F3F4F6";
                      e.target.style.borderColor = "#9CA3AF";
                    }
                  }}
                  onMouseOut={(e) => {
                    if (activeDept !== dept) {
                      e.target.style.background = "#fff";
                      e.target.style.borderColor = "#D1D5DB";
                    }
                  }}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Doctors Grid Section */}
        <section className="hp_doctors_section" style={{ background: "#fff", paddingTop: "60px", paddingBottom: "80px" }}>
          <div className="container">

            {displayedDepartments.map((dept, index) => (
              <div key={index} className="mb-5">
                <h2 className="mb-4" style={{ borderBottom: "3px solid #F57C00", display: "inline-block", paddingBottom: "8px", color: "#0A3D91", fontWeight: "700" }}>
                  {dept}
                </h2>
                <div className="hp_doctors_grid">
                  {groupedDoctors[dept].map((doc, idx) => (
                    <div key={idx} className="hp_doctor_card">
                      <div className="hp_doctor_img_wrap">
                        <img src={doc.img} alt={doc.name} className="hp_doctor_img" />
                        {doc.exp && <div className="hp_doctor_exp_badge">{doc.exp} Exp</div>}
                      </div>
                      <div className="hp_doctor_body">
                        <span className="hp_doctor_dept">{doc.dept}</span>
                        <h3 className="hp_doctor_name">{doc.name}</h3>
                        <p className="hp_doctor_edu" style={{ minHeight: "40px" }}>{doc.edu}</p>
                        <button onClick={openAppointmentModal} className="hp_doctor_btn">Consult Doctor</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      {isModalOpen && <AppointmentModal onClose={closeAppointmentModal} />}
    </>
  );
}
