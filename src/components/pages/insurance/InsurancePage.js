"use client";

import React, { useState } from 'react';
import Head from 'next/head';
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import AppointmentModal from "@/components/AppointmentModal";
import "./insurance.css";

export default function InsurancePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      q: "How long does cashless approval take?",
      a: "Initial authorization usually takes 2 to 4 hours after submission of all required medical and insurance documents. For planned surgeries, we recommend submitting documents 48 hours in advance to avoid delays on the day of admission."
    },
    {
      q: "What costs are NOT covered by cashless?",
      a: "Non-medical expenses like registration charges, consumables, diet charges (if not covered by policy), and co-payments/deductibles are generally not covered. Patients are required to pay these at the time of discharge."
    },
    {
      q: "Can I avail cashless for emergency admissions?",
      a: "Yes. In case of an emergency admission, treatment begins immediately. You must inform the TPA desk within 24 hours of admission to initiate the cashless authorization process."
    },
    {
      q: "What if my insurance claim is denied?",
      a: "If a cashless claim is denied by the TPA, the patient will have to settle the hospital bills directly. You can then apply for reimbursement later. Our TPA desk will provide all necessary documents to support your reimbursement claim."
    }
  ];

  const partners = [
    { name: "Star Health", logo: "/images/star-health.png" },
    { name: "HDFC ERGO", logo: "/images/hdfc-ergo.png" },
    { name: "Niva Bupa", logo: "/images/niva-bupa.png" },
    { name: "ICICI Lombard", logo: "/images/icici.png" },
    { name: "Medi Assist", logo: "/images/medi-assist.png" },
    { name: "Paramount", logo: "/images/paramount.png" },
    { name: "United Health", logo: "/images/united.png" },
    { name: "MD India", logo: "/images/md-india.png" },
    { name: "FHPL", logo: "/images/fhpl.png" },
    { name: "Raksha TPA", logo: "/images/raksha.png" },
    { name: "Heritage", logo: "/images/heritage.png" },
    { name: "+ 20 More", logo: null }
  ];

  const checklist = [
    { icon: "badge", title: "Insurance ID Card", desc: "Current & valid TPA / insurance card" },
    { icon: "badge", title: "Government ID", desc: "Aadhar card or Voter ID of patient" },
    { icon: "prescriptions", title: "Doctor's Prescription", desc: "Original advice for hospitalization" },
    { icon: "lab_profile", title: "Previous Reports", desc: "Last 3 years medical history (if any)" },
    { icon: "badge", title: "Employee ID", desc: "Required for corporate policies" },
    { icon: "account_balance", title: "Cancelled Cheque", desc: "For reimbursement & refund cases" }
  ];

  return (
    <div className="d-flex flex-column min-h-screen">
      <Header openAppointmentModal={handleOpenModal} />
      
      <main className="flex-grow bg-white">
        
        {/* Hero Section */}
        <section className="ins_hero_section">
          <img src="/images/image(3).svg" alt="Hospital Reception" className="ins_hero_bg" />
          <div className="ins_hero_overlay"></div>
          <div className="container">
            <div className="ins_hero_content">
              <span className="ins_hero_badge">Trusted Healthcare Access</span>
              <h1 className="ins_hero_h1">
                Best Insurance Hospital<br/>in Patna
              </h1>
              <p className="ins_hero_sub">
                Consistently ranked among the <strong>top 10 private hospitals in Patna</strong>, Avni Hospital ensures your focus remains on recovery, not paperwork. As a <strong>top service provider hospital in Patna</strong>, we partner with all leading health insurance providers to deliver a seamless, transparent, and hassle-free cashless hospitalization experience.
              </p>
              <div className="ins_hero_btns">
                <button onClick={() => window.location.href = 'tel:1066'} className="ins_btn_solid">
                  Contact Insurance Desk
                </button>
                <button onClick={() => document.getElementById('partners').scrollIntoView({ behavior: 'smooth' })} className="ins_btn_outline">
                  View All Partners
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* The Cashless Treatment Journey */}
        <section className="ins_section">
          <div className="container">
            <h2 className="ins_section_title">The Cashless Treatment Journey</h2>
            <p className="ins_section_sub">Understanding the process to ensure quick approvals and zero stress.</p>

            <div className="row g-4 justify-content-center">
              {[
                { icon: "assignment", title: "1. Pre-authorization", desc: "Submit your policy details at our TPA desk 48 hours before planned admission." },
                { icon: "description", title: "2. Documentation", desc: "Our desk processes the required clinical records and insurance forms for you." },
                { icon: "verified_user", title: "3. Approval", desc: "Direct coordination with your TPA to secure initial and final authorization." },
                { icon: "health_and_safety", title: "4. Cashless Care", desc: "Receive quality treatment while we manage the financial settlement directly." }
              ].map((step, idx) => (
                <div key={idx} className="col-lg-3 col-md-6">
                  <div className="ins_journey_card">
                    <div className="ins_journey_icon_wrap">
                      <span className="material-symbols-outlined">{step.icon}</span>
                    </div>
                    <h3 className="ins_journey_title">{step.title}</h3>
                    <p className="ins_journey_desc">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Network Partners */}
        <section className="ins_section_white" id="partners">
          <div className="container">
            <div className="ins_partners_header">
              <div>
                <h2 className="ins_section_title">Our Network Partners</h2>
                <p className="ins_section_sub">We are empaneled with over 30+ leading insurance providers and TPAs to provide wider-ranging coverage for our patients.</p>
              </div>
              <div className="d-none d-md-flex gap-2">
                {/* Visual arrows for design replication */}
                <button style={{width: '32px', height: '32px', borderRadius: '50%', border: '1px solid #ccc', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888'}}>
                  <span className="material-symbols-outlined" style={{fontSize: '16px'}}>chevron_left</span>
                </button>
                <button style={{width: '32px', height: '32px', borderRadius: '50%', border: '1px solid #ccc', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888'}}>
                  <span className="material-symbols-outlined" style={{fontSize: '16px'}}>chevron_right</span>
                </button>
              </div>
            </div>

            <div className="row g-3">
              {partners.map((partner, idx) => (
                <div key={idx} className="col-lg-2 col-md-3 col-6">
                  <div className="ins_partner_card flex-column">
                    {partner.logo ? (
                      <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        style={{ width: '48px', height: '48px', objectFit: 'contain', marginBottom: '8px' }} 
                        onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                      />
                    ) : null}
                    {/* Fallback icon if image doesn't load or doesn't exist */}
                    <div className="ins_partner_fallback" style={{ display: partner.logo ? 'none' : 'flex', width: '48px', height: '48px', alignItems: 'center', justifyContent: 'center', background: '#E4F1EF', borderRadius: '50%', color: '#006D5B', marginBottom: '8px' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>
                        {partner.name === "+ 20 More" ? "add" : "domain"}
                      </span>
                    </div>
                    <span>{partner.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Checklist & Helpdesk */}
        <section className="ins_section">
          <div className="container">
            <div className="row g-4">
              
              {/* Checklist */}
              <div className="col-lg-7">
                <div className="ins_checklist_card">
                  <h3 className="ins_checklist_title">
                    <span className="material-symbols-outlined" style={{ color: '#006D5B' }}>description</span>
                    Essential Checklist
                  </h3>
                  <p className="ins_checklist_sub">
                    To expedite your cashless claim, please keep the following original documents and two sets of photocopies ready at admission:
                  </p>
                  
                  <div className="row g-3">
                    {checklist.map((item, idx) => (
                      <div key={idx} className="col-md-6">
                        <div className="ins_doc_item">
                          <span className="material-symbols-outlined ins_doc_icon">{item.icon}</span>
                          <div>
                            <div className="ins_doc_title">{item.title}</div>
                            <div className="ins_doc_desc">{item.desc}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Helpdesk */}
              <div className="col-lg-5">
                <div className="ins_helpdesk_card">
                  <h3 className="ins_helpdesk_title">Insurance Helpdesk</h3>
                  <p className="ins_helpdesk_desc">
                    Our dedicated TPA team is available 24/7 to assist you with all insurance-related queries and coordination.
                  </p>

                  <div className="ins_contact_row">
                    <div className="ins_contact_icon">
                      <span className="material-symbols-outlined">call</span>
                    </div>
                    <div>
                      <div className="ins_contact_label">Phone Support</div>
                      <div className="ins_contact_value">+91 123 456 7890 / 080-2345678</div>
                    </div>
                  </div>

                  <div className="ins_contact_row">
                    <div className="ins_contact_icon">
                      <span className="material-symbols-outlined">mail</span>
                    </div>
                    <div>
                      <div className="ins_contact_label">Email Inquiry</div>
                      <div className="ins_contact_value">insurance@avnihospital.com</div>
                    </div>
                  </div>

                  <div className="ins_location_strip">
                    <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>location_on</span>
                    LOCATION: LOBBY LEVEL, BLOCK A
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="ins_section_white">
          <div className="container">
            <h2 className="ins_section_title">Frequently Asked Questions</h2>
            <p className="ins_section_sub">Quick answers to common insurance concerns.</p>

            <div className="ins_faq_container">
              {faqs.map((faq, idx) => (
                <div key={idx} className="ins_faq_item">
                  <button 
                    className="ins_faq_btn"
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  >
                    {faq.q}
                    <span className="material-symbols-outlined">
                      {activeFaq === idx ? "expand_less" : "expand_more"}
                    </span>
                  </button>
                  {activeFaq === idx && (
                    <div className="ins_faq_content">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer openAppointmentModal={handleOpenModal} />
      <AppointmentModal isOpen={modalOpen} onClose={handleCloseModal} />
    </div>
  );
}
