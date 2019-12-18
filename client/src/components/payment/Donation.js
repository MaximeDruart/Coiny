import React from "react"
import "./donation.scss"
import { Link } from "react-router-dom"
import backImg from "../img/back.svg"

const Donation = props => {
  return (
    <div className='containDonation'>
      <Link className='home_back' to='/homepage'>
        <img src={backImg} alt='back'></img>
        <h5>Retour</h5>
      </Link>
      <h1>Donation pour la cagnotte de Franprix</h1>
      <div className='containDonation_montant'>
        <input type='number' placeholder='0' />
      </div>
      <h2>Euros</h2>
      <button>Valider</button>
    </div>
  )
}

export default Donation
