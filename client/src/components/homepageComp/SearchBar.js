import React, { useState } from "react"
import "./SearchBar.scss"
import searchMeImg from "../img/icn_search_light.svg"

const SearchBar = props => {
  let [query, setQuery] = useState("")

  const handleChange = event => {
    let { value } = event.target
    setQuery(value)
    if (props.queryHandler) props.queryHandler(value)
  }
  return (
    <div className='searchContainer'>
      <div className='searchContainer_searchInput'>
        <input
          type='text'
          name='query'
          placeholder='recherchez un store'
          value={query}
          onChange={handleChange}
        ></input>
      </div>
      <div className='searchContainer_yellowIcon'>
        <img src='' alt='' />
        <img src={searchMeImg} alt='' />
      </div>
    </div>
  )
}

export default SearchBar
