import React, { useEffect, useContext } from "react"
import "./homepage.scss"
import Topbar from "./homepageComp/Topbar"
import SearchBar from "./homepageComp/SearchBar"
import PartnerShowcase from "./homepageComp/PartnerShowcaser"
import { UIDataContext } from "../contexts/UIDataContext"
import StoreOfTheWeek from "./homepageComp/StoreOfTheWeek.jsx"
import uuid from "uuid"
import { Link } from "react-router-dom"

const Homepage = props => {
  const { getBusinessData, businessQueryResults } = useContext(UIDataContext)

  useEffect(() => {
    getBusinessData(null)
  }, [getBusinessData])

  const getRenderedBusinesses = () => {
    return businessQueryResults
      .slice(3, 8)
      .map(business => (
        <PartnerShowcase key={uuid()} business={business}></PartnerShowcase>
      ))
  }

  const goToSearch = () => {
    if (props.location.pathname === "/homepage") {
      props.history.push("/search")
    }
  }

  const getWeeklyStore = () => {
    return businessQueryResults
      .slice(0, 4)
      .map(business => (
        <StoreOfTheWeek key={uuid()} business={business}></StoreOfTheWeek>
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
          <SearchBar goToSearch={goToSearch} />
        </div>
        <div className='blankSpace'></div>
        <div className='showcasePartner'>
          <div className='partnerBand'>
            <p>près de chez vous</p>
          </div>

          <div className='partnerSlide'>
            {businessQueryResults ? getRenderedBusinesses() : ""}
          </div>
        </div>
        <div className='featureFilterContainer'>
          <div className='featureFilter'>
            <h3>Témoignage de commerçant, regardez ce qu'ils en pensent.</h3>
           
           <link to='./Article'>
            <div className='buttonFilter'>Lire un témoignage</div>
            </link>
          </div>
        </div>
        <div className='partnerBand'>
          <p>Des commerces par catégorie</p>
        </div>

        <div className='weeklyContainer'>
          <StoreOfTheWeek type='Supermarché'></StoreOfTheWeek>
          <StoreOfTheWeek type='boucherie'></StoreOfTheWeek>
          <StoreOfTheWeek type='Pharmacie'></StoreOfTheWeek>
          <StoreOfTheWeek type='Droguerie'></StoreOfTheWeek>
          <StoreOfTheWeek type='Coiffeur'></StoreOfTheWeek>
        </div>

        <div className='blankSpace'></div>
        <div className='blankSpace'></div>
      </div>
    </div>
  )
}

export default Homepage
