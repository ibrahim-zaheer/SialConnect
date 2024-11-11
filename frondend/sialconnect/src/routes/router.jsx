// router.js
import { createBrowserRouter, Route } from 'react-router-dom';
import Auth from '../components/Auth';
import HomePage from '../pages/homepage';
import UserAuth from '../pages/userauthentication';

const router = createBrowserRouter([
  {
    path: '/',
    element: <UserAuth />, // Root path renders the Auth component for login/register
  },
  {
    path: '/home',
    element: <HomePage />, // The home path renders HomePage after successful login
  },
]);

export default router;
