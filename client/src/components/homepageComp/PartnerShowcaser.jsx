import React from "react"
import "./PartnerShowcaser.scss"

function PartnerShowcase(props) {
  return (
    <div className='storeWindow'>
      <div className='viewStore'>
        <img src={props.business.picture} alt='' />
      </div>
      <h3>{props.business.name}</h3>
      <h3>{props.business.type}</h3>
    </div>
  )
}

export default PartnerShowcase
