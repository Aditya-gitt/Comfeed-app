import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import jwt_decode from "jwt-decode";
import Comfeed__logo from "../Photos/Comfeed__logo.png";

import axiosInstance from "../axios";
import { Header } from "../components/Header";
import EntryCard from "../components/EntryCard";
import InputGroup from "../components/InputGroup";
import Input from "../components/Input";
import Button from "../components/Button";
// import GlobalStyles from "../components/styles/GlobalStyles";
// import { Container } from "../components/styles/Container.styled";
import { EntryPage } from "./style";

const theme = {
  colors: {
    header: "#000",
    body: "#145",
    footer: "#003333",
  },
};

// export const [author, setAuthor] = useState("");
function Login() {
  const navigate = new useNavigate();
  const initialFormData = {
    username: "",
    password: "",
  };

  const [formData, updateFormData] = useState(initialFormData);
  const [loading, loadingState] = useState(false);
  // const [author, setAuthor] = useState("");

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loadingState(true);

    axiosInstance
      .post(`api/token/`, {
        username: formData.username,
        password: formData.password,
      })
      .then((response) => {
        localStorage.setItem("access_token", response.data.access);
        localStorage.setItem("refresh_token", response.data.refresh);
        localStorage.setItem(
          "author_id",
          jwt_decode(response.data.access).user_id
        );
        localStorage.setItem(
          "username",
          jwt_decode(response.data.access).username
        );
        const author_id = jwt_decode(response.data.access).user_id;
        console.log(author_id);
        // console.log((localStorage.getItem("username")));

        // setAuthor(author_id);
        axiosInstance.defaults.headers["Authorization"] =
          "Bearer " + response.data.access;
        loadingState(false);
        // alert("You are logined as " + formData.username);
        navigate("/");
      })
      .catch((error) => {
        loadingState(false);
        const key = Object.keys(error.response.data)[0];
        alert(
          JSON.stringify(error.response.data[key])
            .replace(/"/g, "")
            .replace("[", "")
            .replace("]", "")
        );
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <div
          className=""
          style={{
            // backgroundImage: `linear-gradient(to top, #75c7ff, #75c7ff, #75c7ff, #75c7ff, #75c7ff)`,
            height: "100vh",
            width: "100%",
          }}
        >
          <div className="page-header">
            <div
              class="navbar navbar-inverse navbar-static-top bg-dark text-white w-30"
              style={{
                backgroundImage: `linear-gradient(to top, #000000, #000000, #000000, #000000, #000000)`,
              }}
            >
              <div class="row">
                <div class="col-sm-3">
                  <a href="/">
                    <img
                      src={Comfeed__logo}
                      alt="logo"
                      className="img-thumbnail navbar-brand p-0"
                      width="70"
                      height="40"
                      style={{marginLeft:"15px",borderRadius:"15px"}}
                    />
                  </a>
                </div>
                <div class="col-sm-9">
                  <div class="row">
                    <p
                      className="text-left"
                      style={{
                        margin:"auto",
                        fontFamily: "Unbounded,cursive",
                        color: "White",
                        fontSize:'32px'}}
                    >
                      Comfeed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <EntryPage>
              <EntryCard>
                <p className="fw-bold text-uppercase mb-5" style={{
                        fontFamily: "Unbounded,cursive",
                        fontSize:'28px'}}>Log in</p>
                <form onSubmit={handleSubmit}>
                  <InputGroup>
                    <label htmlFor="login-username"></label>
                    <Input
                      type="text"
                      required
                      placeholder="Username"
                      id="login-username"
                      name="username"
                      onChange={handleChange}
                    ></Input>
                  </InputGroup>

                  <InputGroup>
                    <label htmlFor="login-password"></label>
                    <Input
                      type="password"
                      required
                      placeholder="Password"
                      id="login-password"
                      name="password"
                      onChange={handleChange}
                    ></Input>
                  </InputGroup>

                  {loading ? (
                    <Button>Loading... </Button>
                  ) : (
                    <Button type="submit">Login</Button>
                  )}
                </form>

                <span style={{fontSize:"18px"}}>
                  Dont' have a account?
                  <Link to="/signup">Sign up</Link>
                </span>
              </EntryCard>
            </EntryPage>
          </div>
        </div>
      </>
    </ThemeProvider>
  );
}

export default Login;
