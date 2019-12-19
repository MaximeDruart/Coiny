import React, { useState, useEffect, useRef, forwardRef } from "react"
import "./SearchBar.scss"
import searchMeImg from "../img/icn_search_light.svg"
import { useLocation } from "react-router-dom"

const SearchBar = forwardRef((props, ref) => {
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
    <div ref={ref} className='searchContainer'>
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

export default SearchBar
