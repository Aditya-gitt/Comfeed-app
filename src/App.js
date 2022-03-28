import "./App.css";

// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
// import { Footer } from "./Components/Footer";
import { ThemeProvider } from "styled-components";
import { Container } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/GlobalStyles";
// import Navbar from "./Components/Navbar";
// import Route__List from "./Route__List";

const theme = {
    colors: {
        header: "#000",
        body: "#fff",
        footer: "#003333",
    },
};

function App() {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles />
                <Header />
                {/* <Navbar /> */}
                {/* <Route__List /> */}
                {/* <Container class="container" */}
                <Container>
                    {/* <Route__List /> */}
                    {/* <Header /> */}
                    <h1>app page</h1>
                </Container>
            </>
        </ThemeProvider>
    );
}

export default App;
