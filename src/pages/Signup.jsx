import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useNavigate } from "react-router-dom";

import axiosInstance from "../axios";
import InputGroup from "../components/InputGroup";
import Input from "../components/Input";
import Button from "../components/Button";
import { Header } from "../components/Header";
import EntryCard from "../components/EntryCard";
// import InputLabel from "@material-ui/core/InputLabel";
// import { Container } from "../components/styles/Container.styled";
// import EntryCard from "../components/EntryCard/EntryCard";
import GlobalStyles from "../components/styles/GlobalStyles";
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
                alert("Account Created successfully.");
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
                <GlobalStyles />

                <Header />

                <EntryPage>
                    {/* <PageHeader to="/"> AWESOME LOGO</PageHeader> */}
                    <EntryCard>
                        <h2>Sign up</h2>

                        <form onSubmit={handleSubmit}>
                            <InputGroup>
                                <label htmlFor="Signup-username"></label>
                                <Input
                                    type="text"
                                    required
                                    placeholder="username"
                                    id="Signup-username"
                                    name="username"
                                    onChange={handleChange}
                                ></Input>
                            </InputGroup>

                            <InputGroup>
                                <label htmlFor="Signup-password"></label>
                                <Input
                                    required
                                    placeholder="password"
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

                        <span>
                            Already have a account?
                            <Link to="/login">Log in</Link>
                        </span>
                    </EntryCard>
                </EntryPage>
            </>
        </ThemeProvider>
    );
}

export default Signup;
