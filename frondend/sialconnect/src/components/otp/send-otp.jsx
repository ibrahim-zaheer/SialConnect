import React, { useState } from "react";
import axios from "axios";

const SendOTP = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendOTP = async () => {
    try {
      const res = await axios.post("/api/auth/send-otp", { email });
      setMessage(res.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "Failed to send OTP");
    }
  };

  return (
    <div>
      <h2>Send OTP</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSendOTP}>Send OTP</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SendOTP;
