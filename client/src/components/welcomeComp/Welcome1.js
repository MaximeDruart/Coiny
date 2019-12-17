import React from "react"
import "./Welcome.scss"
import welcomeImg from "../img/welcome.svg"

function Welcome1() {
  return (
    <section className='welcome'>
      <h2 className=' welcome_subtitle'>Soyez aidé par votre quartier</h2>
      <div className='welcome_line'></div>
      <div className='welcome_picture'>
        <img src={welcomeImg} alt='welcome'></img>
      </div>
      <p>Profitez des cagnottes de commerces pour payer moins cher vos courses</p>
    </section>
  )
}

export default Welcome1
