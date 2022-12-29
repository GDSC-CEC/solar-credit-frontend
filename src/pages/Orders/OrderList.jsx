import React from "react";
import { Row, Col, List } from "antd";
import AppList from "../../components/AppList/AppList";
import Title from "../../components/Typogarphy/Title";
import Text from "../../components/Typogarphy/Text";
import { FileImageOutlined } from "@ant-design/icons";
import { orders } from "../../data/order.data";

const Orders = () => {
  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <Col span={16}>
        <AppList
          dataSource={orders}
          renderItem={(item) => {
            return (
              <List.Item
                actions={[
                  <a key="list-loadmore-edit">edit</a>,
                  <a key="list-loadmore-more">more</a>,
                ]}
              >
                <List.Item.Meta
                  avatar={<FileImageOutlined />}
                  title={<Title level={4}>{item.name}</Title>}
                  description={
                    <>
                      <Row type="flex" align="middle" justify="center">
                        <Col span={8}>
                          <Text strong>Price: </Text>
                        </Col>
                        <Col span={10}>
                          <Text>{item.total_amount}</Text>
                        </Col>
                        <Col span={8}>
                          <Text strong>Quantity: </Text>
                        </Col>
                        <Col span={10}>
                          <Text>{item.qty}</Text>
                        </Col>
                        <Col span={8}>
                          <Text strong>Power: </Text>
                        </Col>
                        <Col span={10}>
                          <Text>{item.power}</Text>
                        </Col>
                        <Col span={8}>
                          <Text strong>Return % per Annum: </Text>
                        </Col>
                        <Col span={10}>
                          <Text>{item.return}</Text>
                        </Col>
                      </Row>
                    </>
                  }
                />
              </List.Item>
            );
          }}
        />
      </Col>
    </Row>
  );
};

export default Orders;
