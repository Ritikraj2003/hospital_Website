"use client";

import React from "react";
import "./dashboard.css";

export default function Dashboard({ bookings, setActiveTab, handleDeleteBooking }) {
  // Compute stats
  const totalBookings = bookings.length;
  const activeDepts = new Set(bookings.map(b => b.dept)).size;
  const consultingDocs = new Set(bookings.map(b => b.doctor)).size;

  return (
    <div className="animate-fade-in">
      <div className="row g-4 mb-4">
        
        {/* Metric Card 1 */}
        <div className="col-md-4">
          <div className="metric-card" style={{ borderLeft: "5px solid #006D5B" }}>
            <div className="metric-icon-wrapper" style={{ backgroundColor: "#E4F1EF", color: "#006D5B" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div>
              <div className="text-muted small fw-semibold">Total Bookings</div>
              <h3 className="m-0 fw-bold text-dark">{totalBookings}</h3>
            </div>
          </div>
        </div>

        {/* Metric Card 2 */}
        <div className="col-md-4">
          <div className="metric-card" style={{ borderLeft: "5px solid #0D6EFD" }}>
            <div className="metric-icon-wrapper" style={{ backgroundColor: "#E7F1FF", color: "#0D6EFD" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div>
              <div className="text-muted small fw-semibold">Active Departments</div>
              <h3 className="m-0 fw-bold text-dark">{activeDepts}</h3>
            </div>
          </div>
        </div>

        {/* Metric Card 3 */}
        <div className="col-md-4">
          <div className="metric-card" style={{ borderLeft: "5px solid #FFC107" }}>
            <div className="metric-icon-wrapper" style={{ backgroundColor: "#FFF8E6", color: "#FFC107" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <div>
              <div className="text-muted small fw-semibold">Consulting Doctors</div>
              <h3 className="m-0 fw-bold text-dark">{consultingDocs}</h3>
            </div>
          </div>
        </div>

      </div>

      {/* Recent Appointments Preview */}
      <div className="card border-0 shadow-sm rounded-lg overflow-hidden">
        <div className="card-header bg-white py-3 border-bottom d-flex justify-content-between align-items-center">
          <h6 className="m-0 fw-bold text-dark">📅 Recent Bookings</h6>
          <button onClick={() => setActiveTab("appointments")} className="btn btn-link text-decoration-none p-0 fw-bold small" style={{ color: "#006D5B" }}>
            View All →
          </button>
        </div>
        
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0 text-dark admin-table">
            <thead className="table-light">
              <tr>
                <th>Patient</th>
                <th>Department</th>
                <th>Doctor</th>
                <th>Preferred Date</th>
                <th>Time Slot</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center py-4 text-muted">
                    No appointments found. Use the live website to book some!
                  </td>
                </tr>
              ) : (
                bookings.slice(0, 5).map((booking) => (
                  <tr key={booking.id}>
                    <td>
                      <div className="fw-semibold text-dark">{booking.name}</div>
                      <div className="text-muted small">{booking.phone}</div>
                    </td>
                    <td><span className="badge bg-secondary-subtle text-secondary px-2.5 py-1 rounded">{booking.dept}</span></td>
                    <td className="text-dark fw-medium">{booking.doctor}</td>
                    <td>{booking.date}</td>
                    <td>{booking.time}</td>
                    <td>
                      <button 
                        onClick={() => handleDeleteBooking(booking.id)}
                        className="btn btn-outline-danger btn-sm border-0 py-1.5 px-2 hover:bg-danger-subtle"
                        title="Remove appointment"
                      >
                        🗑️
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
