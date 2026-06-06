"use client";

import React, { useState } from "react";
import "./appointmentlist.css";

export default function AppointmentList({ bookings, handleDeleteBooking }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [deptFilter, setDeptFilter] = useState("All");
  const [docFilter, setDocFilter] = useState("All");

  // Filter Bookings
  const filteredBookings = bookings.filter((b) => {
    const matchesSearch = 
      b.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.phone.includes(searchTerm) ||
      (b.email && b.email.toLowerCase().includes(searchTerm.toLowerCase()));
      
    const matchesDept = deptFilter === "All" || b.dept === deptFilter;
    const matchesDoc = docFilter === "All" || b.doctor === docFilter;

    return matchesSearch && matchesDept && matchesDoc;
  });

  // Extract unique departments and doctors for filters
  const departments = ["All", ...new Set(bookings.map((b) => b.dept))];
  const doctors = ["All", ...new Set(bookings.map((b) => b.doctor))];

  return (
    <div className="animate-fade-in">
      <div className="card border-0 shadow-sm rounded-lg p-4 mb-4">
        <div className="row g-3">
          
          {/* Search Input */}
          <div className="col-md-4">
            <label className="form-label fw-semibold text-dark mb-1">Search Patient</label>
            <input 
              type="text" 
              placeholder="Search name, phone, email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-control text-dark py-2"
            />
          </div>

          {/* Department Filter */}
          <div className="col-md-4">
            <label className="form-label fw-semibold text-dark mb-1">Filter by Department</label>
            <select 
              value={deptFilter}
              onChange={(e) => setDeptFilter(e.target.value)}
              className="form-select text-dark py-2"
            >
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>

          {/* Doctor Filter */}
          <div className="col-md-4">
            <label className="form-label fw-semibold text-dark mb-1">Filter by Doctor</label>
            <select 
              value={docFilter}
              onChange={(e) => setDocFilter(e.target.value)}
              className="form-select text-dark py-2"
            >
              {doctors.map(doc => (
                <option key={doc} value={doc}>{doc}</option>
              ))}
            </select>
          </div>

        </div>
      </div>

      {/* Main Table */}
      <div className="card border-0 shadow-sm rounded-lg overflow-hidden">
        <div className="card-header bg-white py-3 border-bottom d-flex justify-content-between align-items-center">
          <h6 className="m-0 fw-bold text-dark">Filtered Bookings ({filteredBookings.length})</h6>
        </div>
        
        <div className="table-responsive text-dark">
          <table className="table table-hover align-middle mb-0 text-dark admin-table">
            <thead className="table-light">
              <tr>
                <th>Patient details</th>
                <th>Department</th>
                <th>Doctor</th>
                <th>Scheduled Date</th>
                <th>Time Slot</th>
                <th>Notes</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredBookings.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center py-5 text-muted">
                    No appointments match your search/filter criteria.
                  </td>
                </tr>
              ) : (
                filteredBookings.map((booking) => (
                  <tr key={booking.id}>
                    <td>
                      <div className="fw-semibold text-dark">{booking.name}</div>
                      <div className="text-muted small">{booking.phone}</div>
                      {booking.email && <div className="text-muted small" style={{ fontSize: "11px" }}>{booking.email}</div>}
                    </td>
                    <td><span className="badge bg-secondary-subtle text-secondary px-2.5 py-1 rounded">{booking.dept}</span></td>
                    <td className="text-dark fw-medium">{booking.doctor}</td>
                    <td>{booking.date}</td>
                    <td>{booking.time}</td>
                    <td style={{ maxWidth: "220px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }} title={booking.message}>
                      <span className="text-muted small">{booking.message || "—"}</span>
                    </td>
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
