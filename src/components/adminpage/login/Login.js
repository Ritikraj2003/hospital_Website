"use client";

import React from "react";
import Link from "next/link";
import "./login.css";

export default function Login({ 
  username, 
  setUsername, 
  password, 
  setPassword, 
  loginError, 
  handleLogin 
}) {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center px-3 admin-login-bg">
      <div className="card shadow-2xl border-0 overflow-hidden animate-fade-in-up login-card">
        <div className="p-4 p-sm-5">
          <div className="text-center mb-4">
            <img src="/images/logo.png" alt="Avni Hospital Logo" style={{ height: "45px" }} className="mb-3" />
            <h4 className="fw-bold text-dark mb-1">Admin Portal</h4>
            <p className="text-muted small">Sign in to manage appointments & schedule</p>
          </div>

          <form onSubmit={handleLogin} className="d-flex flex-column gap-3">
            <div>
              <label className="form-label fw-semibold text-dark mb-1">Username</label>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="form-control py-2 text-dark"
                placeholder="admin"
                required
              />
            </div>

            <div>
              <label className="form-label fw-semibold text-dark mb-1">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control py-2 text-dark"
                placeholder="••••••••"
                required
              />
            </div>

            {loginError && (
              <div 
                className="alert alert-danger py-2 px-3 text-danger mb-0" 
                style={{ fontSize: "13px", backgroundColor: "#FFF0F2", border: "1px solid #FFC9CE", borderRadius: "6px" }}
              >
                ⚠️ {loginError}
              </div>
            )}

            <button 
              type="submit" 
              className="btn text-white fw-bold py-2 mt-2" 
              style={{ backgroundColor: "#006D5B", border: "none" }}
            >
              Sign In
            </button>
          </form>
          
          <div className="text-center mt-4">
            <Link href="/" className="text-decoration-none text-muted small hover:text-dark">
              ← Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
