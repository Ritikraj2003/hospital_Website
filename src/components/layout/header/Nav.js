import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Nav({ onItemClick, isMobile = false }) {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const treatments = [
    { id: "general-medicine", title: "General Medicine" },
    { id: "cardiology", title: "Cardiology" },
    { id: "neuro-medicine", title: "Neuro Medicine" },
    { id: "orthopedic", title: "Orthopedic" },
    { id: "pediatrics", title: "Pediatrics" },
    { id: "ent", title: "ENT" },
    { id: "psychiatry", title: "Psychiatry" },
    { id: "dental", title: "Dental" },
    { id: "plastic-surgery", title: "Plastic Surgery" },
    { id: "oncology", title: "Oncology" }
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
                  <ul className="list-unstyled ms-3 mt-2 d-flex flex-column gap-2">
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
                    width: "800px", 
                    zIndex: 1000,
                    border: "1px solid #eee"
                  }}
                >
                  <div className="row g-4">
                    {treatments.map((t) => (
                      <div className="col-4" key={t.id}>
                        <Link 
                          href={`/services/${t.id}`}
                          className="d-flex align-items-center gap-2 text-decoration-none text-dark hover-primary"
                          onClick={() => setDropdownOpen(false)}
                        >
                          <span className="text-primary-color bg-light rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: "32px", height: "32px" }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                          </span>
                          <span className="fs_14 fw_med">{t.title}</span>
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className="text-center mt-4 pt-3 border-top">
                    <Link 
                      href="/services" 
                      className="btn btn-sm btn-light text-primary-color fw-bold px-4 rounded-pill"
                      onClick={() => setDropdownOpen(false)}
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
