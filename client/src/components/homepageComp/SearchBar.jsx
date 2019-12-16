import React from 'react';
import './SearchBar.scss'
import searchMeImg from "../img/icn_search_light.png"

function SearchBar(){
    return(
        <div className="searchContainer">
            <div className="searchInput"> 
            <input type="text" name="" id="" placeholder="recherchez un store"></input>
             </div> 
            <div className="yellowIcon"><img src="" alt=""/><img src={searchMeImg} alt=""/></div>
            
        </div>

    )
}

export default SearchBar