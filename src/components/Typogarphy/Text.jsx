import React from "react";
import { Typography } from "antd";

const { Text } = Typography;

const AppText = ({ children, ...rest }) => {
  return <Text {...rest}>{children}</Text>;
};

export default AppText;
