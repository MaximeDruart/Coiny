import React, { useContext, useState, useEffect } from "react"
import { UIDataContext } from "../contexts/UIDataContext"
import SearchBar from "./homepageComp/SearchBar"
import "./fullPageSearch.scss"
import logo from "./img/logo.svg"
import { CSSTransition } from "react-transition-group"
import uuid from "uuid"
import { Link } from "react-router-dom"

const FullPageSearch = () => {
  const {
    getBusinessData,
    businessQueryResults,
    businessDataForType,
    getBusinessDataForType,
    loading
  } = useContext(UIDataContext)

  let [query, setQuery] = useState("")

  const getRenderedBusinesses = () => {
    if (businessDataForType && businessQueryResults && !loading) {
      const extendedData = [...businessDataForType, ...businessQueryResults]
      return extendedData.map(business => (
        <CSSTransition
          appear={true}
          key={uuid()}
          in={!!businessQueryResults}
          timeout={500}
          classNames='business-item'
        >
          <div key={uuid()} className='business-item'>
            <div className='left'>
              <div className='top'>
                <div className='name'>{business.name}</div>
                <div className='type'>{business.type}</div>
                <div className='money'>{business.moneyAllocated}€</div>
              </div>
              <Link to={`/business/${business._id}`}>
                <div className='logo-container'>
                  <img alt='logo' src={logo} className='logo'></img>
                </div>
              </Link>
            </div>
            <div
              style={{ backgroundImage: `url(${business.picture})` }}
              className='right'
            ></div>
          </div>
        </CSSTransition>
      ))
    } else {
      let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      return arr.map(x => <div key={uuid()} className='placeholder'></div>)
    }
  }

  useEffect(() => {
    getBusinessData(query)
    getBusinessDataForType(query)
  }, [query, getBusinessData, getBusinessDataForType])

  const queryHandler = value => {
    setQuery(value)
  }

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
