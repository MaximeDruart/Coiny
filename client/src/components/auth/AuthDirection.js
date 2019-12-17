import React from "react"
import { Link } from "react-router-dom"
import { Jumbotron, Container, Button } from "react-bootstrap"
import "./AuthDirection.scss"
import logImg from "../img/log.svg"
import Login from "./Login"

const AuthDirection = props => {
  return (
    <Container className='home'>
      <Jumbotron>
        <h1>
          Bienvenue <br></br>sur Coiny
        </h1>
      </Jumbotron>
      <img src={logImg} alt='log'></img>
      <div className='links'>
        <Login history={props.history}></Login>
        {/* <Link to='/login'>
          <Button className='links_spaced-link' block variant='outline-primary'>
            se connecter
          </Button>
        </Link> */}
      </div>
      <div className='register'>
        <Link to='/userregister'>
          <Button className='register_text' block variant='outline-primary'>
            inscription utilisateur
          </Button>
        </Link>
        <Link to='/businessregister'>
          <Button className='register_text' block variant='outline-primary'>
            inscription commerçant
          </Button>
        </Link>
      </div>
    </Container>
  )
}

export default AuthDirection
