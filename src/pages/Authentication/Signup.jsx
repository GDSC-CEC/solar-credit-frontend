import React from "react";
import { Row, Col } from "antd";
import SignupForm from "../../components/AuthForms/SignupForm";

const Signup = () => {
  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <Col span={16}>
        <SignupForm />
      </Col>
    </Row>
  );
};

export default Signup;
