import React from "react";
import { Navigate } from "react-router-dom";

let authorizedRoutes = [
  {
    path: '/',
    exact: true,
    component: () => <h1>Home</h1>,
  },
  {
    path: '/dashboard',
    exact: true,
    component: () => <h1>Dashboard</h1>,
  },
  {
    path: '/orders',
    exact: true,
    component: () => <h1>Orders</h1>,
  },
  {
    path: '/profile',
    exact: true,
    component: () => <h1>Profile</h1>,
  },
  {
    path: "*",
    component: () => <Navigate to="/" />,
  }
]

let UnauthorizedRoutes = [
  {
    path: '/',
    exact: true,
    component: () => <h1>Home</h1>,
  },
  {
    path: '/login',
    exact: true,
    component: () => <h1>Login</h1>,
  },
  {
    path: '/register',
    exact: true,
    component: () => <h1>Register</h1>,
  },
  {
    path: '*',
    component: () => <Navigate to="/" />,
  }
]

export const getRoutes = (isAuthorized = false) => {
  return isAuthorized ? authorizedRoutes : UnauthorizedRoutes;
}