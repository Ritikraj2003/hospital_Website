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
    "Best Hospital in Patna, Bihar",
    "Top 10 Private Hospital in Patna",
    "Top Service Provider Hospital in Patna",
    "Best Hospital for Surgery in Patna",
    "24 Hour Hospital with Emergency & Trauma Support",
    "Best Doctors in Patna & Specialized ICU Care"
  ], []);

  const handleHeroFormSubmit = async (e) => {
    e.preventDefault();
    
    // Collect form data
    const formData = {
      name: e.target[0].value,
      phone: e.target[1].value,
      email: e.target[2].value,
      dept: e.target[3].value,
      doctor: e.target[4].value,
      date: e.target[5].value,
      time: e.target[6].value,
      message: "Booked directly from Homepage Hero section"
    };

    try {
      const response = await fetch('/api/appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        alert("Appointment request submitted successfully! Our team will contact you shortly to confirm your slot.");
        e.target.reset();
      } else {
        const data = await response.json();
        alert(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Booking error:", error);
      alert("Error submitting request. Please try again later.");
    }
  };

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
        <div className="row align-items-center g-5">
          {/* Left Text */}
          <div className="col-lg-7">
            <div className="hp_hero_badge">
              <span className="hp_hero_badge_dot">✔</span>
              Best Private Hospital in Patna, Bihar
            </div>
            <h1 className="hp_hero_h1">
              Welcome to <span className="hp_hero_accent">Avni Hospital</span>
            </h1>
            <div style={{ fontSize: "22px", fontWeight: "600", color: "#85f6e5", marginBottom: "16px", minHeight: "33px", display: "flex", alignItems: "center" }}>
              <span>{text}<span className="hp_cursor">|</span></span>
            </div>
            <p className="hp_hero_sub">
              Experience world-class healthcare at the <strong>best hospital in Patna, Bihar</strong>. Consistently recognized as a <strong>top 10 hospital in Patna</strong>, Avni Hospital is your premier choice. As the <strong>top service provider hospital in Patna</strong>, we offer 24/7 emergency trauma care, advanced treatments, and affordable services.
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
          
          {/* Right Form */}
          <div className="col-lg-5 d-none d-lg-block">
            <div className="hp_hero_form_card">
              <h3 className="hp_form_title">Book an Appointment</h3>
              <p className="hp_form_sub">Get confirmed appointment with top doctors.</p>
              <form className="hp_hero_form" onSubmit={handleHeroFormSubmit}>
                <input type="text" placeholder="Patient Name" className="hp_form_input" required />
                <div className="d-flex gap-2">
                  <input type="tel" placeholder="Phone Number" className="hp_form_input" style={{flex: 1}} required />
                  <input type="email" placeholder="Email Address" className="hp_form_input" style={{flex: 1}} required />
                </div>
                <div className="d-flex gap-2">
                  <select className="hp_form_input" style={{flex: 1}} required>
                    <option value="">Select Department</option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="Neurology">Neurology</option>
                    <option value="Orthopaedics">Orthopaedics</option>
                    <option value="Gynecology">Gynecology</option>
                    <option value="General Surgery">General Surgery</option>
                  </select>
                  <select className="hp_form_input" style={{flex: 1}} required>
                    <option value="">Select Doctor</option>
                    <option value="Any Available">Any Available Doctor</option>
                    <option value="Dr. Harish Prasad B.R.">Dr. Harish Prasad B.R.</option>
                    <option value="Dr. Manohar CV">Dr. Manohar CV</option>
                    <option value="Dr. Anika Parrikar">Dr. Anika Parrikar</option>
                    <option value="Dr. Prashanth A">Dr. Prashanth A</option>
                    <option value="Dr. Rakshith M">Dr. Rakshith M</option>
                  </select>
                </div>
                <div className="d-flex gap-2">
                  <input type="date" className="hp_form_input" style={{flex: 1}} required />
                  <select className="hp_form_input" style={{flex: 1}} required>
                    <option value="">Select Slot</option>
                    <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                    <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                    <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                  </select>
                </div>
                <button type="submit" className="hp_form_submit">Confirm Booking</button>
              </form>
            </div>
          </div>
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
   X. INSURANCE BANNER
   ───────────────────────────────────────────────────────── */
function InsuranceBanner() {
  return (
    <section className="hp_insurance_banner">
      <div className="container">
        <div className="hp_insurance_banner_inner">
          <div className="hp_insurance_banner_content">
            <span className="hp_insurance_eyebrow">Hassle-Free Care</span>
            <h2 className="hp_insurance_h2">100% Cashless Hospitalization Facility</h2>
            <p className="hp_insurance_p">
              Recognized as the <strong>best insurance hospital in Patna</strong>, Avni Hospital offers a seamless, transparent, and hassle-free cashless hospitalization experience. We partner with all leading health insurance providers and TPAs.
            </p>
            <div className="hp_insurance_logos">
              <span className="hp_insurance_logo_badge">Star Health</span>
              <span className="hp_insurance_logo_badge">HDFC ERGO</span>
              <span className="hp_insurance_logo_badge">ICICI Lombard</span>
              <span className="hp_insurance_logo_badge">+ 20 More TPAs</span>
            </div>
          </div>
          <div className="hp_insurance_banner_action">
            <Link href="/insurance-cashless-facility" className="hp_insurance_btn">
              Check Supported Insurance <span>→</span>
            </Link>
          </div>
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
            <h2 className="hp_section_h2">Best Private Hospital in Patna, Bihar</h2>
            <p className="hp_about_text">
              Avni Hospital, situated in the heart of Patna, stands out as a premier 25-bedded Multispeciality Hospital in Patna offering the most sophisticated and specialized medical services in the vicinity. As a highly recommended private hospital in Patna, our patient-focused approach guarantees you receive the highest standard of individualized clinical care.
            </p>
            <p className="hp_about_text">
              Under the visionary leadership of Dr. Harish Prasad B.R., Avni Hospital has grown into a trusted healthcare hub for anyone looking for an affordable hospital in Patna. We combine highly experienced doctors and state-of-the-art diagnostic facilities to deliver seamless care to you and your family.
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
          <p className="hp_section_sub">
            Avni Hospital is a premier Multispeciality Hospital in Patna, functioning as a leading Cardiology Hospital, Heart Hospital, Neurology Hospital, Neurosurgery Hospital, Orthopedic Hospital, Urology Hospital, Nephrology Hospital, and Gynecology Hospital in Patna.
          </p>
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
            <div className="hp_emrg_badge">🚨 24x7 Emergency Hospital in Patna</div>
            <h2 className="hp_section_h2 mt-3">
              Trauma Center &amp; <span className="hp_error_text">Critical Care</span> in Patna
            </h2>
            <p className="hp_about_text">
              As a leading 24 Hour ICU Hospital in Patna, Avni Hospital provides rapid-response medical assistance. Our specialized trauma center in Patna is equipped with advanced life-support systems to ensure patient stability during transit.
            </p>
            <div className="hp_emrg_features">
              <div className="hp_emrg_feat">
                <span className="hp_emrg_feat_icon">🕐</span>
                <div>
                  <h3 className="hp_emrg_feat_title">24/7 Availability</h3>
                  <p className="hp_emrg_feat_desc">Round-the-clock dispatch for any medical emergency.</p>
                </div>
              </div>
              <div className="hp_emrg_feat">
                <span className="hp_emrg_feat_icon">👥</span>
                <div>
                  <h3 className="hp_emrg_feat_title">Rapid Response Team</h3>
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
    { icon: "🏥", title: "Best Hospital for Surgery in Patna", desc: "We are the best hospital for surgery in Patna, offering advanced minimally invasive, laparoscopic, and general surgical procedures." },
    { icon: "💓", title: "Cardiology & Heart Hospital in Patna", desc: "Avni Hospital is a premier heart hospital in Patna, providing the best hospital for heart treatment in Patna with 24x7 ICU care." },
    { icon: "🤰", title: "Pregnancy Care & Maternity Hospital", desc: "Known as the best hospital for pregnancy care in Patna, we offer comprehensive gynecology, pediatric, and child specialist care." },
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
                <h3 className="hp_doctor_name">{doc.name}</h3>
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
    { icon: "🩺", title: "Best Doctors in Patna", desc: "A dedicated team of the best doctors in Patna across multiple specialties providing personalized care." },
    { icon: "⏱️", title: "24 Hour Hospital & ICU in Patna", desc: "Round-the-clock trauma center in Patna, ICU, and rapid response emergency department for all critical cases." },
    { icon: "🔬", title: "Affordable Private Hospital in Patna", desc: "Get top-tier medical facilities and advanced surgery treatments at affordable rates, making us the best hospital in Bihar." },
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
                    <h3 className="hp_why_feat_title">{f.title}</h3>
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
                <h3 className="hp_news_title">{b.title}</h3>
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
   11. FAQ SECTION
   ───────────────────────────────────────────────────────── */
function FAQ() {
  const faqs = [
    {
      q: "Why is Avni Hospital considered the best hospital in Patna?",
      a: "Avni Hospital is recognized as the best multispeciality hospital in Patna because we offer 24/7 emergency trauma care, advanced laparoscopic surgeries, and a dedicated team of top doctors in Bihar specializing in cardiology, neurology, and orthopedics."
    },
    {
      q: "Are there 24-hour emergency and ICU services available?",
      a: "Yes, Avni Hospital operates a premier 24-hour emergency hospital in Patna. We feature a fully equipped critical care ICU, a modern trauma center, and a rapid response ambulance team ready at all times."
    },
    {
      q: "What medical specialties does your private hospital offer?",
      a: "As a leading private hospital in Patna, our core clinical specialties include Cardiology (Heart Treatment), Neurosurgery, Orthopedics, Urology, Maternity & Pregnancy Care, Pediatrics, and General Surgery."
    },
    {
      q: "How can I book an appointment with the best doctors in Patna?",
      a: "Booking an appointment is simple. You can schedule a consultation with our expert medical specialists by calling our 24/7 helpline, visiting our facility directly, or using the 'Book Appointment' button on this website."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="hp_faq_section" id="faq">
      {/* Dynamic SEO FAQ Schema embedded directly in the component */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container">
        <div className="text-center mb-5">
          <span className="hp_section_eyebrow">Got Questions?</span>
          <h2 className="hp_section_h2">Frequently Asked Questions</h2>
        </div>
        <div className="hp_faq_list mx-auto" style={{ maxWidth: "800px" }}>
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`hp_faq_item ${activeIndex === idx ? "active" : ""}`}
              style={{
                marginBottom: "16px",
                border: "1px solid #e0e0e0",
                borderRadius: "8px",
                overflow: "hidden",
                background: "#fff"
              }}
            >
              <button 
                onClick={() => toggleFaq(idx)}
                style={{
                  width: "100%",
                  padding: "16px 24px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "transparent",
                  border: "none",
                  fontWeight: "600",
                  fontSize: "18px",
                  color: "#006a60",
                  cursor: "pointer",
                  textAlign: "left"
                }}
              >
                {faq.q}
                <span style={{ fontSize: "24px" }}>
                  {activeIndex === idx ? "-" : "+"}
                </span>
              </button>
              {activeIndex === idx ? (
                <div style={{ padding: "0 24px 20px", color: "#555", lineHeight: "1.6" }}>
                  {faq.a}
                </div>
              ) : null}
            </div>
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
        <InsuranceBanner />
        <About />
        <Departments />
        <Emergency />
        <Services openAppointmentModal={() => setModalOpen(true)} />
        <Doctors openAppointmentModal={() => setModalOpen(true)} />
        <WhyChooseUs openAppointmentModal={() => setModalOpen(true)} />
        <Testimonials />
        <RecentNews />
        <FAQ />
      </main>
      <Footer openAppointmentModal={() => setModalOpen(true)} />
      <AppointmentModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
