import React from "react"
import { Link } from "react-router-dom"
import "./Bottombar.scss"
import homelogo from "../img/icn_home_inactive.svg"
import profilelogo from "../img/icn_profile_inactive.svg"

const Bottombar = () => {
  return (
    <div className='Bottombar'>
      <div className='Bottombar_iconBottombar'>
        <Link to='/homepage'>
        <img src={homelogo} alt='' />
        </Link>
      </div>
      <div className='Bottombar_iconBottombar middleQr'>
        <img src='' alt='' />
      </div>
      <div className='Bottombar_iconBottombar'>
        <Link to='/userprofile'>
          <img src={profilelogo} alt='' />
        </Link>
      </div>
    </div>
  )
}

export default Bottombar
