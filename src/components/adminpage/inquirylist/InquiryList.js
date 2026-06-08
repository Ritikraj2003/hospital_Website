"use client";

import React, { useState } from "react";

export default function InquiryList({ bookings, handleDeleteBooking }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [deptFilter, setDeptFilter] = useState("All");

  // Filter Inquiries (bookings parameter is passed containing inquiries)
  const filteredInquiries = bookings.filter((inq) => {
    const matchesSearch = 
      inq.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inq.phone.includes(searchTerm) ||
      (inq.email && inq.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
      inq.message.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesDept = deptFilter === "All" || inq.department === deptFilter;

    return matchesSearch && matchesDept;
  });

  const departments = ["All", ...new Set(bookings.map((inq) => inq.department))];

  return (
    <div className="animate-fade-in">
      <div className="card border-0 shadow-sm rounded-lg p-4 mb-4">
        <div className="row g-3">
          
          {/* Search Input */}
          <div className="col-md-6">
            <label className="form-label fw-semibold text-dark mb-1">Search Inquiry</label>
            <input 
              type="text" 
              placeholder="Search name, phone, email, message..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-control text-dark py-2"
            />
          </div>

          {/* Department Filter */}
          <div className="col-md-6">
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

        </div>
      </div>

      {/* Main Table */}
      <div className="card border-0 shadow-sm rounded-lg overflow-hidden">
        <div className="card-header bg-white py-3 border-bottom d-flex justify-content-between align-items-center">
          <h6 className="m-0 fw-bold text-dark">Filtered Inquiries ({filteredInquiries.length})</h6>
        </div>
        
        <div className="table-responsive text-dark">
          <table className="table table-hover align-middle mb-0 text-dark admin-table">
            <thead className="table-light">
              <tr>
                <th>Customer details</th>
                <th>Department</th>
                <th>Message</th>
                <th>Submitted Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredInquiries.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-5 text-muted">
                    No inquiries match your search/filter criteria.
                  </td>
                </tr>
              ) : (
                filteredInquiries.map((inq) => (
                  <tr key={inq.id}>
                    <td>
                      <div className="fw-semibold text-dark">{inq.name}</div>
                      <div className="text-muted small">{inq.phone}</div>
                      <div className="text-muted small" style={{ fontSize: "11px" }}>{inq.email}</div>
                    </td>
                    <td>
                      <span className="badge px-2.5 py-1.5 rounded-pill text-xs fw-bold" style={{ backgroundColor: "#006D5B", color: "#fff" }}>
                        {inq.department}
                      </span>
                    </td>
                    <td style={{ maxWidth: "300px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "normal" }} title={inq.message}>
                      <span className="text-muted small">{inq.message}</span>
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
                    <td>
                      <button 
                        onClick={() => handleDeleteBooking(inq.id)}
                        className="btn btn-outline-danger btn-sm border-0 py-1.5 px-2 hover:bg-danger-subtle"
                        title="Remove inquiry"
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
