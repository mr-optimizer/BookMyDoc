import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();

  const onFinish = async(value) => {
    try {
      const response = await axios.post("/api/user/register", value);
      if(response.data.success) {
        toast.success(response.data.message);
        toast("Redirecting to login page...");
        navigate("/login");
      }else{
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };
  return (
    <div className="authentication">
      <div className="authentication-form card">
        <h1 className="card-title">Nice To Meet You</h1>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Name" name="name">
            <Input placeholder="Full name" />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input placeholder="abcde@gmail.com" type="email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input placeholder="*************" type="password" />
          </Form.Item>
          <Button className="primary-button" htmlType="submit">
            Register
          </Button>
          <Link to="/login" className="anchor">
            Click here to login
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default Register;
