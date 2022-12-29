import React from "react";
import { Typography } from "antd";

const { Paragarph } = Typography;

const AppParagarph = ({ children, ...rest }) => {
  return <Paragarph {...rest}>{children}</Paragarph>;
};

export default AppParagarph;
