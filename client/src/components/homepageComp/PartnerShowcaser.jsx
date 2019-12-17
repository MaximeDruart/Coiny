import React from "react"
import "./PartnerShowcaser.scss"
import { Link } from "react-router-dom"


function PartnerShowcase(props) {
  return (
    <Link to='/storePage'>

    <div className='storeWindow'>
      <div className='viewStore'>
        <img src={props.business.picture} alt='' />
      </div>
      <h3>{props.business.name}</h3>
      <h3>{props.business.type}</h3>
    </div>
    </Link>

  )
}

export default PartnerShowcase
