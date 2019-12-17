import React, { useEffect, useContext } from "react"
import Bottombar from "./homepageComp/Bottombar"
import "./homepage.scss"
import Topbar from "./homepageComp/Topbar"
import SearchBar from "./homepageComp/SearchBar"
import PartnerShowcase from "./homepageComp/PartnerShowcaser"
import { UIDataContext } from "../contexts/UIDataContext"
import StoreOfTheWeek from "./homepageComp/StoreOfTheWeek.jsx"





const Homepage = props => {
  const { getBusinessData, businessQueryResults } = useContext(UIDataContext)

  useEffect(() => {
    getBusinessData(null)
  }, [])

  const getRenderedBusinesses = () => {
    return businessQueryResults.slice(3,8).map(business => (
      <PartnerShowcase key={business.id} business={business}></PartnerShowcase>
    ))
  }
  
  const getWeeklyStore = () => {
    return businessQueryResults.slice(0,4).map(business => (
      <StoreOfTheWeek key={business.id} business={business}></StoreOfTheWeek>
    ))
  }



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
          <SearchBar />
        </div>
        <div className='blankSpace'></div>
        <div className='showcasePartner'>
          <div className='partnerBand'>
            <p>Des commerçants vous attendent</p>
          </div>


          <div className='partnerSlide'>
            {businessQueryResults ? getRenderedBusinesses() : ""}
          </div>


          <div className='blankSpace'></div>
        </div>
        <div className='featureFilterContainer'>
          <div className='featureFilter'>
            <h3>
              Recherchez un commerce qui correspond <br />à vos envies
            </h3>
            <div className='buttonFilter'>Rechercher un commerce</div>
          </div>
        </div>
        <div className='blankSpace'></div>
        <div className='partnerBand'>
          <p>Des commerçants vous attendent</p>
        </div>

      <div className="weeklyContainer">
        {businessQueryResults ? getWeeklyStore() : ""}
      </div>
       
        <div className='blankSpace'></div>
        <div className='blankSpace'></div>
      </div>

      <Bottombar />
    </div>
  )
}

export default Homepage
