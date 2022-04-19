import styled from "styled-components";

export const StyledShare = styled.div`
    width: 450px;
    height: 190px;
    padding: 10px;
    border-radius: 10px;
    //background-color: #228B22;
    //box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    -webkit-box-shadow: -13px 6px 28px -7px rgba(0,0,0,1);
-moz-box-shadow: -13px 6px 28px -7px rgba(0,0,0,1);
box-shadow: -13px 6px 28px -7px rgba(0,0,0,1);

margin-left:35%;
margin-top:20px;
`;

export const StyledTop =styled.div`
display: flex;
padding: 3px;
margin-bottom: 65px;
//background-color: #E0FFFF;
// justify-content: space-around;
// flex-direction: left;
`

export const StyledTopInput =styled.div`
height: 39px;
display: flex;
padding: 3px;
margin: 2px 20px;
align-item: center;
// justify-content: space-around;
// flex-direction: left;

&:hover{
    background-color: lightblue;
    outline: none;
}
`
export const StyledBottom =styled.div`
display: flex;
margin-top: 20px;
color: #1E90FF;
align-items: center;
width:390px;
justify-content: space-between;
`
export const Tag =styled.div`
display: flex;
color: #1E90FF;
align-items: center;
width:90px;
`
export const Location =styled.div`
display: flex;
color: #1E90FF;
align-items: center;
width:150px;
`
