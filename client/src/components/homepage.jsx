import React from 'react';
import Bottombar from './homepageComp/Bottombar.jsx';
import './homepage.scss'
import Topbar from './homepageComp/Topbar.jsx'
import SearchBar from './homepageComp/SearchBar.jsx'
import PartnerShowcase from './homepageComp/PartnerShowcaser.jsx'

function Homepage(){
    return(
        <div>

            <Topbar/ >

            <div className="contentHome">
                    <div className="discoverPartners">
                        <h2>Retrouvez nos commerces partenaires.</h2>
                        <div className="lineContainer"><div className="line"></div></div>
                        <p>Les cagnottes n'attendent que vous ! Profitez de la générosité des utilisateurs pour faire vos emplètes.</p>
                        <SearchBar/ >
                    </div>
                    <div className="blankSpace"></div>
                    <div className="showcasePartner">
                        <div className="partnerBand">
                            <p>Des commerçants vous attendent</p>
                        </div>
                        <div className="partnerSlide">
                        <PartnerShowcase/ >
                        <PartnerShowcase/ >
                        <PartnerShowcase/ >
                        <PartnerShowcase/ >
                        </div>
                        <div className="blankSpace"></div>

                    </div>
                    <div className="featureFilterContainer">
                        <div className="featureFilter">
                        <h3>Recherchez un commerce qui correspond <br/>à vos envies</h3>
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
 
            <Bottombar/ >

 </div>
    )
}
 
export default Homepage;