import React from "react"
import "./PartnerShowcaser.scss"
import { Link } from "react-router-dom"
import { CSSTransition } from "react-transition-group"
import uuid from "uuid"

import epicerie from "../img/epicerie.svg"
import boucherie from "../img/boucherie.svg"
import coiffeur from "../img/coiffeur.svg"
import boulangerie from "../img/boulangerie.svg"
import pharmacie from "../img/pharmacie.svg"
import supermarche from "../img/supermarche.svg"
import friperie from "../img/friperie.svg"
import restaurant from "../img/restaurant.svg"
import store from "../img/store.svg"

const storeImgs = {
  epicerie,
  boucherie,
  coiffeur,
  boulangerie,
  pharmacie,
  friperie,
  restaurant,
  store
}

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
            <img
              src={
                business.type !== "store"
                  ? storeImgs[business.type]
                  : supermarche
              }
              alt=''
            />
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
