import { Header } from "./components/Header";
import  Feed  from "./components/Feed";
import  Post  from "./components/Post";
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
                <Feed/>
                    <Container>
                        <Post/>
                    </Container>
            </>
        </ThemeProvider>
    );
}

export default App;
