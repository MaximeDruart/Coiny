import React from "react"
import "./donation.scss"
import donationImg from "../img/donationImg.svg"
import Back from "../auth/Back"

const Donation = props => {
  return (
    <div className='containDonation'>
      <Back history={props.history} />
      <img className='donationImg' src={donationImg} alt='donation' />
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
