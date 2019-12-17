import React, { Component, useContext, useState, useEffect } from "react"
import { UIDataContext } from "../contexts/UIDataContext"
import SearchBar from "./homepageComp/SearchBar"
import "./fullPageSearch.scss"
import logo from "./img/logo.svg"

const FullPageSearch = props => {
  const { getBusinessData, businessQueryResults } = useContext(UIDataContext)

  let [query, setQuery] = useState("")

  const queryHandler = queryProp => {
    setQuery(queryProp)
  }

  const getRenderedBusinesses = () => {
    if (businessQueryResults) {
      return businessQueryResults.map(business => (
        <div key={business.id} className='business-item'>
          <div className='left'>
            <div className='top'>
              <div className='name'>{business.name}</div>
              <div className='type'>{business.type}</div>
            </div>

            <div className='donate-btn'>Donate</div>

            <div className='logo-container'>
              <img src={logo} className='logo'></img>
              <div className='a'>{console.log(business)} </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${business.picture})` }}
            className='right'
          ></div>
        </div>
      ))
    } else {
      return new Array(10).map((x, index) => (
        <div key={index} className='placeholder'>
          Placeholder
        </div>
      ))
    }
  }

  useEffect(() => {
    getBusinessData(query)
  }, [query])

  return (
    <div className='fullPageSearch'>
      <SearchBar
        className='fullPage-searchbar'
        queryHandler={queryHandler}
      ></SearchBar>
      <div className='results-container'>{getRenderedBusinesses()}</div>
    </div>
  )
}

export default FullPageSearch
