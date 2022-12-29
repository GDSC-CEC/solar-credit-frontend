import React, { lazy } from "react";
import { Navigate } from "react-router-dom";

const Login = lazy(() => import("../pages/Authentication/Login"));
const Signup = lazy(() => import("../pages/Authentication/Signup"));

const Orders = lazy(() => import("../pages/Orders/OrderList"));
const Products = lazy(() => import("../pages/Product/ProductList"));
const Profile = lazy(() => import("../pages/Profile/Profile"));

let authorizedRoutes = [
  {
    path: "/",
    exact: true,
    component: () => <h1>Home</h1>,
  },
  {
    path: "/dashboard",
    exact: true,
    component: () => <h1>Dashboard</h1>,
  },
  {
    path: "/orders",
    exact: true,
    component: Orders,
  },
  {
    path: "/products",
    exact: true,
    component: Products,
  },
  {
    path: "/profile",
    exact: true,
    component: Profile,
  },
  {
    path: "*",
    component: () => <Navigate to={"/"} />,
  }
];

let UnauthorizedRoutes = [
  {
    path: "/",
    exact: true,
    component: () => <h1>Home</h1>,
  },
  {
    path: "/login",
    exact: true,
    component: Login,
  },
  {
    path: "/signup",
    exact: true,
    component: Signup,
  },
];

export const getRoutes = (isAuthorized = false) => {
  return isAuthorized ? authorizedRoutes : UnauthorizedRoutes;
};
