import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ContainerUserName } from "./styles/Container.styled";
import { ContainerThreeDot } from "./styles/Container.styled";
import { ContainerTime } from "./styles/Container.styled";

export default function Post() {
    return(
        <>
        <AccountCircleIcon/>
        <ContainerUserName>jerry</ContainerUserName>
        <ContainerTime>5 Min ago</ContainerTime>
        <ContainerThreeDot>
        <MoreVertIcon/>
        </ContainerThreeDot>
        </>
    ) 
}
