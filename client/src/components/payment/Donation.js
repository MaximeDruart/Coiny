import React, { useState } from "react"
import "./donation.scss"
import donationImg from "../img/mydonation.svg"
import Back from "../auth/Back"
import { useParams, Link } from "react-router-dom"

const Donation = props => {
  let [amount, setAmount] = useState("")
  const { id } = useParams()

  const handleChange = event => {
    let { value } = event.target
    if (value.length > 3) value = value.slice(0, 3)
    setAmount(value)
  }

  return (
    <div className='containDonation'>
      <Back history={props.history} />
      <h1>Donation pour la cagnotte de Franprix</h1>
      <img className='donationImg' src={donationImg} alt='donation' />
      <div className='containDonation_montant'>
        <input
          name='amount'
          value={amount}
          onChange={handleChange}
          type='number'
          placeholder='0'
        />
      </div>
      <h2>Euros</h2>
      <Link
        to={{
          pathname: parseInt(amount) > 0 && "/paymentform",
          state: {
            amount: parseInt(amount),
            id
          }
        }}
      >
        <button>Valider</button>
      </Link>
    </div>
  )
}

export default Donation
