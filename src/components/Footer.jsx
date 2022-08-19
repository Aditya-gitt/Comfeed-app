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
    <h5 class="card-title">You have Reached The End</h5>
    <br></br>
    <StyledFooterToHome href="#">Home</StyledFooterToHome>
    <br></br>
    <footer>&copy; Copyright 2022 ComFeed.Com</footer>
  </StyledFooter>

  )
}

export default Footer


