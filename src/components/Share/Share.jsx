import React, { useEffect, useState } from "react";
import { StyledShare } from "./style";
import { StyledTop } from "./style";
import { StyledBottom } from "./style";
import { StyledInputTextarea } from "./style";
import { StyledFeed } from "./style";
import { StyledFeedButton1 } from "./style";
import { StyledFeedButton2 } from "./style";
import { StyledTopSection } from "./style";
import { StyledInputTitle } from "./style";
import { Tag } from "./style";
import { StyledButton } from "../Button/style";
import { TagsInput } from "react-tag-input-component";
import axiosInstance from "../../axios";
function Share() {
  const [items, setItems] = useState([]);

  const [selected, setSelected] = useState([]);

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
  const [feedState, setFeedState] = useState(true);

  // document.getElementById("tags").innerHTML = tagArray;
  // const tagArray = tagArray.split("#");

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };
  const handleFeedType = (e) => {
    if (e.target.value === "p") {
      document.getElementById("feedButton2").style = "none";
      e.target.style.border = "3px solid black";
      setFeedState(feedState);
    } else {
      document.getElementById("feedButton1").style = "none";
      e.target.style.border = "3px solid black";
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
    var newTags = [];

    for (let i = 0; i < selected.length; i++) {
      newTags.push(selected[i].replaceAll("#", "").trim());
    }

    formData.tags = newTags;

    axiosInstance
      .post(`http://127.0.0.1:8000/chat/post/`, {
        title: formData.title,
        author_id: items,
        feed: formData.feed,
        feed_type: formData.feed_type,
        tags: formData.tags,
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
        <div className="row" style={{marginTop:"10px",marginBottom:"20px",paddingLeft:"8px"}}>
          <div className="col">
            <StyledInputTitle
              placeholder="Title"
              name="title"
              onChange={handleChange}
            ></StyledInputTitle>
          </div>
          <div className="col"></div>
          <div className="col">
            <StyledFeedButton1
              onClick={handleFeedType}
              id="feedButton1"
              type="button"
              name="feed_type"
              value="p"
            >
              {" "}
              Positive
            </StyledFeedButton1>
            <StyledFeedButton2
              onClick={handleFeedType}
              id="feedButton2"
              type="button"
              name="feed_type"
              value="n"
            >
              {" "}
              Negative{" "}
            </StyledFeedButton2>
          </div>
        </div>
        <div className="row" style={{paddingLeft:"8px"}}>
          <div className="col">
            <StyledInputTextarea
              placeholder="Share your Experience.. "
              name="feed"
              cols="70"
              rows="1000"
              onChange={handleChange}
            ></StyledInputTextarea>
          </div>
        </div>
        <div className="row" style={{marginBottom:"10px",marginTop:"20px",paddingLeft:"8px"}}>
          <div className="col"></div>
          <div className="col-4" style={{backgroundColor:"white"}} >
            <TagsInput
              value={selected}
              onChange={setSelected}
              name="fruits"
              id="tags"
            />
          </div>
          <div className="col-2">
            {loading ? (
              <button style={{float: "right"}}>Loading... </button>
            ) : (
              <button type="submit" className="btn btn-primary" style={{fontSize: "16px",borderRadius:"17px",fontWeight:"bold"}}>Share</button>
            )}
          </div>
        </div>
        {/* <StyledTop>
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
        </StyledTop> */}
        {/* <StyledBottom>
          <TagsInput
            value={selected}
            onChange={setSelected}
            name="fruits"
            id="tags"
          />
          <Tag></Tag>
          {loading ? (
            <StyledButton>Loading... </StyledButton>
          ) : (
            <StyledButton type="submit">Share</StyledButton>
          )}
        </StyledBottom> */}
      </form>
    </StyledShare>
  );
}
export default Share;
