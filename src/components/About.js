"use client";

import React, { useState } from "react";

export default function About() {
  const [expanded, setExpanded] = useState(false);

  const stats = [
    {
      num: "24/7",
      label: "Trauma Care",
      bgImg: "/images/Group232.svg",
      className: "group_232_img"
    },
    {
      num: "100+",
      label: "Doctors",
      bgImg: null,
      className: ""
    },
    {
      num: "1M+",
      label: "Happy Patients",
      bgImg: null,
      className: ""
    },
    {
      num: "1200+",
      label: "Successful Operations",
      bgImg: "/images/Group220.svg",
      className: "group_220_img"
    }
  ];

  return (
    <div className="about_us_whole_blk" id="about-us">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column: Image */}
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="position-relative overflow-hidden rounded shadow-lg" style={{ height: "480px" }}>
              <img 
                src="/images/image(3).svg" 
                alt="Demo Hospital Building and Staff" 
                className="img_wd about_us_img w-100 h-100 object-fit-cover"
              />
              <div 
                className="position-absolute bottom-0 start-0 w-100 p-3 text-white"
                style={{ background: "linear-gradient(to top, rgba(0, 109, 91, 0.9), transparent)" }}
              >
                <h4 className="m-0 fw-bold">Healing with Compassion</h4>
                <p className="m-0 fs-12 opacity-80">Serving Patna for over a decade</p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="col-md-6 mt_38">
            <span className="fs_16 lh_16 service_nd_trmt_txt fw_700 d-block mb-2">WHO WE ARE</span>
            <h2 className="lh_16 about_us_txt_heading color_blck fw_700 fs_32 mb-4">About Us</h2>
            
            <p className="fs_14 color_blck mb_28 fw_400 lh_22">
              Demo Hospital, situated in the heart of Patna, stands out as a premier 25-bedded multi-speciality hospital offering the most sophisticated and specialized medical services in the vicinity. Our patient-focused approach guarantees you receive the highest standard of individualized clinical care.
            </p>
            
            <p className="fs_14 color_blck fw_400 lh_22 mb_28">
              Under the visionary leadership of Dr. Harish Prasad B.R., Demo Hospital has grown into a trusted healthcare hub in Patna. We combine highly experienced doctors, state-of-the-art diagnostic facilities, and a dedicated team of medical staff to deliver seamless, comprehensive care to you and your family.
            </p>

            {expanded && (
              <div className="fs_14 color_blck fw_400 lh_22 mb_28 animate-fade-in">
                <p>
                  At Demo Hospital, we believe in holistic healthcare. We are equipped with advanced laparoscopic surgical units, fully monitored critical care departments, modern maternity wards, and comprehensive diagnostic labs to handle any emergency.
                </p>
                <p>
                  Our commitment to clinical excellence is matched by our dedication to affordable and transparent billing. We accept all major health insurances and corporate packages, ensuring quality healthcare is within reach of everyone in the community.
                </p>
              </div>
            )}

            <button 
              onClick={() => setExpanded(!expanded)}
              className="see_all_serv_btn fs_16 lh_16 color_wt fw_med border-0 text-white shadow-sm"
              style={{ transition: "all 0.3s ease" }}
            >
              {expanded ? "Read Less" : "Read More..."}
            </button>
          </div>
        </div>

        {/* Stats Section Row */}
        <div className="row mt-5 pt-4">
          {stats.map((stat, index) => (
            <div key={index} className="col-md-3 col-sm-6 mb-4 position-relative">
              <div className="trauma_care_blk shadow border border-light-subtle h-100 d-flex flex-column justify-content-center">
                <h5 className="bold_txt mb_0 fw_700">{stat.num}</h5>
                <span className="normal_txt fs_16 bold_txt fw_400 text-dark opacity-75">{stat.label}</span>
              </div>
              {stat.bgImg && (
                <img 
                  src={stat.bgImg} 
                  alt="" 
                  className={stat.className}
                  style={{ pointerEvents: "none" }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
