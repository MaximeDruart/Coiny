import React, { useState } from "react"
import { Link } from "react-router-dom"
import Welcome1 from "./Welcome1"
import Welcome2 from "./Welcome2"
import Welcome3 from "./Welcome3"
import "./Welcome.scss"
import StartButton from "./StartButton"
import Header from "./Header"
import nextImg from "../img/next.svg"

const Welcome = () => {
  const [page, setPage] = useState(1)
  const increment = () => {
    setPage(page + 1)
  }
  return (
    <div className='main'>
      <Header />
      {page === 1 ? <Welcome1 /> : page === 2 ? <Welcome2 /> : <Welcome3 />}
      <img
        onClick={increment}
        className={page === 3 ? "welcome_next hidden" : "welcome_next"}
        src={nextImg}
        alt='next'
      ></img>
      <Link to='/getstarted'>
        <StartButton />
      </Link>
    </div>
  )
}

export default Welcome
