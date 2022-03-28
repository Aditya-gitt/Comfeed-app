import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import reportWebVitals from "./reportWebVitals";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import Route__List from "./Route__List";
ReactDOM.render(
    <React.StrictMode>
        {/* <App /> */}
        {/* <Route__List /> */}
        <BrowserRouter>
            <Routes>
                {/* <App /> */}
                <Route path="/" element={<App />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
