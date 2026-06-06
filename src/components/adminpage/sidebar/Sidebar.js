"use client";

import React from "react";
import "./sidebar.css";

export default function Sidebar({ activeTab, setActiveTab, bookingsCount, handleLogout }) {
  return (
    <aside className="admin-sidebar text-white">
      <div className="p-4 d-flex align-items-center justify-content-between border-bottom border-white/10">
        <div className="d-flex align-items-center gap-2">
          <img src="/images/logo.png" alt="Avni Hospital Logo" style={{ height: "30px" }} />
          <span className="fw-bold text-white fs-5">Avni Admin</span>
        </div>
      </div>

      <nav className="p-3 d-flex flex-column gap-1 flex-grow-1">
        <button 
          onClick={() => setActiveTab("dashboard")}
          className={`sidebar-nav-btn ${activeTab === "dashboard" ? "active" : ""}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect width="7" height="9" x="3" y="3" rx="1" />
            <rect width="7" height="5" x="14" y="3" rx="1" />
            <rect width="7" height="9" x="14" y="12" rx="1" />
            <rect width="7" height="5" x="3" y="16" rx="1" />
          </svg>
          Dashboard
        </button>
        
        <button 
          onClick={() => setActiveTab("appointments")}
          className={`sidebar-nav-btn ${activeTab === "appointments" ? "active" : ""}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
          </svg>
          Appointments
          {bookingsCount > 0 && (
            <span className="badge bg-danger ms-auto fs_10 py-1 px-1.5 rounded-pill">{bookingsCount}</span>
          )}
        </button>
      </nav>

      <div className="p-3 border-top border-white/10 mt-auto">
        <div className="d-flex align-items-center gap-3 mb-3 px-2">
          <div className="rounded-circle bg-secondary d-flex align-items-center justify-content-center text-white" style={{ width: "36px", height: "36px" }}>
            A
          </div>
          <div>
            <div className="fw-semibold text-white small">System Admin</div>
            <div className="text-white-50 fs-7">admin@avnihospital.com</div>
          </div>
        </div>
        <button 
          onClick={handleLogout}
          className="btn btn-outline-danger w-100 text-start d-flex align-items-center gap-2 border-0 py-2 hover:bg-danger/10 text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>
          </svg>
          Logout
        </button>
      </div>
    </aside>
  );
}
