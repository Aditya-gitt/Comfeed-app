import styled from "styled-components";

export const StyledInput = styled.input`
    width: 100%;
    border: 1px solid #e0e6e8;
    border-radius: 4px;
    padding: 8px 16px;
    outline: none;
    color: #888888;
    font-size: 1rem;
    font-weight: 500;
    trnsition: box-shadow 0.2s;
    &::placeholder {
        color: #dedede;
    }
    &:focus {
        box-shadow: 0 0 0 2px rgb(169, 172, 255, 0.5);
    }
`;
