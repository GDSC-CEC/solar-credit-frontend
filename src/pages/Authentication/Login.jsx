import React from "react";
import { Row, Col } from "antd";
import LoginForm from "../../components/AuthForms/LoginForm";

const Login = () => {
  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <Col span={16}>
        <LoginForm />
      </Col>
    </Row>
  );
};

export default Login;
