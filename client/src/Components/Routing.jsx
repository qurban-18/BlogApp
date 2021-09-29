import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import SignIn from "./SignIn/Signin";
import SignUp from "./SignUp/Signup";
import About from "./About/About";
import CreateBlog from "./Blog/Blog";
import ReadPost from "./ReadPost/ReadPost";
import Contact from "./Contact/Contact";
export default function Routing() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/in">
          <SignIn />
        </Route>
        <Route path="/up">
          <SignUp />
        </Route>
        <Route path="/blog">
          <CreateBlog />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/read">
          <ReadPost />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
