// src/components/header.tsx
/* eslint-disable jsx-a11y/anchor-is-valid */
// import VueInitialsImg from 'vue-initials-img';
// Vue.use(VueInitialsImg);
import Avatar from "react-avatar";

import {
  StyledHeader,
  NavItemLink,
  StyledLetterIcon,
} from "./styles/Header.styled";
import Comfeed__logo from "../Photos/Comfeed__logo.png";
import { Link } from "react-router-dom";
import SearchBar from "./Share/SearchBar";
import React, { useEffect, useState } from "react";
export const Header = () => {
  const [Username, setUsername] = useState([]);

  useEffect(() => {
    const items = localStorage.getItem("username");
    if (items) {
      setUsername(items);
    }
  }, []);
  const arrayWithColors = [
    "#2ecc71",
    "#3498db",
    "#8e44ad",
    "#e67e22",
    "#e74c3c",
    "#1abc9c",
    "#2c3e50",
  ];

  return (
    <>
    <StyledHeader>
          <div class="row">
            <div class="col-4" style={{display: 'flex',justifyContent:'left'}}>
              <a href="/">
                <img
                  src={Comfeed__logo}
                  alt="logo"
                  className="img-thumbnail navbar-brand p-0"
                  width="70"
                  height="40"
                  style={{ marginLeft: "10px", borderRadius: "15px",marginTop: "6px" }}
                />
              </a>
              <p
                  className="text-left"
                  style={{
                    marginLeft: "10px",
                    marginTop: "15px",
                    fontFamily: "Unbounded,cursive",
                    color: "White",
                    fontSize: "32px",
                  }}
                >
                  Comfeed
                </p>
            </div>
            <div class="col-4" style={{display: 'flex',padding: '0px 12px',justifyContent: 'center'}}>
              <SearchBar />
              </div>
              <div class="col-4" style={{display: 'flex',margin:"auto",justifyContent: 'right',paddingRight:"20px"}}>
              <div className="dropdown" style={{display: 'flex',}}>
                <a
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  style={{ margin: "6px" }}
                >
                  <Avatar
                    name={Username}
                    size={35}
                    round="35px"
                    color={Avatar.getRandomColor("sitebase", [
                      "#d19fe8",
                      "##99e6b3",
                      "#ff6347",
                    ])}
                  />
                </a>

                <ul className="dropdown-menu">
                  <li>
                    <Link to="/" className="btn" style={{ color: "black" }}>
                      Profile
                    </Link>
                  </li>
                  <li>
                    {Username === null ? (
                      <Link
                        to="/login"
                        className="btn"
                        style={{ color: "black" }}
                      >
                        Login
                      </Link>
                    ) : (
                      <Link
                        to="login"
                        className="btn"
                        style={{ color: "black" }}
                      >
                        Logout
                      </Link>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
    </StyledHeader>
    </>
  );
};
