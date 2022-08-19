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
// import IconButton from "@mui/material/IconButton";
import { Button } from "@mui/material";
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
// import ThumbUpAlt from "@mui/icons-material/ThumbUpAlt";
// import ThumbDownAlt from "@mui/icons-material/ThumbDownAlt";
// import ThumbDownOffAlt from "@mui/icons-material/ThumbDownOffAlt";

export default function Post({ feed }) {
    const [changedata, setchange] = useState(feed.vote);
    const [items, setItems] = useState([]);
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("author_id"));
        if (items) {
            setItems(items);
        }
    }, []);

    const initialFormData = {
        author_id: items,
    };

    const [formData, updateFormData] = useState(initialFormData);
    const [loading, loadingState] = useState(false);
    const handleUpvote = (e) => {
        if (changedata === 1) setchange(0);
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
                chat_id: feed.chat_id,
            })
            .then((response) => {
                loadingState(false);
                console.log(response);
                console.log(response.data);
            })
            .catch((error) => {
                loadingState(false);
                alert(JSON.stringify(error.response.data));
            });
    };
    const handleDownvote = (e) => {
        if (changedata === -1) setchange(0);
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
                chat_id: feed.chat_id,
            })
            .then((response) => {
                loadingState(false);
                console.log(response);
                console.log(response.data);
            })
            .catch((error) => {
                loadingState(false);
                alert(JSON.stringify(error.response.data));
            });
    };

    let isnegetive;
    if (feed.feed_type === "p") isnegetive = true;
    const navigate = useNavigate();
    const [searchField, setSearchField] = useState("");
    const handleSubmit = (tag) => {

        console.log("ok")
        navigate('/search/'+tag.trim());
      }

    return (
        // <>
        <Container
            key={feed.chat_id}
            style={{
                backgroundColor: isnegetive
                    ? "rgba(245, 265, 245, .75)"
                    : "rgba(295, 225, 245, .75)",
            }}
        >
            <Containervotes>
                <div onClick={handleUpvote}>
                    {changedata === 1 ? (
                        // <ThumbUpAlt></ThumbUpAlt>
                        <ArrowDropUpOutlinedIcon variant="outlined" size="large"  style={{
                            maxWidth: "60px",
                            maxHeight: "60px",
                            minWidth: "60px",
                            minHeight: "60px",
                            color:"#808080",
                          }}>
                            like
                        </ArrowDropUpOutlinedIcon>
                    ) : (
                        // <ThumbUpOffAlt></ThumbUpOffAlt>
                        <ArrowDropUpOutlinedIcon variant="contained" size="large" style={{
                            maxWidth: "50px",
                            maxHeight: "50px",
                            minWidth: "50px",
                            minHeight: "50px",
                            color:"#808080",
                          }} >
                            {" "}
                            like
                        </ArrowDropUpOutlinedIcon>
                    )}
                </div>
                <span>
                    {feed.upvotesCount -
                        feed.downvotesCount +
                        changedata -
                        feed.vote}
                </span>
                <div onClick={handleDownvote}>
                    {changedata === -1 ? (
                        // <ThumbDownAlt></ThumbDownAlt>
                        <ArrowDropDownOutlinedIcon variant="outlined" size="large" style={{
                            maxWidth: "60px",
                            maxHeight: "60px",
                            minWidth: "60px",
                            minHeight: "60px",
                            color:"#808080",
                            }} >
                            dislike
                        </ArrowDropDownOutlinedIcon>
                    ) : (
                        // <ThumbDownOffAlt></ThumbDownOffAlt>
                        <ArrowDropDownOutlinedIcon variant="contained" size="large" style={{
                            maxWidth: "50px",
                            maxHeight: "50px",
                            minWidth: "50px",
                            minHeight: "50px",
                            color:"#808080",
                          }} >
                            dislike
                        </ArrowDropDownOutlinedIcon>
                    )}
                </div>
            </Containervotes>
            <Containerfeed>
                {" "}
                <ContainerUserName>
                    Posted by :- {/* <AccountCircleIcon /> */}
                    {feed.username}
                    <ContainerTime>
                        {moment(feed.date + "T" + feed.time).fromNow()}
                    </ContainerTime>
                    <span style={{ float: "right" }}>{feed.chat_id}</span>
                </ContainerUserName>
                <ContainerTitle>{feed.title}</ContainerTitle>
                <FeedDetail>{feed.feed} </FeedDetail>
                <div>
                    {feed.tags.map((tag) => (
                        <Containertags>
                            <Link
                                // onClick={
                                // (() => setTagName(tag))
                                // }
                                to={"/search/" + tag.trim()}
                                target="_blank"
                            >
                                {"#"+tag}
                            </Link>
                            {/* <button onClick={
                                ((e) => ( handleSubmit(tag)))
                                }>{tag}</button> */}
                        </Containertags>
                    ))}
                </div>
                {/* <span>{loading ? "loading please wait" : ""}</span> */}
            </Containerfeed>
        </Container>
        // </>
    );
}
