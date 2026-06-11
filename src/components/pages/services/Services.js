import React from "react";
import ServiceLayout from "./ServiceLayout";
import ServiceHero from "./ServiceHero";
import ServiceSidebar from "./ServiceSidebar";
import { servicesData } from "@/lib/servicesData";
import { notFound } from "next/navigation";

export default function ServicesPage({ serviceId }) {
  const service = servicesData[serviceId];

  if (!service) {
    notFound();
  }

  return (
    <ServiceLayout>
      <ServiceHero service={service} />
      
      {/* CONTENT SECTION (SEO OPTIMIZED) */}
      <section className="container mt-5">
        <div className="row g-5">
          {/* Left Content Area */}
          <div className="col-lg-8">
            <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm border h-100">
              
              {/* H1 Title */}
              <h1 className="fw-bold text-dark mb-4 border-bottom pb-3" style={{ color: "#006D5B", fontSize: "2rem" }}>
                {service.h1}
              </h1>
              
              {/* Intro Paragraph */}
              <p className="fs_16 text-muted lh-lg mb-5" style={{ textAlign: "justify" }}>
                {service.intro}
              </p>

              {/* What is it */}
              <h2 className="fw-bold text-dark mb-3 fs_24">What is {service.title}?</h2>
              <p className="text-muted lh-lg mb-4">{service.whatIsIt}</p>
              
              {/* Symptoms */}
              <h2 className="fw-bold text-dark mb-3 fs_24">Common Symptoms</h2>
              <ul className="list-unstyled mb-5">
                {service.symptoms.map((symptom, i) => (
                  <li key={i} className="mb-2 d-flex align-items-start gap-2 text-muted">
                    <span className="text-danger fw-bold">⚠</span>
                    {symptom}
                  </li>
                ))}
              </ul>

              {/* Causes */}
              <h2 className="fw-bold text-dark mb-3 fs_24">Causes & Risk Factors</h2>
              <ul className="list-unstyled mb-5">
                {service.causes.map((cause, i) => (
                  <li key={i} className="mb-2 d-flex align-items-start gap-2 text-muted">
                    <span className="text-secondary fw-bold">•</span>
                    {cause}
                  </li>
                ))}
              </ul>

              {/* Diagnosis */}
              <h2 className="fw-bold text-dark mb-3 fs_24">Diagnosis Process</h2>
              <p className="text-muted lh-lg mb-5">{service.diagnosis}</p>

              {/* Treatments */}
              <h2 className="fw-bold text-dark mb-4 fs_24">Treatment Options</h2>
              <div className="row g-4 mb-5">
                {service.treatments.map((treatment, idx) => (
                  <div className="col-md-6" key={idx}>
                    <div className="p-4 bg-light rounded-3 h-100 border">
                      <h3 className="fw-bold fs_18 mb-3" style={{ color: "#006D5B" }}>{treatment.title}</h3>
                      <p className="text-muted mb-0">{treatment.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Advanced Technologies */}
              <h2 className="fw-bold text-dark mb-4 fs_24">Advanced Technologies at Avni Hospital</h2>
              <ul className="list-unstyled mb-5">
                {service.technologies.map((tech, i) => (
                  <li key={i} className="mb-3 d-flex align-items-center gap-3 p-3 bg-light rounded-3 border">
                    <div className="bg-white rounded-circle d-flex align-items-center justify-content-center shadow-sm" style={{ width: "35px", height: "35px", minWidth: "35px", color: "#006D5B" }}>
                      ✦
                    </div>
                    <span className="fw-medium text-dark">{tech}</span>
                  </li>
                ))}
              </ul>

              {/* Emergency Signs */}
              <div className="p-4 rounded-4 mb-5 shadow-sm" style={{ backgroundColor: "#ffebee", borderLeft: "5px solid #d32f2f" }}>
                <h3 className="fw-bold text-danger mb-3 fs_20">Emergency Warning Signs</h3>
                <p className="text-muted mb-3">Seek immediate medical attention if you experience:</p>
                <ul className="mb-0 text-muted">
                  {service.emergencySigns.map((sign, i) => <li key={i}>{sign}</li>)}
                </ul>
              </div>

              {/* Benefits */}
              <h2 className="fw-bold text-dark mb-3 fs_24">Benefits of Early Treatment</h2>
              <p className="text-muted lh-lg mb-5">{service.benefits}</p>

              {/* Why Choose Us */}
              <h2 className="fw-bold text-dark mb-4 fs_24">Why Choose Avni Hospital for {service.title} in Patna?</h2>
              <p className="text-muted lh-lg mb-3">
                Consistently ranked as a <strong>top 10 private hospital in Patna</strong>, we combine advanced medical technology with compassionate care to ensure the best patient outcomes.
              </p>
              <ul className="list-unstyled mb-5 text-muted lh-lg">
                {service.whyChoose.map((reason, i) => (
                  <li key={i} className="mb-2 d-flex align-items-start gap-2">
                    <span className="text-success fw-bold">✓</span>
                    {reason}
                  </li>
                ))}
              </ul>

              {/* Specialist Doctors (E-E-A-T) */}
              <h2 className="fw-bold text-dark mb-4 fs_24">Our Specialist Doctors</h2>
              <div className="row g-4 mb-5">
                {service.specialists.map((doc, idx) => (
                  <div className="col-md-6" key={idx}>
                    <div className="d-flex align-items-center p-3 border rounded-3 bg-light">
                      <div className="flex-shrink-0 bg-secondary rounded-circle d-flex justify-content-center align-items-center text-white" style={{ width: "60px", height: "60px", fontSize: "1.5rem" }}>
                        👨‍⚕️
                      </div>
                      <div className="ms-3">
                        <h4 className="fw-bold mb-1 fs_18">{doc.name}</h4>
                        <p className="text-muted mb-0 fs_14">{doc.qualifications}</p>
                        <p className="text-muted mb-0 fs_14"><strong>Experience:</strong> {doc.experience}</p>
                        <p className="text-muted mb-0 fs_14"><strong>Expertise:</strong> {doc.expertise}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Process, Recovery, Prevention */}
              <h2 className="fw-bold text-dark mb-3 fs_24">Patient Care Process</h2>
              <p className="text-muted lh-lg mb-4">{service.patientCareProcess}</p>

              <h2 className="fw-bold text-dark mb-3 fs_24">Recovery & Follow-Up</h2>
              <p className="text-muted lh-lg mb-4">{service.recovery}</p>

              <h2 className="fw-bold text-dark mb-3 fs_24">Prevention Tips</h2>
              <p className="text-muted lh-lg mb-5">{service.prevention}</p>

              {/* FAQs */}
              <h2 className="fw-bold text-dark mb-4 fs_24">Frequently Asked Questions</h2>
              <div className="accordion mb-5" id="faqAccordion">
                {service.faqs.map((faq, idx) => (
                  <details className="accordion-item mb-2" key={idx} style={{ border: "1px solid #dee2e6", borderRadius: "0.25rem", overflow: "hidden" }}>
                    <summary className="accordion-header fw-bold" style={{ cursor: "pointer", display: "block", padding: "1rem 1.25rem", backgroundColor: "#f8f9fa", borderBottom: "1px solid #dee2e6", listStyle: "none" }}>
                      <div className="d-flex justify-content-between align-items-center">
                        <span>{faq.q}</span>
                        <span style={{ fontSize: "0.8rem" }}>▼</span>
                      </div>
                    </summary>
                    <div className="accordion-body text-muted" style={{ padding: "1rem 1.25rem", backgroundColor: "#fff" }}>
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>

              {/* Conclusion Paragraph */}
              <div className="p-4 bg-light border-start border-4 rounded-end mb-4" style={{ borderColor: "#006D5B" }}>
                <p className="mb-0 fw-medium text-dark fst-italic">
                  {service.conclusion}
                </p>
              </div>

              {/* CTA */}
              <div className="text-center mt-5 p-4 rounded-4 text-white shadow-sm" style={{ backgroundColor: "#006D5B" }}>
                <h3 className="fw-bold mb-3 fs_24">{service.cta}</h3>
                <p className="mb-4 text-white-50">Don't wait. Experience world-class healthcare at the <strong>best hospital in Patna, Bihar</strong>. We are proud to be the <strong>top service provider hospital in Patna</strong>.</p>
                <a href="tel:1066" className="btn btn-warning btn-lg fw-bold px-5 py-3 rounded-pill shadow text-dark">
                  Call Now: 1066
                </a>
              </div>

            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-lg-4">
            <ServiceSidebar />
          </div>
        </div>
      </section>

    </ServiceLayout>
  );
}
