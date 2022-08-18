import styled from "styled-components";

export const StyledButton = styled.button`
    // width: 64px;
    width: ${(props) => (props.full ? "100%" : null)}
    border: 0;
    border-radius: 25px;
    padding: 10px 29px;
    outline: none;
    background-color: #2f8bfd;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    line-height: 1.5;
    letter-spacing: 0.02857rem;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
        background-color: #0072ff;
        border: none
    }
`;
