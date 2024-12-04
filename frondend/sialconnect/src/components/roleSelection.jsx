import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const RoleSelection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email; // Get email passed via navigate
  const [role, setRole] = useState("");

  const handleSubmit = async () => {
    if (!role) {
      alert("Please select a role!");
      return;
    }

    try {
      const res = await axios.post("/api/auth/select-role", { email, role });

      if (res.status === 200) {
        alert("Role selected successfully!");
        navigate("/home"); // Redirect to home or dashboard
      }
    } catch (error) {
        console.log("Email sent to role selection:", email);

      console.error("Error selecting role:", error);
    }
  };

  return (
    <div>
      <h2>Select Your Role</h2>
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="">Select Role</option>
        <option value="exporter">Exporter</option>
        <option value="supplier">Supplier</option>
      </select>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default RoleSelection;
