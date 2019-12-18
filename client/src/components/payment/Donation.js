import React from "react"
import "./donation.scss"
import { Link } from "react-router-dom"
import backImg from "../img/back.svg"
import donationImg from "../img/donationImg.svg"

const Donation = () => {
  return (
    <div class="containDonation">
      <Link className="home_back" to="/homepage">
        <img src={backImg} alt="back"></img>
        <h5>Retour</h5>
      </Link>
      <img class="donationImg" src={donationImg} alt="donation" />
      <h1>Donation pour la cagnotte de Franprix</h1>
      <div class="containDonation_montant">
        <input type="number" placeholder="0" />
      </div>
      <h2>Euros</h2>
      <button>Valider</button>
    </div>
  )
}

export default Donation
