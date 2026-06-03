"use client";

import React, { useState, useEffect } from "react";
import Nav from "./Nav";

export default function Header({ openAppointmentModal }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Sync theme with document element
    const root = window.document.documentElement;
    root.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      {/* Top Header Bar */}
      <div className="header_blk color_wt">
        <div className="container d-flex justify-content-between align-items-center flex-md-row flex-column py-2">
          <div className="d-flex align-items-center flex-sm-row flex-column gap-3 mb-2 mb-md-0">
            {/* Theme switcher / Hamburger toggle on mobile */}
            <div className="d-flex align-items-center gap-2">
              <button 
                onClick={() => setSidebarOpen(true)}
                className="btn p-0 border-0 d-md-none text-white mr-2"
                aria-label="Toggle Navigation"
              >
                <img src="/images/align-right.svg" alt="Menu" style={{ width: "24px", height: "24px", filter: "invert(1)" }} />
              </button>
              
              <div 
                onClick={toggleTheme} 
                className="d-flex align-items-center mr_15 cursor-pointer"
                title="Toggle Dark/Light Mode"
              >
                <img 
                  src="/images/align-right.svg" 
                  alt="Theme toggle" 
                  className="mr_7 cursor-pointer" 
                  id="changing_theme"
                  style={{ width: "16px", height: "16px", filter: "invert(1)" }}
                />
                <span className="fw_med fs_12 lh_16 select-none">
                  {theme === "light" ? "Dark Mode" : "Light Mode"}
                </span>
              </div>
            </div>

            <div className="d-flex align-items-center gap-2">
              <a href="tel:+919999999999" className="d-flex align-items-center text-white text-decoration-none">
                <img src="/images/phone.svg" alt="Phone" className="mr_7" style={{ width: "14px", height: "14px" }} />
                <span className="fw_med fs_12 lh_16">+91 99999 99999</span>
              </a>
            </div>

            <div className="d-flex align-items-center gap-2">
              <a href="mailto:demo@gmail.com" className="d-flex align-items-center text-white text-decoration-none">
                <img src="/images/mail.svg" alt="Mail" className="mr_7" style={{ width: "14px", height: "14px" }} />
                <span className="fw_med fs_12 lh_16">demo@gmail.com</span>
              </a>
            </div>
          </div>

          <div className="d-flex align-items-center gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover-opacity">
              <img src="/images/facebook.svg" alt="Facebook" style={{ width: "16px", height: "16px", filter: "invert(1)" }} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover-opacity">
              <img src="/images/twitter.svg" alt="Twitter" style={{ width: "16px", height: "16px", filter: "invert(1)" }} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover-opacity">
              <img src="/images/linkedin.svg" alt="LinkedIn" style={{ width: "16px", height: "16px", filter: "invert(1)" }} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover-opacity">
              <img src="/images/instagram.svg" alt="Instagram" style={{ width: "16px", height: "16px", filter: "invert(1)" }} />
            </a>
            <button 
              onClick={openAppointmentModal}
              className="btn btn-sm btn-light text-primary-color ms-3 fw-bold shadow-sm"
              style={{ fontSize: "12px", border: "1px solid #006D5B" }}
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Header (Desktop) */}
      <div className="header_below_blk d-none d-md-block shadow-sm">
        <div className="container d-flex justify-content-between align-items-center py-2">
          <a href="#home-page" className="d-flex align-items-center">
            <img src="/images/Asset11.svg" alt="Demo Hospital Logo" className="soflo-logo-image" style={{ height: "45px" }} />
          </a>
          <div>
            <Nav />
          </div>
        </div>
      </div>

      {/* Mobile Header (Brand Bar) */}
      <div className="header_below_blk d-md-none border-bottom">
        <div className="container d-flex justify-content-between align-items-center py-2">
          <img src="/images/Asset11.svg" alt="Demo Hospital Logo" style={{ height: "35px" }} />
          <button 
            onClick={() => setSidebarOpen(true)}
            className="btn btn-outline-primary border-0"
            style={{ color: "#006D5B" }}
          >
            ☰ Menu
          </button>
        </div>
      </div>

      {/* Mobile Drawer Sidebar Navigation */}
      {sidebarOpen && (
        <div 
          className="fixed-top h-100 w-100 d-md-none" 
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 1050 }}
          onClick={() => setSidebarOpen(false)}
        >
          <div 
            className="h-100 bg-white shadow-lg p-3 position-relative" 
            style={{ width: "260px", animation: "slideRight 0.3s ease-out" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-2">
              <img src="/images/Asset11.svg" alt="Demo Hospital Logo" style={{ height: "30px" }} />
              <button 
                onClick={() => setSidebarOpen(false)}
                className="btn btn-close"
                aria-label="Close menu"
              ></button>
            </div>
            
            <Nav isMobile={true} onItemClick={() => setSidebarOpen(false)} />

            <div className="position-absolute bottom-0 start-0 w-100 p-3 bg-light border-top">
              <button 
                onClick={() => { setSidebarOpen(false); openAppointmentModal(); }}
                className="btn btn-primary w-100 py-2 text-white fw-bold"
                style={{ backgroundColor: "#006D5B", borderColor: "#006D5B" }}
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
