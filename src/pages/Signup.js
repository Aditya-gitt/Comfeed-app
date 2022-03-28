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
function Signup() {
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
        //             {/* <h1>Signup page</h1>
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
                                <label htmlFor="Signup-username"></label>
                                <Input
                                    type="text"
                                    placeholder="username"
                                    id="Signup-username"
                                ></Input>
                            </InputGroup>
                            <InputGroup>
                                <label htmlFor="Signup-password"></label>
                                <Input
                                    type="text"
                                    placeholder="password"
                                    id="Signup-password"
                                ></Input>
                            </InputGroup>
                            <Button type="submit">Sign Up </Button>
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
