import React from "react"
import "./Welcome.scss"
import welcomeImg from "../../img/welcome2.svg"

function Welcome2() {
  return (
    <section className="welcome">
      <h2 className=" welcome_subtitle">
        Aider devient <br></br>facile
      </h2>
      <div className="welcome_line"></div>
      <div className="welcome_picture">
        <img src={welcomeImg} alt="welcome"></img>
      </div>
      <p>
        Trouvez facilement des cagnottes de commerce à utiliser autour de vous.
      </p>
    </section>
  )
}

export default Welcome2
