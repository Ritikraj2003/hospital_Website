"use client";
import React, { useState } from "react";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import AppointmentModal from "@/components/AppointmentModal";

export default function ServiceLayout({ children }) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="d-flex flex-column min-h-screen bg-light">
      <Header openAppointmentModal={() => setModalOpen(true)} />
      <main className="flex-grow pb-5">
        {children}
      </main>
      <Footer openAppointmentModal={() => setModalOpen(true)} />
      <AppointmentModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
