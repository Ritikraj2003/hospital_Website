import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Nav({ onItemClick, isMobile = false }) {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const treatments = [
    { id: "general-physician", title: "General Physician", icon: "🩺" },
    { id: "neurologist-physician", title: "Neurologist", icon: "🧠" },
    { id: "urologist", title: "Urologist", icon: "💧" },
    { id: "gynecologist", title: "Gynecologist", icon: "👩‍⚕️" },
    { id: "cardiologist", title: "Cardiologist", icon: "❤️" },
    { id: "orthopaedics", title: "Orthopaedics", icon: "🦴" },
    { id: "general-surgeon", title: "General Surgeon", icon: "⚕️" },
    { id: "paediatric-surgeon", title: "Paediatric Surgeon", icon: "🧸" },
    { id: "anaesthesia", title: "Anaesthesia", icon: "💉" },
    { id: "dermatologist", title: "Skin & VD", icon: "🧴" },
    { id: "cosmetic-surgery", title: "Cosmetic Surg.", icon: "✨" },
    { id: "general-medicine", title: "General Medicine", icon: "💊" },
    { id: "paediatrician", title: "Paediatrician", icon: "👶" },
    { id: "plastic-surgeon", title: "Plastic Surgeon", icon: "🎭" },
    { id: "psychiatrist", title: "Psychiatrist", icon: "🛋️" },
    { id: "pulmonologist", title: "Pulmonologist", icon: "🫁" },
    { id: "gastrologist", title: "Gastrologist", icon: "🔬" },
    { id: "neuro-surgeon", title: "Neuro Surgeon", icon: "⚕️" },
    { id: "oncologist-surgeon", title: "Oncologist Surg.", icon: "🎗️" },
    { id: "oncologist", title: "Oncologist", icon: "🎗️" },
    { id: "nephrologist", title: "Nephrologist", icon: "🧪" },
    { id: "ent", title: "ENT", icon: "👂" },
    { id: "junior-resident", title: "Junior Resident", icon: "🎓" }
  ];

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Doctors", href: "/#our-doctor" },
    { label: "Treatments", isDropdown: true },
    { label: "Gallery", href: "/#gallery" },
    { label: "Blog", href: "/#recent-news" },
    { label: "Contact", href: "/contact" },
  ];

  if (isMobile) {
    return (
      <ul className="list-unstyled d-flex flex-column gap-3">
        {navItems.map((item) => {
          if (item.isDropdown) {
            return (
              <li key={item.label}>
                <div 
                  className="d-flex justify-content-between align-items-center py-2 text-dark fw-medium border-bottom cursor-pointer"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  style={{ cursor: "pointer" }}
                >
                  {item.label}
                  <span>{dropdownOpen ? "▲" : "▼"}</span>
                </div>
                {dropdownOpen && (
                  <ul 
                    className="list-unstyled ms-3 mt-2 d-flex flex-column gap-2"
                    style={{ maxHeight: "300px", overflowY: "auto", paddingRight: "10px" }}
                  >
                    {treatments.map((t) => (
                      <li key={t.id}>
                        <Link
                          href={`/services/${t.id}`}
                          onClick={onItemClick}
                          className="d-block py-1 text-decoration-none text-muted text-sm"
                        >
                          - {t.title}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        href="/services"
                        onClick={onItemClick}
                        className="d-block py-1 text-decoration-none text-primary-color text-sm fw-bold"
                      >
                        View All Treatments →
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            );
          }

          const isActive = pathname === item.href;
          return (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={onItemClick}
                className={`d-block py-2 text-decoration-none fw-medium border-bottom ${isActive ? "text-primary-color fw-bold" : "text-dark"
                  }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <ul className="nav_tabs d-flex align-items-center mb-0 position-relative">
      {navItems.map((item, index) => {
        if (item.isDropdown) {
          return (
            <li 
              key={item.label} 
              className={index < navItems.length - 1 ? "mr_20" : ""}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <div 
                className={`nav-item fs_14 fw_med lh_16 d-flex align-items-center gap-1 ${pathname.startsWith("/services") ? "active" : ""}`}
                style={{ cursor: "pointer", padding: "10px 0" }}
              >
                {item.label}
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {dropdownOpen && (
                <div 
                  className="position-absolute bg-white shadow-lg rounded-3 p-4" 
                  style={{ 
                    top: "100%", 
                    left: "50%", 
                    transform: "translateX(-50%)", 
                    width: "1000px", 
                    maxWidth: "95vw",
                    zIndex: 1000,
                    border: "1px solid #eee"
                  }}
                >
                  <div className="row g-3">
                    {treatments.map((t) => (
                      <div className="col-lg-3 col-md-4 col-6" key={t.id}>
                        <Link 
                          href={`/services/${t.id}`}
                          className="d-flex align-items-center gap-3 text-decoration-none text-dark"
                          onClick={() => setDropdownOpen(false)}
                          style={{ transition: "color 0.2s" }}
                          onMouseOver={(e) => e.currentTarget.style.color = "#F57C00"}
                          onMouseOut={(e) => e.currentTarget.style.color = "#212529"}
                        >
                          <span className="rounded-circle d-flex align-items-center justify-content-center shadow-sm" style={{ width: "32px", height: "32px", background: "#f8f9fa", fontSize: "14px", border: "1px solid #e9ecef" }}>
                            {t.icon}
                          </span>
                          <span className="fs_13 fw_med">{t.title}</span>
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className="text-center mt-4 pt-4 border-top">
                    <Link 
                      href="/services" 
                      className="btn btn-sm text-white fw-bold px-4 rounded-pill shadow-sm"
                      onClick={() => setDropdownOpen(false)}
                      style={{ background: "#F57C00", border: "1px solid #F57C00", fontSize: "14px", padding: "8px 24px", transition: "all 0.3s" }}
                      onMouseOver={(e) => { e.target.style.background = "#d66c00"; e.target.style.borderColor = "#d66c00"; }}
                      onMouseOut={(e) => { e.target.style.background = "#F57C00"; e.target.style.borderColor = "#F57C00"; }}
                    >
                      VIEW ALL TREATMENTS →
                    </Link>
                  </div>
                </div>
              )}
            </li>
          );
        }

        const isActive = pathname === item.href;
        return (
          <li key={item.label} className={index < navItems.length - 1 ? "mr_20" : ""}>
            <Link
              href={item.href}
              className={`nav-item fs_14 fw_med lh_16 ${isActive ? "active" : ""}`}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
