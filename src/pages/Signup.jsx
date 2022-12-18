import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useNavigate } from "react-router-dom";
import Comfeed__logo from "../Photos/Comfeed__logo.png";

import axiosInstance from "../axios";
import InputGroup from "../components/InputGroup";
import Input from "../components/Input";
import Button from "../components/Button";
import { Header } from "../components/Header";
import EntryCard from "../components/EntryCard";
import { EntryPage } from "./style";

const theme = {
    colors: {
        header: "#000",
        body: "#145",
        footer: "#003333",
    },
};

function Signup() {
    const navigate = new useNavigate();
    const initialFormData = {
        username: "",
        password: "",
    };

    const [formData, updateFormData] = useState(initialFormData);
    const [loading, loadingState] = useState(false);

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
            .post(`user/register/`, {
                username: formData.username,
                password: formData.password,
            })
            .then((response) => {
                loadingState(false);
                console.log(response);
                console.log(response.data);
                // alert("Account Created successfully.");
                navigate("/login");
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
                    {/* <PageHeader to="/"> AWESOME LOGO</PageHeader> */}
                    <EntryCard>
                        <p className="fw-bold text-uppercase mb-5" style={{
                        fontFamily: "Unbounded,cursive",
                        fontSize:'28px'}}>Sign up</p>

                        <form onSubmit={handleSubmit}>
                            <InputGroup>
                                <label htmlFor="Signup-username"></label>
                                <Input
                                    type="text"
                                    required
                                    placeholder="Username"
                                    id="Signup-username"
                                    name="username"
                                    onChange={handleChange}
                                ></Input>
                            </InputGroup>

                            <InputGroup>
                                <label htmlFor="Signup-password"></label>
                                <Input
                                    required
                                    placeholder="Password"
                                    id="Signup-password"
                                    name="password"
                                    type="password"
                                    onChange={handleChange}
                                ></Input>
                            </InputGroup>

                            {loading ? (
                                <Button>Loading... </Button>
                            ) : (
                                <Button type="submit">Sign Up </Button>
                            )}
                        </form>

                        <span style={{fontSize:"18px"}}>
                            Already have a account?
                            <Link to="/login">Log in</Link>
                        </span>
                    </EntryCard>
                </EntryPage>
             </div>
           </div>
         </>
       </ThemeProvider>
    );
}

export default Signup;
