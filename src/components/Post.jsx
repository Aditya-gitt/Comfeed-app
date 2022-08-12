// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useEffect, useState } from "react";
import axiosInstance from "../axios";
import {
    Container,
    Containerfeed,
    Containertags,
    ContainerTitle,
    ContainerUserName,
    Containervotes,
    FeedDetail,
} from "./styles/Container.styled";
import { ContainerTime } from "./styles/Container.styled";
import moment from "moment";
// import ThumbUpOffAlt from "@mui/icons-material/ThumbUpOffAlt";
// import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
// import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
// import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
// import IconButton from "@mui/material/IconButton";
import { Button } from "@mui/material";
// import ThumbUpAlt from "@mui/icons-material/ThumbUpAlt";
// import ThumbDownAlt from "@mui/icons-material/ThumbDownAlt";
// import ThumbDownOffAlt from "@mui/icons-material/ThumbDownOffAlt";
// import React, { useEffect, useState } from "react";
// import { ContainerThreeDot } from "./styles/Container.styled";
// import { author } from "../pages/Login";

export default function Post({ feed }) {
    const [changedata, setchange] = useState(feed.vote);
    const [items, setItems] = useState([]);
    // const [chatID, setchatID] = useState(1);
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("author_id"));
        if (items) {
            setItems(items);
        }
    }, []);

    const initialFormData = {
        // chatID: "",
        author_id: items,
    };

    const [formData, updateFormData] = useState(initialFormData);
    const [loading, loadingState] = useState(false);
    // setchange(feed.vote);
    const handleUpvote = (e) => {
        if (changedata == 1) setchange(0);
        else setchange(1);
        e.preventDefault();
        loadingState(true);
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        });

        axiosInstance
            .post(`http://127.0.0.1:8000/chat/upvote/`, {
                author_id: items,
                // tags: formData.tags.split(","),
                chat_id: feed.chat_id,
                // upvotes: formData.upvote,
                // downvotes: formData.downvote,
            })
            .then((response) => {
                loadingState(false);
                console.log(response);
                console.log(response.data);
                alert("voted.");
                // navigate("/login");
            })
            .catch((error) => {
                loadingState(false);
                const key = Object.keys(error.response.data)[0];
                alert(JSON.stringify(error.response.data));
            });
    };
    const handleDownvote = (e) => {
        if (changedata == -1) setchange(0);
        else setchange(-1);
        e.preventDefault();
        loadingState(true);
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        });

        axiosInstance
            .post(`http://127.0.0.1:8000/chat/downvote/`, {
                author_id: items,
                // tags: formData.tags.split(","),
                chat_id: feed.chat_id,
                // upvotes: formData.upvote,
                // downvotes: formData.downvote,
            })
            .then((response) => {
                loadingState(false);
                console.log(response);
                console.log(response.data);
                alert("voted.");
                // navigate("/login");
            })
            .catch((error) => {
                loadingState(false);
                const key = Object.keys(error.response.data)[0];
                alert(
                    JSON.stringify(error.response.data[key])
                        .replace(/"/g, "")
                        .replace("[", "")
                        .replace("]", "")
                );
            });
    };

    let isnegetive;
    if (feed.feed_type == "p") isnegetive = true;

    return (
        <>
            <Container
                // style={{
                //     backgroundColor: isnegetive ? "#fff6f5" : "#e6ffed",
                // }}
                style={{
                    backgroundColor: isnegetive
                        ? "rgba(245, 255, 245, .75)"
                        : "rgba(255, 245, 245, .75)",
                }}
            >
                <Containervotes>
                    <div onClick={handleUpvote}>
                        {changedata == 1 ? (
                            <Button variant="outlined" size="small">
                                like
                            </Button>
                        ) : (
                            // <ThumbUpAlt></ThumbUpAlt>
                            // <ThumbUpOffAlt></ThumbUpOffAlt>
                            <Button variant="contained" size="small">
                                {" "}
                                like
                            </Button>
                        )}
                    </div>

                    <br />
                    {/* <span>
                        {changedata == feed.vote
                            ? feed.upvotesCount - feed.downvotesCount
                            : feed.upvotesCount - feed.downvotesCount}
                    </span> */}
                    <span>
                        {feed.upvotesCount -
                            feed.downvotesCount +
                            changedata -
                            feed.vote}
                    </span>
                    {/* <h3>{changedata}</h3> */}
                    <br />
                    <div onClick={handleDownvote}>
                        {changedata == -1 ? (
                            // <ThumbDownAlt></ThumbDownAlt>
                            <Button variant="outlined" size="small">
                                dislike
                            </Button>
                        ) : (
                            // <ThumbDownOffAlt></ThumbDownOffAlt>
                            <Button variant="contained" size="small">
                                dislike
                            </Button>
                        )}
                    </div>
                </Containervotes>
                <Containerfeed>
                    {" "}
                    <ContainerUserName>
                        posted by :{/* <AccountCircleIcon /> */}
                        {feed.author_id}
                        <ContainerTime>
                            {moment(feed.date).fromNow()}
                        </ContainerTime>
                        <span style={{ float: "right" }}>{feed.chat_id}</span>
                    </ContainerUserName>
                    {/* <p>{items}</p> */}
                    <ContainerTitle>{feed.title}</ContainerTitle>
                    <br />
                    <FeedDetail>{feed.feed} </FeedDetail>
                    <br />
                    <span>
                        {feed.tags.map((tag) => (
                            <Containertags>{tag}</Containertags>
                        ))}
                    </span>
                    <br />
                </Containerfeed>
            </Container>
        </>
    );
}

// import MoreVertIcon from "@mui/icons-material/MoreVert";
