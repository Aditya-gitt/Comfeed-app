import styled from "styled-components";
import { Link } from "react-router-dom";

export const EntryPage = styled.div`
    display: flex;
    // color: red;
    // margin: auto !important;
    align-items: center;
    flex-direction: coloumn;
    min-height: 100vh;
    background-color: #fbfbfb;
    justify-content: center;
`;

export const PageHeader = styled(Link)`
    font-size: 2rem;
    font-weight: 600;
    margin: 40px 0;
    color: inherit;
`;
