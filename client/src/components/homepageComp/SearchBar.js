import React, { useState, useEffect, useRef, forwardRef } from "react"
import "./SearchBar.scss"
import searchMeImg from "../img/icn_search_light.svg"
import { useLocation, useHistory } from "react-router-dom"
import posed from "react-pose"

const SearchBar = forwardRef((props, ref) => {
  let history = useHistory()
  const { pathname } = useLocation()
  let [query, setQuery] = useState("")

  const handleChange = event => {
    let { value } = event.target
    setQuery(value)
    if (props.queryHandler) props.queryHandler(value)
  }

  let $input = useRef()

  useEffect(() => {
    pathname === "/search" && $input.current.focus()
    return () => ($input = undefined)
  }, [])

  return (
    <div
      onClick={() => history.push("/search")}
      ref={ref}
      className='searchContainer'
    >
      <div className='searchContainer_searchInput'>
        <input
          defaultValue={props.initialValue}
          ref={$input}
          onFocus={props.goToSearch}
          type='text'
          name='query'
          placeholder='recherchez un store'
          onChange={handleChange}
        ></input>
      </div>
      <div className='searchContainer_yellowIcon'>
        <img src='' alt='' />
        <img src={searchMeImg} alt='' />
      </div>
    </div>
  )
})

// export default SearchBar

const PosedSearchBar = posed(SearchBar)({
  home: {
    top: 280 - 25,
    width: "70%"
  },
  search: {
    top: 30,
    width: "90%"
  }
})

export default PosedSearchBar
