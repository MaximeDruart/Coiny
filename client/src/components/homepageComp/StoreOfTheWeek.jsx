import "./StoreOfTheWeek.scss"
import React from "react"
import { Link } from "react-router-dom"

const StoreOfTheWeek = props => {
  const { type } = props
  return (
    <div className='squareStoreOfTheWeek'>
      <Link
        to={{
          pathname: `/search/${type}`,
          state: {
            type
          }
        }}
      >
        <div className='storeWeeklyName'>
          <h2>{type}</h2>
        </div>
      </Link>
    </div>
  )
}

export default StoreOfTheWeek
