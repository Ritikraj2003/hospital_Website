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

  const doctorsList = [
    { name: "Dr. Manohar CV", role: "Co-Founder & Chief Medical Officer", dept: "Cardiology", img: "/images/doctor-preparing-consult1.svg", experience: "15+ Years", education: "MD, DM (Cardiology)" },
    { name: "Dr. Anika Parrikar", role: "Senior Consultant", dept: "Gynaecology", img: "/images/front-view-laughing-female-doctor-holding-stethoscope-her-hands-standing-yellow-background1.svg", experience: "12+ Years", education: "MS (OBG), Fellowship" },
    { name: "Dr. Prashanth A", role: "Senior Consultant", dept: "Neurology", img: "/images/smiling-young-male-doctor-wearing-stethoscope-medical-gown-isolated-white-wall1.svg", experience: "14+ Years", education: "MD, DM (Neurology)" },
    { name: "Dr. Rakshith M", role: "Consultant Surgeon", dept: "Orthopaedics", img: "/images/doctor-preparing-consult1.svg", experience: "10+ Years", education: "MS (Orthopaedics), MCh" },
  ];

  const nursingList = [
    { name: "Sister Mercy Jose", role: "Chief Nursing Officer", dept: "Nursing Administration", img: "/images/front-view-laughing-female-doctor-holding-stethoscope-her-hands-standing-yellow-background1.svg", experience: "18+ Years" },
    { name: "Sister Priya Varghese", role: "ICU Head Nurse", dept: "Critical Care", img: "/images/front-view-laughing-female-doctor-holding-stethoscope-her-hands-standing-yellow-background1.svg", experience: "10+ Years" },
    { name: "Mr. Rajesh Kumar", role: "Senior Lab Technician", dept: "Diagnostics & Pathology", img: "/images/smiling-young-male-doctor-wearing-stethoscope-medical-gown-isolated-white-wall1.svg", experience: "12+ Years" },
    { name: "Ms. Shruti Sinha", role: "Chief Pharmacist", dept: "Pharmacy Division", img: "/images/front-view-laughing-female-doctor-holding-stethoscope-her-hands-standing-yellow-background1.svg", experience: "8+ Years" },
  ];

  const adminList = [
    { name: "Mr. Amit Verma", role: "Hospital Administrator", dept: "Operations", img: "/images/doctor-preparing-consult1.svg", experience: "14+ Years" },
    { name: "Ms. Priya Sharma", role: "Patient Care Coordinator", dept: "Front Desk & Admissions", img: "/images/front-view-laughing-female-doctor-holding-stethoscope-her-hands-standing-yellow-background1.svg", experience: "6+ Years" },
    { name: "Mr. Sunil Singh", role: "Operations Manager", dept: "Maintenance & Logistics", img: "/images/smiling-young-male-doctor-wearing-stethoscope-medical-gown-isolated-white-wall1.svg", experience: "11+ Years" },
  ];

  const currentList = staffTab === "doctors" ? doctorsList : staffTab === "nursing" ? nursingList : adminList;

  const mgmtItems = [
    { icon: "🏥", title: "Medical Director", name: "Dr. Harish Prasad B.R.", desc: "Overseeing all clinical operations & surgical standards" },
    { icon: "💼", title: "Administration", name: "Mr. Amit Verma", desc: "Managing hospital administration & patient experience" },
    { icon: "🔬", title: "Lab & Diagnostics", name: "Mr. Rajesh Kumar", desc: "Ensuring precision diagnostics & lab quality control" },
  ];

  const familyStats = [
    { icon: "👨‍⚕️", label: "Specialist Doctors", value: "100+" },
    { icon: "👩‍⚕️", label: "Nursing Staff", value: "200+" },
    { icon: "🧪", label: "Lab Technicians", value: "50+" },
    { icon: "🏢", label: "Admin Staff", value: "80+" },
    { icon: "🚑", label: "Support Staff", value: "60+" },
  ];

  const valuesItems = [
    { num: "01", icon: "🏥", color: "blue", title: "Patient-Centric Care", desc: "Prioritizing the well-being and comfort of patients in all aspects of healthcare delivery." },
    { num: "02", icon: "🧪", color: "green", title: "Clinical Excellence", desc: "Upholding high standards of medical expertise and evidence-based practice across all specialties." },
    { num: "03", icon: "👨‍⚕️", color: "purple", title: "Compassion & Empathy", desc: "Demonstrating understanding and empathy in every interaction with patients and their families." },
    { num: "04", icon: "🔬", color: "indigo", title: "Innovation & Technology", desc: "Implementing cutting-edge technologies for improved diagnostics and more effective treatments." },
    { num: "05", icon: "⚖️", color: "yellow", title: "Integrity & Ethics", desc: "Maintaining the highest ethical standards in all medical and administrative practices." },
    { num: "06", icon: "🏨", color: "red", title: "Safety & Quality", desc: "Ensuring patient safety and providing the highest quality of healthcare services at all times." },
  ];

  return (
    <div className="d-flex flex-column min-h-screen">
      <Header openAppointmentModal={handleOpenModal} />

      <main className="flex-grow">

        {/* ── SECTION 1: HERO — full-bleed bg image ── */}
        <section className="about_hero_section">
          {/* Background image */}
          <img src="/images/image(12).svg" alt="" className="about_hero_bg_img" />
          {/* Overlay */}
          <div className="about_hero_overlay" />

          <div className="container about_hero_content">
            <span className="about_hero_badge">About Avni Hospital</span>
            <h1 className="fw-bold text-white mb-3" style={{ fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1.15, maxWidth: "640px" }}>
              Clinical Excellence with a Human Touch
            </h1>
            <p className="text-white mb-5" style={{ opacity: 0.85, fontSize: "16px", lineHeight: 1.75, maxWidth: "540px" }}>
              Providing Patna with world-class healthcare. Consistently ranked as a <strong>top 10 hospital in Patna</strong>, we deliver advanced surgical technology and compassionate clinical care.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Link href="#founders-section" className="hero_btn_solid">Meet Our Founders</Link>
              <Link href="#infra-section" className="hero_btn_ghost">Our Facilities</Link>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: LEGACY — text left, image right ── */}
        <section className="about_legacy_section" id="about-legacy">
          <div className="container">
            <div className="row align-items-center g-5">
              {/* Left: text */}
              <div className="col-lg-6">
                <h2 className="legacy_heading mb-3">Best Hospital in Patna, Bihar</h2>
                <p className="legacy_text mb-3">
                  Avni Hospital is a premier 25-bedded Multispeciality Hospital in Patna, Bihar. Recognized as a <strong>top 10 private hospital in Patna</strong> and led by the visionary Dr. Harish Prasad B.R., our institution was founded on the principle of providing high-end clinical services with deep human compassion. We take pride in being the <strong>top service provider hospital in Patna</strong> for affordable and ethical healthcare.
                </p>
                <p className="legacy_text mb-4">
                  Whether you are looking for a Gynecology Hospital, Maternity Hospital, Child Specialist Hospital, or a specialized Joint Replacement Hospital in Patna, our facility covers all major clinical areas. Since our inception, we have evolved into the best hospital in Bihar for laparoscopic surgery, neurosurgery, urology, nephrology, cancer treatments, and pediatric care.
                </p>
                {/* Stats row */}
                <div className="legacy_stats_row">
                  <div className="legacy_stat_block">
                    <div className="legacy_stat_num">25+</div>
                    <div className="legacy_stat_lbl">Beds Capacity</div>
                  </div>
                  <div className="legacy_stat_divider" />
                  <div className="legacy_stat_block">
                    <div className="legacy_stat_num">15+</div>
                    <div className="legacy_stat_lbl">Specialist Doctors</div>
                  </div>
                </div>
              </div>

              {/* Right: hospital building image + floating card */}
              <div className="col-lg-6">
                <div className="legacy_img_container">
                  <div className="legacy_main_img_wrap">
                    <img src="/images/image(13).svg" alt="Avni Hospital Building" className="legacy_main_img" />
                  </div>
                  {/* Floating card */}
                  <div className="legacy_float_card">
                    <div className="legacy_float_icon">🛡️</div>
                    <div className="legacy_float_text">Leading Multispeciality Hospital in Bihar</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: MISSION & VISION ── */}
        <section className="mv_section">
          <div className="container">
            <div className="row g-4">
              <div className="col-md-6">
                <div className="mv_card_new">
                  <div className="mv_card_header">
                    <div className="mv_icon_circle mission_c">🚩</div>
                    <h3 className="mv_card_title">Our Mission</h3>
                  </div>
                  <p className="mv_card_text">
                    To inspire hope, and contribute to health and wellbeing by providing the best care to every patient through integrated clinical practice, education and research.
                  </p>
                  <span className="mv_arrow">→</span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mv_card_new">
                  <div className="mv_card_header">
                    <div className="mv_icon_circle vision_c">👁️</div>
                    <h3 className="mv_card_title">Our Vision</h3>
                  </div>
                  <p className="mv_card_text">
                    To be the leading healthcare provider in the region, recognized for clinical excellence, compassionate care, and medical innovation that transforms lives.
                  </p>
                  <span className="mv_arrow">→</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 4: FOUNDERS — horizontal photo+text cards ── */}
        <section className="founders_section" id="founders-section">
          <div className="container">
            <div className="text-center mb-5">
              <span className="section_header_tag">Leadership</span>
              <h2 className="fw-bold text-dark mt-2" style={{ fontSize: "clamp(24px, 3.5vw, 36px)" }}>Founded on Vision &amp; Expertise</h2>
            </div>
            <div className="row g-4 justify-content-center">
              {[
                { name: "Dr. Harish Prasad B.R.", subtitle: "Chief Laparoscopic Surgeon", tag: "Director", tagColor: "#006D5B", img: "/images/smiling-young-male-doctor-wearing-stethoscope-medical-gown-isolated-white-wall1.svg", desc: "A visionary leader with decades of experience in minimally invasive surgeries, committed to bringing global medical standards to Patna." },
                { name: "Dr. Manohar CV", subtitle: "Chief of Cardiology", tag: "Co-Founder", tagColor: "#009688", img: "/images/doctor-preparing-consult1.svg", desc: "Leading our cardiac care unit with a focus on preventive cardiology and advanced interventional techniques for heart health." }
              ].map((f) => (
                <div key={f.name} className="col-lg-5 col-md-6">
                  <div className="founder_h_card">
                    <div className="founder_h_img_wrap">
                      <img src={f.img} alt={f.name} className="founder_h_img" />
                    </div>
                    <div className="founder_h_body">
                      <span className="founder_h_tag" style={{ background: f.tagColor }}>{f.tag}</span>
                      <h3 className="founder_h_name">{f.name}</h3>
                      <p className="founder_h_subtitle">{f.subtitle}</p>
                      <p className="founder_h_desc">{f.desc}</p>
                      <button onClick={handleOpenModal} className="founder_h_link">View Full Bio →</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 5: MANAGEMENT & OPERATIONS ── */}
        <section className="mgmt_section">
          <div className="container">
            <div className="text-center mb-5">
              <span className="section_header_tag">Our Team</span>
              <h2 className="fw-bold text-dark mt-2" style={{ fontSize: "clamp(24px, 3.5vw, 36px)" }}>Management & Operations</h2>
              <div className="section_divider"></div>
              <p className="text-muted mt-3 mx-auto" style={{ maxWidth: "560px", fontSize: "15px" }}>
                A dedicated leadership team ensures every department runs with precision, empathy, and clinical excellence.
              </p>
            </div>
            <div className="row g-4 justify-content-center">
              {mgmtItems.map((m) => (
                <div key={m.title} className="col-lg-4 col-md-6">
                  <div className="mgmt_card">
                    <div className="mgmt_icon_circle">{m.icon}</div>
                    <div className="section_header_tag mb-2">{m.title}</div>
                    <h3 className="fw-bold text-dark mb-1" style={{ fontSize: "16px" }}>{m.name}</h3>
                    <p className="text-muted mb-0" style={{ fontSize: "13px", lineHeight: 1.6 }}>{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 6: OUR SPECIALISTS ── */}
        <section className="specialists_section" id="staff-directory">
          <div className="container">
            <div className="text-center mb-5">
              <span className="section_header_tag">Our Specialists</span>
              <h2 className="fw-bold text-dark mt-2" style={{ fontSize: "clamp(24px, 3.5vw, 36px)" }}>Meet the Doctors</h2>
              <div className="section_divider"></div>
              <p className="text-muted mt-3 mx-auto" style={{ maxWidth: "560px", fontSize: "15px" }}>
                Our multidisciplinary team of specialists delivers advanced diagnostics, surgical expertise, and evidence-based clinical care.
              </p>
            </div>

            {/* Staff Tabs */}
            <div className="d-flex justify-content-center gap-3 mb-5 flex-wrap">
              {[["doctors", "Specialist Doctors"], ["nursing", "Nursing & Medical"], ["admin", "Administrative"]].map(([key, label]) => (
                <button key={key} onClick={() => setStaffTab(key)} className={`staff_tab_btn ${staffTab === key ? "active" : ""}`}>
                  {label}
                </button>
              ))}
            </div>

            <div className="row g-4 justify-content-center">
              {currentList.map((doc, idx) => (
                <div key={idx} className="col-xl-3 col-lg-4 col-sm-6">
                  <div className="specialist_card">
                    <div className="specialist_img_wrap">
                      <img src={doc.img} alt={doc.name} />
                      <span className="specialist_dept_badge">{doc.dept}</span>
                      <span className="specialist_exp_badge">{doc.experience}</span>
                    </div>
                    <div className="specialist_body">
                      <h3 className="fw-bold text-dark mb-1" style={{ fontSize: "15px" }}>{doc.name}</h3>
                      <p className="mb-2" style={{ fontSize: "12px", color: "#006D5B", fontWeight: 600 }}>{doc.role}</p>
                      {doc.education && <p className="text-muted mb-3" style={{ fontSize: "12px" }}>{doc.education}</p>}
                      <div className="d-flex align-items-center justify-content-between">
                        <button onClick={handleOpenModal} className="read_more_link">Book Consult →</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 7: NURSING STAFF BANNER ── */}
        <section className="nursing_section">
          <div className="container position-relative" style={{ zIndex: 2 }}>
            <div className="row align-items-center g-5">
              <div className="col-lg-5">
                <span className="section_header_tag" style={{ background: "rgba(255,255,255,0.15)", color: "#fff" }}>Nursing Excellence</span>
                <h2 className="fw-bold text-white mt-2 mb-3" style={{ fontSize: "clamp(24px, 3.5vw, 36px)" }}>Nursing Staff Excellence</h2>
                <p className="text-white mb-4" style={{ opacity: 0.85, fontSize: "15px", lineHeight: 1.75 }}>
                  Our highly trained nursing team forms the backbone of Avni Hospital's 24/7 care delivery — providing round-the-clock support, monitoring, and compassionate patient attention across all departments.
                </p>
                {/* <button onClick={handleOpenModal} className="cta_btn_primary">Meet Our Team</button> */}
              </div>
              <div className="col-lg-7">
                <div className="row g-3">
                  {[
                    { icon: "👩‍⚕️", stat: "200+", label: "Nursing Staff" },
                    { icon: "🏥", stat: "24/7", label: "ICU Support" },
                    { icon: "💊", stat: "100%", label: "Care Quality" },
                    { icon: "❤️", stat: "1M+", label: "Patients Cared" },
                  ].map((n) => (
                    <div key={n.label} className="col-6">
                      <div className="nursing_card">
                        <span className="nursing_icon">{n.icon}</span>
                        <div className="nursing_stat">{n.stat}</div>
                        <div className="nursing_stat_label mt-1">{n.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 8: THE AVNI FAMILY ── */}
        <section className="family_section">
          <div className="container">
            <div className="text-center mb-5">
              <span className="section_header_tag">Our People</span>
              <h2 className="fw-bold text-dark mt-2" style={{ fontSize: "clamp(24px, 3.5vw, 36px)" }}>The Avni Family</h2>
              <div className="section_divider"></div>
              <p className="text-muted mt-3 mx-auto" style={{ maxWidth: "560px", fontSize: "15px" }}>
                Behind every successful patient story is a dedicated team that works together with one shared mission — to heal, care, and support.
              </p>
            </div>
            <div className="row g-4 justify-content-center">
              {familyStats.map((f) => (
                <div key={f.label} className="col-lg-2 col-md-4 col-6">
                  <div className="family_card">
                    <div className="family_icon">{f.icon}</div>
                    <div className="fw-bold text-dark mb-1" style={{ fontSize: "22px" }}>{f.value}</div>
                    <div className="text-muted" style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.5px" }}>{f.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 9: WHAT WE STAND FOR ── */}
        <section className="values_section">
          <div className="container">
            <div className="text-center mb-5">
              <span className="section_header_tag">
                <span className="material-symbols-outlined" style={{ fontSize: "16px", marginRight: "6px" }}>diamond</span>
                OUR VALUES
              </span>
              <h2 className="fw-bold text-dark mt-2" style={{ fontSize: "clamp(28px, 3.5vw, 42px)" }}>
                What We <span style={{ color: "#006D5B" }}>Stand For</span>
              </h2>
              <p className="text-muted mt-3 mx-auto" style={{ maxWidth: "600px", fontSize: "15px", lineHeight: "1.7" }}>
                Our core values define who we are, how we care, and the standard we hold ourselves to every single day.
              </p>
            </div>
            <div className="row g-4">
              {valuesItems.map((item) => (
                <div key={item.title} className="col-lg-4 col-md-6">
                  <div className={`value_card value_card_${item.color}`}>
                    <div className="value_card_header">
                      <div className="value_icon_box">
                        <span style={{ fontFamily: "sans-serif" }}>{item.icon}</span>
                      </div>
                      <div className="value_bg_num">{item.num}</div>
                    </div>
                    <h3 className="fw-bold text-dark mb-2" style={{ fontSize: "18px" }}>{item.title}</h3>
                    <p className="text-muted mb-0" style={{ fontSize: "14px", lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 10: CTA BANNER ── */}
        <section className="about_cta_section">
          <div className="container">
            <div className="cta_banner_card">
              <div className="cta_banner_content">
                <div className="cta_badge">
                  <span className="material-symbols-outlined cta_badge_icon">monitor_heart</span>
                  BOOK YOUR VISIT
                </div>
                <h2 className="cta_banner_h2">
                  Ready to Take the First Step <span className="cta_banner_highlight">Towards Better Health?</span>
                </h2>
                <p className="cta_banner_p">
                  Schedule an appointment with our expert doctors today. Walk-ins also welcome during OPD hours.
                </p>
              </div>
              <div className="cta_banner_action">
                <button onClick={handleOpenModal} className="cta_btn_primary">
                  <span className="material-symbols-outlined">event_available</span>
                  <span className="cta_btn_text">Book Appointment</span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer openAppointmentModal={handleOpenModal} />
      <AppointmentModal isOpen={modalOpen} onClose={handleCloseModal} />
    </div>
  );
}
