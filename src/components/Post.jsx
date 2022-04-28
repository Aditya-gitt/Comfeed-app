// import React, { useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Container, ContainerUserName } from "./styles/Container.styled";
// import { ContainerThreeDot } from "./styles/Container.styled";
import { ContainerTime } from "./styles/Container.styled";
// import { author } from "../pages/Login";
export default function Post({ feed }) {
    return (
        <>
            <Container>
                <AccountCircleIcon />
                <ContainerUserName>{feed.author_id}</ContainerUserName>
                <ContainerTime>5 Min ago</ContainerTime>
                {/* <ContainerThreeDot>
                    <MoreVertIcon />
                </ContainerThreeDot> */}
                {/* <p>{items}</p> */}
                <span>
                    <b>Title:</b> {feed.title}{" "}
                </span>
                <br />
                <span>
                    <b>feed:</b> {feed.feed}{" "}
                </span>
                <br />
                <span>
                    <b>date:</b> {feed.date}{" "}
                </span>
                <span>
                    <b>time:</b> {feed.time}{" "}
                </span>
                <br />
                <span>
                    tags:
                    {/* <b>tags:</b> */}
                    {feed.tags.map((tag) => (
                        // <b>{tag}</b>
                        <p>#{tag}</p>
                    ))}
                </span>
                <br />
                <span>
                    <b>upvotes</b> {feed.upvotes}{" "}
                </span>
                <span>
                    <b>downvotes</b> {feed.downvotes}{" "}
                </span>
                <span>
                    <b>feed type</b> {feed.feed_type}{" "}
                </span>
            </Container>
        </>
    );
}
