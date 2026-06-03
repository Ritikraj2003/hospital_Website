"use client";

import React from "react";

export default function WhyChooseUs({ openAppointmentModal }) {
  const points = [
    "Safety First Quality Must",
    "Patient-Centric Approach",
    "Focused Leadership",
    "Cutting-Edge Technology",
    "Transparent Pricing",
    "Coordinated Care"
  ];

  return (
    <div className="why_choose_us_blk" id="why-choose-us">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side: Images Grid Collage */}
          <div className="col-md-6 mb-5 mb-md-0 position-relative h_396px_resp d-flex justify-content-center" style={{ minHeight: "450px" }}>
            <div className="position-relative w-100 h-100" style={{ maxWidth: "450px" }}>
              {/* Background Shapes */}
              <img src="/images/Frame443.svg" alt="" className="square_img absolute bottom-0 left-0" style={{ width: "300px", zIndex: 1 }} />
              <img src="/images/Rectangle143.svg" alt="" className="rectangle_square_img absolute" style={{ bottom: "50px", left: "20px", zIndex: 2 }} />
              <img src="/images/Ellipse26.svg" alt="" className="ellipse_img absolute" style={{ left: "18px", bottom: "195px", zIndex: 2 }} />
              
              {/* Foreground Image */}
              <img 
                src="/images/young-handsome-indian-man-using-mobile-phone-isoated-white-wall1.svg" 
                alt="Patient Booking Online" 
                className="young_man_img absolute"
                style={{ bottom: "0", left: "44px", zIndex: 3, width: "80%", objectFit: "contain" }}
              />
            </div>
          </div>

          {/* Right Side: Feature List */}
          <div className="col-md-6">
            <div className="why_choose_txt_blk pos-relative shadow rounded border border-light-subtle">
              <h2 className="fw_700 fs_32 lh_16 mb_36 color_blck font_26_resp">
                Why Choose Us?
              </h2>
              
              <div className="row g-3">
                {points.map((pt, idx) => (
                  <div key={idx} className="col-sm-6 d-flex align-items-center mb_24">
                    <img 
                      src="/images/Group12.svg" 
                      alt="Checkmark" 
                      className="mr_11" 
                      style={{ width: "24px", height: "24px" }}
                    />
                    <span className="fw_500 fs_16 lh_16 color_blck">
                      {pt}
                    </span>
                  </div>
                ))}
              </div>

              {/* Decorative dot shape */}
              <div className="why_chose_dot_img position-absolute" style={{ bottom: "-30px", right: "20px" }}>
                <img src="/images/Group226.svg" alt="" style={{ width: "60px" }} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner Section */}
        <div className="row mt-5 pt-4">
          <div className="col-md-12 text-center text-md-start">
            <h3 className="mb_36 fw_700 fs_32 lh_35 color_blck fs_24_resp font_26_resp">
              Wellness, Compassion, Quality
            </h3>
            <p className="fw_400 fs_16 lh_22 color_blck opacity-75 max-width-800">
              At Demo Hospital, we live by a commitment to patients that merges wellness with deep compassion and top-tier clinical quality. We strive daily to restore health, inspire confidence, and deliver a coordinated healthcare experience right at the heart of Patna.
            </p>
          </div>
          <div className="col-md-12 pt-3 text-center text-md-start">
            <button 
              onClick={openAppointmentModal}
              className="see_all_serv_btn color_wt border-0 text-white shadow"
              style={{ transition: "all 0.3s ease" }}
            >
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
