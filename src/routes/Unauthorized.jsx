import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { getRoutes } from "./mapping";

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
            element={<item.component {...item.customProps} />}
          />
        ))}
      </Routes>
    </Suspense>
  );
}

export default Unauthorized;
