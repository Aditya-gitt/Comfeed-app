import { SearchBox, SearchInput,Containertags,StyledFeedType } from "./style";
import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css'

function SearchBar() {

  
  const navigate = useNavigate();
  const [searchField, setSearchField] = useState("");

  const handleChange = (e) => {
    setSearchField(e.target.value)
    console.log("ok")
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ok")
    navigate('/search/'+searchField);
  }

  return (
      <SearchBox>
        <form onSubmit={handleSubmit}>
          <SearchInput name='tag' required onChange={handleChange} className="formInput" size="60" height="50" placeholder="Search anything...">
         
          </SearchInput>
          <StyledFeedType type="submit"required> <i className="fa fa-search" > &#9474;</i></StyledFeedType>
        </form>
      </SearchBox>
  )
}
export default SearchBar
