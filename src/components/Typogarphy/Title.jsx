import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

const AppTitle = ({ children, ...rest }) => {
  return <Title {...rest}>{children}</Title>;
};

export default AppTitle;
