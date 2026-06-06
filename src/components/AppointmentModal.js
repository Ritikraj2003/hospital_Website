"use client";

import React, { useState } from "react";

export default function AppointmentModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    dept: "Cardiology",
    doctor: "Dr. Manohar CV",
    date: "",
    time: "09:00 AM",
    message: ""
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
      } else {
        setError(data.error || "Failed to schedule appointment. Please try again.");
      }
    } catch (err) {
      console.error("Booking error:", err);
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const doctorsByDept = {
    Cardiology: ["Dr. Manohar CV", "Dr. Deepthi Das"],
    Gynaecology: ["Dr. Anika Parrikar", "Dr. Shanthi Devi"],
    Neurology: ["Dr. Prashanth A", "Dr. Sivaraman"],
    Orthopaedics: ["Dr. Rakshith M"],
    Pediatrics: ["Dr. Nethra N"],
    Urology: ["Dr. Kumarswamy"],
    Nephrology: ["Dr. D J Kamath"],
    Oncology: ["Dr. Santosh Subudhi"]
  };

  const handleDeptChange = (e) => {
    const chosenDept = e.target.value;
    const defaultDoctor = doctorsByDept[chosenDept]?.[0] || "";
    setFormData((prev) => ({ 
      ...prev, 
      dept: chosenDept, 
      doctor: defaultDoctor 
    }));
  };

  return (
    <div 
      className="px-3"
      style={{ 
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 109, 91, 0.45)", 
        backdropFilter: "blur(4px)",
        zIndex: 9999 
      }}
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-lg overflow-hidden position-relative animate-fade-in-up"
        style={{ 
          width: "100%", 
          maxWidth: "520px", 
          borderRadius: "12px",
          border: "1px solid rgba(0, 109, 91, 0.25)"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div 
          className="p-3 text-white d-flex justify-content-between align-items-center"
          style={{ backgroundColor: "#006D5B" }}
        >
          <h5 className="m-0 fw-bold">📅 Schedule Appointment</h5>
          <button 
            onClick={onClose} 
            className="btn-close btn-close-white border-0 bg-transparent"
            aria-label="Close modal"
          />
        </div>

        {/* Modal Body */}
        <div className="p-4" style={{ maxHeight: "75vh", overflowY: "auto" }}>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
              <div>
                <label className="form-label fw-bold text-dark fs-6 mb-1">Full Name *</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  required
                  placeholder="John Doe" 
                  className="form-control rounded-sm border-light-subtle py-2 text-dark"
                />
              </div>

              <div className="row g-2">
                <div className="col-sm-6">
                  <label className="form-label fw-bold text-dark fs-6 mb-1">Phone Number *</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleInputChange} 
                    required
                    placeholder="+91 XXXXX XXXXX" 
                    className="form-control rounded-sm border-light-subtle py-2 text-dark"
                  />
                </div>
                <div className="col-sm-6">
                  <label className="form-label fw-bold text-dark fs-6 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    placeholder="john@example.com" 
                    className="form-control rounded-sm border-light-subtle py-2 text-dark"
                  />
                </div>
              </div>

              <div className="row g-2">
                <div className="col-sm-6">
                  <label className="form-label fw-bold text-dark fs-6 mb-1">Department *</label>
                  <select 
                    name="dept" 
                    value={formData.dept} 
                    onChange={handleDeptChange}
                    className="form-select rounded-sm py-2 text-dark"
                  >
                    {Object.keys(doctorsByDept).map((dept) => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>
                <div className="col-sm-6">
                  <label className="form-label fw-bold text-dark fs-6 mb-1">Doctor *</label>
                  <select 
                    name="doctor" 
                    value={formData.doctor} 
                    onChange={handleInputChange}
                    className="form-select rounded-sm py-2 text-dark"
                  >
                    {doctorsByDept[formData.dept]?.map((doc) => (
                      <option key={doc} value={doc}>{doc}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="row g-2">
                <div className="col-sm-6">
                  <label className="form-label fw-bold text-dark fs-6 mb-1">Preferred Date *</label>
                  <input 
                    type="date" 
                    name="date" 
                    value={formData.date} 
                    onChange={handleInputChange} 
                    required
                    className="form-control rounded-sm py-2 text-dark"
                  />
                </div>
                <div className="col-sm-6">
                  <label className="form-label fw-bold text-dark fs-6 mb-1">Time Slot *</label>
                  <select 
                    name="time" 
                    value={formData.time} 
                    onChange={handleInputChange}
                    className="form-select rounded-sm py-2 text-dark"
                  >
                    <option value="09:00 AM">09:00 AM - 10:00 AM</option>
                    <option value="10:00 AM">10:00 AM - 11:00 AM</option>
                    <option value="11:00 AM">11:00 AM - 12:00 PM</option>
                    <option value="02:00 PM">02:00 PM - 03:00 PM</option>
                    <option value="03:00 PM">03:00 PM - 04:00 PM</option>
                    <option value="04:00 PM">04:00 PM - 05:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="form-label fw-bold text-dark fs-6 mb-1">Symptoms / Notes</label>
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleInputChange} 
                  rows="3"
                  placeholder="Describe your health concern..." 
                  className="form-control rounded-sm border-light-subtle text-dark"
                ></textarea>
              </div>

              {error && (
                <div className="alert alert-danger py-2 px-3 text-danger mb-2" style={{ fontSize: "14px", backgroundColor: "#FFF0F2", border: "1px solid #FFC9CE", borderRadius: "6px" }} role="alert">
                  ⚠️ {error}
                </div>
              )}

              <button 
                type="submit" 
                disabled={loading}
                className="btn btn-primary w-100 py-3 text-white fw-bold shadow-sm mt-3"
                style={{ 
                  backgroundColor: "#006D5B", 
                  borderColor: "#006D5B",
                  opacity: loading ? 0.75 : 1,
                  cursor: loading ? "not-allowed" : "pointer"
                }}
              >
                {loading ? "Scheduling Appointment..." : "Confirm Appointment"}
              </button>
            </form>
          ) : (
            <div className="text-center py-4">
              <div 
                className="d-inline-flex align-items-center justify-content-center rounded-circle text-white mb-3"
                style={{ backgroundColor: "#006D5B", width: "70px", height: "70px", fontSize: "36px" }}
              >
                ✓
              </div>
              <h3 className="fw-bold text-success mb-2">Booking Confirmed!</h3>
              <p className="text-muted fs_14 px-3 mb-4">
                Thank you <strong>{formData.name}</strong>. Your appointment with <strong>{formData.doctor}</strong> in the <strong>{formData.dept}</strong> department has been scheduled for <strong>{formData.date}</strong> at <strong>{formData.time}</strong>.
              </p>
              
              <div className="bg-light p-3 rounded mb-4 text-start fs_12 border border-light-subtle text-dark">
                <strong>Appointment Summary:</strong>
                <ul className="m-0 mt-2 px-3">
                  <li><strong>Patient:</strong> {formData.name}</li>
                  <li><strong>Contact:</strong> {formData.phone}</li>
                  <li><strong>Doctor:</strong> {formData.doctor} ({formData.dept})</li>
                  <li><strong>Date/Time:</strong> {formData.date} | {formData.time}</li>
                </ul>
              </div>

              <button 
                onClick={() => { setSubmitted(false); onClose(); }} 
                className="btn btn-primary px-4 py-2 text-white fw-bold"
                style={{ backgroundColor: "#006D5B", borderColor: "#006D5B" }}
              >
                Close Window
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
