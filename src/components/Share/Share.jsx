import React, { useEffect, useState } from "react";
import { StyledShare } from "./style";
import { StyledTop } from "./style";
import { StyledBottom } from "./style";
import { StyledTopInput } from "./style";
import { StyledInputTag } from "./style";
import { StyledFeedType } from "./style";
import { StyledFeed } from "./style";
import { StyledFeedButton1 } from "./style";
import { StyledFeedButton2 } from "./style";
import { StyledTopSection } from "./style";
import { StyledTopInputTitle } from "./style";
import { Tag } from "./style";
import { StyledButton } from "../Button/style";
// import TagIcon from "@mui/icons-material/Tag";


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
  };

  const [formData, updateFormData] = useState(initialFormData);
  const [loading, loadingState] = useState(false);
  const[feedState,setFeedState] = useState(true);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };
  const handleFeedType = (e) => {
    if( e.target.value==='p') {
      document.getElementById("feedButton2").style="none"
      e.target.style.border ="3px solid black";
      setFeedState(feedState);
    }
    else{
      document.getElementById("feedButton1").style="none"
      e.target.style.border ="3px solid black";
      setFeedState(!feedState);
    }
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
      })
      .then((response) => {
        loadingState(false);
        console.log(response);
        console.log(response.data);
        alert("posted.");
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
          <StyledTopSection>
            <StyledTopInputTitle
              placeholder="Title "
              name="title"
              // size="200"
              onChange={handleChange}
            ></StyledTopInputTitle>
            <StyledFeed>
              <StyledFeedButton1 onClick={handleFeedType} id="feedButton1" type="button" name = "feed_type" value= "p" > Positive</StyledFeedButton1>
              <StyledFeedButton2 onClick={handleFeedType} id="feedButton2" type="button" name = "feed_type" value= "n" > Negative </StyledFeedButton2>
            </StyledFeed>
          </StyledTopSection>
          <StyledTopInput
            placeholder="Share your Experience.. "
            name="feed"
            cols="70"
            rows="100"
            onChange={handleChange}
          ></StyledTopInput>
        </StyledTop>
        <StyledBottom>
          {/* <TagIcon /> */}
          <StyledInputTag
            placeholder="# Tags,Tags"
            name="tags"
            size="20"
            onChange={handleChange}
          ></StyledInputTag>
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
