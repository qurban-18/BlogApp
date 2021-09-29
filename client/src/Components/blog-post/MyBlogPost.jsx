import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button } from "antd";
import "./blogpost.css";
import { Skeleton } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BLOG_ID } from "../../redux/actions";
import { BsEyeFill } from "react-icons/bs";

export default function MyBlogPost({ data, index }) {
  const localUserData = JSON.parse(localStorage.getItem("userData"));

  const dispatch = useDispatch();
  const img =
    "http://c.files.bbci.co.uk/C870/production/_112921315_gettyimages-876284806.jpg";

  function onDel(e) {
    let a = data[e];
    axios
      .post("http://localhost:3500/del", a)
      .then((res) => console.log(res.data));
  }
  const onRead = (e, i) => {
    dispatch(BLOG_ID(data[i]._id));
    localStorage.setItem("readPost", JSON.stringify(e));
    axios.post("http://localhost:3500/view", {
      Views: e.Views + 1,
      _id: e._id,
    });
  };

  return (
    <>
      <div className="container g-0 p-3 BlogPost" key={index}>
        <div className="row g-0">
          <div className="col-lg-4 col-md-3 no-gutters blogpost_left">
            <p className="blogpost_authername">
              Author: <span>{data.Creator}</span>
            </p>
            <img src={img} alt="blog img" />
          </div>
          <div className="col-lg-8 p-2">
            <div className="row">
              <div className="col-lg-12 d-flex justify-content-between">
                <h4>{data.Title}</h4>
                {localUserData._id == data.UserId ? (
                  <Button danger ghost onClick={() => onDel(index)}>
                    Delete
                  </Button>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <p>{data.Message}...</p>
            <div className="container-fluid blogpost_bottom">
              <Link style={{ textDecoration: "none" }} to="/read">
                <Button
                  type="ghost"
                  onClick={() => {
                    onRead(data, index);
                  }}
                >
                  Read
                </Button>
              </Link>
              <p className="m-0 blogpost_date">
                {new Date(data.Date).toDateString()}&nbsp;&nbsp;
                <span>
                  <BsEyeFill /> {data.Views}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <Skeleton active />
      <Skeleton active />
      <Skeleton active /> */}
    </>
  );
}
