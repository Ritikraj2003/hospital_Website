"use client";

import React from "react";
import Link from "next/link";

export default function Footer({ openAppointmentModal }) {
  return (
    <footer className="summary_blk" id="footer-blk">
      <div className="container">
        <div className="row">
          {/* Logo and Intro Column */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="d-flex flex-column text-md-start text-center align-items-center align-items-md-start">
              <img 
                src="/images/logo.png" 
                alt="Avni Hospital Logo White" 
                className="mb_18 img_wd_ht" 
                style={{ width: "120px", height: "auto" }}
              />
              <p className="fw_400 fs_12 color_wt lh_22 max_wd text-white opacity-80 mt-2">
                At Avni Hospital, we deliver exceptional healthcare in Patna with compassion, innovation, and integrity. Serving families for over a decade.
              </p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="col-lg-2 col-md-3 col-6 mb-4">
            <div className="d-flex flex-column">
              <h6 className="color_wt fw_700 fs_14 lh_16 mb_13 text-white">Quick Links</h6>
              <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                <li><Link href="/" className="color_wt fw_400 fs_12 text-decoration text-white opacity-80 hover-opacity-100">Home</Link></li>
                <li><Link href="/about" className="color_wt fw_400 fs_12 text-decoration text-white opacity-80 hover-opacity-100">About Us</Link></li>
                <li><Link href="/#department-blk" className="color_wt fw_400 fs_12 text-decoration text-white opacity-80 hover-opacity-100">Facilities</Link></li>
                <li><Link href="/#recent-news" className="color_wt fw_400 fs_12 text-decoration text-white opacity-80 hover-opacity-100">Gallery</Link></li>
                <li><Link href="/#recent-news" className="color_wt fw_400 fs_12 text-decoration text-white opacity-80 hover-opacity-100">Blog</Link></li>
                <li><Link href="/#footer-blk" className="color_wt fw_400 fs_12 text-decoration text-white opacity-80 hover-opacity-100">Contact Us</Link></li>
              </ul>
            </div>
          </div>

          {/* Other Links Column */}
          <div className="col-lg-2 col-md-3 col-6 mb-4">
            <div className="d-flex flex-column">
              <h6 className="color_wt fw_700 fs_14 lh_16 mb_13 text-white">Other Links</h6>
              <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                <li><Link href="/#our-doctor" className="color_wt fw_400 fs_12 text-decoration text-white opacity-80 hover-opacity-100">Doctor Profiles</Link></li>
                <li><Link href="/#department-blk" className="color_wt fw_400 fs_12 text-decoration text-white opacity-80 hover-opacity-100">Departments</Link></li>
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

          {/* Social and Contact Column */}
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <div className="d-flex flex-column text-md-start text-center align-items-center align-items-md-start">
              <h6 className="color_wt fw_700 fs_14 lh_16 mb_13 text-white">Contact & Connect</h6>
              <span className="text-white fs_12 mb-2 opacity-80">
                Amaranth mandir rode near bhoothnath metro station, Patna, Bihar, 800026
              </span>
              <div className="my-2 rounded overflow-hidden shadow-sm" style={{ height: "120px", width: "100%", maxWidth: "240px" }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.6366113271717!2d85.17121287538356!3d25.58617187747864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59dbb5d5d5d5%3A0x5d5d5d5d5d5d5d5d!2sBhoothnath%20Metro%20Station%2C%20Patna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1717777777777!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="d-flex align-items-center gap-3 mt-2">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="images_media transition-transform duration-200 hover:scale-110" style={{ display: "inline-flex" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#1877F2" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="images_media transition-transform duration-200 hover:scale-110" style={{ display: "inline-flex" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#1DA1F2" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="images_media transition-transform duration-200 hover:scale-110" style={{ display: "inline-flex" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0077B5" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transition-transform duration-200 hover:scale-110" style={{ display: "inline-flex" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="instagram-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#FEC564" />
                        <stop offset="25%" stopColor="#FD3737" />
                        <stop offset="50%" stopColor="#F937DF" />
                        <stop offset="75%" stopColor="#C937FF" />
                        <stop offset="100%" stopColor="#3770FF" />
                      </linearGradient>
                    </defs>
                    <path fill="url(#instagram-grad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright section */}
        <div className="d-flex justify-content-between flex-md-row flex-column align-items-center bd_btm pt-3 mt-4 text-center">
          <div className="d-flex align-items-center mt_5 mb-2 mb-md-0 text-white gap-2">
            <span className="color_wt fw_400 fs_12 lh_22 text-white">© 2026 Avni Hospital. All rights reserved.</span>
          </div>
          <span className="fw_400 fs_12 lh_22 color_wt text-white opacity-85">
            Designed by Ritik
          </span>
        </div>
      </div>
    </footer>
  );
}
