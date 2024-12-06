import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/reducers/userSlice";

const RoleSelection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email; // Get email passed via navigate
  const [role, setRole] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    if (!role) {
      alert("Please select a role!");
      return;
    }

    try {
      // Send role selection to the backend
      const res = await axios.post("/api/auth/select-role", {
        email, // Email from state passed via navigation
        role,
      });

      if (res.status === 200) {
        const { token, ...updatedUser } = res.data;

        // Update Redux store
        dispatch(setUser(updatedUser));

        // Update localStorage with the new token and user data
        localStorage.setItem("user", JSON.stringify(updatedUser));
        localStorage.setItem("token", token);

        alert("Role selected successfully!");
        navigate("/home"); // Redirect to the dashboard/home page
      }
    } catch (error) {
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
