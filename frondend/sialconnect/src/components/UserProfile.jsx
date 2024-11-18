// src/components/UserProfile.js
import React from 'react';
import { useSelector } from 'react-redux';

const UserProfile = () => {
  const user = useSelector((state) => state.user); // Access the user data from the Redux store

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name || "Guest"}</p>
      <p>Email: {user.email || "No Email Available"}</p>
      <p>Role: {user.role || "No Role Available"}</p>
    </div>
  );
};

export default UserProfile;
