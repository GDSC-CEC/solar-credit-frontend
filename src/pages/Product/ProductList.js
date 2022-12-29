import React from "react";
import { Row, Col, List } from "antd";
import AppList from "../../components/AppList/AppList";
import Title from "../../components/Typogarphy/Title";
import Text from "../../components/Typogarphy/Text";
import { FileImageOutlined } from "@ant-design/icons";
import { product } from "../../data/product.data";

const Products = () => {
  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <Col span={16}>
        <AppList
          dataSource={product}
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
                          <Text>{item.amount}</Text>
                        </Col>
                        <Col span={8}>
                          <Text strong>Avaible Quantity: </Text>
                        </Col>
                        <Col span={10}>
                          <Text>{item.qty_available}</Text>
                        </Col>
                        <Col span={8}>
                          <Text strong>Description: </Text>
                        </Col>
                        <Col span={10}>
                          <Text>{item.description}</Text>
                        </Col>
                        <Col span={8}>
                          <Text strong>Power: </Text>
                        </Col>
                        <Col span={10}>
                          <Text>{item.power}</Text>
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

export default Products;
