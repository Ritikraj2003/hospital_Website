"use client";

import React, { useState } from "react";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import AppointmentModal from "@/components/AppointmentModal";
import Link from "next/link";
import "./home.css";

/* ─────────────────────────────────────────────────────────
   1. HERO
   ───────────────────────────────────────────────────────── */
function Hero({ openAppointmentModal }) {
  const [text, setText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [loopNum, setLoopNum] = React.useState(0);
  const typingSpeed = isDeleting ? 30 : 60;

  const bestPoints = React.useMemo(() => [
    "Advanced Surgery & Compassionate Care",
    "24/7 Emergency & Trauma Support",
    "State-of-the-Art Modular OTs",
    "Patna's Most Trusted Specialists",
    "Patient-Centric Treatment Plans"
  ], []);

  React.useEffect(() => {
    let timer;
    const currentPhrase = bestPoints[loopNum % bestPoints.length];

    if (isDeleting) {
      if (text === "") {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
      } else {
        timer = setTimeout(() => {
          setText(currentPhrase.substring(0, text.length - 1));
        }, typingSpeed);
      }
    } else {
      if (text === currentPhrase) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000); // Wait 2s before deleting
      } else {
        timer = setTimeout(() => {
          setText(currentPhrase.substring(0, text.length + 1));
        }, typingSpeed);
      }
    }
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, bestPoints]);

  return (
    <section className="hp_hero" id="home-page">
      <img src="/images/image(3).svg" alt="Avni Hospital" className="hp_hero_bg" />
      <div className="hp_hero_overlay" />
      <div className="container hp_hero_inner">
        <div className="hp_hero_badge">
          <span className="hp_hero_badge_dot">✔</span>
          25-Bedded Multi-Speciality Facility
        </div>
        <h1 className="hp_hero_h1">
          Welcome to <span className="hp_hero_accent">Avni Hospital</span>
        </h1>
        <div style={{ fontSize: "22px", fontWeight: "600", color: "#85f6e5", marginBottom: "16px", minHeight: "33px", display: "flex", alignItems: "center" }}>
          <span>{text}<span className="hp_cursor">|</span></span>
        </div>
        <p className="hp_hero_sub">
          Experience world-class healthcare in the heart of Patna. We provide sophisticated clinical solutions with human-centric warmth.
        </p>
        <div className="hp_hero_btns">
          <button onClick={openAppointmentModal} className="hp_btn_primary">
            Book Appointment Now <span>📅</span>
          </button>
          <button
            onClick={() => window.open("https://maps.google.com/?q=Avni+Hospital+Patna", "_blank")}
            className="hp_btn_ghost"
          >
            Get Location <span>📍</span>
          </button>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   2. STATS BAR
   ───────────────────────────────────────────────────────── */
function StatsBar() {
  const stats = [
    { num: "24/7", label: "Trauma Care" },
    { num: "100+", label: "Doctors" },
    { num: "1M+", label: "Happy Patients" },
    { num: "1200+", label: "Successful Ops" },
  ];
  return (
    <section className="hp_stats_bar">
      <div className="container">
        <div className="hp_stats_grid">
          {stats.map((s) => (
            <div key={s.label} className="hp_stat_card">
              <div className="hp_stat_num">{s.num}</div>
              <div className="hp_stat_label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   3. ABOUT US
   ───────────────────────────────────────────────────────── */
function About() {
  return (
    <section className="hp_about_section" id="about-us">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Images */}
          <div className="col-lg-6">
            <div className="hp_about_img_grid">
              <img src="/images/image(3).svg" alt="Medical equipment" className="hp_about_img hp_about_img_top" />
              <img src="/images/image(12).svg" alt="Patient care" className="hp_about_img hp_about_img_btm" />
              <div className="hp_about_badge_box">
                <p className="hp_about_badge_title">Healing with Compassion</p>
                <p className="hp_about_badge_sub">Serving Patna for over a decade</p>
              </div>
            </div>
          </div>
          {/* Text */}
          <div className="col-lg-6">
            <span className="hp_section_eyebrow">Who We Are</span>
            <h2 className="hp_section_h2">Clinical Excellence with a Human Touch</h2>
            <p className="hp_about_text">
              Avni Hospital, situated in the heart of Patna, stands out as a premier 25-bedded multi-speciality hospital offering the most sophisticated and specialized medical services in the vicinity. Our patient-focused approach guarantees you receive the highest standard of individualized clinical care.
            </p>
            <p className="hp_about_text">
              Under the visionary leadership of Dr. Harish Prasad B.R., Avni Hospital has grown into a trusted healthcare hub. We combine highly experienced doctors and state-of-the-art diagnostic facilities to deliver seamless care to you and your family.
            </p>
            <Link href="/about" className="hp_text_link">
              Read More About Our Mission <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   4. DEPARTMENTS
   ───────────────────────────────────────────────────────── */
function Departments() {
  const [filter, setFilter] = useState("all");

  const depts = [
    { name: "Laparoscopic", icon: "🔬", category: "surgery" },
    { name: "Laparotomy", icon: "🏥", category: "surgery" },
    { name: "General Medicine", icon: "🩺", category: "general" },
    { name: "Diabetology", icon: "🩸", category: "specialty" },
    { name: "Obstetrics", icon: "🤰", category: "general" },
    { name: "Gynaecology", icon: "👩‍⚕️", category: "general" },
    { name: "Fertility (IVF)", icon: "🧬", category: "specialty" },
    { name: "Pediatrics", icon: "👶", category: "general" },
    { name: "Orthopaedics", icon: "🦴", category: "surgery" },
    { name: "Neurology", icon: "🧠", category: "specialty" },
    { name: "Cardiology", icon: "❤️", category: "specialty" },
    { name: "Oncology", icon: "🔬", category: "specialty" },
  ];

  const tabs = [
    { id: "all", label: "All Departments" },
    { id: "general", label: "General Care" },
    { id: "surgery", label: "Surgical Specialties" },
    { id: "specialty", label: "Specialized Clinical" },
  ];

  const filtered = filter === "all" ? depts : depts.filter((d) => d.category === filter);

  return (
    <section className="hp_dept_section" id="department-blk">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="hp_section_h2">Hospital Departments</h2>
          <p className="hp_section_sub">Specialized clinical care across various disciplines, powered by advanced technology and expert surgeons.</p>
          <div className="hp_filter_tabs">
            {tabs.map((t) => (
              <button key={t.id} onClick={() => setFilter(t.id)}
                className={`hp_filter_btn ${filter === t.id ? "active" : ""}`}>
                {t.label}
              </button>
            ))}
          </div>
        </div>
        <div className="hp_dept_grid">
          {filtered.map((d) => (
            <div key={d.name} className="hp_dept_card">
              <div className="hp_dept_icon">{d.icon}</div>
              <p className="hp_dept_name">{d.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   5. EMERGENCY & AMBULANCE
   ───────────────────────────────────────────────────────── */
function Emergency() {
  return (
    <section className="hp_emergency_section" id="emergency-services">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="hp_emrg_badge">🚨 Critical Response Unit</div>
            <h2 className="hp_section_h2 mt-3">
              Emergency &amp; <span className="hp_error_text">Ambulance</span> Services
            </h2>
            <p className="hp_about_text">
              When every second counts, Avni Hospital provides rapid-response medical assistance. Our specialized ambulance fleet is equipped with advanced life-support systems to ensure patient stability during transit.
            </p>
            <div className="hp_emrg_features">
              <div className="hp_emrg_feat">
                <span className="hp_emrg_feat_icon">🕐</span>
                <div>
                  <h5 className="hp_emrg_feat_title">24/7 Availability</h5>
                  <p className="hp_emrg_feat_desc">Round-the-clock dispatch for any medical emergency.</p>
                </div>
              </div>
              <div className="hp_emrg_feat">
                <span className="hp_emrg_feat_icon">👥</span>
                <div>
                  <h5 className="hp_emrg_feat_title">Rapid Response Team</h5>
                  <p className="hp_emrg_feat_desc">Highly trained paramedics and trauma specialists.</p>
                </div>
              </div>
            </div>
            <a href="tel:1066" className="hp_emrg_call_btn">📞 Call Emergency: 1066</a>
          </div>
          <div className="col-lg-6">
            <div className="hp_emrg_img_wrap">
              <div className="hp_emrg_glow" />
              <img src="/images/image(3).svg" alt="Emergency ambulance" className="hp_emrg_img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   6. SERVICES
   ───────────────────────────────────────────────────────── */
function Services({ openAppointmentModal }) {
  const services = [
    { icon: "🏥", title: "Specialized Medical", desc: "Comprehensive care for chronic and acute illnesses, utilizing evidence-based treatment pathways and expert advice." },
    { icon: "⚙️", title: "Surgical Specialties", desc: "Advanced minimally invasive, laparoscopic, and open procedures inside state-of-the-art sterile modular theatres." },
    { icon: "💓", title: "24/7 Critical Care", desc: "Fully equipped Intensive Care Units (ICU) and round-the-clock emergency support managed by qualified practitioners." },
  ];
  return (
    <section className="hp_services_section" id="services-blk">
      <div className="container">
        <div className="hp_services_header">
          <div>
            <span className="hp_section_eyebrow">Services &amp; Treatment</span>
            <h2 className="hp_section_h2">Clinical Care Offerings</h2>
          </div>
          <button className="hp_view_all_btn">View All Services</button>
        </div>
        <div className="hp_services_grid">
          {services.map((s) => (
            <div key={s.title} className="hp_service_card">
              <div className="hp_service_icon_box">{s.icon}</div>
              <h3 className="hp_service_title">{s.title}</h3>
              <p className="hp_service_desc">{s.desc}</p>
              <button onClick={openAppointmentModal} className="hp_service_link">
                Schedule Care <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   7. DOCTORS
   ───────────────────────────────────────────────────────── */
function Doctors({ openAppointmentModal }) {
  const doctors = [
    { name: "Dr. Manohar CV",    dept: "Cardiology",    exp: "15+ Years", edu: "MD, DM (Cardiology)",    img: "/images/doctor-preparing-consult1.svg" },
    { name: "Dr. Anika Parrikar", dept: "Gynaecology",  exp: "12+ Years", edu: "MS (OBG), IVF Specialist", img: "/images/front-view-laughing-female-doctor-holding-stethoscope-her-hands-standing-yellow-background1.svg" },
    { name: "Dr. Prashanth A",   dept: "Neurology",     exp: "14+ Years", edu: "MD, DM (Neurology)",      img: "/images/smiling-young-male-doctor-wearing-stethoscope-medical-gown-isolated-white-wall1.svg" },
    { name: "Dr. Rakshith M",    dept: "Orthopaedics",  exp: "10+ Years", edu: "MS (Orthopaedics), MCh",  img: "/images/doctor-preparing-consult1.svg" },
  ];
  return (
    <section className="hp_doctors_section" id="our-doctor">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="hp_section_h2">Our Specialist Doctors</h2>
          <p className="hp_section_sub">Avni Hospital is supported by a multidisciplinary team of highly experienced specialist doctors, delivering advanced diagnostics and surgical expertise.</p>
        </div>
        <div className="hp_doctors_grid">
          {doctors.map((doc) => (
            <div key={doc.name} className="hp_doctor_card">
              <div className="hp_doctor_img_wrap">
                <img src={doc.img} alt={doc.name} className="hp_doctor_img" />
                <div className="hp_doctor_exp_badge">{doc.exp} Exp</div>
              </div>
              <div className="hp_doctor_body">
                <span className="hp_doctor_dept">{doc.dept}</span>
                <h4 className="hp_doctor_name">{doc.name}</h4>
                <p className="hp_doctor_edu">{doc.edu}</p>
                <button onClick={openAppointmentModal} className="hp_doctor_btn">Consult Doctor</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   8. WHY CHOOSE US
   ───────────────────────────────────────────────────────── */
function WhyChooseUs({ openAppointmentModal }) {
  const features = [
    { icon: "🩺", title: "Skilled Medical Professionals", desc: "A dedicated team of highly skilled professionals across various specialties dedicated to your care." },
    { icon: "⏱️", title: "24x7 Emergency Support", desc: "Round-the-clock trauma centre, ICU, and rapid response emergency department for all critical cases." },
    { icon: "🔬", title: "Advanced Medical Technology", desc: "Equipped with the latest in medical technology for accurate diagnosis and effective treatment." },
    { icon: "⚕️", title: "Advanced Diagnostics", desc: "Comprehensive imaging, pathology, and laboratory services for precise and accurate assessments." },
    { icon: "💜", title: "Personalized Care", desc: "Prioritizing personalized care and ensuring each patient receives the attention they deserve." },
    { icon: "🎗️", title: "Compassionate Care", desc: "A focus on compassionate service and a commitment to the overall well-being of every patient." },
  ];
  return (
    <section className="hp_why_section">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <h2 className="hp_why_h2">Why Avni Hospital?</h2>
            <p className="hp_why_sub">We merge wellness with deep compassion and top-tier clinical quality to restore health and inspire confidence.</p>
            <div className="hp_why_grid">
              {features.map((f) => (
                <div key={f.title} className="hp_why_feat">
                  <span className="hp_why_feat_icon">{f.icon}</span>
                  <div>
                    <h5 className="hp_why_feat_title">{f.title}</h5>
                    <p className="hp_why_feat_desc">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={openAppointmentModal} className="hp_why_btn">Get Started Now</button>
          </div>
          <div className="col-lg-6 d-none d-lg-block">
            <div className="hp_why_img_wrap">
              <div className="hp_why_glow" />
              <img src="/images/image(13).svg" alt="Modern hospital exterior" className="hp_why_img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   9. TESTIMONIALS
   ───────────────────────────────────────────────────────── */
function Testimonials() {
  return (
    <section className="hp_testimonials_section">
      <div className="container">
        <div className="hp_testimonials_divider">
          <div className="hp_divider_line" />
          <h2 className="hp_section_h2 mx-4">Patient Testimonials</h2>
          <div className="hp_divider_line" />
        </div>
        <div className="hp_testimonials_grid">
          <div className="hp_testimonial_card">
            <div className="hp_stars">★★★★★</div>
            <p className="hp_testimonial_text">"A wonderful serenity has taken possession of my entire soul. The doctors at Avni Hospital gave me a new lease on life with their prompt diagnosis."</p>
            <div className="hp_testimonial_author">
              <div className="hp_author_avatar" style={{ background: "#005344" }}>AS</div>
              <div>
                <div className="hp_author_name">Mr. Ajay Shankar</div>
                <div className="hp_author_cond">Diabetes Patient</div>
              </div>
            </div>
          </div>
          <div className="hp_testimonial_card">
            <div className="hp_stars">★★★★★</div>
            <p className="hp_testimonial_text">"Efficient, clean, and highly professional. From the emergency entrance to the final checkup, coordination was flawless."</p>
            <div className="hp_testimonial_author">
              <div className="hp_author_avatar" style={{ background: "#006a60" }}>RK</div>
              <div>
                <div className="hp_author_name">Mr. Ramesh Kumar</div>
                <div className="hp_author_cond">Orthopaedic Patient</div>
              </div>
            </div>
          </div>
          <div className="hp_vision_card">
            <p className="hp_vision_eyebrow">Our Vision</p>
            <h3 className="hp_vision_quote">"To inspire hope, and contribute to health and wellbeing by providing the best care to every patient."</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   10. BLOG / RECENT NEWS
   ───────────────────────────────────────────────────────── */
function RecentNews() {
  const blogs = [
    { date: "17 Sep, 2025", category: "Immunology",    title: "How to Improve Immunity Naturally",        desc: "Our leading dieticians share proven nutritional methods and lifestyle routines to safely double your defenses.",            img: "/images/image(11).svg" },
    { date: "16 Sep, 2025", category: "General Health", title: "Build Strong Immunity Naturally",          desc: "An informative guide detailing the impact of hydration and regular physical activity on organic resilience.",              img: "/images/image(12).svg" },
    { date: "11 Sep, 2024", category: "Surgery",        title: "Surgical Specialties & Laparoscopy",       desc: "Understanding the safety and recovery benefits of modern minimally invasive keyhole procedures at Avni Hospital.",         img: "/images/image(13).svg" },
  ];
  return (
    <section className="hp_news_section" id="recent-news">
      <div className="container">
        <div className="hp_news_header">
          <div>
            <span className="hp_section_eyebrow">Recent News &amp; Articles</span>
            <h2 className="hp_section_h2">Healthcare for your Family</h2>
          </div>
          <button className="hp_news_browse_btn">Browse Blog</button>
        </div>
        <div className="hp_news_grid">
          {blogs.map((b) => (
            <article key={b.title} className="hp_news_card">
              <div className="hp_news_img_wrap">
                <img src={b.img} alt={b.title} className="hp_news_img" />
                <span className="hp_news_cat_badge">{b.category}</span>
              </div>
              <div className="hp_news_body">
                <p className="hp_news_date">{b.date}</p>
                <h4 className="hp_news_title">{b.title}</h4>
                <p className="hp_news_desc">{b.desc}</p>
                <a href="#" className="hp_news_read_link">Read Article...</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   MAIN EXPORT
   ───────────────────────────────────────────────────────── */
export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="d-flex flex-column min-h-screen">
      <Header openAppointmentModal={() => setModalOpen(true)} />
      <main className="flex-grow">
        <Hero openAppointmentModal={() => setModalOpen(true)} />
        <StatsBar />
        <About />
        <Departments />
        <Emergency />
        <Services openAppointmentModal={() => setModalOpen(true)} />
        <Doctors openAppointmentModal={() => setModalOpen(true)} />
        <WhyChooseUs openAppointmentModal={() => setModalOpen(true)} />
        <Testimonials />
        <RecentNews />
      </main>
      <Footer openAppointmentModal={() => setModalOpen(true)} />
      <AppointmentModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
