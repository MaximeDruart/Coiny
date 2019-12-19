import React from "react"
import "./PartnerShowcaser.scss"
import { Link } from "react-router-dom"
import { CSSTransition } from "react-transition-group"
import uuid from "uuid"

function PartnerShowcase(props) {
  const { business } = props
  return (
    <CSSTransition
      appear={true}
      in={!!business}
      timeout={300}
      classNames='storeWindow'
      key={uuid()}
    >
      <Link to={`/business/${business._id}`}>
        <div className='storeWindow'>
          <div className='storeWindow_viewStore'>
            <img src={business.picture} alt='' />
          </div>
          <div className='storeWindow_text'>
            <h3>{business.name}</h3>
            <h4>{business.type}</h4>
          </div>
        </div>
      </Link>
    </CSSTransition>
  )
}

export default PartnerShowcase
