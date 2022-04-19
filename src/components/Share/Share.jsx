import React from "react";
import { StyledShare } from "./style";
import { StyledTop } from "./style";
import { StyledBottom } from "./style";
import { StyledTopInput } from "./style";
import { Tag } from "./style";
import { Location } from "./style";
import { StyledButton } from "../Button/style";
import TagIcon from '@mui/icons-material/Tag';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Share() {
  return (
    <StyledShare>
      <StyledTop>
        <AccountCircleIcon/>
        <StyledTopInput>
        <input placeholder="Share your Experience.. " />
        </StyledTopInput>
      </StyledTop>
        <hr />
        <StyledBottom>
          <TagIcon/>
          <Tag>Tag</Tag>
          <LocationOnIcon/>
          <Location>Location</Location>
          <StyledButton type="submit">Share </StyledButton>
        </StyledBottom>
    </StyledShare>
  )
}
export default Share;