import styled from "styled-components";
import { Link } from "react-router-dom";

export const EntryPage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: coloumn;
    min-height: 100vh;
    // background-color: #fbfbfb;
    // margin: auto !important;
    // color: red;

    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
        url("https://wallpaperaccess.com/full/701802.jpg");

    background-size: contain;
    // background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    background-attachment: fixed;
`;

export const PageHeader = styled(Link)`
    font-size: 2rem;
    font-weight: 600;
    margin: 40px 0;
    color: inherit;
`;
