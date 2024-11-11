// // HomePage.js
// import React from 'react';
// import UserProfile from '../components/UserProfile';
// const HomePage = () => {
//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//     <UserProfile/>
//       <h1>Welcome to the Home Page!</h1>
//       <p>You have successfully logged in.</p>
//     </div>
//   );
// };

// export default HomePage;

// src/pages/HomePage.js
import React from 'react';
import { useSelector } from 'react-redux';
import UserProfile from '../components/UserProfile';
import PlaceOrder from '../components/PlaceOrder';

const HomePage = () => {


  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <UserProfile/>
      <PlaceOrder/>
    </div>
  );
};

export default HomePage;
