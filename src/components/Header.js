// src/components/header.tsx
/* eslint-disable jsx-a11y/anchor-is-valid */
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { StyledHeader, NavItemLink } from "./styles/Header.styled";
import React from "react";
import Comfeed__logo from "../Photos/Comfeed__logo.png";
import { Outlet, Link } from "react-router-dom";
export const Header = () => {
    return (
        <StyledHeader>
            <Link to="/">
                <img src={Comfeed__logo} alt="logo" className="logo" />
            </Link>
            <h1>Comfeed</h1>
            <NavItemLink to="/login">Log in</NavItemLink>
            <NavItemLink to="/signup" $fill="true">
                Sign up
            </NavItemLink>
            <Link to="/login">
                <span>
                    <AccountCircleIcon style={{ fontSize: 50 }} />
                </span>
            </Link>
        </StyledHeader>
    );
};
