import styled from "styled-components";

export const Comrow = styled.div`
    // margin-top: 60px;
    // background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
    backdrop-filter: blur(7px);
    &::after {
        content: "";
        display: table;
        clear: both;
    }
`;

export const Comcol = styled.div`
    float: left;
    padding: 10px;
`;
export const Leftcol = styled.div`
    float: left;
    min-width: 25%;
    border-top: 2px solid grey;
    min-height: 100vh;
    // background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
    // backdrop-filter: blur(7px);
`;
export const Rightcol = styled.div`
    border-top: 2px solid grey;
    float: left;
    min-width: 25%;
    min-height: 100vh;
    // background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
    // backdrop-filter: blur(7px);
`;
export const Middlecol = styled.div`
    min-width: 400px;
    // background: linear-gradient(rgba(9, 0, 0, 0.8), rgba(9, 0, 0, 0.8));
    // backdrop-filter: blur(100px);
    float: left;
    width: 50%;
    border: 1px solid grey;
`;

export const LeftContent = styled.div`
    margin-left: 40%;
`;

export const RightContent = styled.div`
    margin-left: 10%;
`;
export const MiddleContent = styled.div`
    margin-left: 10%;
`;
