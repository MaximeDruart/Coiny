import React from 'react';
import './PartnerShowcaser.scss'


function PartnerShowcase(props){
    return(
        <div className="storeWindow">
            <div className="viewStore"><img src={props.storeImg} alt=""/></div>
            <h3>{props.storeName}</h3>
            <h3>{props.storeType}</h3>
        </div>
    )
}


export default PartnerShowcase