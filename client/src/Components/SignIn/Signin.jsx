import React, { useState } from "react";
import "./Signin.css";
import axios from "axios";
import { Form, Input, Button, Alert } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { NavLink } from "react-router-dom";
import Nav from "../Navbar/Nav";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { USER_LOGIN } from "../../redux/actions/index";

export default function SignIn() {
  const [value, setvalue] = useState("");
  const [a, seta] = useState(false);
  const [b, setb] = useState(false);
  const [c, setc] = useState(false);
  const history = useHistory();
  const onFinish = (values) => {
    // console.log('Received values of form: ', values);
  };
  const dispatch = useDispatch();
  function Login() {
    axios.post("http://localhost:3500/login", value).then((res) => {
      console.log(res.data.token);
      if (res.data.valid === true) {
        setc(true);
      }
      if (res.data.reg === true) {
        setb(true);
      }
      if (res.data.match === true) {
        seta(true);
      }
      if (res.data.login === true) {
        document.cookie = `auth=${res.data.token}`;
        localStorage.setItem("userData", JSON.stringify(res.data.userData));
        history.push("/about");
      }
    });
  }
  function onhandlechange(e) {
    setvalue({
      ...value,
      [e.target.placeholder]: e.target.value,
    });
  }
  const img = {
    height: "100px",
    width: "100px",
  };
  return (
    <>
      <Nav />
      {a ? (
        <Alert
          type="warning"
          message="Invalid Email or Password"
          showIcon
          closable
        />
      ) : (
        <></>
      )}
      {b ? (
        <Alert type="error" message="Register First!" showIcon closable />
      ) : (
        <></>
      )}
      {c ? (
        <Alert type="info" message="Fill the Fields" showIcon closable />
      ) : (
        <></>
      )}
      <div className="container-fluid p-5">
        <div className="row no-gutters d-flex justify-content-center login_fluid_container">
          <div className="col-lg-5 col-sm-11 border p-3">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-md-8 d-flex flex-column justify-content-center align-items-center">
                <img src="./img/login.png" alt="" className="" />
                <h3 className="text-center mt-2">Wellcome Back</h3>
                <p className="text-center">
                  To keep connected with us Please login with your info !
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-sm-11 login_container p-3">
            <div className="row d-flex justify-content-center">
              <div className="col-md-8 d-flex flex-column justify-content-center align-items-center">
                <img src="./img/user.png" alt="" className="mt-3" style={img} />
                <Form
                  name="normal_login"
                  className="login-form mt-4"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                >
                  <Form.Item
                    name="Email"
                    rules={[
                      { required: true, message: "Please input your Email!" },
                    ]}
                  >
                    <Input
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      onChange={onhandlechange}
                      placeholder="Email"
                    />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Password!",
                      },
                    ]}
                  >
                    <Input
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      placeholder="Password"
                      onChange={onhandlechange}
                    />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      onClick={Login}
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                      style={{ width: "100%", height: "35px" }}
                    >
                      Log in
                    </Button>
                  </Form.Item>
                  <Form.Item>
                    Or <NavLink to="/up">Register now!</NavLink>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
