import React from "react";

import InputGroup from "../components/InputGroup";
import Input from "../components/Input";
import Button from "../components/Button";
import { ThemeProvider } from "styled-components";
import { Header } from "../components/Header";
// import { Container } from "../components/styles/Container.styled";

import { Link } from "react-router-dom";
import { EntryPage } from "./style";
import EntryCard from "../components/EntryCard";
// import EntryCard from "../components/EntryCard/EntryCard";
import GlobalStyles from "../components/styles/GlobalStyles";
const theme = {
    colors: {
        header: "#000",
        body: "#145",
        footer: "#003333",
    },
};
function Login() {
    return (
        // <ThemeProvider theme={theme}>
        //     <>
        //         <GlobalStyles />
        //         <Header />
        //         {/* <Navbar /> */}
        //         {/* <Route__List /> */}
        //         {/* <Container class="container" */}
        //         <Container>
        //             {/* <Route__List /> */}
        //             {/* <Header /> */}
        //             {/* <h1>Login page</h1>
        //              */}
        //         </Container>
        //     </>
        // </ThemeProvider>
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles />
                <Header />
                <EntryPage>
                    {/* <PageHeader to="/"> AWESOME LOGO</PageHeader> */}
                    <EntryCard>
                        <h2>Log in</h2>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <InputGroup>
                                <label htmlFor="login-username"></label>
                                <Input
                                    type="text"
                                    placeholder="username"
                                    id="login-username"
                                ></Input>
                            </InputGroup>
                            <InputGroup>
                                <label htmlFor="login-password"></label>
                                <Input
                                    type="text"
                                    placeholder="password"
                                    id="login-password"
                                ></Input>
                            </InputGroup>
                            <Button type="submit">Log in </Button>
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
