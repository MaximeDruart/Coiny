import "./StoreOfTheWeek.scss"
import React from "react"
import { Link } from "react-router-dom"

const StoreOfTheWeek = props => {
  console.log(props.type)
  const { store } = props
  return (
    <div  className='squareStoreOfTheWeek'>
      <Link  to={{
        pathname:'./category',
        state:{
          type:props.type
        }
      }}>
        <div className='storeWeeklyName'>
          <h2>{props.type}</h2>
        </div>
      </Link>
    </div>
  )
}

export default StoreOfTheWeek
