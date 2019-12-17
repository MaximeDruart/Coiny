import React from "react"
import "./SearchBar.scss"
import searchMeImg from "../img/icn_search_light.svg"

function SearchBar() {
  return (
    <div className="searchContainer">
      <div className="searchContainer_searchInput">
        <input
          type="text"
          name=""
          id=""
          placeholder="recherchez un store"
        ></input>
      </div>
      <div className="searchContainer_yellowIcon">
        <img src="" alt="" />
        <img src={searchMeImg} alt="" />
      </div>
    </div>
  )
}

export default SearchBar
