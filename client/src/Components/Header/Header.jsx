import React, { useState, useEffect } from "react";
import "./Header.css";
import BlogPost from "../BlogPost/BlogPost";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { READ_DATA } from "../../redux/actions";
export default function Header() {
  const [loading, setloading] = useState(false);
  const getData = useSelector((store) => store.blogData);
  console.log(getData);
  console.log(getData);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("http://localhost:3500")
      .then((res) => dispatch(READ_DATA(res.data)));
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 2000);
  }, []);
  return (
    <div className="Blogs">
      <div className="row d-flex justify-content-center g-0 mt-5">
        <div className="col-lg-7 col-sm-10 ">
          <BlogPost data={getData} />
        </div>
      </div>
    </div>
  );
}
