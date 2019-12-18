import "./StoreOfTheWeek.scss"
import React from "react"
import { Link } from "react-router-dom"

const StoreOfTheWeek = props => {
  const { business } = props
  return (
    <div className='squareStoreOfTheWeek'>
      <Link to={`/business/${business._id}`}>
        <div className='storeBg'>
          <img src={business.picture} alt='' />
        </div>
        <div className='storeWeeklyName'>
          <h2>{business.name}</h2>
        </div>
      </Link>
    </div>
  )
}

export default StoreOfTheWeek
