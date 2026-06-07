"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import AppointmentModal from "@/components/AppointmentModal";
import Link from "next/link";
import "./home.css";

/* ==========================================================================
   1. HERO SECTION COMPONENT
   ========================================================================== */
function Hero({ openAppointmentModal }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const bannerSlides = [
    {
      subtitle: "25-Bedded Multi-Speciality Clinical Facility",
      title: "Advanced Surgery & Comprehensive Medical Care in Patna",
      directorName: "Dr. Harish Prasad B.R.",
      directorTitle: "Director & Chief Laparoscopic Surgeon",
      bgImg: "/images/mature-doctor-sitting-desk-working-laptop1.svg"
    },
    {
      subtitle: "Leading Cardiac & Critical Care Unit",
      title: "Dedicated Emergency Support & ICU Services",
      directorName: "Dr. Manohar CV",
      directorTitle: "Co-Founder & Chief of Cardiology",
      bgImg: "/images/doctor-preparing-consult1.svg"
    },
    {
      subtitle: "Comprehensive Women & Child Health Division",
      title: "High-Quality Obstetrics, Gynaecology & Neonatal Care",
      directorName: "Dr. Anika Parrikar",
      directorTitle: "Head of Gynaecology Department",
      bgImg: "/images/front-view-laughing-female-doctor-holding-stethoscope-her-hands-standing-yellow-background1.svg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [bannerSlides.length]);

  return (
    <div className="banner_section_blk position-relative overflow-hidden" id="home-page">
      <div className="h-100 position-relative">
        {bannerSlides.map((slide, index) => (
          <div
            key={index}
            className={`w-100 h-100 position-absolute top-0 start-0 transition-opacity duration-1000 ease-in-out ${index === activeSlide ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            style={{ zIndex: index === activeSlide ? 1 : 0 }}
          >
            <div className="w-100 h-100 position-absolute top-0 start-0 bg-dark-overlay">
              <img
                src={slide.bgImg}
                alt={slide.title}
                className="w-100 h-100 object-fit-cover scale-animation"
              />
            </div>

            <div className="container h-100 position-relative z-3 d-flex align-items-center">
              <div className="row w-100">
                <div className="col-lg-7 text-white py-5">
                  <div className="animate-slide-up">
                    <span
                      className="d-inline-block px-3 py-1.5 rounded-pill mb-3 font-semibold tracking-wider text-uppercase"
                      style={{ backgroundColor: "rgba(0, 109, 91, 0.25)", border: "1px solid rgba(255, 255, 255, 0.2)", fontSize: "12px" }}
                    >
                      {slide.subtitle}
                    </span>
                    <h1
                      className="display-4 fw-bold lh_65 text-white mb-4"
                      style={{ fontSize: "clamp(28px, 4.5vw, 52px)" }}
                    >
                      {slide.title}
                    </h1>

                    <div className="d-flex align-items-center flex-wrap gap-2 mt-4">
                      <div>
                        <h5 className="harish_txt color_wt mb_0 font_14_resp font_20_resp text-white">
                          {slide.directorName}
                        </h5>
                        <span className="director_txt color_wt fw_400 fs_16 font_12_resp text-white opacity-80 block mt-1">
                          {slide.directorTitle}
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 d-flex flex-wrap gap-3">
                      <button
                        onClick={openAppointmentModal}
                        className="btn btn-lg text-white font-semibold py-3 px-4 shadow hover-scale transition"
                        style={{ backgroundColor: "#009688", borderRadius: "8px", border: "none" }}
                      >
                        Book Appointment Now
                      </button>
                      <button
                        onClick={() => window.open("https://maps.google.com/?q=Amaranth+mandir+rode+near+bhoothnath+metro+station,+Patna,+Bihar,+800026", "_blank")}
                        className="btn btn-lg text-white font-semibold py-3 px-4 shadow hover-scale transition"
                        style={{
                          backgroundColor: "transparent",
                          borderRadius: "8px",
                          border: "2px solid #ffffff"
                        }}
                      >
                        Get Location
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4 z-3 d-flex gap-2">
        {bannerSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`btn p-0 rounded-circle border-0 ${index === activeSlide ? "active" : ""}`}
            style={{
              width: "12px",
              height: "12px",
              backgroundColor: index === activeSlide ? "#009688" : "rgba(255, 255, 255, 0.4)",
              transition: "all 0.3s ease"
            }}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}

/* ==========================================================================
   2. ABOUT US SECTION COMPONENT
   ========================================================================== */
function About() {
  const stats = [
    { num: "24/7", label: "Trauma Care", bgImg: "/images/Group232.svg", className: "group_232_img" },
    { num: "100+", label: "Doctors", bgImg: null, className: "" },
    { num: "1M+", label: "Happy Patients", bgImg: null, className: "" },
    { num: "1200+", label: "Successful Operations", bgImg: "/images/Group220.svg", className: "group_220_img" }
  ];

  return (
    <div className="about_us_whole_blk" id="about-us">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="position-relative overflow-hidden rounded shadow-lg" style={{ height: "480px" }}>
              <img
                src="/images/image(3).svg"
                alt="Avni Hospital Building and Staff"
                className="img_wd about_us_img w-100 h-100 object-fit-cover"
              />
              <div
                className="position-absolute bottom-0 start-0 w-100 p-3 text-white"
                style={{ background: "linear-gradient(to top, rgba(0, 109, 91, 0.9), transparent)" }}
              >
                <h4 className="m-0 fw-bold">Healing with Compassion</h4>
                <p className="m-0 fs-12 opacity-80">Serving Patna for over a decade</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mt_38">
            <span className="fs_16 lh_16 service_nd_trmt_txt fw_700 d-block mb-2">WHO WE ARE</span>
            <h2 className="lh_16 about_us_txt_heading color_blck fw_700 fs_32 mb-4">About Us</h2>

            <p className="fs_14 color_blck mb_28 fw_400 lh_22">
              Avni Hospital, situated in the heart of Patna, stands out as a premier 25-bedded multi-speciality hospital offering the most sophisticated and specialized medical services in the vicinity. Our patient-focused approach guarantees you receive the highest standard of individualized clinical care.
            </p>

            <p className="fs_14 color_blck fw_400 lh_22 mb_28">
              Under the visionary leadership of Dr. Harish Prasad B.R., Avni Hospital has grown into a trusted healthcare hub in Patna. We combine highly experienced doctors, state-of-the-art diagnostic facilities, and a dedicated team of medical staff to deliver seamless, comprehensive care to you and your family.
            </p>

            <Link
              href="/about"
              className="see_all_serv_btn color_wt border-0 text-white shadow hover-scale transition text-decoration-none d-inline-flex align-items-center justify-content-center"
            >
              Read More...
            </Link>
          </div>
        </div>

        <div className="row mt-5 pt-4">
          {stats.map((stat, index) => (
            <div key={index} className="col-md-3 col-sm-6 mb-4 position-relative">
              <div className="trauma_care_blk shadow border border-light-subtle h-100 d-flex flex-column justify-content-center">
                <h5 className="bold_txt mb_0 fw_700">{stat.num}</h5>
                <span className="normal_txt fs_16 bold_txt fw_400 text-dark opacity-75">{stat.label}</span>
              </div>
              {stat.bgImg && (
                <img
                  src={stat.bgImg}
                  alt=""
                  className={stat.className}
                  style={{ pointerEvents: "none" }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   3. DEPARTMENTS SECTION COMPONENT
   ========================================================================== */
function Departments() {
  const [filter, setFilter] = useState("all");

  const depts = [
    { name: "Laparoscopic", img: "/images/Rectangle98(1)1.svg", category: "surgery" },
    { name: "Laparotomy", img: "/images/Rectangle1001.svg", category: "surgery" },
    { name: "General Medicine", img: "/images/Rectangle1011.svg", category: "general" },
    { name: "Diabetology", img: "/images/Rectangle1021.svg", category: "specialty" },
    { name: "Obstetrics", img: "/images/Rectangle1031.svg", category: "general" },
    { name: "Gynaecology", img: "/images/Rectangle1041.svg", category: "general" },
    { name: "Fertility (Ivf/iui)", img: "/images/Rectangle1051.svg", category: "specialty" },
    { name: "Pediatrics/ Neonatology", img: "/images/Rectangle1061.svg", category: "general" },
    { name: "Orthopaedics", img: "/images/Rectangle1071.svg", category: "surgery" },
    { name: "Neurology", img: "/images/Rectangle1111.svg", category: "specialty" },
    { name: "Urology", img: "/images/image1.svg", category: "surgery" },
    { name: "Nephrology", img: "/images/image(1)1.svg", category: "specialty" },
    { name: "Cardiology", img: "/images/image(2)1.svg", category: "specialty" },
    { name: "Gastroenterology", img: "/images/image(3)1.svg", category: "specialty" },
    { name: "Dermatology", img: "/images/image(4)1.svg", category: "general" },
    { name: "Oncology", img: "/images/image(5)1.svg", category: "specialty" }
  ];

  const filteredDepts = filter === "all" ? depts : depts.filter(d => d.category === filter);

  return (
    <div className="hosptl_dept_blk" id="department-blk">
      <div className="container">
        <h2 className="hspt_dept_hdg color_blck fw_700 lh_22 fs_32">Hospital Departments</h2>

        <div className="d-flex justify-content-center flex-wrap gap-2 mb-5">
          {[
            { id: "all", label: "All Departments" },
            { id: "general", label: "General Care" },
            { id: "surgery", label: "Surgical Specialties" },
            { id: "specialty", label: "Specialized Clinical" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`btn px-4 py-2 rounded-pill fw-medium transition ${filter === tab.id
                  ? "text-white shadow-sm"
                  : "bg-white text-secondary border border-light-subtle hover-bg-light"
                }`}
              style={{
                backgroundColor: filter === tab.id ? "#006D5B" : "transparent",
                borderColor: filter === tab.id ? "#006D5B" : "#dee2e6",
                fontSize: "14px"
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="row g-4 justify-content-center">
          {filteredDepts.map((dept, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6">
              <div
                className="hsp_dept_img_blk position-relative overflow-hidden rounded shadow hover-lift transition cursor-pointer"
                style={{ height: "260px" }}
              >
                <img
                  src={dept.img}
                  alt={dept.name}
                  className="img_wd w-100 h-100 object-fit-cover transition-transform duration-500 hover-scale-up"
                />
                <div className="hspt_dept_imgs_txt d-flex align-items-end justify-content-center">
                  <span className="color_wt fs_16 lh_16 fw_med img_txt d-block text-white text-center pb-3 fw-bold">
                    {dept.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   4. SERVICES SECTION COMPONENT
   ========================================================================== */
function Services({ openAppointmentModal }) {
  const services = [
    {
      title: "Specialized Medical",
      desc: "Comprehensive outpatient and inpatient care for chronic and acute illnesses, utilizing evidence-based treatment pathways and expert advice.",
      img: "/images/Group21.svg",
      tag: "Outpatient / Inpatient"
    },
    {
      title: "Ancillary Care",
      desc: "Supporting clinical departments with professional physical therapy, dietary counselling, pharmacy, and patient rehabilitation systems.",
      img: "/images/Group23.svg",
      tag: "Rehabilitation"
    },
    {
      title: "Surgical Specialties",
      desc: "Advanced minimally invasive, laparoscopic, and open surgical procedures executed inside state-of-the-art sterile modular theatres.",
      img: "/images/Group26.svg",
      tag: "Modular OT"
    },
    {
      title: "Diagnostic Services",
      desc: "High-resolution laboratory diagnostics, ultrasound, and digital radiology to guarantee prompt and highly precise medical profiling.",
      img: "/images/Group20.svg",
      tag: "Lab & X-Ray"
    },
    {
      title: "24/7 Critical Care",
      desc: "Fully equipped Intensive Care Units (ICU) and round-the-clock emergency support managed by qualified critical care practitioners.",
      img: "/images/Group23.svg",
      tag: "ICU / Emergency"
    },
    {
      title: "Maternity & Neonatal",
      desc: "Compassionate maternal services, modern delivery suites, and specialized newborn care systems supervised by expert gynaecologists.",
      img: "/images/Group21.svg",
      tag: "Mother & Child"
    }
  ];

  return (
    <div className="our_service_page_blk" id="services-blk">
      <div className="container">
        <div className="d-flex flex-column align-items-center justify-content-center text-center mb_60">
          <span className="fw_700 fs_16 lh_16 service_nd_trmt_txt mb_18">Services & Treatment</span>
          <h2 className="fw_700 fs_32 color_blck lh_22 mb-0">Clinical Care Offerings</h2>
        </div>

        <div className="row g-4 justify-content-center">
          {services.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 d-flex">
              <div
                className="hospital_ser_card d-flex flex-column rounded shadow-sm hover-lift transition w-100"
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E4F1EF"
                }}
              >
                <div className="position-relative" style={{ height: "200px", overflow: "hidden", backgroundColor: "#F2F9F8" }}>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-100 h-100 object-fit-cover transition-transform duration-500 hover-scale-up"
                  />
                  <span
                    className="position-absolute top-0 end-0 m-3 badge text-white px-2.5 py-1.5 fw-bold"
                    style={{ backgroundColor: "#006D5B", fontSize: "11px" }}
                  >
                    {item.tag}
                  </span>
                </div>

                <div className="p-4 d-flex flex-column justify-content-between flex-grow-1">
                  <div>
                    <h4 className="fw_700 fs_20 lh_22 text-dark mb-2">
                      {item.title}
                    </h4>
                    <p className="fw_400 fs_14 lorem_txt opacity-75 mb-4">
                      {item.desc}
                    </p>
                  </div>

                  <button
                    onClick={openAppointmentModal}
                    className="btn btn-outline-primary btn-sm w-100 mt-auto fw-medium transition"
                    style={{
                      borderColor: "#006D5B",
                      color: "#006D5B",
                      fontSize: "13px",
                      borderRadius: "6px",
                      padding: "8px"
                    }}
                  >
                    Schedule Care
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

/* ==========================================================================
   5. DOCTORS SECTION COMPONENT
   ========================================================================== */
function Doctors({ openAppointmentModal }) {
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
          Avni Hospital is supported by a multidisciplinary team of highly experienced specialist doctors, delivering advanced diagnostics, surgical expertise, and evidence-based clinical care.
        </p>

        <div className="d-flex justify-content-center flex-wrap gap-2 mb-5">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setActiveTab(dept)}
              className={`btn btn-sm px-3 py-1.5 rounded fw-medium transition ${activeTab === dept
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

        <div className="row g-4 justify-content-center">
          {filteredDocs.map((doc, idx) => (
            <div key={idx} className="col-xl-3 col-lg-4 col-sm-6 d-flex">
              <div
                className="card w-100 shadow-sm border border-light-subtle hover-lift transition d-flex flex-column"
                style={{ borderRadius: "10px", overflow: "hidden" }}
              >
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

/* ==========================================================================
   6. WHY CHOOSE US SECTION COMPONENT
   ========================================================================== */
function WhyChooseUs({ openAppointmentModal }) {
  const points = [
    "Safety First Quality Must",
    "Patient-Centric Approach",
    "Focused Leadership",
    "Cutting-Edge Technology",
    "Transparent Pricing",
    "Coordinated Care"
  ];

  return (
    <div className="why_choose_us_blk" id="why-choose-us">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-5 mb-md-0 position-relative h_396px_resp d-flex justify-content-center" style={{ minHeight: "450px" }}>
            <div className="position-relative w-100 h-100" style={{ maxWidth: "450px" }}>
              <img src="/images/Frame443.svg" alt="" className="square_img absolute bottom-0 left-0" style={{ width: "300px", zIndex: 1 }} />
              <img src="/images/Rectangle143.svg" alt="" className="rectangle_square_img absolute" style={{ bottom: "50px", left: "20px", zIndex: 2 }} />
              <img src="/images/Ellipse26.svg" alt="" className="ellipse_img absolute" style={{ left: "18px", bottom: "195px", zIndex: 2 }} />

              <img
                src="/images/young-handsome-indian-man-using-mobile-phone-isoated-white-wall1.svg"
                alt="Patient Booking Online"
                className="young_man_img absolute"
                style={{ bottom: "0", left: "44px", zIndex: 3, width: "80%", objectFit: "contain" }}
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="why_choose_txt_blk pos-relative shadow rounded border border-light-subtle">
              <h2 className="fw_700 fs_32 lh_16 mb_36 color_blck font_26_resp">
                Why Choose Us?
              </h2>

              <div className="row g-3">
                {points.map((pt, idx) => (
                  <div key={idx} className="col-sm-6 d-flex align-items-center mb_24">
                    <img
                      src="/images/Group12.svg"
                      alt="Checkmark"
                      className="mr_11"
                      style={{ width: "24px", height: "24px" }}
                    />
                    <span className="fw_500 fs_16 lh_16 color_blck">
                      {pt}
                    </span>
                  </div>
                ))}
              </div>

              <div className="why_chose_dot_img position-absolute" style={{ bottom: "-30px", right: "20px" }}>
                <img src="/images/Group226.svg" alt="" style={{ width: "60px" }} />
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5 pt-4">
          <div className="col-md-12 text-center text-md-start">
            <h3 className="mb_36 fw_700 fs_32 lh_35 color_blck fs_24_resp font_26_resp">
              Wellness, Compassion, Quality
            </h3>
            <p className="fw_400 fs_16 lh_22 color_blck opacity-75 max-width-800">
              At Avni Hospital, we live by a commitment to patients that merges wellness with deep compassion and top-tier clinical quality. We strive daily to restore health, inspire confidence, and deliver a coordinated healthcare experience right at the heart of Patna.
            </p>
          </div>
          <div className="col-md-12 pt-3 text-center text-md-start">
            <button
              onClick={openAppointmentModal}
              className="see_all_serv_btn color_wt border-0 text-white shadow"
              style={{ transition: "all 0.3s ease" }}
            >
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   7. TESTIMONIAL & VISION SECTION COMPONENT
   ========================================================================== */
function Testimonial() {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      text: "“A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy”. The doctors at Avni Hospital gave me a new lease on life with their prompt diagnosis.",
      author: "Mr. Ajay Shankar",
      condition: "Diabetes Patient",
      image: "/images/image(10).svg"
    },
    {
      text: "“Exceptional care and outstanding support!” The nursing staff was incredibly attentive, and the laparoscopic surgeon explained everything so clearly. I highly recommend Avni Hospital.",
      author: "Mrs. Priya Sharma",
      condition: "Maternity Patient",
      image: "/images/image(10).svg"
    },
    {
      text: "“Efficient, clean, and highly professional”. From the emergency entrance to the final checkup, the coordination was flawless, and the pricing was extremely transparent.",
      author: "Mr. Ramesh Kumar",
      condition: "Orthopaedic Patient",
      image: "/images/image(10).svg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <>
      <div className="our_vision_blk border-bottom border-light-subtle">
        <div className="container">
          <div className="d-flex flex-column align-items-center justify-content-center mb_40 text-center">
            <span className="fw_700 fs_16 lh_16 mb_18 service_nd_trmt_txt">LOREM IPSUM</span>
            <h3 className="color_blck fw_700 fs_32 lh_22 mb-0">Our Vision</h3>
          </div>
          <div className="pos-relative text-align-center max-width-800 mx-auto px-4 py-3">
            <p className="mb-0 fw_400 color_blck lh_38px fs_24 font_20_resp italic text-dark opacity-90">
              To inspire hope, and contribute to health and wellbeing by providing the best care to every patient through integrated clinical practice, education and research!!!
            </p>
            <img
              src="/images/quotes-fill_svgrepo.com.svg"
              alt="Quote Open"
              className="open_qotes_img"
              style={{ width: "35px", opacity: 0.2 }}
            />
            <img
              src="/images/quotes-fill_svgrepo.com(1).svg"
              alt="Quote Close"
              className="close_quotes_img"
              style={{ width: "35px", opacity: 0.2 }}
            />
          </div>
        </div>
      </div>

      <div className="review_page_plk bg-white">
        <div className="container">
          <div className="d-flex flex-column mb_75 marginbtm_30px_resp text-center text-md-start">
            <h6 className="fw_700 fs_16 lh_16 service_nd_trmt_txt mb_18">LOREM IPSUM</h6>
            <h2 className="color_blck fs_32 lh_22 fw_700 mb-0">Patient Testimonials</h2>
          </div>

          <div className="position-relative overflow-hidden mt-4">
            <div className="row align-items-center">
              <div className="col-md-4 mb-4 mb-md-0 d-flex justify-content-center">
                <div
                  className="pos-relative img_blk_review rounded overflow-hidden shadow-sm"
                  style={{ width: "280px", height: "280px" }}
                >
                  <img
                    src={testimonials[activeSlide].image}
                    alt="Patient avatar"
                    className="img_wd w-100 h-100 object-fit-cover"
                  />
                  <img src="/images/Ellipse27.svg" alt="" className="small_siz_elipse review_imgs_square_circle" style={{ width: "35px" }} />
                  <img src="/images/Rectangle151.svg" alt="" className="rectangle_small_siz review_imgs_square_circle" style={{ width: "35px" }} />
                </div>
              </div>

              <div className="col-md-8 text-center text-md-start">
                <div className="pos-relative">
                  <div className="d-flex align-items-center justify-content-center justify-content-md-start mb_13 mt_14 gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <img
                        key={s}
                        src="/images/Vector(10).svg"
                        alt="Star"
                        style={{ width: "16px", height: "16px" }}
                      />
                    ))}
                  </div>
                  <img
                    src="/images/quotes-fill_svgrepo.com.svg"
                    alt=""
                    className="quotes_img_pos d-none d-md-block"
                    style={{ width: "40px", opacity: 0.15 }}
                  />
                </div>

                <p
                  className="fs_32 fw_700 color_blck mb_52 lh_38px font_20_resp fw_600_resp text-dark mt-3 transition-all"
                  style={{ fontSize: "clamp(18px, 3.5vw, 28px)", lineHeight: "1.4" }}
                >
                  {testimonials[activeSlide].text}
                </p>

                <h6 className="ajay_shankar_txt lh_16 m-0 fw-bold">{testimonials[activeSlide].author}</h6>
                <span className="fs_16 fw_400 lh_16 diabetes_color_txt d-block mt-1 opacity-75">
                  {testimonials[activeSlide].condition}
                </span>
              </div>
            </div>

            <div className="d-flex justify-content-center gap-2 mt-5">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`btn p-0 rounded-circle border-0 ${index === activeSlide ? "active" : ""}`}
                  style={{
                    width: "12px",
                    height: "12px",
                    backgroundColor: index === activeSlide ? "#006D5B" : "#C5E1DD",
                    transition: "all 0.3s ease",
                    opacity: index === activeSlide ? 1 : 0.6
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ==========================================================================
   8. RECENT NEWS SECTION COMPONENT
   ========================================================================== */
function RecentNews() {
  const blogs = [
    {
      date: "17 Sep, 2025",
      title: "How to Improve Immunity Naturally: Expert Backed Tips",
      desc: "Our leading diabetologists and clinical dieticians share proven nutritional methods, sleeping patterns, and lifestyle routines to safely double your defenses.",
      img: "/images/image(11).svg",
      category: "Immunology"
    },
    {
      date: "16 Sep, 2025",
      title: "Build Strong Immunity Naturally: Proven Health Tips",
      desc: "An informative guide detailing the impact of hydration, regular physical activity, and mineral micro-nutrition on respiratory and general organic resilience.",
      img: "/images/image(12).svg",
      category: "General Health"
    },
    {
      date: "11 Sep, 2024",
      title: "Surgical Specialties & Advanced Laparoscopy",
      desc: "Understanding the safety, speed of recovery, and minimal scarring benefits of modern minimally invasive keyhole procedures performed at Avni Hospital.",
      img: "/images/image(13).svg",
      category: "Surgery"
    }
  ];

  return (
    <div className="recent_news_page_blk" id="recent-news">
      <div className="container">
        <div className="text-align-center mb_60 text-center">
          <h6 className="fw_700 fs_16 lh_16 recent_txt mb_18 d-block">Recent News & Articles</h6>
          <h2 className="fw_700 fs_32 color_blck lh_35 text-dark">
            Healthcare for your Family
          </h2>
        </div>

        <div className="row g-4 justify-content-center">
          {blogs.map((post, idx) => (
            <div key={idx} className="col-lg-4 col-md-6 d-flex">
              <div
                className="surgical_specl_blk d-flex flex-column rounded shadow-sm hover-lift transition w-100"
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  backgroundColor: "#F2F9F8",
                  border: "1px solid #E4F1EF"
                }}
              >
                <div style={{ height: "200px", overflow: "hidden" }}>
                  <img
                    src={post.img}
                    alt={post.title}
                    className="img_wd w-100 h-100 object-fit-cover transition-transform duration-500 hover-scale-up"
                  />
                </div>

                <div className="surgical_txt_blk p-3 d-flex flex-column justify-content-between flex-grow-1">
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-2 flex-wrap">
                      <span className="fw_400 fs_12 lh_16 color_grey">{post.date}</span>
                      <span
                        className="badge font-semibold"
                        style={{ backgroundColor: "#E4F1EF", color: "#006D5B", fontSize: "11px" }}
                      >
                        {post.category}
                      </span>
                    </div>
                    <h5 className="fw_700 fs_16 lh-base text-dark mb-2 hover-text-primary transition" style={{ cursor: "pointer" }}>
                      {post.title}
                    </h5>
                    <p className="fw_400 fs_14 lorem_surical_txt mb_13 opacity-75">
                      {post.desc}
                    </p>
                  </div>

                  <div className="pt-2 border-top border-light mt-auto">
                    <span className="fs_14 read_more_txt hover-underline cursor-pointer">
                      Read Article...
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="d-flex align-items-center justify-content-center mt-5">
          <button 
            className="see_all_serv_btn color_wt border-0 text-white shadow hover-scale transition"
            style={{ transition: "all 0.3s ease" }}
          >
            See All Articles
          </button>
        </div> */}
      </div>
    </div>
  );
}

/* ==========================================================================
   MAIN EXPORTED HOME PAGE COMPONENT
   ========================================================================== */
export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <div className="d-flex flex-column min-h-screen">
      {/* Navigation Header */}
      <Header openAppointmentModal={handleOpenModal} />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero openAppointmentModal={handleOpenModal} />
        <About />
        <Departments />
        <Services openAppointmentModal={handleOpenModal} />
        <Doctors openAppointmentModal={handleOpenModal} />
        <WhyChooseUs openAppointmentModal={handleOpenModal} />
        <Testimonial />
        <RecentNews />
      </main>

      {/* Structured Footer */}
      <Footer openAppointmentModal={handleOpenModal} />

      {/* Popup Appointment Booking Modal */}
      <AppointmentModal isOpen={modalOpen} onClose={handleCloseModal} />
    </div>
  );
}
