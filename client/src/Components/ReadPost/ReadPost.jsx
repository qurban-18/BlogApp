import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { EDIT_BLOG } from "../../redux/actions";
import { useHistory } from "react-router";

export default function ReadPost() {
  const localUserData = JSON.parse(localStorage.getItem("userData"));
  const localPostData = JSON.parse(localStorage.getItem("readPost"));
  const [readdata, setreaddata] = useState({});
  const [c, setc] = useState({
    Title: localPostData.Title,
    Message: localPostData.Message,
    _id: localPostData._id,
  });
  const [form, setform] = useState(false);
  const blogId = useSelector((store) => store.blogId);
  const id = blogId;
  useEffect(() => {
    axios.post("http://localhost:3500/readpost", { blogId: id }).then((res) => {
      setreaddata(res.data);
    });
  }, []);
  const EditPost = () => {
    setform(true);
  };
  const history = useHistory();
  const Update = () => {
    axios
      .post("http://localhost:3500/update", c)
      .then((res) => console.log(res.data));

    history.push("/");
  };
  return (
    <div className="Read">
      <div className="container">
        <>
          <h2 className="my-2">{localPostData.Title}</h2>
          <p>{localPostData.Message}</p>
          {localUserData._id === localPostData.UserId ? (
            <Button onClick={EditPost}>Edit</Button>
          ) : (
            <></>
          )}
          {form == true ? (
            <div className="row d-flex justify-content-center p-3">
              <div className="col-lg-4 d-flex justify-content-center align-items-center border p-4">
                <form>
                  <input
                    type="text"
                    name="Title"
                    className="form-control form-control-sm"
                    value={c.Title}
                    onChange={(e) =>
                      setc({ ...c, [e.target.name]: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    name="Message"
                    className="form-control form-control-sm mt-3"
                    value={c.Message}
                    onChange={(e) =>
                      setc({ ...c, [e.target.name]: e.target.value })
                    }
                  />
                  <Button type="primary" className="mt-3" onClick={Update}>
                    Update
                  </Button>
                </form>
              </div>
            </div>
          ) : (
            <></>
          )}
        </>
      </div>
    </div>
  );
}
