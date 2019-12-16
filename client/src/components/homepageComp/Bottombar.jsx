import React from 'react';
import  './Bottombar.scss';
import homelogo from "../img/icn_home_inactive.png"
import profilelogo from "../img/icn_profile_inactive.png"
function Bottombar(){
    return(
        <div className="Bottombar">
            <div className="iconBottombar"><img src={homelogo} alt=""/></div>
            <div className="iconBottombar middleQr"><img src="" alt=""/></div>
            <div className="iconBottombar"><img src={profilelogo} alt=""/></div>
        </div>
    )
}

export default Bottombar;