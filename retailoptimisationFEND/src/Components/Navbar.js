import React from "react";
import { Menu, Layout } from "antd";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;
function Navbar() {
  const navigate = useNavigate();
  return (
    <Layout>
      <Header style={{ backgroundColor: "white" }}>
        {sessionStorage.getItem("islogedin") ? (
          <div>
            <Menu
              theme="white"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              style={{ lineHeight: "64px" }}
            >
              <Menu.Item key="1" onClick={() => navigate("/home")}>
                Home
              </Menu.Item>
              <Menu.Item
                key="2"
                onClick={() => {
                  navigate("/overviewpage");
                }}
              >
                OverView
              </Menu.Item>
              <Menu.Item
                key="3"
                onClick={() => {
                  navigate("/");
                  sessionStorage.removeItem("islogedin");
                }}
              >
                back
              </Menu.Item>
            </Menu>
          </div>
        ) : (
          <div>
            <Menu
              theme="white"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              style={{ lineHeight: "64px" }}
            ></Menu>
          </div>
        )}
      </Header>
    </Layout>
  );
}

export default Navbar;
