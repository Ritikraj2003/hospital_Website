"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import AppointmentModal from "@/components/AppointmentModal";

const servicesData = {
  "general-medicine": { 
    title: "General Medicine", 
    seoTitle: "Best General Medicine Hospital in Patna",
    description: "Comprehensive healthcare for all ages with advanced diagnostics and experienced physicians.",
    intro: "At Avni Hospital in Patna, our General Medicine department serves as the first point of contact for patients seeking medical care. We offer diagnosis, management, and non-surgical treatment of unusual or serious diseases. Our expert team of physicians in Patna is equipped to handle everything from seasonal fevers to chronic conditions.",
    servicesTitle: "Comprehensive Medical Services",
    services: [
      {
        title: "Infectious Diseases & Fevers",
        items: ["Dengue, Malaria & Typhoid management", "Viral fevers and respiratory infections", "Tuberculosis (TB) care", "Sepsis and critical infections"]
      },
      {
        title: "Chronic Disease Management",
        items: ["Diabetes management and care", "Hypertension (High Blood Pressure)", "Thyroid disorders", "Asthma and COPD"]
      }
    ],
    facilities: ["24/7 Advanced Diagnostic Lab", "Dedicated Fever Clinic", "In-house Pharmacy", "ICU for critical medical emergencies", "Specialized isolation wards"],
    whyChoose: ["Highly experienced general physicians in Patna", "Accurate and rapid diagnostics", "Evidence-based medical protocols", "Multidisciplinary approach to complex cases", "Affordable and patient-centric care"],
    conclusion: "For reliable, comprehensive, and compassionate medical care in Patna, Avni Hospital is your trusted healthcare partner.",
    images: ["/images/image(1).jpg", "/images/image(2).jpg", "/images/image(3).jpg"]
  },
  "cardiology": { 
    title: "Cardiology", 
    seoTitle: "Top Cardiology Hospital in Patna | Best Heart Specialists",
    description: "Advanced heart care and treatments by Patna's leading cardiologists.",
    intro: "Cardiology at Avni Hospital is dedicated to providing world-class heart care in Bihar. Our heart specialists use state-of-the-art technology for early detection, prevention, and treatment of cardiovascular diseases. We provide 24/7 emergency cardiac care right here in Patna.",
    servicesTitle: "Advanced Cardiac Treatments",
    services: [
      {
        title: "Non-Invasive Cardiology",
        items: ["ECG and 2D Echocardiography", "Treadmill Test (TMT)", "Holter Monitoring", "Preventive heart checkups"]
      },
      {
        title: "Cardiac Emergency Care",
        items: ["Heart attack (Myocardial Infarction) management", "Heart failure stabilization", "Arrhythmia treatment", "Hypertensive crisis management"]
      }
    ],
    facilities: ["24/7 Cardiac Emergency Unit", "Advanced Cath Lab setup (referral & stabilization)", "Modern CCU (Coronary Care Unit)", "Defibrillators and pacemakers", "Echocardiogram machines"],
    whyChoose: ["Top cardiologists in Patna", "Rapid response for heart attacks", "State-of-the-art cardiac ICU", "Comprehensive cardiac rehab programs", "Transparent treatment counseling"],
    conclusion: "Trust Avni Hospital for the best heart care and cardiology services in Patna. Your heart is in safe hands.",
    images: ["/images/image(4).jpg", "/images/image(5).jpg", "/images/image(6).jpg"]
  },
  "neuro-medicine": { 
    title: "Neuro Medicine", 
    seoTitle: "Best Neurology Hospital in Patna | Expert Neurologists",
    description: "Expert care for neurological disorders, stroke, and brain health.",
    intro: "Avni Hospital offers premier neurological care in Patna. Our expert neuro physicians treat a wide spectrum of disorders including epilepsy, stroke, migraines, Parkinson's disease, and neuropathies. Equipped with advanced neuro-diagnostic tools, we aim to provide the best brain and spine care in Bihar.",
    servicesTitle: "Comprehensive Neurological Services",
    services: [
      {
        title: "Brain & Nerve Disorders",
        items: ["Stroke and Paralysis management", "Epilepsy and Seizure disorders", "Headache and severe Migraines", "Parkinson’s and movement disorders"]
      },
      {
        title: "Spine & Muscle Conditions",
        items: ["Sciatica and lower back pain", "Neuropathy and nerve damage", "Muscle weakness disorders", "Spinal cord infections"]
      }
    ],
    facilities: ["Advanced EEG & EMG Labs", "24/7 Stroke Management Unit", "Neuro ICU for critical patients", "Physiotherapy and neuro-rehabilitation", "High-resolution imaging (CT/MRI coordination)"],
    whyChoose: ["Leading neurologists in Bihar", "Golden hour stroke treatment", "Dedicated neuro-intensive care", "Holistic rehabilitation approaches", "Advanced diagnostic precision"],
    conclusion: "If you are seeking top-tier neurological treatment in Patna, Avni Hospital provides advanced and compassionate care for all brain and spine conditions.",
    images: ["/images/image(7).jpg", "/images/image(8).jpg", "/images/image(9).jpg"]
  },
  "orthopedic": { 
    title: "Orthopedic", 
    seoTitle: "Best Orthopedic Hospital in Patna | Bone & Joint Care",
    description: "Specialized bone and joint care, fracture management, and arthritis treatment.",
    intro: "At Avni Hospital, Patna, our Department of Orthopedics provides comprehensive care for bone, joint, spine, and musculoskeletal conditions. We specialize in the diagnosis, treatment, and rehabilitation of injuries and disorders affecting mobility and physical strength.",
    servicesTitle: "Comprehensive Orthopedic Services",
    services: [
      {
        title: "Bone & Joint Disorders",
        items: ["Fractures and trauma-related injuries", "Arthritis and joint pain management", "Osteoporosis treatment", "Shoulder, knee, and hip problems", "Back and spine-related pain"]
      },
      {
        title: "Sports & Injury Management",
        items: ["Ligament injuries (ACL/PCL)", "Muscle and tendon injuries", "Sprains and dislocations", "Post-trauma orthopedic care"]
      }
    ],
    facilities: ["Modern X-ray and diagnostic imaging facilities", "Fracture management and casting services", "Advanced modular operation theaters", "Post-operative care and rehabilitation support", "ICU backup for critical trauma cases"],
    whyChoose: ["Experienced orthopedic specialists in Patna", "Advanced trauma and fracture care", "Modern diagnostic and treatment facilities", "Comprehensive care under one roof", "Patient-centered and affordable treatment"],
    conclusion: "If you are looking for trusted orthopedic treatment in Patna, Avni Hospital provides reliable, safe, and expert bone and joint care for patients across Bihar.",
    images: ["/images/image(10).jpg", "/images/image(11).jpg", "/images/image(12).jpg"]
  },
  "pediatrics": { 
    title: "Pediatrics", 
    seoTitle: "Best Child Specialist & Pediatrics Hospital in Patna",
    description: "Compassionate healthcare for children from newborns to adolescents.",
    intro: "Avni Hospital provides exceptional pediatric care in Patna. Our child specialists ensure the health and well-being of infants, children, and adolescents. From routine vaccinations to complex pediatric illnesses, our child-friendly environment makes us the top choice for parents in Bihar.",
    servicesTitle: "Specialized Pediatric Care",
    services: [
      {
        title: "Infant & Neonatal Care",
        items: ["Newborn health assessments", "Premature baby care", "Neonatal jaundice treatment", "Infant nutrition counseling"]
      },
      {
        title: "Child Health & Wellness",
        items: ["Routine immunization and vaccinations", "Childhood asthma and allergies", "Fever and infection management", "Growth and development tracking"]
      }
    ],
    facilities: ["State-of-the-art NICU & PICU", "Child-friendly OPD spaces", "24/7 Pediatric Emergency", "Advanced pediatric ventilators", "In-house pediatric pharmacy"],
    whyChoose: ["Top child specialists in Patna", "Compassionate and gentle care", "Stringent infection control protocols", "Comprehensive vaccination programs", "Focus on preventive pediatric health"],
    conclusion: "For the safest and most reliable childcare in Patna, parents trust the expert pediatricians at Avni Hospital.",
    images: ["/images/image(13).jpg", "/images/image(14).jpg", "/images/image(15).jpg"]
  },
  "ent": { 
    title: "ENT", 
    seoTitle: "Top ENT Hospital in Patna | Ear, Nose & Throat Specialists",
    description: "Specialist services for all ear, nose, and throat ailments.",
    intro: "Our ENT department in Patna offers comprehensive care for hearing, speech, swallowing, and sinus disorders. Avni Hospital features modern endoscopic equipment to accurately diagnose and treat complex ENT conditions, providing relief to thousands of patients across Bihar.",
    servicesTitle: "Comprehensive ENT Treatments",
    services: [
      {
        title: "Ear & Hearing Care",
        items: ["Hearing loss evaluation", "Ear infections and discharge treatment", "Tympanoplasty (Eardrum repair)", "Vertigo and balance disorders"]
      },
      {
        title: "Nose & Throat Disorders",
        items: ["Sinusitis and nasal polyps", "Tonsillitis and adenoid issues", "Voice and speech disorders", "Snoring and sleep apnea management"]
      }
    ],
    facilities: ["Advanced ENT Endoscopy suite", "Audiometry and hearing test labs", "Microscopic ear surgery equipment", "Dedicated ENT operation theaters", "Speech therapy services"],
    whyChoose: ["Expert ENT surgeons in Patna", "Minimally invasive procedures", "Painless diagnostic techniques", "Comprehensive post-treatment care", "Affordable ENT healthcare"],
    conclusion: "Breathe easier and hear better with the advanced ENT care available at Avni Hospital, Patna.",
    images: ["/images/image(16).jpg", "/images/image(17).jpg", "/images/image(18).jpg"]
  },
  "psychiatry": { 
    title: "Psychiatry", 
    seoTitle: "Best Psychiatrist in Patna | Mental Health Counseling",
    description: "Dedicated mental health and well-being services.",
    intro: "Mental health is a priority at Avni Hospital. Our psychiatry department in Patna offers confidential, compassionate care for depression, anxiety, stress disorders, and more. Our certified psychiatrists provide counseling and medical therapies to help individuals regain mental wellness.",
    servicesTitle: "Mental Health & Counseling",
    services: [
      {
        title: "Mood & Anxiety Disorders",
        items: ["Depression and bipolar disorder", "Generalized anxiety and panic attacks", "OCD (Obsessive-Compulsive Disorder)", "PTSD and trauma counseling"]
      },
      {
        title: "Behavioral & De-addiction Care",
        items: ["Alcohol and substance de-addiction", "Child and adolescent behavioral therapy", "Schizophrenia management", "Stress and anger management"]
      }
    ],
    facilities: ["Private and confidential counseling rooms", "Psychometric testing facilities", "In-patient psychiatric care", "Rehabilitation support programs", "24/7 psychiatric emergency support"],
    whyChoose: ["Top-rated psychiatrists in Patna", "Stigma-free, empathetic environment", "Evidence-based therapy and medication", "Holistic mental wellness approach", "Family counseling and support"],
    conclusion: "Take the first step towards mental well-being with the trusted psychiatric professionals at Avni Hospital in Patna.",
    images: ["/images/image(19).jpg", "/images/image(20).jpg", "/images/image(21).jpg"]
  },
  "dental": { 
    title: "Dental", 
    seoTitle: "Best Dental Clinic & Hospital in Patna",
    description: "Complete dental care, cosmetic dentistry, and oral surgery.",
    intro: "Avni Hospital houses a state-of-the-art dental clinic in Patna. We provide painless dental procedures ranging from routine checkups and scaling to root canals, implants, and orthodontic treatments, ensuring a healthy and confident smile.",
    servicesTitle: "Advanced Dental Procedures",
    services: [
      {
        title: "General & Preventive Dentistry",
        items: ["Teeth cleaning and scaling", "Cavity fillings and restorations", "Tooth extractions", "Preventive oral health checkups"]
      },
      {
        title: "Specialized Dental Care",
        items: ["Painless Root Canal Treatment (RCT)", "Dental implants and bridges", "Orthodontics (Braces & Aligners)", "Cosmetic dentistry and teeth whitening"]
      }
    ],
    facilities: ["Modern dental chairs", "Digital Dental X-rays (RVG)", "Strict sterilization and autoclave protocols", "Intraoral cameras", "High-quality dental materials"],
    whyChoose: ["Experienced dentists and orthodontists in Patna", "Painless and comfortable treatments", "Focus on strict hygiene and sterilization", "Affordable dental packages", "Child-friendly pediatric dentistry"],
    conclusion: "Achieve a perfect, healthy smile with the expert dental care services at Avni Hospital, Patna.",
    images: ["/images/image(22).jpg", "/images/image(23).jpg", "/images/image(24).jpg"]
  },
  "plastic-surgery": { 
    title: "Plastic Surgery", 
    seoTitle: "Best Plastic & Reconstructive Surgery Hospital in Patna",
    description: "Reconstructive, burn care, and aesthetic surgical procedures.",
    intro: "The Plastic Surgery department at Avni Hospital, Patna, specializes in both cosmetic and reconstructive surgeries. Our highly skilled plastic surgeons help restore form and function following trauma, burns, or congenital defects, with a commitment to patient safety and excellent aesthetic outcomes.",
    servicesTitle: "Plastic & Reconstructive Procedures",
    services: [
      {
        title: "Reconstructive Surgery",
        items: ["Burn injury reconstruction", "Post-trauma scar revision", "Cleft lip and palate repair", "Hand surgery and tendon repair"]
      },
      {
        title: "Cosmetic & Aesthetic Surgery",
        items: ["Rhinoplasty (Nose reshaping)", "Liposuction and body contouring", "Hair transplantation", "Facial rejuvenation procedures"]
      }
    ],
    facilities: ["Advanced aesthetic surgery suites", "Dedicated burn care unit", "High-tech sterilization tools", "Post-operative cosmetic care", "Laser treatment facilities"],
    whyChoose: ["Best plastic surgeons in Patna", "High success rate with natural results", "Complete patient privacy and confidentiality", "Use of FDA-approved materials", "Comprehensive pre- and post-surgery counseling"],
    conclusion: "Enhance your confidence and restore your body's function with the premier plastic surgery services at Avni Hospital, Patna.",
    images: ["/images/image(25).jpg", "/images/image(1).jpg", "/images/image(2).jpg"]
  },
  "oncology": { 
    title: "Oncology", 
    seoTitle: "Best Cancer Hospital in Patna | Top Oncologists",
    description: "Comprehensive cancer screening, care, and treatment.",
    intro: "Avni Hospital is a leading destination for cancer care in Patna. Our oncology team focuses on early detection, medical oncology, and supportive care for cancer patients. We bring hope through advanced treatment protocols and compassionate support in Bihar.",
    servicesTitle: "Comprehensive Cancer Care",
    services: [
      {
        title: "Cancer Diagnostics & Screening",
        items: ["Preventive cancer screening programs", "Biopsy and histopathology", "Tumor marker blood tests", "Advanced imaging (CT/MRI coordination)"]
      },
      {
        title: "Medical Oncology",
        items: ["Targeted Chemotherapy", "Immunotherapy", "Hormonal therapy", "Palliative and pain management"]
      }
    ],
    facilities: ["Dedicated day-care chemotherapy wards", "Advanced oncology pharmacy", "Onco-pathology lab", "Patient counseling rooms", "Nutrition and dietetics support for cancer patients"],
    whyChoose: ["Top oncologists and cancer specialists in Patna", "Multidisciplinary Tumor Board approach", "Compassionate and supportive care staff", "Access to the latest cancer drugs", "Affordable cancer treatment options"],
    conclusion: "Fight cancer with the best medical expertise and unwavering support at Avni Hospital, Patna.",
    images: ["/images/image(3).jpg", "/images/image(4).jpg", "/images/image(5).jpg"]
  }
};

export default function ServicesPage({ serviceId }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const defaultService = servicesData["general-medicine"]; // Fallback
  const service = servicesData[serviceId] || defaultService;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % service.images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [service.images.length, serviceId]);

  return (
    <div className="d-flex flex-column min-h-screen bg-light">
      <Header openAppointmentModal={() => setModalOpen(true)} />
      
      <main className="flex-grow pb-5">
        
        {/* HERO SLIDER SECTION */}
        <section className="position-relative overflow-hidden" style={{ height: "60vh", minHeight: "400px", backgroundColor: "#000" }}>
          {service.images.map((img, idx) => (
            <div 
              key={idx}
              className="position-absolute top-0 start-0 w-100 h-100 transition-opacity"
              style={{ 
                opacity: currentSlide === idx ? 1 : 0, 
                transition: "opacity 1s ease-in-out",
                backgroundImage: `linear-gradient(rgba(0, 50, 40, 0.7), rgba(0, 0, 0, 0.5)), url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            ></div>
          ))}
          
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center">
            <div className="container text-white">
              <span className="badge bg-primary-color mb-3 px-3 py-2 fs_14 rounded-pill shadow-sm">
                Avni Hospital, Patna
              </span>
              <h1 className="fw-bold display-4 mb-3" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
                {service.title}
              </h1>
              <p className="lead fw-light mb-4" style={{ maxWidth: "700px" }}>
                {service.description}
              </p>
              <button 
                onClick={() => setModalOpen(true)}
                className="btn btn-lg btn-light text-primary-color fw-bold px-4 py-2 rounded-pill shadow"
              >
                Book Appointment
              </button>
            </div>
          </div>
          
          {/* Slider Indicators */}
          <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4 d-flex gap-2">
            {service.images.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`rounded-circle border-0 ${currentSlide === idx ? "bg-white" : "bg-white bg-opacity-50"}`}
                style={{ width: "12px", height: "12px", transition: "all 0.3s" }}
              />
            ))}
          </div>
        </section>

        {/* CONTENT SECTION (SEO OPTIMIZED) */}
        <section className="container mt-5">
          <div className="row g-5">
            {/* Left Content Area */}
            <div className="col-lg-8">
              <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm border h-100">
                {/* H2 Title */}
                <h2 className="fw-bold text-dark mb-4 border-bottom pb-3" style={{ color: "#006D5B" }}>
                  {service.seoTitle}
                </h2>
                
                {/* Intro Paragraph */}
                <p className="fs_16 text-muted lh-lg mb-5" style={{ textAlign: "justify" }}>
                  {service.intro}
                </p>
                
                {/* Dynamic Sub-Services H2 & H3 Structure */}
                <h2 className="fw-bold text-dark mb-4 fs_24">{service.servicesTitle}</h2>
                <p className="text-muted mb-4">Our experienced specialists manage a wide range of conditions, including:</p>
                
                <div className="row g-4 mb-5">
                  {service.services.map((subService, idx) => (
                    <div className="col-md-6" key={idx}>
                      <div className="p-4 bg-light rounded-3 h-100 border">
                        <h3 className="fw-bold fs_18 mb-3 text-primary-color">{subService.title}</h3>
                        <ul className="list-unstyled mb-0">
                          {subService.items.map((item, i) => (
                            <li key={i} className="mb-2 d-flex align-items-start gap-2 text-muted">
                              <span className="text-primary-color mt-1">✔</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Advanced Facilities H2 */}
                <h2 className="fw-bold text-dark mb-4 fs_24">Advanced {service.title} Facilities</h2>
                <ul className="list-unstyled mb-5">
                  {service.facilities.map((facility, i) => (
                    <li key={i} className="mb-3 d-flex align-items-center gap-3 p-3 bg-light rounded-3 border">
                      <div className="text-primary-color bg-white rounded-circle d-flex align-items-center justify-content-center shadow-sm" style={{ width: "35px", height: "35px", minWidth: "35px" }}>
                        ✦
                      </div>
                      <span className="fw-medium text-dark">{facility}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Why Choose Us H2 */}
                <h2 className="fw-bold text-dark mb-4 fs_24">Why Choose Avni Hospital for {service.title} in Patna?</h2>
                <ul className="list-unstyled mb-5 text-muted lh-lg">
                  {service.whyChoose.map((reason, i) => (
                    <li key={i} className="mb-2 d-flex align-items-start gap-2">
                      <span className="text-success fw-bold">✓</span>
                      {reason}
                    </li>
                  ))}
                </ul>

                {/* Conclusion Paragraph */}
                <div className="p-4 bg-light border-start border-4 border-primary rounded-end">
                  <p className="mb-0 fw-medium text-dark fst-italic">
                    {service.conclusion}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="col-lg-4">
              <div className="bg-primary-color rounded-4 p-4 text-white shadow-lg sticky-top" style={{ top: "100px" }}>
                <h3 className="fw-bold mb-3 border-bottom border-light pb-2">Emergency Care</h3>
                <p className="mb-4 text-white-50 fs_14">
                  For severe medical emergencies in Patna, Avni Hospital provides 24/7 ambulance and trauma care services.
                </p>
                <a href="tel:1066" className="btn btn-light w-100 fw-bold text-primary-color py-3 mb-3 rounded-3 shadow-sm d-flex align-items-center justify-content-center gap-2 fs_18">
                  <span>📞</span> Call 1066
                </a>
                <a href="tel:+919931212664" className="btn btn-outline-light w-100 fw-bold py-2 rounded-3 d-flex align-items-center justify-content-center gap-2">
                  <span>🚑</span> Ambulance Service
                </a>
                
                <div className="mt-4 pt-4 border-top border-light">
                  <h4 className="fw-bold mb-3 fs_18">Hospital Timings</h4>
                  <ul className="list-unstyled mb-0 text-white-50">
                    <li className="d-flex justify-content-between mb-2 pb-2 border-bottom border-secondary">
                      <span>Emergency:</span> <span className="fw-bold text-white">24/7 Open</span>
                    </li>
                    <li className="d-flex justify-content-between">
                      <span>OPD:</span> <span className="fw-bold text-white">9:00 AM - 8:00 PM</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-4 pt-4 border-top border-light text-center">
                  <h4 className="fw-bold mb-3 fs_18">Need Expert Advice?</h4>
                  <button 
                    onClick={() => setModalOpen(true)}
                    className="btn btn-warning w-100 fw-bold py-2 rounded-3 text-dark shadow"
                  >
                    Book a Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer openAppointmentModal={() => setModalOpen(true)} />
      <AppointmentModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
