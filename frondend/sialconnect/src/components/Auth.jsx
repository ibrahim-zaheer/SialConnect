
import React, { useState } from "react";
import axios from "axios";

import {
  useNavigate, createBrowserRouter,
  RouterProvider,
  Route,
  Link
} from "react-router-dom";

import { useDispatch } from "react-redux";
import { setUser } from "../redux/reducers/userSlice";



const Auth = () => {
  const [isRegister, setIsRegister] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", password: "", role: "" });
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    console.log("Before Update:", formData); // Debugging the state before update
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log("After Update:", formData); // Debugging the state after update
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isRegister ? "/api/auth/register" : "/api/auth/login";
      const { data } = await axios.post(url, formData);
  
      console.log("Server Response:", data); // Check if data has name and email
  
      setMessage(data.message || "Login successful!");
  
      if (!isRegister) {
        const userData = { name: data.name, email: data.email, role: data.role,profilePicture: data.profilePicture };
        dispatch(setUser(userData));
        localStorage.setItem("user", JSON.stringify(userData)); 
        localStorage.setItem("token", data.token);
        navigate("/home"); 
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "An error occurred");
    }
  };




  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log("Submitting Form Data:", formData); // Check formData before sending

  //   if (!formData.role) {
  //     setMessage("Role is required."); // Inform user if role is not selected
  //     return;
  //   }

  //   try {
  //     const url = isRegister ? "/api/auth/register" : "/api/auth/login";
  //     const { data } = await axios.post(url, formData);
  //     console.log("Server Response:", data);
  //     setMessage(data.message || "Login successful!");
  //   } catch (error) {
  //     console.error("Error in Submission:", error.response?.data || error.message);
  //     setMessage(error.response?.data?.message || "An error occurred");
  //   }
  // };



  return (
    <div>
      <h2>{isRegister ? "Register" : "Login"}</h2>
      <form onSubmit={handleSubmit}>
        {isRegister && (
          <>
            <div>
              <label>Name</label>
              <input type="text" name="name" onChange={handleChange} required />
            </div>
            <div>
              <label>Role</label>
              <select name="role" value={formData.role} onChange={handleChange} required>
                <option value="">Select Role</option>
                <option value="exporter">Exporter</option>
                <option value="supplier">Supplier</option>
              </select>

            </div>
          </>
        )}
        <div>
          <label>Email</label>
          <input type="email" name="email" onChange={handleChange} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" onChange={handleChange} required />
        </div>
        <button type="submit">{isRegister ? "Register" : "Login"}</button>
      </form>
      <button onClick={() => setIsRegister(!isRegister)}>
        {isRegister ? "Switch to Login" : "Switch to Register"}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Auth;
