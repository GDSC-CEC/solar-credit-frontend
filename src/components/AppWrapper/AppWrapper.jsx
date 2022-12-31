import React from "react";
import { Layout } from "antd";

const { Header, Content } = Layout;

const AppWrapper = ({ children, header }) => {
  return (
    <Layout
      style={{
        height: "100vh",
      }}
    >
      <Header
        className="p-0"
        style={{
          zIndex: 3,
        }}
      >{header}</Header>
      <Layout>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default AppWrapper;
