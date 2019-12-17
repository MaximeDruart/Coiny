import React, { useState } from "react"
import Welcome1 from "./Welcome1"
import Welcome2 from "./Welcome2"
import Welcome3 from "./Welcome3"
import "./Welcome.scss"
import StartButton from "./StartButton"
import Header from "./Header"
import nextImg from "../../images/next.svg"

function Welcome() {
  const [page, setPage] = useState(1)
  const increment = () => {
    setPage(page + 1)
  }
  return (
    <div className="main">
      <Header />
      {page === 1 ? <Welcome1 /> : page === 2 ? <Welcome2 /> : <Welcome3 />}
      <img onClick={increment} className="welcome_next" src={nextImg} alt="next"></img>
      <StartButton />
    </div>
  )
}

export default Welcome
