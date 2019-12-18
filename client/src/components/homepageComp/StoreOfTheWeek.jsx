import "./StoreOfTheWeek.scss"
import React from "react"
import { Link } from "react-router-dom"

const StoreOfTheWeek = props => {
  const { store } = props
  return (
    <div className='squareStoreOfTheWeek'>
      <Link type={props.type} to='./category'>
        <div className='storeWeeklyName'>
          <h2>{props.type}</h2>
        </div>
      </Link>
    </div>
  )
}

export default StoreOfTheWeek
