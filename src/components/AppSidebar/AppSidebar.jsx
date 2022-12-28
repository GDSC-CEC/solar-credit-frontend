import React from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const AppSidebar = ({
  className,
  mode = "inline",
  theme = "light",
  defaultSelectedKeys,
  defaultOpenKeys,
  selectedKeys,
  openKeys,
  onClick,
  items = [
    getItem("Option 1", "1", <PieChartOutlined />),
    getItem("Option 2", "2", <DesktopOutlined />),
    getItem("Option 3", "3", <ContainerOutlined />),
    getItem("Navigation One", "sub1", <MailOutlined />, [
      getItem("Option 5", "5"),
      getItem("Option 6", "6"),
      getItem("Option 7", "7"),
      getItem("Option 8", "8"),
    ]),
    getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
      getItem("Option 9", "9"),
      getItem("Option 10", "10"),
      getItem("Submenu", "sub3", null, [
        getItem("Option 11", "11"),
        getItem("Option 12", "12"),
      ]),
    ]),
  ],
  handleOpenChange,
  collapsed,
  onOpenChange,
  handleClick,
  children,
  ...rest
}) => {
  return (
    <Menu
      className={className}
      defaultSelectedKeys={defaultSelectedKeys}
      defaultOpenKeys={defaultOpenKeys}
      mode={mode}
      theme={theme}
      inlineCollapsed={collapsed}
      items={items}
      onClick={handleClick}
      onOpenChange={handleOpenChange}
      selectedKeys={selectedKeys}
      openKeys={openKeys}
      {...rest}
    />
  );
};

export default AppSidebar;
