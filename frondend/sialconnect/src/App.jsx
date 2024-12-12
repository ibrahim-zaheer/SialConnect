// import React from 'react';
// import { RouterProvider } from 'react-router-dom';
// import router from '../src/routes/router'; // Import the router configuration
// import { useTranslation, Trans } from 'react-i18next';
// import LanguageSelector from './components/language/language-selector';


// function App() {
//   const { t } = useTranslation();

//   const { line1, line2 } = t("description", {
//     channel: "IbrahimZaheer",
//   });

//   return (
//     <div className="App">
//       {/* Navbar inside the router context */}
//       <RouterProvider router={router}>
        
//         <LanguageSelector />
//         <h1>{t("greeting")}</h1>

//         <span>
//           <Trans
//             i18nKey={line1}
//             values={{
//               channel: "RoadsideCoder",
//             }}
//             components={{ 1: <b /> }}
//           />
//         </span>
//       </RouterProvider>
//     </div>
//   );
// }

// export default App;


// // import React from 'react';
// // import { useTranslation, Trans } from 'react-i18next';
// // import LanguageSelector from './components/language/language-selector';
// // import Navbar from './components/navbar';
// // import { Outlet } from 'react-router-dom'; // To render nested routes if needed

// // function App() {
// //   const { t } = useTranslation();

// //   const { line1 } = t("description", {
// //     channel: "IbrahimZaheer",
// //   });

// //   return (
// //     <div className="App">
     
// //       <Navbar />
// //       <LanguageSelector />
      
// //       {/* Main content */}
// //       <h1>{t("greeting")}</h1>
// //       <span>
// //         <Trans
// //           i18nKey="description.line1"
// //           values={{
// //             channel: "RoadsideCoder",
// //           }}
// //           components={{ 1: <b /> }}
// //         />
// //       </span>

     
// //       <Outlet />
// //     </div>
// //   );
// // }

// // export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavigationBar';
import UserAuth from './pages/userauthentication';
import HomePage from './pages/homepage';
import RoleSelection from './components/roleSelection';
import ExporterPage from './pages/Exporter/ExporterPage';
import SupplierPage from './pages/Supplier/SupplierPage';
import ProductDetails from './components/Exporter/products/ProductDetails';
import LandingPage from './pages/landingPage';
import { useTranslation, Trans } from 'react-i18next';

const App = () => {
  return (
    <>
      <Navbar /> {/* Display Navbar globally */}
      <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/roleSelection" element={<RoleSelection />} />
        <Route path="/Exporter" element={<ExporterPage />} />
        <Route path="/Supplier" element={<SupplierPage />} />
        <Route path="/signIn" element={<UserAuth />} />
        <Route path="/supplier/product/:id" element={<ProductDetails />} />
        
       
      </Routes>
    </>
  );
};

export default App;