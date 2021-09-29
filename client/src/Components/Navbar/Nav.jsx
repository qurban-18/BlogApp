import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
export default function Nav() {
  const [cookie, setCookie] = useState("auth=");

  const checkCookie = () => {
    const token = document.cookie;
    setCookie(token);
  };
  console.log(cookie);

  useEffect(() => {
    checkCookie();
  }, []);

  function Logout() {
    document.cookie = `auth=`;
    localStorage.clear();
    axios
      .post("http://localhost:3500/logout")
      .then((res) => console.log(res.data));
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink style={{ textDecoration: "none" }} to="/">
          <a className="navbar-brand" href="true">
            Blog
          </a>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav mx-auto my-2 my-lg-0  navbar-nav-scroll">
            <li className="nav-item">
              <NavLink style={{ textDecoration: "none" }} to="/">
                <a className="nav-link" href="true" aria-current="page">
                  Home
                </a>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink style={{ textDecoration: "none" }} to="/about">
                <a href="true" className="nav-link">
                  Profile
                </a>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink style={{ textDecoration: "none" }} to="/blog">
                <a href="true" className="nav-link">
                  Create Blog
                </a>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink style={{ textDecoration: "none" }} to="/contact">
                <a href="true" className="nav-link">
                  Contact Us
                </a>
              </NavLink>
            </li>
          </ul>
          <div
            className="btn-group btn-group-sm"
            role="group"
            aria-label="Basic example"
          >
            {cookie === "auth=" ? (
              <>
                <button type="button" className="btn btn-secondary">
                  <NavLink
                    to="/in"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    Login
                  </NavLink>
                </button>
                <button type="button" className="btn btn-secondary">
                  <NavLink
                    to="/up"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    Register
                  </NavLink>
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={Logout}
                >
                  <NavLink
                    to="/in"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    Logout
                  </NavLink>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
