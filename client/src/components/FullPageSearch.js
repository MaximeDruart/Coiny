import React, { Component, useContext, useState, useEffect } from "react"
import { UIDataContext } from "../contexts/UIDataContext"
import SearchBar from "./homepageComp/SearchBar"

const FullPageSearch = props => {
  const { getBusinessData, businessQueryResults } = useContext(UIDataContext)

  let [query, setQuery] = useState("")

  const queryHandler = queryProp => {
    setQuery(queryProp)
  }

  const getRenderedBusinesses = () => {
    if (businessQueryResults) {
      return businessQueryResults.map(business => (
        <div key={business.id} className='businessQueryResults'>
          <p className='name'>{business.name}</p>
          <p>{business.password}</p>
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
    getBusinessData()
    console.log(getBusinessData())
  }, [query])

  return (
    <div className='fullPageSearch'>
      <SearchBar queryHandler={queryHandler}></SearchBar>
      <div className='results-container'>{getRenderedBusinesses()}</div>
    </div>
  )
}

export default FullPageSearch
