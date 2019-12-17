import "./StoreOfTheWeek.scss"
import React from 'react';
import { Link } from "react-router-dom"


function StoreOfTheWeek(props){

    return(
        <div className='squareStoreOfTheWeek'>
          <Link to='/storePage'>
          <div className="storeBg"><img src={props.business.picture} alt=""/></div>
            <div className="storeWeeklyName">
              <h2>{props.business.name}</h2>
            </div>
          </Link>
          </div>

    )
}

export default StoreOfTheWeek