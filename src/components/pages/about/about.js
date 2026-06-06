"use client";

import React, { useState } from "react";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import AppointmentModal from "@/components/AppointmentModal";
import Link from "next/link";
import "./about.css";

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [staffTab, setStaffTab] = useState("doctors");

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  // Specialist Doctors List
  const doctorsList = [
    {
      name: "Dr. Manohar CV",
      role: "Co-Founder & Chief Medical Officer",
      dept: "Cardiology",
      img: "/images/doctor-preparing-consult1.svg",
      experience: "15+ Years",
      education: "MD, DM (Cardiology)"
    },
    {
      name: "Dr. Anika Parrikar",
      role: "Senior Consultant",
      dept: "Gynaecology",
      img: "/images/front-view-laughing-female-doctor-holding-stethoscope-her-hands-standing-yellow-background1.svg",
      experience: "12+ Years",
      education: "MS (OBG), Fellowship in Reproductive Medicine"
    },
    {
      name: "Dr. Prashanth A",
      role: "Senior Consultant",
      dept: "Neurology",
      img: "/images/smiling-young-male-doctor-wearing-stethoscope-medical-gown-isolated-white-wall1.svg",
      experience: "14+ Years",
      education: "MD, DM (Neurology)"
    },
    {
      name: "Dr. Rakshith M",
      role: "Consultant Surgeon",
      dept: "Orthopaedics",
      img: "/images/doctor-preparing-consult1.svg",
      experience: "10+ Years",
      education: "MS (Orthopaedics), MCh"
    },
    {
      name: "Dr. Nethra N",
      role: "Consultant",
      dept: "Pediatrics",
      img: "/images/front-view-laughing-female-doctor-holding-stethoscope-her-hands-standing-yellow-background1.svg",
      experience: "11+ Years",
      education: "MD (Pediatrics), Fellowship in Neonatology"
    },
    {
      name: "Dr. Kumarswamy",
      role: "Consultant",
      dept: "Urology",
      img: "/images/smiling-young-male-doctor-wearing-stethoscope-medical-gown-isolated-white-wall1.svg",
      experience: "18+ Years",
      education: "MS, MCh (Urology)"
    }
  ];

  // Nursing Staff List
  const nursingList = [
    {
      name: "Sister Mercy Jose",
      role: "Chief Nursing Officer",
      dept: "Nursing Administration",
      img: "/images/front-view-laughing-female-doctor-holding-stethoscope-her-hands-standing-yellow-background1.svg",
      experience: "18+ Years",
      education: "B.Sc Nursing, PG Dip in Critical Care"
    },
    {
      name: "Sister Priya Varghese",
      role: "ICU Head Nurse",
      dept: "Critical Care",
      img: "/images/front-view-laughing-female-doctor-holding-stethoscope-her-hands-standing-yellow-background1.svg",
      experience: "10+ Years",
      education: "B.Sc Nursing, Advanced Critical Care"
    },
    {
      name: "Mr. Rajesh Kumar",
      role: "Senior Lab Technician",
      dept: "Diagnostics & Pathology",
      img: "/images/smiling-young-male-doctor-wearing-stethoscope-medical-gown-isolated-white-wall1.svg",
      experience: "12+ Years",
      education: "DMLT, B.Sc MLT"
    },
    {
      name: "Ms. Shruti Sinha",
      role: "Chief Pharmacist",
      dept: "Pharmacy Division",
      img: "/images/front-view-laughing-female-doctor-holding-stethoscope-her-hands-standing-yellow-background1.svg",
      experience: "8+ Years",
      education: "B.Pharm, M.Pharm"
    }
  ];

  // Administrative Staff List
  const adminList = [
    {
      name: "Mr. Amit Verma",
      role: "Hospital Administrator",
      dept: "Operations",
      img: "/images/doctor-preparing-consult1.svg",
      experience: "14+ Years",
      education: "MBA in Healthcare Management"
    },
    {
      name: "Ms. Priya Sharma",
      role: "Patient Care Coordinator",
      dept: "Front Desk & Admissions",
      img: "/images/front-view-laughing-female-doctor-holding-stethoscope-her-hands-standing-yellow-background1.svg",
      experience: "6+ Years",
      education: "Master of Hospital Administration"
    },
    {
      name: "Mr. Sunil Singh",
      role: "Operations Manager",
      dept: "Maintenance & Logistics",
      img: "/images/smiling-young-male-doctor-wearing-stethoscope-medical-gown-isolated-white-wall1.svg",
      experience: "11+ Years",
      education: "B.Tech, Dip in Facility Management"
    }
  ];

  return (
    <div className="d-flex flex-column min-h-screen">
      {/* Navigation Header */}
      <Header openAppointmentModal={handleOpenModal} />

      <main className="flex-grow">
        {/* SECTION 1: ABOUT HOSPITAL (TOP) */}
        <section className="about_hospital_top_section py-5 text-white position-relative">
          <div className="container relative z-2 py-4">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-3">
                <li className="breadcrumb-item">
                  <Link href="/" className="text-white opacity-75 text-decoration-none">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active text-white fw-bold" aria-current="page">
                  About Us
                </li>
              </ol>
            </nav>
            <div className="row align-items-center">
              <div className="col-lg-7">
                <h1 className="display-4 fw-bold text-shadow-sm mb-3">About Avni Hospital</h1>
                <p className="lead mb-4 opacity-90 max-width-700">
                  Avni Hospital, located in the heart of Patna, stands out as a premier 25-bedded multi-speciality clinical facility. We combine cutting-edge technology with compassionate care to deliver premium clinical outcomes.
                </p>
                <div className="d-flex flex-wrap gap-3 mt-2">
                  <div className="facility_badge px-3 py-2 rounded shadow-sm d-flex align-items-center gap-2">
                    <img src="/images/Group232.svg" alt="" style={{ width: "20px" }} />
                    <span className="fw-semibold">24/7 Critical Care</span>
                  </div>
                  <div className="facility_badge px-3 py-2 rounded shadow-sm d-flex align-items-center gap-2">
                    <img src="/images/Group220.svg" alt="" style={{ width: "20px" }} />
                    <span className="fw-semibold">Advanced Modular OT</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 mt-4 mt-lg-0">
                <div className="about_hospital_card p-4 rounded shadow bg-white text-dark">
                  <h4 className="fw-bold mb-3" style={{ color: "#006D5B" }}>Patna's Trusted Healthcare</h4>
                  <p className="fs_14 text-muted mb-0">
                    Under the leadership of Patna's top laparoscopic and general surgeons, Avni Hospital caters to diverse surgical and diagnostic requirements. We are dedicated to providing standard clinical care, individualized patient pathways, and affordable billing structure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: FOUNDER & CO-FOUNDER */}
        <section className="py-5 bg-white">
          <div className="container py-3">
            <div className="text-center mb-5">
              <span className="fs_16 lh_16 service_nd_trmt_txt fw_700 d-block mb-2 text-uppercase">Leadership</span>
              <h2 className="fw_700 fs_32 text-dark">Our Visionary Founders</h2>
              <div className="mx-auto mt-2" style={{ width: "80px", height: "4px", backgroundColor: "#006D5B", borderRadius: "2px" }}></div>
            </div>

            <div className="row g-4 justify-content-center">
              {/* Founder Profile */}
              <div className="col-lg-5 col-md-6">
                <div className="founder_profile_card card h-100 border-0 shadow-sm overflow-hidden">
                  <div className="position-relative" style={{ height: "350px", backgroundColor: "#E4F1EF" }}>
                    <img 
                      src="/images/mature-doctor-sitting-desk-working-laptop1.svg" 
                      alt="Dr. Harish Prasad B.R." 
                      className="w-100 h-100 object-fit-cover"
                      style={{ objectPosition: "top" }}
                    />
                    <div className="founder_overlay position-absolute bottom-0 start-0 w-100 p-3 text-white">
                      <h4 className="fw-bold m-0 text-white">Dr. Harish Prasad B.R.</h4>
                      <span className="fs-14 opacity-90 text-white">Founder & Chief Laparoscopic Surgeon</span>
                    </div>
                  </div>
                  <div className="card-body p-4 bg-light">
                    <h5 className="fw-bold mb-3" style={{ color: "#006D5B" }}>About the Founder</h5>
                    <p className="card-text text-muted mb-0" style={{ lineHeight: "1.7", fontSize: "14px" }}>
                      Dr. Harish Prasad B.R. is an eminent Laparoscopic and General Surgeon with over 20 years of clinical experience. He founded Avni Hospital with a vision to deliver sophisticated modular surgical and therapeutic care in Patna. He continues to lead with an absolute focus on clinical excellence and patient safety.
                    </p>
                  </div>
                </div>
              </div>

              {/* Co-Founder Profile */}
              <div className="col-lg-5 col-md-6">
                <div className="founder_profile_card card h-100 border-0 shadow-sm overflow-hidden">
                  <div className="position-relative" style={{ height: "350px", backgroundColor: "#E4F1EF" }}>
                    <img 
                      src="/images/doctor-preparing-consult1.svg" 
                      alt="Dr. Manohar CV" 
                      className="w-100 h-100 object-fit-cover"
                      style={{ objectPosition: "top" }}
                    />
                    <div className="founder_overlay position-absolute bottom-0 start-0 w-100 p-3 text-white">
                      <h4 className="fw-bold m-0 text-white">Dr. Manohar CV</h4>
                      <span className="fs-14 opacity-90 text-white">Co-Founder & Chief of Cardiology</span>
                    </div>
                  </div>
                  <div className="card-body p-4 bg-light">
                    <h5 className="fw-bold mb-3" style={{ color: "#006D5B" }}>About the Co-Founder</h5>
                    <p className="card-text text-muted mb-0" style={{ lineHeight: "1.7", fontSize: "14px" }}>
                      Dr. Manohar CV is a leading cardiologist dedicated to establishing advanced coronary and critical care access in Patna. As Co-Founder, he spearheads the hospital's clinical protocols, emergency trauma systems, and medicine divisions, ensuring high-quality support to every patient.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: MISSION & VISION */}
        <section className="py-5" style={{ backgroundColor: "#F2F9F8" }}>
          <div className="container py-3">
            <div className="row g-4">
              {/* Mission Card */}
              <div className="col-md-6">
                <div className="card border-0 h-100 p-4 shadow-sm hover-lift bg-white rounded-lg">
                  <div className="d-flex align-items-start gap-3">
                    <div 
                      className="p-3 rounded-circle d-flex align-items-center justify-content-center text-white"
                      style={{ backgroundColor: "#006D5B", width: "56px", height: "56px" }}
                    >
                      <span className="fs-3 fw-bold">M</span>
                    </div>
                    <div>
                      <h3 className="fw-bold text-dark mb-3">Our Mission</h3>
                      <p className="text-muted fs-14 mb-0" style={{ lineHeight: "1.7" }}>
                        To deliver high-quality, patient-centric healthcare with empathy, ethical integrity, and advanced clinical technology. We aim to ensure premium clinical care is both accessible and affordable for the local communities in Patna and the wider Bihar region.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vision Card */}
              <div className="col-md-6">
                <div className="card border-0 h-100 p-4 shadow-sm hover-lift bg-white rounded-lg">
                  <div className="d-flex align-items-start gap-3">
                    <div 
                      className="p-3 rounded-circle d-flex align-items-center justify-content-center text-white"
                      style={{ backgroundColor: "#009688", width: "56px", height: "56px" }}
                    >
                      <span className="fs-3 fw-bold">V</span>
                    </div>
                    <div>
                      <h3 className="fw-bold text-dark mb-3">Our Vision</h3>
                      <p className="text-muted fs-14 mb-0" style={{ lineHeight: "1.7" }}>
                        To be Patna's most trusted hospital for specialized surgery and women's health care. We envision a society where every individual receives standard diagnostic accuracy and surgical expertise in a caring and secure hospital environment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: STAFF DETAILS */}
        <section className="py-5 bg-white" id="staff-directory">
          <div className="container py-3">
            <div className="text-center mb-5">
              <span className="fs_16 lh_16 service_nd_trmt_txt fw_700 d-block mb-2 text-uppercase">Hospital Team</span>
              <h2 className="fw_700 fs_32 text-dark">Meet Our Dedicated Staff</h2>
              <div className="mx-auto mt-2" style={{ width: "80px", height: "4px", backgroundColor: "#006D5B", borderRadius: "2px" }}></div>
            </div>

            {/* Staff Navigation Tabs */}
            <div className="d-flex justify-content-center gap-3 mb-5 flex-wrap">
              <button
                onClick={() => setStaffTab("doctors")}
                className={`btn btn-md px-4 py-2 rounded-pill fw-bold transition ${
                  staffTab === "doctors" ? "text-white" : "bg-light text-secondary border-0"
                }`}
                style={{
                  backgroundColor: staffTab === "doctors" ? "#006D5B" : "#F8F9FA",
                  boxShadow: staffTab === "doctors" ? "0 4px 12px rgba(0, 109, 91, 0.2)" : "none"
                }}
              >
                Specialist Doctors
              </button>
              <button
                onClick={() => setStaffTab("nursing")}
                className={`btn btn-md px-4 py-2 rounded-pill fw-bold transition ${
                  staffTab === "nursing" ? "text-white" : "bg-light text-secondary border-0"
                }`}
                style={{
                  backgroundColor: staffTab === "nursing" ? "#006D5B" : "#F8F9FA",
                  boxShadow: staffTab === "nursing" ? "0 4px 12px rgba(0, 109, 91, 0.2)" : "none"
                }}
              >
                Nursing & Medical Staff
              </button>
              <button
                onClick={() => setStaffTab("admin")}
                className={`btn btn-md px-4 py-2 rounded-pill fw-bold transition ${
                  staffTab === "admin" ? "text-white" : "bg-light text-secondary border-0"
                }`}
                style={{
                  backgroundColor: staffTab === "admin" ? "#006D5B" : "#F8F9FA",
                  boxShadow: staffTab === "admin" ? "0 4px 12px rgba(0, 109, 91, 0.2)" : "none"
                }}
              >
                Administrative Staff
              </button>
            </div>

            {/* Staff Grid Container */}
            <div className="row g-4 justify-content-center">
              {/* Doctors Tab Content */}
              {staffTab === "doctors" && doctorsList.map((doc, idx) => (
                <div key={idx} className="col-xl-4 col-md-6 d-flex">
                  <div className="card w-100 shadow-sm border border-light-subtle d-flex flex-row overflow-hidden" style={{ borderRadius: "10px" }}>
                    <div style={{ width: "120px", backgroundColor: "#F2F9F8" }} className="flex-shrink-0 position-relative">
                      <img 
                        src={doc.img} 
                        alt={doc.name} 
                        className="w-100 h-100 object-fit-cover"
                        style={{ objectPosition: "top" }}
                      />
                    </div>
                    <div className="card-body p-3 d-flex flex-column justify-content-between">
                      <div>
                        <span className="badge mb-2" style={{ backgroundColor: "#E4F1EF", color: "#006D5B", fontSize: "10px" }}>
                          {doc.dept}
                        </span>
                        <h5 className="fw-bold text-dark fs-6 mb-1">{doc.name}</h5>
                        <p className="fw-semibold mb-1" style={{ fontSize: "12px", color: "#006D5B" }}>{doc.role}</p>
                        <span className="text-muted block" style={{ fontSize: "11px" }}>{doc.education}</span>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mt-3 pt-2 border-top">
                        <span className="text-muted fw-bold" style={{ fontSize: "11px" }}>{doc.experience} Experience</span>
                        <button 
                          onClick={handleOpenModal}
                          className="btn btn-sm px-2 py-1 text-white border-0"
                          style={{ backgroundColor: "#006D5B", fontSize: "11px", borderRadius: "4px" }}
                        >
                          Book Consult
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Nursing Tab Content */}
              {staffTab === "nursing" && nursingList.map((nurse, idx) => (
                <div key={idx} className="col-xl-4 col-md-6 d-flex">
                  <div className="card w-100 shadow-sm border border-light-subtle d-flex flex-row overflow-hidden" style={{ borderRadius: "10px" }}>
                    <div style={{ width: "120px", backgroundColor: "#F2F9F8" }} className="flex-shrink-0">
                      <img 
                        src={nurse.img} 
                        alt={nurse.name} 
                        className="w-100 h-100 object-fit-cover"
                        style={{ objectPosition: "top" }}
                      />
                    </div>
                    <div className="card-body p-3 d-flex flex-column justify-content-between">
                      <div>
                        <span className="badge mb-2 bg-secondary text-white" style={{ fontSize: "10px" }}>
                          {nurse.dept}
                        </span>
                        <h5 className="fw-bold text-dark fs-6 mb-1">{nurse.name}</h5>
                        <p className="text-muted fw-medium mb-1" style={{ fontSize: "12px" }}>{nurse.role}</p>
                        <span className="text-muted block" style={{ fontSize: "11px" }}>{nurse.education}</span>
                      </div>
                      <div className="mt-3 pt-2 border-top d-flex justify-content-between align-items-center">
                        <span className="text-muted fw-semibold" style={{ fontSize: "11px" }}>{nurse.experience} Experience</span>
                        <span className="badge bg-success-subtle text-success border border-success-subtle px-2 py-1" style={{ fontSize: "10px" }}>Active Support</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Admin Tab Content */}
              {staffTab === "admin" && adminList.map((admin, idx) => (
                <div key={idx} className="col-xl-4 col-md-6 d-flex">
                  <div className="card w-100 shadow-sm border border-light-subtle d-flex flex-row overflow-hidden" style={{ borderRadius: "10px" }}>
                    <div style={{ width: "120px", backgroundColor: "#F2F9F8" }} className="flex-shrink-0">
                      <img 
                        src={admin.img} 
                        alt={admin.name} 
                        className="w-100 h-100 object-fit-cover"
                        style={{ objectPosition: "top" }}
                      />
                    </div>
                    <div className="card-body p-3 d-flex flex-column justify-content-between">
                      <div>
                        <span className="badge mb-2 bg-dark text-white" style={{ fontSize: "10px" }}>
                          {admin.dept}
                        </span>
                        <h5 className="fw-bold text-dark fs-6 mb-1">{admin.name}</h5>
                        <p className="text-muted fw-medium mb-1" style={{ fontSize: "12px" }}>{admin.role}</p>
                        <span className="text-muted block" style={{ fontSize: "11px" }}>{admin.education}</span>
                      </div>
                      <div className="mt-3 pt-2 border-top d-flex justify-content-between align-items-center">
                        <span className="text-muted fw-semibold" style={{ fontSize: "11px" }}>{admin.experience} Experience</span>
                        <span className="badge bg-primary-subtle text-primary border border-primary-subtle px-2 py-1" style={{ fontSize: "10px" }}>Administration</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Structured Footer */}
      <Footer openAppointmentModal={handleOpenModal} />

      {/* Appointment Popup Modal */}
      <AppointmentModal isOpen={modalOpen} onClose={handleCloseModal} />
    </div>
  );
}
