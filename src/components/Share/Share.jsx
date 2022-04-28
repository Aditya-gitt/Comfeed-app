import React, { useEffect, useState } from "react";
import { StyledShare } from "./style";
import { StyledTop } from "./style";
import { StyledBottom } from "./style";
import { StyledTopInput } from "./style";
import { Tag } from "./style";
// import { Location } from "./style";
import { StyledButton } from "../Button/style";
import TagIcon from "@mui/icons-material/Tag";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import axiosInstance from "../../axios";
function Share() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("author_id"));
        if (items) {
            setItems(items);
        }
    }, []);
    const initialFormData = {
        title: "",
        author_id: items,
        feed: "",
        feed_type: "",
        tags: [],
        // upvote: "",
        // downvote: "",
    };

    const [formData, updateFormData] = useState(initialFormData);
    const [loading, loadingState] = useState(false);

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        loadingState(true);

        axiosInstance
            .post(`http://127.0.0.1:8000/chat/post/`, {
                title: formData.title,
                author_id: items,
                feed: formData.feed,
                feed_type: formData.feed_type,
                tags: formData.tags.split(","),
                // upvotes: formData.upvote,
                // downvotes: formData.downvote,
            })
            .then((response) => {
                loadingState(false);
                console.log(response);
                console.log(response.data);
                alert("posted.");
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
    return (
        <StyledShare>
            <form onSubmit={handleSubmit}>
                <StyledTop>
                    <AccountCircleIcon />

                    <StyledTopInput>
                        <input
                            placeholder="Title "
                            name="title"
                            onChange={handleChange}
                        />
                    </StyledTopInput>
                    <br />
                    <StyledTopInput>
                        <input
                            placeholder="Share your Experience.. "
                            name="feed"
                            onChange={handleChange}
                        />
                    </StyledTopInput>
                    <br />
                    <StyledTopInput>
                        <input
                            placeholder="feed type "
                            name="feed_type"
                            onChange={handleChange}
                        />
                    </StyledTopInput>
                    <br />
                    {/* <br /> */}
                    <StyledTopInput>
                        <input
                            placeholder="tags"
                            name="tags"
                            onChange={handleChange}
                        />
                    </StyledTopInput>
                </StyledTop>
                <hr />
                <StyledBottom>
                    <TagIcon />
                    <Tag>{/* <input type="text" /> */}</Tag>

                    {/* <StyledButton type="submit">Share </StyledButton> */}
                    {loading ? (
                        <StyledButton>Loading... </StyledButton>
                    ) : (
                        <StyledButton type="submit">Share</StyledButton>
                    )}
                </StyledBottom>
            </form>
        </StyledShare>
    );
}
export default Share;
