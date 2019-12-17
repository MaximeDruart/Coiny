import React from "react"
import "./Bottombar.scss"
import homelogo from "../img/icn_home_inactive.svg"
import profilelogo from "../img/icn_profile_inactive.svg"
function Bottombar() {
  return (
    <div className="Bottombar">
      <div className="Bottombar_iconBottombar">
        <img src={homelogo} alt="" />
      </div>
      <div className="Bottombar_iconBottombar middleQr">
        <img src="" alt="" />
      </div>
      <div className="Bottombar_iconBottombar">
        <img src={profilelogo} alt="" />
      </div>
    </div>
  )
}

export default Bottombar
