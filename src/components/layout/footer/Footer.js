"use client";

import React from "react";

export default function Footer({ openAppointmentModal }) {
  return (
    <footer className="summary_blk" id="footer-blk">
      <div className="container">
        <div className="row">
          {/* Logo and Intro Column */}
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="d-flex flex-column text-md-start text-center align-items-center align-items-md-start">
              <img 
                src="/images/Asset12.svg" 
                alt="Demo Hospital Logo White" 
                className="mb_18 img_wd_ht" 
                style={{ width: "120px", height: "auto" }}
              />
              <p className="fw_400 fs_12 color_wt lh_22 max_wd text-white opacity-80 mt-2">
                At Demo Hospital, we deliver exceptional healthcare in Patna with compassion, innovation, and integrity. Serving families for over a decade.
              </p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="col-lg-2 col-md-3 col-6 mb-4">
            <div className="d-flex flex-column">
              <h6 className="color_wt fw_700 fs_14 lh_16 mb_13 text-white">Quick Links</h6>
              <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                <li><a href="#home-page" className="color_wt fw_400 fs_12 text-decoration text-white opacity-80 hover-opacity-100">Home</a></li>
                <li><a href="#about-us" className="color_wt fw_400 fs_12 text-decoration text-white opacity-80 hover-opacity-100">About Us</a></li>
                <li><a href="#department-blk" className="color_wt fw_400 fs_12 text-decoration text-white opacity-80 hover-opacity-100">Facilities</a></li>
                <li><a href="#recent-news" className="color_wt fw_400 fs_12 text-decoration text-white opacity-80 hover-opacity-100">Gallery</a></li>
                <li><a href="#recent-news" className="color_wt fw_400 fs_12 text-decoration text-white opacity-80 hover-opacity-100">Blog</a></li>
                <li><a href="#footer-blk" className="color_wt fw_400 fs_12 text-decoration text-white opacity-80 hover-opacity-100">Contact Us</a></li>
              </ul>
            </div>
          </div>

          {/* Other Links Column */}
          <div className="col-lg-2 col-md-3 col-6 mb-4">
            <div className="d-flex flex-column">
              <h6 className="color_wt fw_700 fs_14 lh_16 mb_13 text-white">Other Links</h6>
              <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                <li><a href="#our-doctor" className="color_wt fw_400 fs_12 text-decoration text-white opacity-80 hover-opacity-100">Doctor Profiles</a></li>
                <li><a href="#department-blk" className="color_wt fw_400 fs_12 text-decoration text-white opacity-80 hover-opacity-100">Departments</a></li>
                <li>
                  <span 
                    onClick={openAppointmentModal} 
                    className="color_wt fw_400 fs_12 text-decoration text-white opacity-80 hover-opacity-100 cursor-pointer"
                  >
                    Get Appointment
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Health Links Column */}
          <div className="col-lg-2 col-md-4 col-6 mb-4">
            <div className="d-flex flex-column">
              <h6 className="color_wt fw_700 fs_14 lh_16 mb_13 text-white">Health Services</h6>
              <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                <li><a href="" onClick={(e) => e.preventDefault()} className="color_wt fw_400 fs_12 text-decoration text-white opacity-80 hover-opacity-100">Health Card</a></li>
                <li><a href="" onClick={(e) => e.preventDefault()} className="color_wt fw_400 fs_12 text-decoration text-white opacity-80 hover-opacity-100">Health Packages</a></li>
                <li><a href="" onClick={(e) => e.preventDefault()} className="color_wt fw_400 fs_12 text-decoration text-white opacity-80 hover-opacity-100">Health Insurance</a></li>
              </ul>
            </div>
          </div>

          {/* Social and Contact Column */}
          <div className="col-lg-3 col-md-8 col-12 mb-4">
            <div className="d-flex flex-column text-md-start text-center align-items-center align-items-md-start">
              <h6 className="color_wt fw_700 fs_14 lh_16 mb_13 text-white">Contact & Connect</h6>
              <span className="text-white fs_12 mb-2 opacity-80">
                Boring Road, Patna, Bihar, 800001
              </span>
              <div className="d-flex align-items-center gap-3 mt-2">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="images_media">
                  <img src="/images/facebook(1).svg" alt="Facebook" style={{ width: "20px", filter: "invert(1)" }} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="images_media">
                  <img src="/images/twitter(1).svg" alt="Twitter" style={{ width: "20px", filter: "invert(1)" }} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="images_media">
                  <img src="/images/linkedin(1).svg" alt="LinkedIn" style={{ width: "20px", filter: "invert(1)" }} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src="/images/instagram(1).svg" alt="Instagram" style={{ width: "20px", filter: "invert(1)" }} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright section */}
        <div className="d-flex justify-content-between flex-md-row flex-column align-items-center bd_btm pt-3 mt-4 text-center">
          <div className="d-flex align-items-center mt_5 mb-2 mb-md-0 text-white gap-2">
            <img src="/images/Vector(11).svg" alt="" style={{ width: "12px", filter: "invert(1)" }} />
            <span className="color_wt fw_400 fs_12 lh_22 text-white">2026 Demo Hospital. All rights reserved.</span>
          </div>
          <span className="fw_400 fs_12 lh_22 color_wt text-white opacity-85">
            Designed by Baryons | Migrated to Next.js
          </span>
        </div>
      </div>
    </footer>
  );
}
