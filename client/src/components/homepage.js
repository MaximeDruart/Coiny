import React from "react"
import Bottombar from "./homepageComp/Bottombar.js"
import "./homepage.scss"
import Topbar from "./homepageComp/Topbar.js"
import SearchBar from "./homepageComp/SearchBar.js"
import PartnerShowcase from "./homepageComp/PartnerShowcaser.js"

function Homepage() {
  return (
    <div>
      <Topbar />

      <div className="contentHome">
        <div className="discoverPartners">
          <h2>Retrouvez nos commerces partenaires.</h2>
          <div className="lineContainer">
            <div className="line"></div>
          </div>
          <p>Des commerces qui s'engagent</p>
          <SearchBar />
        </div>
        <div className="blankSpace"></div>
        <div className="showcasePartner">
          <div className="partnerBand">
            <p>Des commerçants vous attendent</p>
          </div>
          <div className="partnerSlide">


{/* i need to map the <PartnerShowcase/ > here */}


          </div>
          <div className="blankSpace"></div>
        </div>
        <div className="featureFilterContainer">
          <div className="featureFilter">
            <h3>
              Recherchez un commerce qui correspond <br />à vos envies
            </h3>
            <div className="buttonFilter">Rechercher un commerce</div>
          </div>
        </div>
        <div className="blankSpace"></div>
        <div className="partnerBand">
          <p>Des commerçants vous attendent</p>
        </div>

        <div className="squareStoreOfTheWeek">
          <div>
            <h2>Monoprix</h2>
          </div>
          <div>
            <h2>Monoprix</h2>
          </div>
          <div>
            <h2>Monoprix</h2>
          </div>
          <div>
            <h2>Monoprix</h2>
          </div>
        </div>
        <div className="blankSpace"></div>
        <div className="blankSpace"></div>
      </div>

      <Bottombar />
    </div>
  )
}

export default Homepage
