import React, { useState } from "react"
import "./SearchBar.scss"
import searchMeImg from "../img/icn_search_light.svg"
import { CSSTransition } from "react-transition-group"

const SearchBar = props => {
  let [query, setQuery] = useState("")

  const handleChange = event => {
    let { value } = event.target
    setQuery(value)
    if (props.queryHandler) props.queryHandler(value)
  }
  return (
    <CSSTransition in={true} timeout={0} classNames='searchContainer'>
      <div className='searchContainer'>
        <div className='searchContainer_searchInput'>
          <input
            onFocus={props.goToSearch}
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
    </CSSTransition>
  )
}

export default SearchBar
