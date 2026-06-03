"use client";

import React from "react";

export default function Services({ openAppointmentModal }) {
  const services = [
    {
      title: "Specialized Medical",
      desc: "Comprehensive outpatient and inpatient care for chronic and acute illnesses, utilizing evidence-based treatment pathways and expert advice.",
      img: "/images/Group21.svg",
      tag: "Outpatient / Inpatient"
    },
    {
      title: "Ancillary Care",
      desc: "Supporting clinical departments with professional physical therapy, dietary counselling, pharmacy, and patient rehabilitation systems.",
      img: "/images/Group23.svg",
      tag: "Rehabilitation"
    },
    {
      title: "Surgical Specialties",
      desc: "Advanced minimally invasive, laparoscopic, and open surgical procedures executed inside state-of-the-art sterile modular theatres.",
      img: "/images/Group26.svg",
      tag: "Modular OT"
    },
    {
      title: "Diagnostic Services",
      desc: "High-resolution laboratory diagnostics, ultrasound, and digital radiology to guarantee prompt and highly precise medical profiling.",
      img: "/images/Group20.svg",
      tag: "24/7 Labs"
    }
  ];

  return (
    <div className="spcl_care_serv_blk" id="services-blk">
      <div className="container">
        {/* Section Header */}
        <div className="mb_40 border-bottom pb-4">
          <div className="d-flex justify-content-between align-items-center flex-md-row flex-column gap-3">
            <div className="d-flex flex-column text-md-start text-center">
              <span className="fs_16 lh_16 service_nd_trmt_txt mb_18 fw_700 d-block">SERVICES & TREATMENTS</span>
              <h2 className="mb_0 color_blck heading_services_txt fw_700 lh_35">
                Special health care services
              </h2>
            </div>
            <button 
              onClick={openAppointmentModal}
              className="see_all_serv_btn color_wt fw_med fs_16 lh_16 shadow hover-scale transition text-white border-0 mt-3 mt-md-0"
            >
              Book A Service
            </button>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="row g-4">
          {services.map((srv, index) => (
            <div key={index} className="col-md-6">
              <div 
                className="spcialized_mdcl_blk d-flex flex-sm-row flex-column gap-3 h-100 hover-lift transition cursor-pointer border border-light-subtle"
                style={{ backgroundColor: "#FFFFFF" }}
              >
                <div className="d-flex justify-content-center align-self-start pt-1">
                  <div 
                    className="p-3 rounded-circle d-flex align-items-center justify-content-center"
                    style={{ backgroundColor: "#F2F9F8", width: "70px", height: "70px" }}
                  >
                    <img 
                      src={srv.img} 
                      alt={srv.title} 
                      style={{ width: "35px", height: "35px" }} 
                    />
                  </div>
                </div>
                <div className="d-flex flex-column text-sm-start text-center">
                  <div className="d-flex justify-content-between align-items-center mb-2 flex-wrap gap-2 justify-content-sm-between justify-content-center">
                    <span className="fw_700 color_blck fs_16 lh_16">{srv.title}</span>
                    <span 
                      className="badge rounded-pill px-2 py-1 fs-12 fw-medium"
                      style={{ backgroundColor: "#E4F1EF", color: "#006D5B" }}
                    >
                      {srv.tag}
                    </span>
                  </div>
                  <p className="mb_0 fw_400 fs_14 lorem_txt opacity-75">
                    {srv.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
