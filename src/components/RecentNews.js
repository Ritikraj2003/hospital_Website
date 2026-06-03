"use client";

import React from "react";

export default function RecentNews() {
  const blogs = [
    {
      date: "17 Sep, 2025",
      title: "How to Improve Immunity Naturally: Expert Backed Tips",
      desc: "Our leading diabetologists and clinical dieticians share proven nutritional methods, sleeping patterns, and lifestyle routines to safely double your defenses.",
      img: "/images/image(11).svg",
      category: "Immunology"
    },
    {
      date: "16 Sep, 2025",
      title: "Build Strong Immunity Naturally: Proven Health Tips",
      desc: "An informative guide detailing the impact of hydration, regular physical activity, and mineral micro-nutrition on respiratory and general organic resilience.",
      img: "/images/image(12).svg",
      category: "General Health"
    },
    {
      date: "11 Sep, 2024",
      title: "Surgical Specialties & Advanced Laparoscopy",
      desc: "Understanding the safety, speed of recovery, and minimal scarring benefits of modern minimally invasive keyhole procedures performed at Demo Hospital.",
      img: "/images/image(13).svg",
      category: "Surgery"
    }
  ];

  return (
    <div className="recent_news_page_blk" id="recent-news">
      <div className="container">
        {/* Section Header */}
        <div className="text-align-center mb_60 text-center">
          <h6 className="fw_700 fs_16 lh_16 recent_txt mb_18 d-block">Recent News & Articles</h6>
          <h2 className="fw_700 fs_32 color_blck lh_35 text-dark">
            Healthcare for your Family
          </h2>
        </div>

        {/* News Cards Grid */}
        <div className="row g-4 justify-content-center">
          {blogs.map((post, idx) => (
            <div key={idx} className="col-lg-4 col-md-6 d-flex">
              <div 
                className="surgical_specl_blk d-flex flex-column rounded shadow-sm hover-lift transition w-100"
                style={{ 
                  borderRadius: "12px", 
                  overflow: "hidden", 
                  backgroundColor: "#F2F9F8", 
                  border: "1px solid #E4F1EF" 
                }}
              >
                {/* News Image Container */}
                <div style={{ height: "200px", overflow: "hidden" }}>
                  <img 
                    src={post.img} 
                    alt={post.title} 
                    className="img_wd w-100 h-100 object-fit-cover transition-transform duration-500 hover-scale-up"
                  />
                </div>

                {/* News Card Details */}
                <div className="surgical_txt_blk p-3 d-flex flex-column justify-content-between flex-grow-1">
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-2 flex-wrap">
                      <span className="fw_400 fs_12 lh_16 color_grey">{post.date}</span>
                      <span 
                        className="badge font-semibold"
                        style={{ backgroundColor: "#E4F1EF", color: "#006D5B", fontSize: "11px" }}
                      >
                        {post.category}
                      </span>
                    </div>
                    <h5 className="fw_700 fs_16 lh-base text-dark mb-2 hover-text-primary transition" style={{ cursor: "pointer" }}>
                      {post.title}
                    </h5>
                    <p className="fw_400 fs_14 lorem_surical_txt mb_13 opacity-75">
                      {post.desc}
                    </p>
                  </div>
                  
                  <div className="pt-2 border-top border-light mt-auto">
                    <span className="fs_14 read_more_txt hover-underline cursor-pointer">
                      Read Article...
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Centered Button */}
        <div className="d-flex align-items-center justify-content-center mt-5">
          <button 
            className="see_all_serv_btn color_wt border-0 text-white shadow hover-scale transition"
            style={{ transition: "all 0.3s ease" }}
          >
            See All Articles
          </button>
        </div>
      </div>
    </div>
  );
}
