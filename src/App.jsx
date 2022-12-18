import { Header } from "./components/Header";
import { ThemeProvider } from "styled-components";
// import GlobalStyles from "./components/styles/GlobalStyles";
import SearchBar from "./components/Share/SearchBar";
import InfiniteResults from "./pages/InfiniteResults";
import LeftContent from "./pages/LeftContent";
import RightContent from "./pages/RightContent";
import {
    Comrow,
    Leftcol,
    Middlecol,
    Rightcol,
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
                <Header />
                <div>
                    <Comrow>
                        <Leftcol>
                            <LeftContent/>
                        </Leftcol>
                        <Middlecol>
                            <Share />
                            <InfiniteResults/>
                        </Middlecol>
                        <Rightcol>
                            <RightContent/>
                        </Rightcol>
                    </Comrow>
                </div>
            </>
        </ThemeProvider>
    );
}

export default App;
