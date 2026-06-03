"use client";

import React, { useState, useEffect } from "react";

export default function Hero({ openAppointmentModal }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      image: "/images/mature-doctor-sitting-desk-working-laptop1.svg",
      title: "Demo Hospital World Care",
      subtitle: "Demo Hospital situated in the heart of Patna, stands out as a 25 bedded multi-speciality hospital offering the best sophisticated and specialised medical services in the vicinity.",
      directorName: "-Dr. Harish Prasad B.R",
      directorTitle: "Director of Demo Hospital"
    },
    {
      image: "/images/mature-doctor-sitting-desk-working-laptop1.svg",
      title: "Expert Clinical Specialists",
      subtitle: "Supported by a highly skilled team of specialist doctors, advanced diagnostics, and compassionate support staff providing state-of-the-art care.",
      directorName: "-Dr. Manohar CV",
      directorTitle: "Chief Medical Officer"
    },
    {
      image: "/images/mature-doctor-sitting-desk-working-laptop1.svg",
      title: "24/7 Quality Emergency Care",
      subtitle: "Our trauma and critical care teams are ready round-the-clock to manage surgical and medical emergencies with cutting-edge tech.",
      directorName: "-Dr. Prashanth A",
      directorTitle: "Head of Emergency Medicine"
    }
  ];

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="banner-section banner-section_wd position-relative w-100" id="home-page">
      {/* Slider Slides */}
      <div className="w-100 h-100 overflow-hidden relative" style={{ minHeight: "calc(100vh - 114px)" }}>
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`position-absolute top-0 start-0 w-100 h-100 transition-opacity duration-1000 ease-in-out ${
              idx === activeIndex ? "opacity-100 z-1" : "opacity-0 z-0"
            }`}
            style={{
              minHeight: "calc(100vh - 114px)",
              display: "flex",
              alignItems: "center"
            }}
          >
            {/* Slide Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
              style={{ minHeight: "calc(100vh - 114px)", objectPosition: "center" }}
            />

            {/* Slide Overlay Gradient */}
            <div 
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{
                background: "linear-gradient(91.48deg, rgba(0, 109, 91, 0.75) 2.9%, rgba(0, 109, 91, 0.45) 50%, rgba(255, 255, 255, 0) 90%)",
                zIndex: 2
              }}
            ></div>

            {/* Content Container */}
            <div className="container relative z-3 w-100">
              <div className="row">
                <div className="col-lg-7 col-md-9 text-start">
                  <div className="img_txt_blk px-3 px-sm-0 py-5">
                    <h1 
                      className="mb_13 color_wt fw_700 font_26_resp font_26_lh text-shadow-md text-white animate-fade-in-up"
                      style={{ fontSize: "clamp(28px, 4.5vw, 56px)", lineHeight: "1.2" }}
                    >
                      {slide.title}
                    </h1>
                    <p 
                      className="fw_med color_wt mb_28 lh_35 font_12_resp lh_17_resp_mb text-white opacity-90 mt-3"
                      style={{ fontSize: "clamp(14px, 2vw, 20px)", lineHeight: "1.6" }}
                    >
                      {slide.subtitle}
                    </p>
                    
                    <div className="d-flex align-items-center flex-wrap gap-2 mt-4">
                      <div>
                        <h5 className="harish_txt color_wt mb_0 font_14_resp font_20_resp text-white">
                          {slide.directorName}
                        </h5>
                        <span className="director_txt color_wt fw_400 fs_16 font_12_resp text-white opacity-80 block mt-1">
                          {slide.directorTitle}
                        </span>
                      </div>
                    </div>

                    <div className="mt-4">
                      <button 
                        onClick={openAppointmentModal}
                        className="btn btn-lg text-white font-semibold py-3 px-4 shadow hover-scale transition"
                        style={{ backgroundColor: "#009688", borderRadius: "8px", border: "none" }}
                      >
                        Book Appointment Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Navigation Controls */}
      <button
        onClick={handlePrev}
        className="carousel-control-prev btn p-0 position-absolute"
        style={{ left: "20px", top: "50%", transform: "translateY(-50%)", width: "5%", zIndex: 10 }}
        aria-label="Previous Slide"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button
        onClick={handleNext}
        className="carousel-control-next btn p-0 position-absolute"
        style={{ right: "20px", top: "50%", transform: "translateY(-50%)", width: "5%", zIndex: 10 }}
        aria-label="Next Slide"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>

      {/* Marquee Animation Text Bar */}
      <div className="animation_txt_blk w-100">
        <span className="scrollable_ft_txt fs_14 color_wt">
          Demo Hospital situated in the heart of Patna, stands out as a 25 bedded multi-speciality hospital offering the best sophisticated and specialised medical services in the vicinity.
        </span>
      </div>
    </div>
  );
}
