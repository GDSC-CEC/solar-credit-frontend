import React from "react";
import { Row, Col, Avatar } from "antd";
import Text from "../../components/Typogarphy/Text";
import { user } from "../../data/user.data";

const Profile = () => {
  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <Col span={10}>
        <Avatar
          size={64}
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
      </Col>
      <Col span={14}>
        <Row type="flex" align="middle" justify="center">
          <Col span={8}>
            <Text strong>Name: </Text>
          </Col>
          <Col span={10}>
            <Text>{user.name}</Text>
          </Col>
          <Col span={8}>
            <Text strong>Email: </Text>
          </Col>
          <Col span={10}>
            <Text>{user.email}</Text>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Profile;
