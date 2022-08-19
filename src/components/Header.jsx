// src/components/header.tsx
/* eslint-disable jsx-a11y/anchor-is-valid */
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import VueInitialsImg from 'vue-initials-img';
// Vue.use(VueInitialsImg);
import Avatar from 'react-avatar';
import LetteredAvatar from 'react-lettered-avatar';

import { StyledHeader, NavItemLink,StyledLetterIcon } from "./styles/Header.styled";
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
  const arrayWithColors = [
    '#2ecc71',
    '#3498db',
    '#8e44ad',
    '#e67e22',
    '#e74c3c',
    '#1abc9c',
    '#2c3e50'
];

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
            <Link to="/login">
                <StyledLetterIcon>
                <Avatar name={Username} size={52} round="29px" 
                color={Avatar.getRandomColor('sitebase', ['#d19fe8', '##99e6b3', '#ff6347'])} />
                </StyledLetterIcon>
            </Link>
        </StyledHeader>
    );
};
