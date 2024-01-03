import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import "../Pages/CSS/Login.scss";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handlesubmit = () => {
    console.log("submit");
    navigate("/home");
    const setlogin = sessionStorage.setItem("islogedin" , true)
    console.log(sessionStorage.getItem("islogedin"))
  };

  return (
    <div className={`login-form ${sessionStorage.getItem("islogedin")}?'after-login':'login-page'`}>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <label>Username</label>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <label>Password</label>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
      </Form>
      <Button type="primary" htmlType="submit" onClick={handlesubmit}>
        Login
      </Button>
    </div>
  );
}

export default Login;
