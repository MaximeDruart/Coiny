import React from "react"
import "./Welcome.scss"
import welcomeImg from "../img/welcome3.svg"

function Welcome3() {
  return (
    <section className="welcome">
      <h2 className=" welcome_subtitle">
        Trouvez <br></br>un magasin
      </h2>
      <div className="welcome_line"></div>
      <div className="welcome_picture">
        <img src={welcomeImg} alt="welcome"></img>
      </div>
      <p>Pleins de partenaires vous attendent.</p>
    </section>
  )
}

export default Welcome3
