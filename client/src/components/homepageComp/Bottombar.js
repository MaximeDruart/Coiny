import React, { useContext } from "react"
import { Link, useLocation } from "react-router-dom"
import "./Bottombar.scss"
import homelogo from "../img/icn_home_inactive.svg"
import profilelogo from "../img/icn_profile_inactive.svg"
import logoImg from "../img/logo.svg"
import { LoginContext } from "../../contexts/LoginContext"

const Bottombar = props => {
  const { userType, receiverStatus } = useContext(LoginContext)
  const { pathname } = useLocation()
  return (
    <div className='Bottombar'>
      <div
        style={{ opacity: props.location.pathname === "/homepage" && "0.5" }}
        className='Bottombar_iconBottombar'
      >
        <Link
          style={{ pointerEvents: pathname === "/homepage" && "none" }}
          to='/homepage'
        >
          <img src={homelogo} alt='' />
        </Link>
      </div>

      <Link to={receiverStatus ? "/barcode" : "/privilegeaccess"}>
        <div className='Bottombar_iconBottombar middleQr'>
          <img src={logoImg} alt='logo' />
        </div>
      </Link>
      <div
        style={{ opacity: props.location.pathname === "/userprofile" && "0.5" }}
        className='Bottombar_iconBottombar'
      >
        <Link to={userType === "user" ? "/userprofile" : "/businessprofile"}>
          <img src={profilelogo} alt='' />
        </Link>
      </div>
    </div>
  )
}

export default Bottombar
