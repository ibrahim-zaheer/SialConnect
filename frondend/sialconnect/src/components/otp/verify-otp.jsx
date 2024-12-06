import React, { useState } from "react";
import axios from "axios";

const VerifyOTP = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");

  const handleVerifyOTP = async () => {
    console.log("Email:", email, "OTP:", otp); // Debugging
    if (!email || !otp) {
      setMessage("Email and OTP are required!");
      return;
    }
  
    try {
      const res = await axios.post("/api/auth/verify-otp", { email, otp });
      setMessage(res.data.message);
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setMessage(error.response?.data?.message || "Failed to verify OTP");
    }
  };
  

  return (
    <div>
      <h2>Verify OTP</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button onClick={handleVerifyOTP}>Verify OTP</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default VerifyOTP;
