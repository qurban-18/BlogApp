import axios from "axios";
import React, { useEffect, useState } from "react";
import MyBlogPost from "../Components/blog-post/MyBlogPost";

export default function MyBlogs() {
  const localUserData = JSON.parse(localStorage.getItem("userData"));
  const [myBlogs, setMyBlogs] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost:3500/myblog", { _id: localUserData._id })
      .then((res) => setMyBlogs(res.data));
  }, []);
  return (
    <div className="container MyBlogPage">
      {myBlogs ? (
        myBlogs.map((e, i) => <MyBlogPost data={e} index={i} />)
      ) : (
        <></>
      )}
    </div>
  );
}
