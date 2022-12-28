import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { getRoutes } from "./mapping";
import AppWrapper from "../components/AppWrapper/AppWrapper";
import Navbar from "../components/Navbar/Navbar";
import AppSidebar from "../components/AppSidebar/AppSidebar";

function Authorized() {
  const authorizedRoutes = getRoutes(true);
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <Routes>
          {authorizedRoutes.map((item, i) => (
            <Route
              key={i}
              exact={item.exact}
              path={item.path}
              element={
                <AppWrapper header={<Navbar />} sider={<AppSidebar />}>
                  <item.component {...item.customProps} />
                </AppWrapper>
              }
            />
          ))}
        </Routes>
      </Suspense>
    </>
  );
}

export default Authorized;
