"use client";
import { useState, useEffect, useRef } from "react";

export default function AmbulanceWidget() {
  const [showInfo, setShowInfo] = useState(false);
  const widgetRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (widgetRef.current && !widgetRef.current.contains(event.target)) {
        setShowInfo(false);
      }
    }
    
    if (showInfo) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showInfo]);

  return (
    <div ref={widgetRef} className="fixed bottom-4 right-4 z-[9999] flex flex-col items-end animate-ambulance">
      {showInfo && (
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 mb-3 flex flex-col overflow-hidden w-72 transition-all duration-300 animate-fade-in origin-bottom-right">
          {/* Header */}
          <div className="bg-[#006D5B] text-white p-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 10H6" /><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11h2" /><path d="M19 18h2a2 2 0 0 0 2-2v-3.28a2 2 0 0 0-.68-1.52c-.52-.46-1.5-.96-3.26-1.2H14" /><circle cx="8" cy="18" r="2" /><circle cx="17" cy="18" r="2" /><path d="M10 6h4" /><path d="M8 6v4" /><path d="M12 6v4" /></svg>
              <h4 className="font-bold text-sm tracking-wide m-0">24/7 AMBULANCE</h4>
            </div>
            <button 
              onClick={() => setShowInfo(false)}
              className="text-white/80 hover:text-white font-bold text-xl leading-none"
            >
              &times;
            </button>
          </div>
          
          {/* Body */}
          <div className="p-4 flex flex-col gap-3 bg-slate-50">
            <p className="text-xs text-gray-500 text-center mb-1">In case of emergency, contact us immediately.</p>
            
            {/* Call Button */}
            <a 
              href="tel:+919931212664" 
              className="flex items-center justify-center gap-2 bg-white border-2 border-[#006D5B] text-[#006D5B] hover:bg-[#006D5B] hover:text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              +91 99312 12664
            </a>
            
            {/* WhatsApp Button */}
            <a 
              href="https://wa.me/919931212664" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path></svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      )}
      
      {/* Ambulance Image */}
      <div className="relative group cursor-pointer" onClick={() => setShowInfo(!showInfo)}>
        <img 
          src="/images/ambulance_avni_hospital_patna.png" 
          alt="Avni Hospital Ambulance" 
          className="w-32 md:w-40 h-auto drop-shadow-2xl hover:scale-110 transition-transform duration-300 origin-bottom"
        />
        {!showInfo && (
          <div className="absolute -top-3 -right-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg animate-bounce">
            Click Me!
          </div>
        )}
      </div>
    </div>
  );
}
