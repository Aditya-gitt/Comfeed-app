import React from "react";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Container, ContainerUserName } from "./styles/Container.styled";
import { ContainerThreeDot } from "./styles/Container.styled";
import { ContainerTime } from "./styles/Container.styled";
import "./styles/result.css";

const Result = ({ feed }) => {
    return (
        <div>
            <Container>
                <AccountCircleIcon />
                <ContainerUserName>jerry</ContainerUserName>
                <ContainerTime>5 Min ago</ContainerTime>
                <ContainerThreeDot>
                    <MoreVertIcon />
                </ContainerThreeDot>
                <div>
                    <p>
                        <b>Title:</b> {feed.title}{" "}
                    </p>
                </div>
                {/* <span>
                    <b>Author:</b> {feed.author_id.name}{" "}
                </span> */}
                {/* <hr /> */}
            </Container>
        </div>
    );
};

export default Result;
