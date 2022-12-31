import React, { useEffect, useState } from "react";
import { Row, Col, List, message } from "antd";
import AppList from "../../components/AppList/AppList";
import Title from "../../components/Typogarphy/Title";
import FormInput from "../../components/FormItems/FormInput";
import Text from "../../components/Typogarphy/Text";
import { FileImageOutlined, DollarOutlined } from "@ant-design/icons";
import AppButton from "../../components/AppButton/AppButton";
import axios from "axios";
import { AUTH_USER, BASE_URL } from "../../constants/common.constants";
import { getItem } from "../../utils/hooks";
import PurchaseDrawer from "../../components/UserComps/PurchaseDrawer";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [drawerVisible, setDrawerVisible] = useState(false);

  const [user, setUser] = useState(null);

  useEffect(() => {
    let userObj = getItem(AUTH_USER);
    if (userObj) {
      setUser(userObj);
    }
  }, []);

  useEffect(() => {
    setLoading(true);
    getAllProducts().then(response => {
      if (response.data.success) {
        if (response.data.data.length > 0) {
          setProducts(response.data.data);
        } else {
          setProducts([]);
        }
      }
    }).finally(() => {
      setLoading(false);
    });
  }, []);

  async function getAllProducts() {
    return await axios.get(`${BASE_URL}/product`);
  }

  function handlePurchse(value = false) {
    setDrawerVisible(value);
  }
  return (
    <>
      <Row justify="center" align="middle">
        <Col xxl={14} xl={15} lg={16} md={20} span={22}>
          <AppList
            loading={loading}
            dataSource={products}
            renderItem={(item) => {
              return (
                <List.Item
                  className="flex-column align-items-end"
                  actions={user ? [
                    <FormInput
                      type="number"
                      placeholder="Quantity"
                      className="w-100"
                      value={quantity}
                      inputProps={{
                        min: 1,
                        max: item.qty_available,
                      }}
                      onChange={(e) => {
                        setQuantity(e.target.value);
                      }}
                      containerClassName="m-0"
                    />,
                    <AppButton
                      type="button"
                      className="w-100"
                      icon={<DollarOutlined />}
                      label="Buy"
                      onClick={() => {
                        if (quantity <= 0 || quantity > item.qty_available) {
                          message.error("Quantity is not avaible");
                        } else {
                          handlePurchse(true);
                        }
                      }}
                    />,
                  ] : []}
                >
                  <List.Item.Meta
                    className="w-100"
                    avatar={<FileImageOutlined />}
                    title={<Title level={5} className="fs-5">{item.name}</Title>}
                    description={
                      <>
                        <Row type="flex" align="middle" justify="start">
                          <Col span={8}>
                            <Text strong>Price: </Text>
                          </Col>
                          <Col span={10}>
                            <Text>{item.price}</Text>
                          </Col>
                          <Col span={8}>
                            <Text strong>Avaible Quantity: </Text>
                          </Col>
                          <Col span={10}>
                            <Text>{item.qty_available}</Text>
                          </Col>
                          <Col span={8}>
                            <Text strong>Power: </Text>
                          </Col>
                          <Col span={10}>
                            <Text>{item.power_generated}</Text>
                          </Col>
                          <Col span={8}>
                            <Text strong>Return Rate: </Text>
                          </Col>
                          <Col span={10}>
                            <Text>{item.return_percent} %</Text>
                          </Col>
                        </Row>
                      </>
                    }
                  />
                  <Title
                    level={5}
                    className="fs-6 mx-4 mt-2 fw-normal align-self-start"
                  >
                    <Text strong className="fs-6 me-2">
                      Description:
                    </Text>
                    {item.description}
                  </Title>
                </List.Item>
              );
            }}
          />
        </Col>
      </Row>
      {user && (quantity >= 0) && (
        <PurchaseDrawer
          visible={drawerVisible}
          onClose={() => handlePurchse(false)}
        />
      )}
    </>
  );
};

export default Products;
