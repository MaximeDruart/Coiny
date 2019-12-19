import React from "react"
import "./Welcome.scss"
import welcomeImg from "../img/welcome3.svg"
import { CSSTransition } from "react-transition-group"

const Welcome3 = () => {
  return (
    <CSSTransition appear={true} in={true} timeout={0} classNames='welcome'>
      <section className='welcome'>
        <h2 className=' welcome_subtitle'>
          Trouvez <br></br>un magasin
        </h2>
        <div className='welcome_line'></div>
        <div className='welcome_picture'>
          <img src={welcomeImg} alt='welcome'></img>
        </div>
        <p>Pleins de partenaires vous attendent.</p>
      </section>
    </CSSTransition>
  )
}

export default Welcome3
