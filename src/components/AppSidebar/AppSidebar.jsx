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

const MenuOptions = [
  {
    key: "1",
    icon: <PieChartOutlined />,
    label: "Home",
    path: "/",
  },
  {
    key: "2",
    icon: <DesktopOutlined />,
    label: "About",
    path: "/about",
  },
  {
    key: "3",
    icon: <ContainerOutlined />,
    label: "Orders",
    path: "/orders",
  }
]

const AppSidebar = ({
  className,
  mode = "inline",
  theme = "light",
  defaultSelectedKeys,
  defaultOpenKeys,
  selectedKeys,
  openKeys,
  onClick,
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
      items={MenuOptions}
      onClick={handleClick}
      onOpenChange={handleOpenChange}
      selectedKeys={selectedKeys}
      openKeys={openKeys}
      {...rest}
    />
  );
};

export default AppSidebar;
