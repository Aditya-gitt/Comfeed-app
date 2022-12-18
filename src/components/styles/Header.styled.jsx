import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
export const StyledHeader = styled.header`
    background-color: ${({ theme }) => theme.colors.header};
    // border-bottom: 0px solid white;
    border-bottom: 1px solid grey;
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
