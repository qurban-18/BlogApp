import React, { useState } from "react";
import axios from "axios";
import "./Blog.css";
import Nav from "../Navbar/Nav";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Blog() {
  const localData = JSON.parse(localStorage.getItem("userData"));
  const [data, setdata] = useState({
    Creator: localData.FirstName,
    Title: "",
    Message: "",
    UserId: localData._id,
  });
  function onHandleChange(e) {
    setdata({ ...data, [e.target.placeholder]: e.target.value });
  }
  function onHandleClick() {
    axios
      .post("http://localhost:3500/post", data)
      .then((res) => console.log(res.data, "datarecieved"));
  }

  return (
    <>
      <Nav />
      <div className="container-fluid blog_container">
        <div className="row d-flex p-5 justify-content-around align-items-center form_blog_container">
          <div className="col-lg-5 col-md-10 p-5 form_container">
            <h5 className="text-center mb-3">Creating a Blog</h5>
            <form className="d-flex flex-column">
              <input
                onChange={onHandleChange}
                type="text"
                value={data.Title}
                className="form-control form-control mt-3"
                placeholder="Title"
                required
              />
              <textarea
                rows="7"
                value={data.Message}
                onChange={onHandleChange}
                placeholder="Message"
                style={{ border: "none", outline: "none" }}
                className="form-control mt-3"
                required
              />

              <Button
                // type="submit"
                onClick={onHandleClick}
                type="primary"
                size="large"
                className="mt-4"
              >
                <Link to="/" style={{ textDecoration: "none" }}>
                  Create
                </Link>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
