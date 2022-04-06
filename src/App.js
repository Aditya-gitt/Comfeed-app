import { Header } from "./components/Header";
// import { Footer } from "./Components/Footer";
import { ThemeProvider } from "styled-components";
import { Container } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/GlobalStyles";

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
                <Container>
                    <h1>app page</h1>
                </Container>
            </>
        </ThemeProvider>
    );
}

export default App;
