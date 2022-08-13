import styled from "styled-components";

export const StyledShare = styled.div`
    width: 90%;
    height: 250px;
    padding: 10px;
    border-radius: 10px;
    margin: auto;
    background-color: #f6f6f8;
    -webkit-box-shadow: -3px 6px 11px -7px rgba(0, 0, 0, 1);
    -moz-box-shadow: -3px 6px 11px -7px rgba(0, 0, 0, 1);
    box-shadow: -3px 6px 11px -7px rgba(0, 0, 0, 1);
    margin-top: 20px;
`;

export const StyledTop = styled.div`
    max-width: 220px;
    padding: 3px;
    margin-bottom: 20px;
`;

export const StyledTopInput = styled.div`
    height: 30px;
    display: flex;
    padding: 3px;
    margin-top: 5px;
    justify-content: center;

    &:hover {
        background-color: lightblue;
        outline: none;
    }
`;
export const StyledBottom = styled.div`
    display: flex;
    margin-top: 10px;
    color: #1e90ff;
    align-items: center;
    justify-content: space-between;
`;
export const Tag = styled.div`
    display: flex;
    color: #1e90ff;
    align-items: center;
`;
