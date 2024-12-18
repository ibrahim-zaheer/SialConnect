// src/components/UserProfile.js
import React from 'react';
import { useSelector } from 'react-redux';
import ProfilePictureUpdate from './Supplier/products/ProfilePictureUpdate';
import LogoutButton from './LogoutButton';

import { useTranslation, Trans } from 'react-i18next';
import LanguageSelector from '../components/language/language-selector';

const UserProfile = () => {
  const user = useSelector((state) => state.user); // Access the user data from the Redux store

  const { t } = useTranslation();

    const { line1, line2 } = t("description", {
      channel: "IbrahimZaheer",
    });

  return (
    <div>
      <>
      <LanguageSelector />
         <h1>{t("greeting")}</h1>

         <span>
           <Trans
            i18nKey={line1}
            values={{
              channel: "RoadsideCoder",
            }}
            components={{ 1: <b /> }}
          />
        </span>
      </>
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
      <LogoutButton/>
    </div>
  );
};

export default UserProfile;
