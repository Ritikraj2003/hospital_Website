"use client";

import React, { useState } from "react";

export default function Departments() {
  const [filter, setFilter] = useState("all");

  const depts = [
    { name: "Laparoscopic", img: "/images/Rectangle98(1)1.svg", category: "surgery" },
    { name: "Laparotomy", img: "/images/Rectangle1001.svg", category: "surgery" },
    { name: "General Medicine", img: "/images/Rectangle1011.svg", category: "general" },
    { name: "Diabetology", img: "/images/Rectangle1021.svg", category: "specialty" },
    { name: "Obstetrics", img: "/images/Rectangle1031.svg", category: "general" },
    { name: "Gynaecology", img: "/images/Rectangle1041.svg", category: "general" },
    { name: "Fertility (Ivf/iui)", img: "/images/Rectangle1051.svg", category: "specialty" },
    { name: "Pediatrics/ Neonatology", img: "/images/Rectangle1061.svg", category: "general" },
    { name: "Orthopaedics", img: "/images/Rectangle1071.svg", category: "surgery" },
    { name: "Neurology", img: "/images/Rectangle1111.svg", category: "specialty" },
    { name: "Urology", img: "/images/image1.svg", category: "surgery" },
    { name: "Nephrology", img: "/images/image(1)1.svg", category: "specialty" },
    { name: "Cardiology", img: "/images/image(2)1.svg", category: "specialty" },
    { name: "Gastroenterology", img: "/images/image(3)1.svg", category: "specialty" },
    { name: "Dermatology", img: "/images/image(4)1.svg", category: "general" },
    { name: "Oncology", img: "/images/image(5)1.svg", category: "specialty" }
  ];

  const filteredDepts = filter === "all" ? depts : depts.filter(d => d.category === filter);

  return (
    <div className="hosptl_dept_blk" id="department-blk">
      <div className="container">
        <h2 className="hspt_dept_hdg color_blck fw_700 lh_22 fs_32">Hospital Departments</h2>
        
        {/* Category Filter Tabs */}
        <div className="d-flex justify-content-center flex-wrap gap-2 mb-5">
          {[
            { id: "all", label: "All Departments" },
            { id: "general", label: "General Care" },
            { id: "surgery", label: "Surgical Specialties" },
            { id: "specialty", label: "Specialized Clinical" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`btn px-4 py-2 rounded-pill fw-medium transition ${
                filter === tab.id 
                  ? "text-white shadow-sm" 
                  : "bg-white text-secondary border border-light-subtle hover-bg-light"
              }`}
              style={{
                backgroundColor: filter === tab.id ? "#006D5B" : "transparent",
                borderColor: filter === tab.id ? "#006D5B" : "#dee2e6",
                fontSize: "14px"
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Departments Grid */}
        <div className="row g-4 justify-content-center">
          {filteredDepts.map((dept, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6">
              <div 
                className="hsp_dept_img_blk position-relative overflow-hidden rounded shadow hover-lift transition cursor-pointer"
                style={{ height: "260px" }}
              >
                {/* Department Image */}
                <img 
                  src={dept.img} 
                  alt={dept.name} 
                  className="img_wd w-100 h-100 object-fit-cover transition-transform duration-500 hover-scale-up" 
                />
                
                {/* Visual Overlay Label */}
                <div className="hspt_dept_imgs_txt d-flex align-items-end justify-content-center">
                  <span className="color_wt fs_16 lh_16 fw_med img_txt d-block text-white text-center pb-3 fw-bold">
                    {dept.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
