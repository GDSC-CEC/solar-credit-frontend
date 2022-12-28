import React from "react";
import { Breadcrumb } from "antd";

const Navbar = ({ options }) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="">Application Center</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="">Application List</a>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default Navbar;
