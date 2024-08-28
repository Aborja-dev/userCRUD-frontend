import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@/style/water.css'
import 'react-toastify/dist/ReactToastify.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import LoginPage from './pages/login/page';
import RegisterPage from './pages/register/page';
import PrivateLayout from '@/pages/layout/PrivateLayout';
import { guardAuthLoader } from '@/shared/guards';
import HomePage from '@/pages/Home/page';
import { HomeLoader } from '@/pages/Home/loader';
import MainLayout from '@/pages/layout/MainLayout';
import { adminLoader } from '@/pages/admin/loader';
import AdminPage from '@/pages/admin/page';

const router = createBrowserRouter([
  {
    path: "login",
    element: <MainLayout><LoginPage /></MainLayout>,
  },
  {
    path: "register",
    element: <MainLayout><RegisterPage /></MainLayout>,
  },
  {
    path: "/",
    element: <MainLayout><PrivateLayout /></MainLayout>,
    loader: guardAuthLoader,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "home",
        loader: HomeLoader,
        element: <HomePage />
      },
      {
        path: "admin",
        loader: adminLoader,
        element: <AdminPage />
      }
    ]
  }
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
