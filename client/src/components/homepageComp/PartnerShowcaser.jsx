import React from "react"
import "./PartnerShowcaser.scss"
import { Link } from "react-router-dom"

function PartnerShowcase(props) {
  const { business } = props
  return (
    <Link to={`/business/${business._id}`}>
      <div className='storeWindow'>
        <div className='storeWindow_viewStore'>
          <img src={props.business.picture} alt='' />
        </div>
        <div className='storeWindow_text'>
          <h3>{props.business.name}</h3>
          <h4>{props.business.type}</h4>
        </div>
      </div>
    </Link>
  )
}

export default PartnerShowcase
