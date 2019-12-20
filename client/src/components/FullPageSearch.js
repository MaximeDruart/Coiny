import React, { useContext, useState, useEffect } from "react"
import { UIDataContext } from "../contexts/UIDataContext"
import SearchBar from "./homepageComp/SearchBar"
import "./fullPageSearch.scss"
import logo from "./img/logo.svg"
import { CSSTransition } from "react-transition-group"
import uuid from "uuid"
import { Link, useLocation } from "react-router-dom"

import epicerie from "./img/epicerie.svg"
import boucherie from "./img/boucherie.svg"
import coiffeur from "./img/coiffeur.svg"
import boulangerie from "./img/boulangerie.svg"
import pharmacie from "./img/pharmacie.svg"
import supermarche from "./img/supermarche.svg"
import friperie from "./img/friperie.svg"
import restaurant from "./img/restaurant.svg"

let storeImgs = {
  supermarche,
  epicerie,
  boucherie,
  coiffeur,
  boulangerie,
  pharmacie,
  friperie,
  restaurant
}

const FullPageSearch = () => {
  const { state } = useLocation()
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
      if (extendedData.length === 0)
        return (
          <CSSTransition
            in={extendedData.length === 0}
            appear={true}
            timeout={1000}
            classNames='noItems'
          >
            <div className='noItems'>{`Aucun résultat trouvé pour "${query}"`}</div>
          </CSSTransition>
        )

      return extendedData.map(business => {
        let bgImgString = Object.keys(storeImgs).includes(business.type)
          ? storeImgs[business.type]
          : supermarche

        return (
          <CSSTransition
            appear={true}
            key={uuid()}
            in={!!businessQueryResults}
            timeout={500}
            classNames='business-item'
          >
            <Link
              key={uuid()}
              className='business-item'
              to={`/business/${business._id}`}
            >
              <div className='left'>
                <div className='top'>
                  <div className='name'>{business.name}</div>
                  <div className='type'>{business.type}</div>
                  <div className='money'>{business.moneyAllocated}€</div>
                </div>
                <div className='logo-container'>
                  <img alt='logo' src={logo} className='logo'></img>
                </div>
              </div>
              <div
                style={{
                  backgroundImage: `url(${bgImgString})`
                }}
                className='right'
              ></div>
            </Link>
          </CSSTransition>
        )
      })
    } else {
      let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      return arr.map(x => <div key={uuid()} className='placeholder'></div>)
    }
  }

  useEffect(() => {
    state && setQuery(state.type)
  }, [state])

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
        initialValue={state && state.type}
        className='fullPage-searchbar'
        queryHandler={queryHandler}
      ></SearchBar>
      <div className='results-container'>{getRenderedBusinesses()}</div>
    </div>
  )
}

export default FullPageSearch
