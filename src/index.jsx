import React from "react";
import ReactDOM from "react-dom";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

// import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import InfiniteResults from "./pages/InfiniteResults";
import SearchChats from "./pages/SearchChats";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />

                <Route path="/login" element={<LoginPage />} />

                <Route path="/signup" element={<SignupPage />} />

                <Route path="/ir" element={<InfiniteResults />} />

                <Route exact path="/search/:id" element={<SearchChats />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
