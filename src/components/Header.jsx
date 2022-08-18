// src/components/header.tsx
/* eslint-disable jsx-a11y/anchor-is-valid */
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { StyledHeader, NavItemLink } from "./styles/Header.styled";
// import React from "react";
import Comfeed__logo from "../Photos/Comfeed__logo.png";
import { Link } from "react-router-dom";
import SearchBar from "./Share/SearchBar";
import React, { useEffect, useState } from "react";
export const Header = () => {
    const [Username, setUsername] = useState([]);

  useEffect(() => {
    const items = (localStorage.getItem("username"));
    if (items) {
        setUsername(items);
    }
  }, []);

    return (
        <StyledHeader>
            <Link to="/">
                <img src={Comfeed__logo} alt="logo" className="logo" />
            </Link>
            <h1>Comfeed </h1>
            {/* <h1>Comfeed </h1> */}
            <SearchBar/>
                {Username === null  ? <NavItemLink to="/login">Login</NavItemLink> : <NavItemLink to="/login">Logout</NavItemLink>}
            {/* <NavItemLink to="/login">Log in</NavItemLink> */}
            
            <NavItemLink to="/signup" $fill="true">
                Sign up
            </NavItemLink>
            {/* <span>{Username}</span> */}
            <Link to="/login">
                <span>
                    {/* <AccountCircleIcon style={{ fontSize: 50 }} /> */}
                    {Username}
                </span>
            </Link>
        </StyledHeader>
    );
};
