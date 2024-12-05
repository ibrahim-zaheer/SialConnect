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
      const res = await axios.post("/api/auth/select-role", { email, role });

      if (res.status === 200) {
        alert("Role selected successfully!");

        // const updatedUser = { ...res.data, role }; // Add updated role to the user data
        // dispatch(setUser(updatedUser)); // Update Redux store
        // localStorage.setItem("user", JSON.stringify(updatedUser)); // Update localStorage
        // localStorage.setItem("token", res.data.token);
        // navigate("/home"); // Redirect to home or dashboard


        const { token, ...updatedUser } = res.data; // Extract token from response
            dispatch(setUser(updatedUser)); // Update Redux store

            localStorage.setItem("user", JSON.stringify(updatedUser)); // Update user in localStorage
            localStorage.setItem("token", token); // Update token in localStorage

            navigate("/home"); 
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
