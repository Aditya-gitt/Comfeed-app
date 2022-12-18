import styled from "styled-components";

export const StyledShare = styled.div`
  width: 83%;
  height: 250px;
  padding: 10px;
  border-radius: 10px;
  margin: auto;
//   background-color: #f6f6f8;
  background-color: white;
  -webkit-box-shadow: -3px 6px 11px -7px rgba(0, 0, 0, 1);
  -moz-box-shadow: -3px 6px 11px -7px rgba(0, 0, 0, 1);
  box-shadow: -3px 6px 11px -7px rgba(0, 0, 0, 1);
  margin-top: 20px;
`;

export const StyledTop = styled.div`
  // max-width: 220px;
  padding: 3px;
  margin-bottom: 5px;
`;

export const StyledTopSection = styled.div`
  height: 35px;
  // display: flex;
  // float: left;
  // width: 75%;
  padding: 3px;
  margin-top: 5px;
  // justify-content: space-around;
`;
export const StyledFeedButton1 = styled.button`
  font-size: 15px;
  height: 26px;
  width: 75px;
  font-weight: bold;
  border: 1px solid #7fff00;
  border-radius: 10px;
  background-color: rgba(200, 255, 200, 1);
  //   margin-right: 5px;

  //   -webkit-box-shadow: -3px 6px 11px -7px rgba(0, 0, 0, 1);
  //     -moz-box-shadow: -3px 6px 11px -7px rgba(0, 0, 0, 1);
  //     box-shadow: -3px 6px 11px -7px rgba(0, 0, 0, 1);
  &:hover {
    // border:2px solid black;
    background-color: #00ff00;
  }
`;
export const StyledFeedButton2 = styled.button`
  font-size: 15px;
  width: 75px;
  height: 26px;

  font-weight: bold;

  border: 1px solid #ff6347;
  border-radius: 10px;
  background-color: rgba(255, 200, 200, 1);

  //   -webkit-box-shadow: -3px 6px 11px -7px rgba(0, 0, 0, 1);
  //     -moz-box-shadow: -3px 6px 11px -7px rgba(0, 0, 0, 1);
  //     box-shadow: -3px 6px 11px -7px rgba(0, 0, 0, 1);
  &:hover {
    background-color: #ff4500;
  }
`;
export const StyledInputTitle = styled.input`
  font-size: 18px;
  text-indent: 10px;
  border: none;
  border-radius: 4px;
  background-color: white;
  &:focus {
    // bottom-border: 5px solid black;
    box-shadow: 0px 0px 2px black;
}
`;
export const StyledInputTextarea = styled.textarea`
  height: 90px;
  max-width: 100%;
  margin-top: 10px;
  font-size: 17px;
  text-indent: 10px;
  border: none;
  resize: none;
  border-radius: 8px;
  background-color: white;
  &:focus {
    // bottom-border: 5px solid black;
    box-shadow: 0px 0px 2px black;
}
`;
export const StyledInputTag = styled.input`
  height: 30px;
  font-size: 15px;
  // font-weight: bold;
  text-indent: 15px;
  border: none;
  // border-bottom:1px solid;
  background-color: #f6f6f8;
  &:hover {
    background-color: lightgrey;

    border: none;
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
  margin: 20px 20px;
  justify-content: center;
  height: 40px;
  width: 50%;
`;

export const SearchInput = styled.input`
  text-indent: 55px;
  height: 42px;
  cursor: pointer;
  border-radius: 20px;
  border: none;
  font-size: 14px;
  font-weight: bold;
  // position:fixed;

  -webkit-box-shadow: -3px 6px 11px -7px rgba(0, 0, 0, 1);
  -moz-box-shadow: -3px 6px 11px -7px rgba(0, 0, 0, 1);
  box-shadow: -3px 6px 11px -7px rgba(0, 0, 0, 1);

  &:hover {
    background-color: rgb(155, 215, 235);
  }
`;
export const StyledFeedType = styled.button`
  font-size: 20px;
  color: #343434;
  font-weight: bold;
  border: none;
  background-color: transparent;
  text-indent: -475px;
`;
export const StyledFeed = styled.div`
    // display: flex;
    // margin-left: 90%;
    float: left;
    padding: 10px;
    width: 35%
    min-width: 70px;
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
// export const TagsInput = styled.div`
//     // font-size: 15px;
//     // padding: 6px;
//     // padding-top: 3px;
//     // padding-bottom: 3px;
//     // margin: 10px;
//     // background-color: lightblue;
//     // border-radius: 40px;
//     // box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.24);
//     // curson: pointer:
//     // transition: 0.1s all;
//     // &:active{
//     //     transform: scale(0.95);
//     //     box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.24);
//     }
// `;
