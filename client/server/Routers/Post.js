import express from "express";
import {
  getPost,
  postData,
  delData,
  PostRegisterData,
  LoginUser,
  About,
  Logout,
  ReadPost,
  UpdatePost,
} from "../Controllers/Post.js";

const Router = express.Router();
Router.get("/", getPost);
Router.post("/post", postData);
Router.post("/del", delData);
Router.post("/register", PostRegisterData);
Router.post("/login", LoginUser);
Router.post("/about", About);
Router.post("/logout", Logout);
Router.post("/readpost", ReadPost);
Router.post("/update", UpdatePost);
export default Router;
