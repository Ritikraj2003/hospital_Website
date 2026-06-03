"use client";

import React, { useState, useEffect } from "react";

export default function Testimonial() {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      text: "“A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy”. The doctors at Demo Hospital gave me a new lease on life with their prompt diagnosis.",
      author: "Mr. Ajay Shankar",
      condition: "Diabetes Patient",
      image: "/images/image(10).svg"
    },
    {
      text: "“Exceptional care and outstanding support!” The nursing staff was incredibly attentive, and the laparoscopic surgeon explained everything so clearly. I highly recommend Demo Hospital.",
      author: "Mrs. Priya Sharma",
      condition: "Maternity Patient",
      image: "/images/image(10).svg"
    },
    {
      text: "“Efficient, clean, and highly professional”. From the emergency entrance to the final checkup, the coordination was flawless, and the pricing was extremely transparent.",
      author: "Mr. Ramesh Kumar",
      condition: "Orthopaedic Patient",
      image: "/images/image(10).svg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <>
      {/* Our Vision Block */}
      <div className="our_vision_blk border-bottom border-light-subtle">
        <div className="container">
          <div className="d-flex flex-column align-items-center justify-content-center mb_40 text-center">
            <span className="fw_700 fs_16 lh_16 mb_18 service_nd_trmt_txt">LOREM IPSUM</span>
            <h3 className="color_blck fw_700 fs_32 lh_22 mb-0">Our Vision</h3>
          </div>
          <div className="pos-relative text-align-center max-width-800 mx-auto px-4 py-3">
            <p className="mb-0 fw_400 color_blck lh_38px fs_24 font_20_resp italic text-dark opacity-90">
              To inspire hope, and contribute to health and wellbeing by providing the best care to every patient through integrated clinical practice, education and research!!!
            </p>
            <img 
              src="/images/quotes-fill_svgrepo.com.svg" 
              alt="Quote Open" 
              className="open_qotes_img"
              style={{ width: "35px", opacity: 0.2 }}
            />
            <img 
              src="/images/quotes-fill_svgrepo.com(1).svg" 
              alt="Quote Close" 
              className="close_quotes_img"
              style={{ width: "35px", opacity: 0.2 }}
            />
          </div>
        </div>
      </div>

      {/* Testimonials Block */}
      <div className="review_page_plk bg-white">
        <div className="container">
          <div className="d-flex flex-column mb_75 marginbtm_30px_resp text-center text-md-start">
            <h6 className="fw_700 fs_16 lh_16 service_nd_trmt_txt mb_18">LOREM IPSUM</h6>
            <h2 className="color_blck fs_32 lh_22 fw_700 mb-0">Patient Testimonials</h2>
          </div>

          <div className="position-relative overflow-hidden mt-4">
            <div className="row align-items-center">
              {/* Left Column: Patient Image & Decorative Shapes */}
              <div className="col-md-4 mb-4 mb-md-0 d-flex justify-content-center">
                <div 
                  className="pos-relative img_blk_review rounded overflow-hidden shadow-sm"
                  style={{ width: "280px", height: "280px" }}
                >
                  <img 
                    src={testimonials[activeSlide].image} 
                    alt="Patient avatar" 
                    className="img_wd w-100 h-100 object-fit-cover"
                  />
                  {/* Decorative Elements */}
                  <img src="/images/Ellipse27.svg" alt="" className="small_siz_elipse review_imgs_square_circle" style={{ width: "35px" }} />
                  <img src="/images/Rectangle151.svg" alt="" className="rectangle_small_siz review_imgs_square_circle" style={{ width: "35px" }} />
                </div>
              </div>

              {/* Right Column: Review Text */}
              <div className="col-md-8 text-center text-md-start">
                <div className="pos-relative">
                  {/* Stars Rating Badge */}
                  <div className="d-flex align-items-center justify-content-center justify-content-md-start mb_13 mt_14 gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <img 
                        key={s}
                        src="/images/Vector(10).svg" 
                        alt="Star" 
                        style={{ width: "16px", height: "16px" }}
                      />
                    ))}
                  </div>
                  
                  {/* Floating quote background mark */}
                  <img 
                    src="/images/quotes-fill_svgrepo.com.svg" 
                    alt="" 
                    className="quotes_img_pos d-none d-md-block"
                    style={{ width: "40px", opacity: 0.15 }}
                  />
                </div>

                <p 
                  className="fs_32 fw_700 color_blck mb_52 lh_38px font_20_resp fw_600_resp text-dark mt-3 transition-all"
                  style={{ fontSize: "clamp(18px, 3.5vw, 28px)", lineHeight: "1.4" }}
                >
                  {testimonials[activeSlide].text}
                </p>
                
                <h6 className="ajay_shankar_txt lh_16 m-0 fw-bold">{testimonials[activeSlide].author}</h6>
                <span className="fs_16 fw_400 lh_16 diabetes_color_txt d-block mt-1 opacity-75">
                  {testimonials[activeSlide].condition}
                </span>
              </div>
            </div>

            {/* Manual Slide Indicator Dots */}
            <div className="d-flex justify-content-center gap-2 mt-5">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`btn p-0 rounded-circle border-0 ${index === activeSlide ? "active" : ""}`}
                  style={{
                    width: "12px",
                    height: "12px",
                    backgroundColor: index === activeSlide ? "#006D5B" : "#C5E1DD",
                    transition: "all 0.3s ease",
                    opacity: index === activeSlide ? 1 : 0.6
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
