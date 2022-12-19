import { useEffect, useState } from "react";
import axiosInstance from "../axios";
import Avatar from "react-avatar";
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
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';

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
                    ? "rgb(172,225,175)"
                    : "rgb(240,128,128)",
            }}
        >
            <Containervotes>
                <div onClick={handleUpvote}>
                    {changedata === 1 ? (
                        // <ThumbUpAlt></ThumbUpAlt>
                        <ArrowDropUpOutlinedIcon variant="outlined" size="large"  style={{
                            maxWidth: "70px",
                            maxHeight: "70px",
                            minWidth: "70px",
                            minHeight: "70px",
                            color:"white",
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
                            color:"white",
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
                            maxWidth: "70px",
                            maxHeight: "70px",
                            minWidth: "70px",
                            minHeight: "70px",
                            color:"white",
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
                            color:"white",
                          }} >
                            dislike
                        </ArrowDropDownOutlinedIcon>
                    )}
                </div>
            </Containervotes>
            <Containerfeed>
                {" "}
                <ContainerUserName>
                    Posted by -
                     {/* {<Avatar
                    name={feed.username}
                    size={25}
                    round="25px"
                    color={Avatar.getRandomColor("sitebase", [
                      "#d19fe8",
                      "##99e6b3",
                      "#ff6347",
                    ])}
                  />} */}
                  &nbsp;
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
