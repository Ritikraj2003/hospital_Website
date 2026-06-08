"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Login from "./login/Login";
import Sidebar from "./sidebar/Sidebar";
import { adminRoutes } from "./adminroutes";

export default function AdminPage() {
  const router = useRouter();
  const pathname = usePathname();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  
  // Data State
  const [bookings, setBookings] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  const activeTab = (pathname === "/admin/appointment" || pathname === "/admin/appointments") 
    ? "appointments" 
    : (pathname === "/admin/inquiry" || pathname === "/admin/inquiries")
    ? "inquiries"
    : "dashboard";

  const handleTabChange = (tab) => {
    if (tab === "appointments" || tab === "appointment") {
      router.push("/admin/appointment");
    } else if (tab === "inquiries" || tab === "inquiry") {
      router.push("/admin/inquiry");
    } else {
      router.push("/admin/dashboard");
    }
  };

  // Session check on mount and path change (Auth Guard)
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      fetchBookings();
      fetchInquiries();
      if (pathname === "/admin") {
        router.push("/admin/dashboard");
      }
    } else {
      setIsLoggedIn(false);
      setLoading(false);
      if (pathname !== "/admin") {
        router.push("/admin");
      }
    }
  }, [pathname]);

  // Fetch Bookings
  const fetchBookings = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/appointment");
      const data = await res.json();
      if (data.success) {
        // Sort by date descending
        const sorted = data.bookings.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setBookings(sorted);
      }
    } catch (err) {
      console.error("Failed to load appointments:", err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch Inquiries
  const fetchInquiries = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/inquiry");
      const data = await res.json();
      if (data.success) {
        setInquiries(data.inquiries);
      }
    } catch (err) {
      console.error("Failed to load inquiries:", err);
    } finally {
      setLoading(false);
    }
  };

  // Handle Login Submission
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: username.trim(),
          password: password,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        sessionStorage.setItem("token", "admin-authenticated-token-value");
        setIsLoggedIn(true);
        fetchBookings();
        fetchInquiries();
        router.push("/admin/dashboard");
      } else {
        setLoginError(data.error || "Invalid email or password.");
      }
    } catch (err) {
      console.error("Login request error:", err);
      setLoginError("Failed to connect to the server. Please try again.");
    }
  };

  // Handle Logout
  const handleLogout = () => {
    sessionStorage.clear();
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
    router.push("/admin");
  };

  // Delete Booking
  const handleDeleteBooking = async (id) => {
    if (confirm("Are you sure you want to remove this appointment booking?")) {
      try {
        const res = await fetch(`/api/appointment?id=${id}`, {
          method: "DELETE",
        });
        const data = await res.json();
        if (data.success) {
          setBookings(prev => prev.filter(b => b.id !== id));
        } else {
          alert(data.error || "Failed to delete appointment from database.");
        }
      } catch (err) {
        console.error("Failed to delete appointment:", err);
        alert("Server connection error. Failed to delete appointment.");
      }
    }
  };

  // Delete Inquiry
  const handleDeleteInquiry = async (id) => {
    if (confirm("Are you sure you want to remove this inquiry?")) {
      try {
        const res = await fetch(`/api/inquiry?id=${id}`, {
          method: "DELETE",
        });
        const data = await res.json();
        if (data.success) {
          setInquiries(prev => prev.filter(inq => inq.id !== id));
        } else {
          alert(data.error || "Failed to delete inquiry from database.");
        }
      } catch (err) {
        console.error("Failed to delete inquiry:", err);
        alert("Server connection error. Failed to delete inquiry.");
      }
    }
  };

  // Login Screen render
  if (!isLoggedIn) {
    return (
      <Login 
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        loginError={loginError}
        handleLogin={handleLogin}
      />
    );
  }

  const isLiveInquiries = activeTab === "inquiries";

  // Dashboard / Sidebar layout
  return (
    <div className="min-vh-100 d-flex flex-column flex-md-row bg-light" style={{ fontFamily: "'Inter', sans-serif" }}>
      
      {/* Sidebar Component */}
      <Sidebar 
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        bookingsCount={bookings.length}
        inquiriesCount={inquiries.length}
        handleLogout={handleLogout}
      />

      {/* Main Content Pane */}
      <main className="flex-grow-1 d-flex flex-column overflow-hidden">
        
        {/* Top Header */}
        <header className="bg-white border-bottom shadow-sm px-4 py-3 d-flex justify-content-between align-items-center">
          <h5 className="m-0 fw-bold text-dark">
            {activeTab === "dashboard" 
              ? "🏥 Dashboard Overview" 
              : activeTab === "inquiries"
              ? "✉️ Customer Inquiries"
              : "📅 Patient Appointments"}
          </h5>
          <div className="d-flex align-items-center gap-3">
            <button 
              onClick={activeTab === "inquiries" ? fetchInquiries : fetchBookings}
              className="btn btn-light border-0 d-flex align-items-center gap-2 py-2 text-dark shadow-sm"
              title="Refresh Data"
            >
              🔄 Refresh
            </button>
            <Link href="/" className="btn btn-outline-primary py-2 shadow-sm text-decoration-none" style={{ color: "#006D5B", borderColor: "#006D5B" }}>
              🌐 View Live Site
            </Link>
          </div>
        </header>

        {/* Inner Content Area */}
        <div className="p-4 overflow-auto flex-grow-1">
          {loading ? (
            <div className="d-flex flex-column align-items-center justify-content-center py-5">
              <div className="spinner-border text-teal mb-3" role="status" style={{ color: "#006D5B" }}></div>
              <span className="text-muted">Loading data...</span>
            </div>
          ) : (() => {
            const Component = adminRoutes[pathname] || adminRoutes["/admin/dashboard"];
            return (
              <Component 
                bookings={isLiveInquiries ? inquiries : bookings}
                setActiveTab={handleTabChange}
                handleDeleteBooking={isLiveInquiries ? handleDeleteInquiry : handleDeleteBooking}
              />
            );
          })()}
        </div>
      </main>
    </div>
  );
}
