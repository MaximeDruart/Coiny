import React from "react"
import "./AuthDirection.scss"
import { Link } from "react-router-dom"
import backImg from "../img/back.svg"

const Back = () => {
  return (
    <div class="home_back">
      <Link className="home_back_arrow" to="/getstarted">
        <img src={backImg} alt="back"></img>
        <h5>Retour</h5>
      </Link>
    </div>
  )
}

export default Back
