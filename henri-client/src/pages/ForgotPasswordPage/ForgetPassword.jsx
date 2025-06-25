// src/pages/ForgetPassword.jsx
import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // Autofill email from Login page
  React.useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location]);

  const handleReset = async (e) => {
    e.preventDefault();
    const auth = getAuth();

    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Reset link sent! Check your inbox.");
      setTimeout(() => {
        window.location.href = `https://mail.google.com/mail/u/2/#inbox `;
      }, 1500);
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-100">
      <Helmet>
        <title> Henri - Reset Password </title>
      </Helmet>
      <div className="bg-base-300 shadow-md rounded px-8 py-6 w-full max-w-md text-center">
        <h2 className="text-xl font-bold mb-4">Reset Your Password</h2>
        <form onSubmit={handleReset} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input input-bordered w-full"
          />
          <button type="submit" className="btn bg-[#1F4B3F] w-full">
            Send Reset Link
          </button>
        </form>
        <p className="mt-4 text-sm">
          Remembered your password?{" "}
          <button
            onClick={() => navigate(-1)}
            className="text-blue-600 underline"
          >
            Back to Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default ForgetPassword;
