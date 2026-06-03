"use client";

import React, { useState } from "react";

export default function Doctors({ openAppointmentModal }) {
  const [activeTab, setActiveTab] = useState("all");

  const doctorsList = [
    {
      name: "Dr. Manohar CV",
      dept: "Cardiology",
      img: "/images/doctor-preparing-consult1.svg",
      experience: "15+ Years",
      education: "MD, DM (Cardiology)"
    },
    {
      name: "Dr. Anika Parrikar",
      dept: "Gynaecology",
      img: "/images/front-view-laughing-female-doctor-holding-stethoscope-her-hands-standing-yellow-background1.svg",
      experience: "12+ Years",
      education: "MS (OBG), Fellowship in Reproductive Medicine"
    },
    {
      name: "Dr. Prashanth A",
      dept: "Neurology",
      img: "/images/smiling-young-male-doctor-wearing-stethoscope-medical-gown-isolated-white-wall1.svg",
      experience: "14+ Years",
      education: "MD, DM (Neurology)"
    },
    {
      name: "Dr. Rakshith M",
      dept: "Orthopaedics",
      img: "/images/doctor-preparing-consult1.svg",
      experience: "10+ Years",
      education: "MS (Orthopaedics), MCh"
    },
    {
      name: "Dr. Nethra N",
      dept: "Pediatrics",
      img: "/images/front-view-laughing-female-doctor-holding-stethoscope-her-hands-standing-yellow-background1.svg",
      experience: "11+ Years",
      education: "MD (Pediatrics), Fellowship in Neonatology"
    },
    {
      name: "Dr. Kumarswamy",
      dept: "Urology",
      img: "/images/smiling-young-male-doctor-wearing-stethoscope-medical-gown-isolated-white-wall1.svg",
      experience: "18+ Years",
      education: "MS, MCh (Urology)"
    },
    {
      name: "Dr. D J Kamath",
      dept: "Nephrology",
      img: "/images/doctor-preparing-consult1.svg",
      experience: "20+ Years",
      education: "MD, DM (Nephrology)"
    },
    {
      name: "Dr. Santosh Subudhi",
      dept: "Oncology",
      img: "/images/smiling-young-male-doctor-wearing-stethoscope-medical-gown-isolated-white-wall1.svg",
      experience: "13+ Years",
      education: "MS, MCh (Surgical Oncology)"
    }
  ];

  const filteredDocs = activeTab === "all" ? doctorsList : doctorsList.filter(d => d.dept === activeTab);

  const departments = ["all", "Cardiology", "Gynaecology", "Neurology", "Orthopaedics", "Pediatrics"];

  return (
    <div className="our_doctors" id="our-doctor">
      <div className="container">
        <h2 className="doctors_heading fw_700 fs_32">Our Specialist Doctors</h2>
        <p className="text-center text-muted mb-4 max-width-600 mx-auto fs_14">
          Demo Hospital is supported by a multidisciplinary team of highly experienced specialist doctors, delivering advanced diagnostics, surgical expertise, and evidence-based clinical care.
        </p>

        {/* Department filter bar for doctors */}
        <div className="d-flex justify-content-center flex-wrap gap-2 mb-5">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setActiveTab(dept)}
              className={`btn btn-sm px-3 py-1.5 rounded fw-medium transition ${
                activeTab === dept 
                  ? "text-white" 
                  : "bg-white text-secondary border border-light-subtle hover-bg-light"
              }`}
              style={{
                backgroundColor: activeTab === dept ? "#006D5B" : "transparent",
                borderColor: activeTab === dept ? "#006D5B" : "#dee2e6",
                fontSize: "12px",
                textTransform: "capitalize"
              }}
            >
              {dept === "all" ? "All Specialists" : dept}
            </button>
          ))}
        </div>

        {/* Doctor Grid */}
        <div className="row g-4 justify-content-center">
          {filteredDocs.map((doc, idx) => (
            <div key={idx} className="col-xl-3 col-lg-4 col-sm-6 d-flex">
              <div 
                className="card w-100 shadow-sm border border-light-subtle hover-lift transition d-flex flex-column"
                style={{ borderRadius: "10px", overflow: "hidden" }}
              >
                {/* Doctor Image Container */}
                <div 
                  className="position-relative d-flex justify-content-center align-items-end" 
                  style={{ backgroundColor: "#F2F9F8", height: "260px" }}
                >
                  <img
                    src={doc.img}
                    alt={doc.name}
                    className="w-100 h-100 object-fit-cover transition-transform duration-500 hover-scale-up"
                    style={{ objectPosition: "top" }}
                  />
                  <span 
                    className="position-absolute top-0 end-0 m-3 badge bg-white text-dark shadow-sm fw-bold border border-light-subtle px-2 py-1.5"
                    style={{ fontSize: "11px", color: "#006D5B !important" }}
                  >
                    {doc.experience} Exp
                  </span>
                </div>

                {/* Doctor Bio Card Details */}
                <div className="card-body p-3 d-flex flex-column justify-content-between flex-grow-1">
                  <div className="mb-2">
                    <span 
                      className="d-inline-block px-2 py-1.5 rounded font-semibold mb-2"
                      style={{ backgroundColor: "#E4F1EF", color: "#006D5B", fontSize: "11px", fontWeight: "bold" }}
                    >
                      {doc.dept}
                    </span>
                    <h5 className="card-title fw-bold text-dark fs-6 m-0 mb-1">{doc.name}</h5>
                    <span className="card-text text-muted" style={{ fontSize: "12px" }}>
                      {doc.education}
                    </span>
                  </div>
                  
                  <button 
                    onClick={openAppointmentModal}
                    className="btn btn-outline-primary btn-sm w-100 mt-2 fw-medium transition"
                    style={{ 
                      borderColor: "#006D5B", 
                      color: "#006D5B", 
                      fontSize: "12px",
                      borderRadius: "6px"
                    }}
                  >
                    Consult Doctor
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
