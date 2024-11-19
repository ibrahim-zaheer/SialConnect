// router.js
import { createBrowserRouter, Route } from 'react-router-dom';
import Auth from '../components/Auth';
import HomePage from '../pages/homepage';
import UserAuth from '../pages/userauthentication';
import SupplierPage from '../pages/Supplier/SupplierPage';
import ExporterPage from '../pages/Exporter/ExporterPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <UserAuth />, // Root path renders the Auth component for login/register
  },
  {
    path: '/home',
    element: <HomePage />, // The home path renders HomePage after successful login
  },
  {
    path: '/Exporter',
    element: <ExporterPage/>, // The home path renders HomePage after successful login
  },
  {
    path: '/Supplier',
    element: <SupplierPage/>, // The home path renders HomePage after successful login
  },
]);

export default router;
