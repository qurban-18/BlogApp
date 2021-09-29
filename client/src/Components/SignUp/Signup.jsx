import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import { Form, Input, Button, Result, Select } from "antd";
import axios from "axios";
import Nav from "../Navbar/Nav";
// import { Alert } from 'antd';
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 15 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
export default function SignUp() {
  const [inpval, setinpval] = useState("");
  const [pop, setpop] = useState(false);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    // console.log('Received values of form: ', values);
  };
  function onhandleclick() {
    axios.post("http://localhost:3500/register", inpval).then((res) => {
      console.log(res.data.reg);
      if (res.data.User === true) {
        alert("User Already Registered");
      }
      if (res.data.field === true) {
        alert("Fill The Fields");
      }
      if (res.data.reg === true) {
        setpop(true);
      }
    });
  }
  function onhandlechange(e) {
    setinpval({
      ...inpval,
      [e.target.placeholder]: e.target.value,
    });
  }

  console.log(inpval);
  const pop_up_style = {
    padding: "140px 150px",
    background: "whitesmoke",
    borderRadius: "10px",
    position: "absolute",
    top: "54%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    zIndex: "100",
  };

  return (
    <>
      <Nav />
      <div className="container-fluid p-5">
        <div className="row no-gutters d-flex justify-content-center">
          <div className="col-lg-5 col-sm-11  login-form-cont p-5">
            <Form
              className=" p-2 form"
              {...formItemLayout}
              form={form}
              name="register"
              onFinish={onFinish}
              initialValues={{
                residence: ["zhejiang", "hangzhou", "xihu"],
                prefix: "86",
              }}
              scrollToFirstError
            >
              <Form.Item
                name="FirstName"
                label="First Name"
                rules={[
                  {
                    required: true,
                    message: "Enter your first name",
                  },
                ]}
              >
                <Input
                  onChange={onhandlechange}
                  placeholder="FirstName"
                  // style={{ height: "32px", width: "50%" }}
                />
              </Form.Item>
              <Form.Item
                name="Last Name"
                label="Last Name"
                rules={[
                  {
                    required: true,
                    message: "Enter your last name",
                  },
                ]}
              >
                <Input
                  onChange={onhandlechange}
                  placeholder="LastName"
                  // style={{ height: "32px", width: "50%" }}
                />
              </Form.Item>
              <Form.Item
                name="email"
                label="E-mail"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                <Input
                  placeholder="Email"
                  onChange={onhandlechange}
                  // style={{ width: "50%" }}
                />
              </Form.Item>

              <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
                hasFeedback
              >
                <Input.Password
                  placeholder="Password"
                  onChange={onhandlechange}
                  // style={{ width: "50%" }}
                />
              </Form.Item>

              <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(" Passwords that you entered do not match!")
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  placeholder="ConfirmPassword"
                  onChange={onhandlechange}
                  // style={{ width: "50%" }}
                />
              </Form.Item>
              <Form.Item
                name="gender"
                label="Gender"
                rules={[{ required: true }]}
              >
                <Select
                  placeholder="Gender"
                  allowClear
                  onChange={(e) =>
                    setinpval({
                      ...inpval,
                      Gender: e,
                    })
                  }
                >
                  <Option name="male" value="male">
                    Male
                  </Option>
                  <Option name="male" value="female">
                    Female
                  </Option>
                  <Option name="male" value="other">
                    Other
                  </Option>
                </Select>
              </Form.Item>
              <Form.Item {...tailFormItemLayout}>
                <Button
                  type="primary"
                  htmlType="submit"
                  onClick={onhandleclick}
                >
                  Register
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className="col-lg-5 col-sm-11 border signup_content">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-md-8 d-flex flex-column justify-content-center align-items-center">
                <img src="./img/vector.png" alt="" className="" />
                <h3 className="text-center mt-2">Hello Friend</h3>
                <p className="text-center">
                  Enter your details and start journey with us !
                </p>
              </div>
            </div>
          </div>
        </div>
        {pop === true ? (
          <div style={pop_up_style}>
            <Result
              status="success"
              title="Register Successfully"
              extra={[
                <Link to="/in" style={{ textDecoration: "none" }}>
                  <Button type="primary">Ok</Button>
                </Link>,
              ]}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
