import React, { useContext, useState, useEffect } from "react"
import { UIDataContext } from "../contexts/UIDataContext"
import SearchBar from "./homepageComp/SearchBar"
import "./fullPageSearch.scss"
import logo from "./img/logo.svg"
import { CSSTransition } from "react-transition-group"

const FullPageSearch = () => {
  const { getBusinessData, businessQueryResults } = useContext(UIDataContext)

  let [query, setQuery] = useState("")

  const getRenderedBusinesses = () => {
    if (businessQueryResults) {
      return businessQueryResults.map(business => (
        <CSSTransition
          appear={true}
          key={business.id}
          in={!!businessQueryResults}
          timeout={500}
          classNames='business-item'
        >
          <div className='business-item'>
            <div className='left'>
              <div className='top'>
                <div className='name'>{business.name}</div>
                <div className='type'>{business.type}</div>
                <div className='money'>{business.moneyAllocated}€</div>
              </div>
              <div className='donate-btn'>Donate</div>
              <div className='logo-container'>
                <img alt='logo' src={logo} className='logo'></img>
              </div>
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
      return arr.map(x => <div className='placeholder'></div>)
    }
  }

  useEffect(() => {
    getBusinessData(query)
  }, [query])

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
