"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import AppointmentModal from "@/components/AppointmentModal";
import "./contact.css";

export default function ContactPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", department: "General Consultation", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    async function fetchInquiries() {
      try {
        const res = await fetch("/api/inquiry");
        const data = await res.json();
        if (data.success) {
          setInquiries(data.inquiries);
        }
      } catch (error) {
        console.error("Failed to fetch inquiries:", error);
      }
    }
    fetchInquiries();
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setInquiries((prev) => [data.inquiry, ...prev]);
        setForm({ name: "", phone: "", email: "", department: "General Consultation", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert(data.error || "Failed to submit inquiry.");
      }
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleDeleteInquiry = async (id) => {
    if (!confirm("Are you sure you want to delete this inquiry?")) return;
    try {
      const res = await fetch(`/api/inquiry?id=${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        setInquiries((prev) => prev.filter((inq) => inq.id !== id));
      } else {
        alert(data.error || "Failed to delete inquiry.");
      }
    } catch (error) {
      console.error("Error deleting inquiry:", error);
    }
  };

  const infoCards = [
    { icon: "📍", title: "Our Address",  lines: ["Amaranth mandir rode near", "bhoothnath metro station,", "Patna, Bihar, 800026"] },
    { icon: "📞", title: "Phone",        lines: ["General: +91 99312 12664", "Emergency: 1066"] },
    { icon: "✉️", title: "Email",        lines: ["info@avnihospital.com"] },
    { icon: "🕐", title: "Hours",        lines: ["Emergency: 24/7", "OPD: 9:00 AM – 8:00 PM"] },
  ];

  const departments = [
    "General Consultation", "Cardiology", "Gynaecology & Obstetrics",
    "Pediatrics & Neonatology", "Surgical Specialties", "Laparoscopic Surgery",
    "Neurology", "Orthopaedics", "Urology", "Emergency & Trauma",
  ];

  const socialLinks = [
    { label: "Facebook",  href: "https://facebook.com", icon: <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
    { label: "Twitter",   href: "https://twitter.com",  icon: <svg viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg> },
    { label: "LinkedIn",  href: "https://linkedin.com", icon: <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"/></svg> },
    { label: "Instagram", href: "https://instagram.com", icon: <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="#fff"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="#fff" strokeWidth="1.5"/></svg> },
  ];

  return (
    <div className="d-flex flex-column min-h-screen">
      <Header openAppointmentModal={() => setModalOpen(true)} />

      <main className="flex-grow">

        {/* ── HERO ── */}
        <section className="contact_hero">
          <img src="/images/image(12).svg" alt="" className="contact_hero_bg" />
          <div className="container">
            <div className="contact_hero_inner">
              <span className="contact_hero_tag">Reach Out to Us</span>
              <h1 className="contact_hero_h1">Contact Us</h1>
              <p className="contact_hero_sub">
                Dedicated to providing the most sophisticated and specialized medical services in Patna. Our team is here to assist you with inquiries, appointments, and emergency care.
              </p>
            </div>
          </div>
        </section>

        {/* ── EMERGENCY + INFO CARDS ── */}
        <section className="contact_info_grid_section">
          <div className="container">

            {/* Emergency Banner */}
            <div className="emergency_card">
              <div className="emergency_left">
                <div className="emergency_pulse_ring">✳</div>
                <div>
                  <h2 className="emergency_h2">24/7 Emergency Helpline</h2>
                  <p className="emergency_desc">Immediate medical assistance and ambulance services available round the clock.</p>
                </div>
              </div>
              <div className="emergency_btns">
                <a href="tel:1066" className="emrg_btn_solid">
                  <span>📞</span> Call 1066
                </a>
                <a href="tel:+919931212664" className="emrg_btn_outline">
                  Ambulance Services
                </a>
              </div>
            </div>

            {/* Info Cards */}
            <div className="info_cards_grid">
              {infoCards.map((c) => (
                <div key={c.title} className="info_card_new">
                  <div className="info_card_icon_new">{c.icon}</div>
                  <div>
                    <h3 className="info_card_h3">{c.title}</h3>
                    <p className="info_card_p">
                      {c.lines.map((l, i) => (
                        <span key={i}>{l}{i < c.lines.length - 1 && <br />}</span>
                      ))}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FORM & MAP ── */}
        <section className="form_map_section">
          <div className="container">
            <div className="row g-5">

              {/* LEFT — Form */}
              <div className="col-lg-6">
                <h2 className="form_side_title">Send us an Inquiry</h2>
                <p className="form_side_sub">Fill out the form below and our medical team will get back to you within 24 hours.</p>

                <form onSubmit={handleSubmit}>
                  {/* Row: Name + Phone */}
                  <div className="cf_form_row">
                    <div className="cf_form_group">
                      <label className="cf_label">Full Name</label>
                      <input name="name" type="text" value={form.name} onChange={handleChange} className="cf_input" placeholder="Enter your name" required />
                    </div>
                    <div className="cf_form_group">
                      <label className="cf_label">Phone Number</label>
                      <input name="phone" type="tel" value={form.phone} onChange={handleChange} className="cf_input" placeholder="+91 00000 00000" required />
                    </div>
                  </div>

                  <div className="cf_form_group">
                    <label className="cf_label">Email Address</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} className="cf_input" placeholder="example@email.com" required />
                  </div>

                  <div className="cf_form_group">
                    <label className="cf_label">Preferred Department</label>
                    <select name="department" value={form.department} onChange={handleChange} className="cf_select">
                      {departments.map((d) => <option key={d}>{d}</option>)}
                    </select>
                  </div>

                  <div className="cf_form_group">
                    <label className="cf_label">Message / Medical Concern</label>
                    <textarea name="message" value={form.message} onChange={handleChange} className="cf_textarea" placeholder="How can we help you?" rows={4} required />
                  </div>

                  <button type="submit" className="cf_submit_btn">Submit Inquiry</button>

                  {submitted && (
                    <div className="cf_success">✅ Thank you! We'll get back to you within 24 hours.</div>
                  )}
                </form>
              </div>

              {/* RIGHT — Map + Social */}
              <div className="col-lg-6 d-flex flex-column gap-4">

                {/* Map */}
                <div className="map_outer">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.4!2d85.1355!3d25.5941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed590d5c379573%3A0x1f7bbd4b5c534a92!2sBhoothnath+Metro+Station%2C+Patna!5e0!3m2!1sen!2sin!4v1686000000000"
                    title="Avni Hospital Location"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="map_overlay_card">
                    <div className="map_pin_box">📍</div>
                    <div>
                      <div className="map_card_title">Avni Hospital Patna</div>
                      <p className="map_card_addr">Amaranth Mandir Road, near Bhoothnath Metro Station, Bihar 800026</p>
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div className="social_card_new">
                  <div>
                    <div className="social_card_title_new">Follow Our Updates</div>
                    <p className="social_card_sub_new">Stay connected with our latest healthcare news.</p>
                  </div>
                  <div className="social_btns_row">
                    {socialLinks.map((s) => (
                      <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                        className="social_btn_new" aria-label={s.label} title={s.label}>
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION: RECENT INQUIRIES TABLE ── */}
        <section className="inquiries_table_section py-5 bg-light border-top">
          <div className="container">
            <div className="text-center mb-4">
              <span className="section_header_tag">INQUIRIES LIST</span>
              <h2 className="fw-bold text-dark mt-2" style={{ fontSize: "clamp(24px, 3.5vw, 36px)" }}>Submitted Inquiries</h2>
              <div className="section_divider"></div>
            </div>

            <div className="table-responsive bg-white rounded-3 shadow-sm border p-3">
              {inquiries.length === 0 ? (
                <p className="text-muted text-center py-4 my-0">No inquiries submitted yet. Be the first!</p>
              ) : (
                <table className="table table-hover align-middle mb-0">
                  <thead className="table-light">
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Phone</th>
                      <th scope="col">Email</th>
                      <th scope="col">Department</th>
                      <th scope="col">Message</th>
                      <th scope="col">Date</th>
                      <th scope="col" className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inquiries.map((inq) => (
                      <tr key={inq.id}>
                        <td className="fw-semibold text-dark">{inq.name}</td>
                        <td>{inq.phone}</td>
                        <td>{inq.email}</td>
                        <td>
                          <span className="badge bg-primary-color px-2.5 py-1.5 rounded-pill text-xs fw-bold">
                            {inq.department}
                          </span>
                        </td>
                        <td style={{ maxWidth: "250px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }} title={inq.message}>
                          {inq.message}
                        </td>
                        <td className="text-muted text-xs">
                          {inq.created_at ? new Date(inq.created_at).toLocaleDateString("en-IN", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit"
                          }) : "N/A"}
                        </td>
                        <td className="text-center">
                          <button
                            onClick={() => handleDeleteInquiry(inq.id)}
                            className="btn btn-sm btn-outline-danger px-3 py-1 rounded-pill"
                            style={{ fontSize: "12px" }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </section>

      </main>

      <Footer openAppointmentModal={() => setModalOpen(true)} />
      <AppointmentModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
