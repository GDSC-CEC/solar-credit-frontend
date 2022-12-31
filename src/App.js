import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./global.css";
import "antd/dist/reset.css";
import { ConfigProvider } from "antd";
import UnauthorizedPages from "./routes/Unauthorized";
import AuthorizedPages from "./routes/Authorized";
import { cookie } from "./utils/cookie";
import { USER_TOKEN } from "./constants/common.constants";

ConfigProvider.config({
  autoInsertSpaceInButton: true,
  componentSize: "small",
  dropdownMatchSelectWidth: true,
  getPopupContainer: (triggerNode) => triggerNode.parentNode,
  space: {
    size: "small",
  },
  theme: {
    token: {
      colorPrimary: "#feb900", // primary color for all antd components
    },
  },
  virtual: false,
});

function App() {
  const [authorized, setAuthorized] = useState(false);

  useEffect(()=>{
    cookie.get(USER_TOKEN) && setAuthorized(true)
  })

  return (
    <BrowserRouter>
      {authorized ? <AuthorizedPages /> : <UnauthorizedPages />}
    </BrowserRouter>
  );
}

export default App;
