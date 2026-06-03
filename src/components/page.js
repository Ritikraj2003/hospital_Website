"use client";

import React, { useState } from "react";
import Header from "@/components/layout/header/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Departments from "@/components/Departments";
import Services from "@/components/Services";
import Doctors from "@/components/Doctors";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonial from "@/components/Testimonial";
import RecentNews from "@/components/RecentNews";
import Footer from "@/components/layout/footer/Footer";
import AppointmentModal from "@/components/AppointmentModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <div className="d-flex flex-column min-h-screen">
      {/* Navigation Header */}
      <Header openAppointmentModal={handleOpenModal} />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* Banner Hero Slider */}
        <Hero openAppointmentModal={handleOpenModal} />

        {/* Narrative & Statistics */}
        <About />

        {/* Categories Departments Grid */}
        <Departments />

        {/* Clinical Care Offerings */}
        <Services openAppointmentModal={handleOpenModal} />

        {/* Clinical Doctors Staff */}
        <Doctors openAppointmentModal={handleOpenModal} />

        {/* Bullet Checkpoints collage */}
        <WhyChooseUs openAppointmentModal={handleOpenModal} />

        {/* Core Vision & Patient feedback slider */}
        <Testimonial />

        {/* Educational Health Blogs */}
        <RecentNews />
      </main>

      {/* Structured Footer */}
      <Footer openAppointmentModal={handleOpenModal} />

      {/* Popup Appointment Booking Modal */}
      <AppointmentModal isOpen={modalOpen} onClose={handleCloseModal} />
    </div>
  );
}
