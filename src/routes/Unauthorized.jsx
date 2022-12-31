import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { getRoutes } from "./mapping";
import AppWrapper from "../components/AppWrapper/AppWrapper";
import Navbar from "../components/Navbar/Navbar";

function Unauthorized() {
  const unauthorizedRoutes = getRoutes(false);
  return (
    <Suspense fallback={"Loading..."}>
      <Routes>
        {unauthorizedRoutes.map((item, i) => (
          <Route
            key={i}
            exact={item.exact}
            path={item.path}
            element={
              <AppWrapper header={<Navbar />}>
              <item.component {...item.customProps} />
            </AppWrapper>
            }
          />
        ))}
      </Routes>
    </Suspense>
  );
}

export default Unauthorized;
