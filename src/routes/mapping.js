import React, { lazy } from "react";
import { Navigate } from "react-router-dom";

const Home = lazy(() => import("../pages/Home.jsx"));
const Login = lazy(() => import("../pages/Authentication/Login"));
const Signup = lazy(() => import("../pages/Authentication/Signup"));

const Products = lazy(() => import("../pages/Product/ProductList.jsx"));

let authorizedRoutes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/products",
    exact: true,
    component: Products,
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
    component: Home,
  },
  {
    path: "/products",
    exact: true,
    component: Products,
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
