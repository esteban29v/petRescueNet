import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'
import HomePage from './pages/home/home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from './routes/singup';
import Login from './routes/login';
import Dashboard from './routes/dashboard';
import ProtectedRoute from './routes/protectedRoute';
import { AuthProvider } from './assets/auth/authProvider';
import Singup from './routes/singup';

const container = document.querySelector('#root');
const root = createRoot(container);

root.render(
    <HomePage />
);