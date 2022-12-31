import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import AppButton from "../AppButton/AppButton";
import AppText from "../Typogarphy/Text";
import { cookie } from "../../utils/cookie";
import { AUTH_USER, USER_TOKEN } from "../../constants/common.constants";
import { getItem, removeItem } from "../../utils/hooks";
import { Popover, Row, Col, Divider, Avatar } from "antd";
import AppTitle from "../Typogarphy/Title";
import OrdersDrawer from "../UserComps/OrdersDrawer";


const NavBar = () => {
  const [user, setUser] = useState(null);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let userObj = getItem(AUTH_USER);
    if (userObj) {
      setUser(userObj);
    }
  }, []);

  function handleLogout() {
    cookie.remove(USER_TOKEN);
    removeItem(AUTH_USER);
    window.location.reload();
    navigate("/");
  };

  function handleOrders(visible = false) {
    setDrawerVisible(visible);
  };

  return (
    <>

      <nav className="navbar navbar-expand-lg bg-body-tertiary h-100">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Logo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              {user ? (
                <>
                  <li className="nav-item">
                    <AppButton
                      className="nav-link h-100"
                      onClick={() => handleOrders(true)}
                      label="Orders"
                      type="button"
                    />
                  </li>
                  <li className="nav-item">
                    <Popover
                      placement="bottomRight"
                      content={
                        <Row gutter={[20, 20]} align="middle" justify="center" type="flex">
                          <Col span={24}>
                            <AppTitle
                              level={4}
                            >
                              Hey, {user.name.toUpperCase()}
                              <Divider className="mb-1 mt-2" />
                              <AppText type="secondary">
                                {user.email}
                              </AppText>
                            </AppTitle>
                          </Col>
                          <Col span={24}>
                            <AppButton
                              className="nav-link h-100 text-white"
                              onClick={handleLogout}
                              label="Logout"
                            />
                          </Col>
                        </Row>
                      }
                      trigger={["click", "hover"]}
                    >
                      <Avatar
                        size={40}
                        src={"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}
                      />
                    </Popover>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/Signup">
                      Signup
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login">
                      Login
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      {user && (
        <OrdersDrawer
          visible={drawerVisible}
          onClose={() => handleOrders(false)}
        />
      )}
    </>
  );
};

export default NavBar;
