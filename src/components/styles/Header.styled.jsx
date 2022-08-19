import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
export const StyledHeader = styled.header`
    background-color: ${({ theme }) => theme.colors.header};
    padding: 0px 10px;
    color: white;
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: 3px solid grey;
    justify-content: flex-end;

    // margin-right: 20px;
    // justify-content: auto;

    img {
        color: white;
        // outline: 3px solid red;
        // border-color: green;
        border: 3px solid;
        border-radius: 15px;
        position: relative;
        max-height: 60px;
        margin-top: 6px;
        margin-right: 20px;
        background-color: white;

        // top: 5px;
        // margin-left: 1%;
        // left: 0%;
    }
    h1 {
        position: relative;
        margin-right: auto;

        // justify-content: auto;
        // display: block;
        // position: absolute;
        // color: white;
        // margin-left: 2%;
        // text-align: center;
        // position: absolute;
        // left: 45%;
        // top: 10px;
        // max-height: 12%;
        // margin-left: 1%;
        // background-color: white;
    }
    span {
        margin-right: 10px;
        margin-left: 10px;
        position: absolute;
        right: 0%;
        top: 10px;
        color: white;
        // top: 2%;
    }
`;

export const NavItemLink = styled(Link)`
    color: inherit;
    margin-left: 16px;
    margin-right: 16px;
    // padding: 8px 16px;
    background-size: auto;
    // position: center;
    max-height: 100%;
    padding: 7px 10px;
    // new
    position: realative;
    ${(props) =>
        props.$fill &&
        css`
            margin-right: 70px;
            right: 10%;
            border-radius: 4px;
            background-color: #2f8bfd;
            transition: background-color 0.2s;
            &:hover {
                background-color: #0072ff;
            }
        `};
`;
export const StyledLetterIcon = styled.span`
`;
