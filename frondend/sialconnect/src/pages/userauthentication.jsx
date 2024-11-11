// frontend/src/App.js
import React from 'react';

import Auth from '../components/Auth';
import OAuth from '../components/OAuth';
function UserAuth() {
  return (
    <>
    <Auth/>
    <OAuth/>
    </>
  );
}

export default UserAuth;
