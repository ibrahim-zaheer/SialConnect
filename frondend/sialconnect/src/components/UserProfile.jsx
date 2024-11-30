// src/components/UserProfile.js
import React from 'react';
import { useSelector } from 'react-redux';
import ProfilePictureUpdate from './Supplier/products/ProfilePictureUpdate';

const UserProfile = () => {
  const user = useSelector((state) => state.user); // Access the user data from the Redux store

  return (
    <div>
         <div>
        <h3>Profile Picture:</h3>
        <img
           src={user.profilePicture || "https://th.bing.com/th/id/OIP.mpXg7tyCFEecqgUsoW9eQwHaHk?w=206&h=210&c=7&r=0&o=5&pid=1.7"} 
          alt={`${user.name}'s profile`}
          style={{ width: "150px", height: "150px", borderRadius: "50%" }}
        />
        <ProfilePictureUpdate/>
      </div>
      <h1>User Profile</h1>
      <p>Name: {user.name || "Guest"}</p>
      <p>Email: {user.email || "No Email Available"}</p>
      <p>Role: {user.role || "No Role Available"}</p>
      <p>ProfilePicture: {user.profilePicture || "No Picture Available"}</p>
      
    </div>
  );
};

export default UserProfile;
