import React, { useEffect, useContext } from "react"
import "./homepage.scss"
import Topbar from "./homepageComp/Topbar"
import SearchBar from "./homepageComp/SearchBar"
import PartnerShowcase from "./homepageComp/PartnerShowcaser"
import { UIDataContext } from "../contexts/UIDataContext"
import StoreOfTheWeek from "./homepageComp/StoreOfTheWeek.jsx"
import uuid from "uuid"
import { Link } from "react-router-dom"
import { CSSTransition } from "react-transition-group"

const Homepage = props => {
  const { getBusinessData, businessQueryResults } = useContext(UIDataContext)

  useEffect(() => {
    getBusinessData(null)
  }, [getBusinessData])

  const getRenderedBusinesses = () => {
    let emptyarr = [0, 0, 0, 0, 0]
    return businessQueryResults
      ? businessQueryResults
          .slice(3, 8)
          .map(business => (
            <PartnerShowcase key={uuid()} business={business}></PartnerShowcase>
          ))
      : emptyarr.map(x => (
          <div key={uuid()} className='storewindow-placeholder'></div>
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
        <StoreOfTheWeek
          type={business.type}
          key={uuid()}
          business={business}
        ></StoreOfTheWeek>
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
        <div style={{ height: "70px" }} className='blankSpace'></div>
        <div className='showcasePartner'>
          <div className='partnerBand'>
            <p>près de chez vous</p>
          </div>

          <div className='partnerSlide'>{getRenderedBusinesses()}</div>
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
          <StoreOfTheWeek type='boucherie'></StoreOfTheWeek>
          <StoreOfTheWeek type='Pharmacie'></StoreOfTheWeek>
          <StoreOfTheWeek type='Droguerie'></StoreOfTheWeek>
          <StoreOfTheWeek type='Coiffeur'></StoreOfTheWeek>
        </div>

        <div style={{ height: "60px" }} className='blankSpace'></div>
        <div className='blankSpace'></div>
      </div>
    </div>
  )
}

export default Homepage
