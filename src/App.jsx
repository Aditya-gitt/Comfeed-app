import { Header } from "./components/Header";
import { ThemeProvider } from "styled-components";
// import GlobalStyles from "./components/styles/GlobalStyles";
import InfiniteResults from "./pages/InfiniteResults";
import {
    Comrow,
    Leftcol,
    LeftContent,
    Middlecol,
    Rightcol,
    RightContent,
} from "./components/styles/Comstyles";
import Share from "./components/Share";
// import SearchChats from "./pages/SearchChats";
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
                {/* <GlobalStyles /> */}
                <Header />
                <div>
                    <Comrow>
                        <Leftcol>
                            <LeftContent></LeftContent>
                        </Leftcol>
                        <Middlecol>
                            <Share />
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
