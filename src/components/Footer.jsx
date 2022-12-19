import React from 'react';
import {StyledFooter,StyledFooterToHome} from "./styles/Footer.styled";

// export const Footer = () => {
//   return (
 
//   );
// };

// import React from 'react'

const Footer = () => {
  return (
    <StyledFooter>
    <h5 style={{color: 'black'}} className="card-title">You have Reached The End</h5>
    <br></br>
    <StyledFooterToHome href="#">Back To Top</StyledFooterToHome>
    <br></br>
    <footer style={{color: 'black',marginTop:"10px",cursor: 'pointer'}}>&copy; Copyright 2022 ComFeed.Com</footer>
  </StyledFooter>

  )
}

export default Footer


