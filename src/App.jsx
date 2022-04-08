import { Header } from "./components/Header";
// import { Footer } from "./Components/Footer";
import { ThemeProvider } from "styled-components";
import { Container } from "./components/styles/Container.styled";
import { Container2 } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/GlobalStyles";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
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
                <Container2>
                    <Container>
                        <h1>app page</h1>
                    </Container>
                    <Container>
                        {/* <h1>app page</h1> */}
                        {/* <Container> */}
                        {/* <h1>app page</h1>
                         */}
                        <h5>Red Square</h5>
                        {/* <h5>Red Square</h5> */}
                        <p>hello I had such and such experience there</p>
                        <p>tags</p>
                        <ThumbUpOffAltIcon></ThumbUpOffAltIcon>
                        <ThumbUpAltIcon></ThumbUpAltIcon>
                        <ThumbDownOffAltIcon></ThumbDownOffAltIcon>
                        <ThumbDownAltIcon></ThumbDownAltIcon>
                        {/* <ThumbUpOffAltIcon></ThumbUpOffAltIcon> */}
                        {/* </Container> */}
                    </Container>
                </Container2>
            </>
        </ThemeProvider>
    );
}

export default App;
