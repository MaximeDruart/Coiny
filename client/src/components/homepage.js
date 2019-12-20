import React, { useEffect, useContext, useState, Fragment } from "react"
import "./homepage.scss"
import Topbar from "./homepageComp/Topbar"
import PartnerShowcase from "./homepageComp/PartnerShowcaser"
import { UIDataContext } from "../contexts/UIDataContext"
import StoreOfTheWeek from "./homepageComp/StoreOfTheWeek.jsx"
import uuid from "uuid"
import { Link } from "react-router-dom"

let emptyarr = [0, 0, 0, 0, 0]

let placeholder = emptyarr.map(x => (
  <div key={uuid()} className='storewindow-placeholder'></div>
))
const Homepage = props => {
  const { getBusinessData, businessQueryResults } = useContext(UIDataContext)
  let [mappedData, setMappedData] = useState("")

  useEffect(() => {
    getBusinessData(null)
    getRenderedBusinesses()
  }, [getBusinessData, businessQueryResults.length])

  const getRenderedBusinesses = () => {
    if (businessQueryResults.length > 0 && !mappedData) {
      console.log("mapping data", { businessQueryResults }, { mappedData })
      let mappedDataTemp = businessQueryResults
        .slice(3, 8)
        .map(business => (
          <PartnerShowcase key={uuid()} business={business}></PartnerShowcase>
        ))
      console.log(mappedDataTemp)
      setMappedData(mappedDataTemp)
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Topbar />
      <div className='contentHome'>
        <div className='discoverPartners'>
          <h2>Retrouvez nos commerces partenaires.</h2>
          <div className='lineContainer'>
            <div className='line'></div>
          </div>
          <p>Des commerces qui s'engagent</p>
        </div>
        <div className='blankSpace'></div>
        <div className='showcasePartner'>
          <div className='partnerBand'>
            <p>Près de chez vous</p>
          </div>

          <div className='partnerSlide'>
            {mappedData ? mappedData : placeholder}
          </div>
        </div>
        <div className='featureFilterContainer'>
          <div className='featureFilter'>
            <h3>Témoignage de commerçant, regardez ce qu'ils en pensent.</h3>

            <Link to='/Article'>
              <div className='buttonFilter'>Lire un témoignage</div>
            </Link>
          </div>
        </div>
        <div className='partnerBand'>
          <p>Des commerces par catégorie</p>
        </div>

        <div className='weeklyContainer'>
          {}
          <StoreOfTheWeek type='Supermarché'></StoreOfTheWeek>
          <StoreOfTheWeek type='restaurant'></StoreOfTheWeek>
          <StoreOfTheWeek type='boulangerie'></StoreOfTheWeek>
          <StoreOfTheWeek type='boucherie'></StoreOfTheWeek>
          <StoreOfTheWeek type='Pharmacie'></StoreOfTheWeek>
          <StoreOfTheWeek type='epicerie'></StoreOfTheWeek>
          <StoreOfTheWeek type='friperie'></StoreOfTheWeek>
          <StoreOfTheWeek type='Coiffeur'></StoreOfTheWeek>
        </div>

        <div style={{ height: "60px" }} className='blankSpace'></div>
      </div>
    </div>
  )
}

export default Homepage
