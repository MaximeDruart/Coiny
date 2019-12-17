import React from "react"
import "./Welcome.scss"
import logoImg from '../../images/logo.svg'

function Header(){
    return(
        <div className="title">
          <h1>Coiny</h1>
          <img src={logoImg} alt="logo"></img>
        </div>
    )
}

export default Header