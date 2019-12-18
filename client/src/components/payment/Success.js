import React from "react"
import "./success.scss"
import successImg from "../img/success.svg"
import { useLocation } from "react-router-dom"

const Success = () => {
  const { state } = useLocation()
  return (
    <div className='containSuccess'>
      <h1>Merci !</h1>
      <img src={successImg} alt='success' />
      {state && (
        <h2>{`Votre don de ${state.amount}€ chez ${state.businessName} a bien été effectué!`}</h2>
      )}
    </div>
  )
}

export default Success
