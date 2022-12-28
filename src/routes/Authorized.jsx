import React, { Suspense } from "react";
import { Route } from "react-router-dom";
import { getRoutes } from "./mapping";

function Authorized() {
  const authorizedRoutes = getRoutes(true);
  return (
    <>
      <Suspense fallback={"Loading..."}>
        {authorizedRoutes.map((item, i) => (
          <Route
            key={i}
            exact={item.exact}
            path={item.path}
            element={<item.component {...item.customProps} />}
          />
        ))}
      </Suspense>
    </>
  );
}

export default Authorized;
