import axios from "axios";
import React, { useEffect, useState } from "react";
import Nav from "../Navbar/Nav";
import { Link } from "react-router-dom";
import { Result, Button, Input } from "antd";
import "./About.css";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LoginOutlined,
} from "@ant-design/icons";
import HashLoader from "react-spinners/HashLoader";

export default function About() {
  const [data, setdata] = useState("");
  const [userVerify, setuserVerify] = useState("auth=");
  const [loading, setloading] = useState(false);

  const verify = () => {
    let cookieData = document.cookie;
    setuserVerify(cookieData);
    let a = cookieData.split("=");
    axios
      .post("http://localhost:3500/about", { Token: a[1] })
      .then((res) => setdata(res.data.data));
  };

  useEffect(() => {
    setloading(true);
    verify();
    setTimeout(() => {
      setloading(false);
    }, 2000);
  }, []);

  const pop_up_style = {
    height: "100vh",
    width: "100%",
    background: "lightgray",
    borderRadius: "10px",
    position: "absolute",
  };
  return (
    <>
      {userVerify === "auth=" ? (
        <div style={pop_up_style}>
          <Result
            status="warning"
            title="Please Login First!"
            style={{ marginTop: "180px" }}
            extra={[
              <Link to="/in" style={{ textDecoration: "none" }}>
                <Button type="primary">Ok</Button>
              </Link>,
            ]}
          />
        </div>
      ) : (
        <>
          <Nav />
          <div className="container mt-3">
            <div className="row d-flex justify-content-center no-gutters p-4 mt-3">
              <div className="col-lg-8">
                <div className="row p-3">
                  <div className="col-lg-7 d-flex align-items-center">
                    <div className="img_box">
                      <img src="./img/about.png " alt="" />
                    </div>
                    <div className="img_profile">
                      <h5>
                        {data.FirstName} <span>{data.LastName}</span>{" "}
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-10">
                    <div className="row d-flex justify-content-center align-items-center p-2">
                      <div className="col-lg-6">
                        <label htmlFor="Fname">FirstName</label>
                        <Input id="Fname" value={data.FirstName} readOnly />
                      </div>
                      <div className="col-lg-6">
                        <label htmlFor="Lname">LastName</label>
                        <Input id="Lname" value={data.LastName} readOnly />
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center align-items-center p-2">
                      <div className="col-lg-6">
                        <label htmlFor="Email">Email</label>
                        <Input id="Email" value={data.Email} readOnly />
                      </div>
                      <div className="col-lg-6">
                        <label htmlFor="Gender">Gender</label>
                        <Input id="Gender" value={data.Gender} readOnly />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {loading ? (
        <div className="loader">
          <HashLoader loading={loading} color="#E49C22" size={50} />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
