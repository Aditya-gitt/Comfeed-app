import styled from "styled-components";

export const StyledShare = styled.div`
    width: 83%;
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


export const StyledTopSection = styled.div`
    height: 35px;
    display: flex;
    padding: 3px;
    margin-top: 5px;
    // justify-content: space-around;
`;
export const StyledFeedButton1 = styled.button`
    
   font-size: 15px;
   height:26px;
   width:75px;
    font-weight: bold;
    border:2px solid #7fff00;
  background-color: #7fff00;

  -webkit-box-shadow: -3px 6px 11px -7px rgba(0, 0, 0, 1);
    -moz-box-shadow: -3px 6px 11px -7px rgba(0, 0, 0, 1);
    box-shadow: -3px 6px 11px -7px rgba(0, 0, 0, 1);
    &:hover {
        // border:2px solid black;
        background-color: #00ff00;

     }
`;
export const StyledFeedButton2 = styled.button`
   font-size: 15px;
   width:75px;
   height:26px;

   font-weight: bold;

   border:2px solid #ff6347;
  background-color: #ff6347;
  
  -webkit-box-shadow: -3px 6px 11px -7px rgba(0, 0, 0, 1);
    -moz-box-shadow: -3px 6px 11px -7px rgba(0, 0, 0, 1);
    box-shadow: -3px 6px 11px -7px rgba(0, 0, 0, 1);
  &:hover {
    background-color: #ff4500;
   }
`;
export const StyledTopInputTitle = styled.input`
    font-size: 16px;
    text-indent: 8px;
   border: none;
   border-bottom: none;
   background-color: #f6f6f8;
    &:hover {
        background-color: lightblue;
       
    }
`;
export const StyledTopInput = styled.textarea`
    height: 80px;
    width:220%;
    display: flex;
    padding: 3px;
    margin-top: 20px;
    justify-content: center;
    font-size: 16px;
    // font-weight: bold;
    text-indent: 8px;
    border: none;
    box-sizing: border-box;
    resize: none;
    border-radius: 4px;
    background-color: #f6f6f8;
    &:hover {
        background-color: lightblue;
       
    }
`;
export const StyledInputTag = styled.input`
    height: 30px;
    font-size: 15px;
    // font-weight: bold;
    text-indent: 15px;
    border:none;
    border-bottom:1px solid;
    background-color: #f6f6f8;
    &:hover {
        background-color: lightblue;
        
        border:none;
    }
`;

export const StyledBottom = styled.div`
    display: flex;
    // margin-top: 10px;
    color: #1e90ff;
    align-items: center;
    justify-content: space-between;
`;
export const Tag = styled.div`
    display: flex;
    color: #1e90ff;
    align-items: center;
`;
export const SearchBox = styled.div`
display: flex;
margin:20px 20px;
justify-content: center;
height:40px;
width:50%;
`;

export const SearchInput = styled.input`
text-indent: 55px;
height:42px;
cursor: pointer;
border-radius: 20px;
border: none;
font-size: 14px;
font-weight: bold;
// position:fixed;

-webkit-box-shadow: -3px 6px 11px -7px rgba(0, 0, 0, 1);
-moz-box-shadow: -3px 6px 11px -7px rgba(0, 0, 0, 1);
box-shadow: -3px 6px 11px -7px rgba(0, 0, 0, 1);


&:hover{
    background-color:rgb(155, 215, 235);
    
}
`;
export const StyledFeedType = styled.button`
   font-size: 20px;
   color:#343434;
   font-weight: bold;
   border: none;
   background-color: transparent;	
   text-indent: -475px;
`;
export const StyledFeed = styled.div`
    display: flex;
    margin-left: 90%;
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