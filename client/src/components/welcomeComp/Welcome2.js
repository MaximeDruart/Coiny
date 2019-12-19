import React from "react"
import "./Welcome.scss"
import welcomeImg from "../img/welcome2.svg"
import { CSSTransition } from "react-transition-group"

function Welcome2() {
  return (
    <CSSTransition appear={true} in={true} timeout={0} classNames='welcome'>
      <section className='welcome'>
        <h2 className=' welcome_subtitle'>
          Aider devient <br></br>facile
        </h2>
        <div className='welcome_line'></div>
        <div className='welcome_picture'>
          <img src={welcomeImg} alt='welcome'></img>
        </div>
        <p>
          Trouvez facilement des cagnottes de commerces à utiliser autour de
          vous.
        </p>
      </section>
    </CSSTransition>
  )
}

export default Welcome2
