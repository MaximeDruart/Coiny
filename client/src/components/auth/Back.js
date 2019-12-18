import React from "react"
import "./AuthDirection.scss"
import backImg from "../img/back.svg"

const Back = props => {
  const { history } = props
  return (
    <div onClick={history.goBack} className='home_back'>
      <div className='home_back_arrow'>
        <img src={backImg} alt='back'></img>
        <h5>Retour</h5>
      </div>
    </div>
  )
}

export default Back
