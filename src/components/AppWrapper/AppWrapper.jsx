import React from "react";
import { Layout } from "antd";

const { Header, Content, Sider } = Layout;

const AppWrapper = ({ children , header, sider}) => {
  return (
    <Layout
     style={{
      height: "100vh",
     }}
    >
      <Header
        className="p-0"
      >{header}</Header>
      <Layout>
        <Sider>{sider}</Sider>
        <Layout>
          <Content>{children}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AppWrapper;
