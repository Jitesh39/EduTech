"use client";

import { useState } from "react";
import Link from "next/link";
import "./login.css";

export default function LoginPage() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);

    // auto close popup after 2 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <h1 className="login-title">Welcome Back</h1>
        <p className="login-subtitle">Login to continue learning</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="you@example.com" required />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="••••••••" required />
          </div>

          <div className="forgot">
            <Link href="/forgot-password">Forgot password?</Link>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <p className="signup-text">
          Don’t have an account? <Link href="/signup">Create Account</Link>
        </p>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="popup">
          ✅ Login Successful
        </div>
      )}
    </div>
  );
}
