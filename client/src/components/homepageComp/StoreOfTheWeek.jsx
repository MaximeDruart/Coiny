import "./StoreOfTheWeek.scss"
import React from "react"
import { Link } from "react-router-dom"

import epicerie from "../img/epicerieC.svg"
import boucherie from "../img/boucherieC.svg"
import Coiffeur from "../img/coiffeurC.svg"
import boulangerie from "../img/boulangerC.svg"
import Pharmacie from "../img/pharmacieC.svg"
import Supermarché from "../img/supermarchéC.svg"
import friperie from "../img/friperieC.svg"
import restaurant from "../img/restaurantC.svg"

const storeImgs = {
  Supermarché,
  epicerie,
  boucherie,
  Coiffeur,
  boulangerie,
  Pharmacie,
  friperie,
  restaurant
}

const StoreOfTheWeek = props => {
  const { type } = props
  return (
    <div className='squareStoreOfTheWeek'>
      <Link
        to={{
          pathname: `/search/${type}`,
          state: {
            type : type.toLowerCase()
          }
        }}
      >
        <img alt='' src={storeImgs[type]}></img>
      </Link>
    </div>
  )
}

export default StoreOfTheWeek
