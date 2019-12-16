import React from 'react';
import './PartnerShowcaser.scss'
import storeImg from '../img/magasin1.jpg'
function PartnerShowcase(){
    return(
        <div className="storeWindow">
            <div className="viewStore"><img src={storeImg} alt=""/></div>
            <h3>name of the store</h3>
            <h3>type of store</h3>
            <div className="storeDescription"></div>
        </div>
    )
}


export default PartnerShowcase