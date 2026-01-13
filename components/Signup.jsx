"use client";

import { useState } from "react";
import Link from "next/link";
import "./Signup.css";

export default function SignupPage() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);

    // auto close popup
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  return (
    <div className="signup-container">
      <div className="signup-card">

        <h1 className="signup-title">Create Account</h1>
        <p className="signup-subtitle">Join EduTech and start learning</p>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="John Doe" required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="you@example.com" required />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="••••••••" required />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" placeholder="••••••••" required />
          </div>

          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>

        <p className="login-text">
          Already have an account? <Link href="/login">Login</Link>
        </p>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="popup">
          🎉 Account Created Successfully
        </div>
      )}
    </div>
  );
}
