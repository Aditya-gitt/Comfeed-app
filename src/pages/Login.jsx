import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import jwt_decode from "jwt-decode";

import axiosInstance from "../axios";
import { Header } from "../components/Header";
import EntryCard from "../components/EntryCard";
import InputGroup from "../components/InputGroup";
import Input from "../components/Input";
import Button from "../components/Button";
import GlobalStyles from "../components/styles/GlobalStyles";
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
                const author_id = jwt_decode(response.data.access).user_id;
                console.log(author_id);
                // setAuthor(author_id);
                axiosInstance.defaults.headers["Authorization"] =
                    "Bearer " + response.data.access;
                loadingState(false);
                alert("You are logined as " + formData.username);
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
                <GlobalStyles />

                <Header />

                <EntryPage>
                    <EntryCard>
                        <h2>Log in</h2>

                        <form onSubmit={handleSubmit}>
                            <InputGroup>
                                <label htmlFor="login-username"></label>
                                <Input
                                    type="text"
                                    required
                                    placeholder="username"
                                    id="login-username"
                                    name="username"
                                    onChange={handleChange}
                                ></Input>
                            </InputGroup>

                            <InputGroup>
                                <label htmlFor="login-password"></label>
                                <Input
                                    type="text"
                                    required
                                    placeholder="password"
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

                        <span>
                            Dont' have a account?
                            <Link to="/signup">Sign up</Link>
                        </span>
                    </EntryCard>
                </EntryPage>
            </>
        </ThemeProvider>
    );
}

export default Login;
