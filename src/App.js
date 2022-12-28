import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./global.css";
import "antd/dist/reset.css";
import { ConfigProvider } from "antd";
import UnauthorizedPages from "./routes/Unauthorized";
import AuthorizedPages from "./routes/Authorized";

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
      colorPrimary: "#1890ff", // primary color for all antd components
    },
  },
  virtual: false,
});

const user = localStorage.getItem("user");

function App() {
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    if (user) {
      setAuthorized(true);
    } else {
      setAuthorized(false);
    }
  }, [user]);

  return (
    <BrowserRouter>
      {authorized ? <AuthorizedPages /> : <UnauthorizedPages />}
    </BrowserRouter>
  );
}

export default App;
