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
    // const [tagName, setTagName] = useState();
    // const handleTagSearch = (val) => {
    //     setTagName("/search/" + val);
    // };
    const navigate = useNavigate();
    const [searchField, setSearchField] = useState("");
    // const handleChange = (e) => {
    //     setSearchField(e.target.value)
    //     console.log("ok")
    // };
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // console.log(e.target.value)
    //     console.log("ok")
    //     navigate('/search/'+searchField);
    //   }
    const handleSubmit = (tag) => {
        // tag.preventDefault();
        // console.log(e.target.value)
        console.log("ok")
        navigate('/search/'+tag.trim());
      }

    return (
        // <>
        <Container
            key={feed.chat_id}
            style={{
                backgroundColor: isnegetive
                    ? "rgba(245, 255, 245, .75)"
                    : "rgba(255, 245, 245, .75)",
            }}
        >
            <Containervotes>
                <div onClick={handleUpvote}>
                    {changedata === 1 ? (
                        // <ThumbUpAlt></ThumbUpAlt>
                        <Button variant="outlined" size="small">
                            like
                        </Button>
                    ) : (
                        // <ThumbUpOffAlt></ThumbUpOffAlt>
                        <Button variant="contained" size="small">
                            {" "}
                            like
                        </Button>
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
                    posted by {/* <AccountCircleIcon /> */}
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
                                {tag}
                            </Link>
                            {/* <button onClick={
                                ((e) => ( handleSubmit(tag)))
                                }>{tag}</button> */}
                        </Containertags>
                    ))}
                </div>
                <span>{loading ? "loading please wait" : ""}</span>
            </Containerfeed>
        </Container>
        // </>
    );
}
