import React from 'react';
import './PartnerShowcaser.scss'


function PartnerShowcase(business){
    return(
        <div className="storeWindow">
            <div className="viewStore"><img src={business} alt=""/></div>
            <h3>{business}</h3>
            <h3>{business}</h3>
        </div>
    )
}


export default PartnerShowcase