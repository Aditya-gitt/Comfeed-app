import styled from "styled-components";

export const Container = styled.div`
    font-size: 19px;
    align-items: center;
    width: 90%;
    text-align: left;
    min-height: 150px;
    padding: 15px 15px;
    margin-right: auto;
    margin-left: auto;
    backdrop-filter: blur(7px);
    margin-top: 20px;
    -webkit-box-shadow: -3px 6px 11px -7px rgba(0, 0, 0, 1);
    -moz-box-shadow: -3px 6px 11px -7px rgba(0, 0, 0, 1);
    box-shadow: -3px 6px 11px -7px rgba(0, 0, 0, 1);
    &::after {
        content: "";
        display: table;
        clear: both;
    }
`;

export const ContainerUserName = styled.div`
    color: grey;
    font-size: 18px;
    margin-top: 0px;
    margin-left: 10px;
`;
export const ContainerTime = styled.span`
    margin-left: 20px;
    color: gray;
    font-size: 18px;
`;
export const ContainerThreeDot = styled.div`
    margin-left: 235px;
`;
export const ContainerTitle = styled.div`
    font-size: 30px;
    padding-left: 10px;
    font-weight: bold;
    margin-top: 5px;
`;

export const Containerfeed = styled.div`
    float: left;
    width: 85%;
    // font-size: 25px;
    padding-left: 10px;
    padding-right: 30px;
`;
export const Containertags = styled.button`
    font-size: 15px;
    padding: 6px;
    padding-top: 3px;
    padding-bottom: 3px;
    margin: 10px;
    background-color: lightblue;
    border-radius: 40px;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.24);
    curson: pointer:
    transition: 0.1s all;
    &:active{
        transform: scale(0.95);
        box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.24);
    }
`;

export const Containervotes = styled.div`
    margin-top: 5px;
    margin-bottom: 5px;
    float: left;
    width: 15%;
    min-width: 50px;
    font-size: 25px;
    text-align: center;
`;

export const FeedDetail = styled.div`
    font-size: 18px;
    margin-left: 10px;
`;
