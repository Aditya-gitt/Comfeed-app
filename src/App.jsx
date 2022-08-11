import { Header } from "./components/Header";
import Feed from "./components/Feed";
// import Post from "./components/Post";
// import { Footer } from "./Components/Footer";
import { ThemeProvider } from "styled-components";
// import { Container } from "./components/styles/Container.styled";
// import { Container2 } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/GlobalStyles";

import InfiniteResults from "./pages/InfiniteResults";
import {
    Comrow,
    Leftcol,
    LeftContent,
    Middlecol,
    Rightcol,
    RightContent,
} from "./components/styles/Comstyles";
// import "./App.css";
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

                {/* <Container>
                    <Post />
                </Container> */}
                <div>
                    <Comrow>
                        <Leftcol>
                            <LeftContent></LeftContent>
                        </Leftcol>

                        <Middlecol>
                            <Feed />
                            <InfiniteResults></InfiniteResults>
                        </Middlecol>
                        <Rightcol>
                            <RightContent></RightContent>
                        </Rightcol>
                    </Comrow>
                </div>
                {/* <InfiniteResults></InfiniteResults> */}
            </>
        </ThemeProvider>
    );
}

export default App;
