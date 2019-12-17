import React from "react"
import { Link } from "react-router-dom"
import { Jumbotron, Container, Button } from "react-bootstrap"
import "./AuthDirection.scss"
import logImg from "../img/log.svg"
import Login from "./Login"
import Header from "../welcomeComp/Header"

const AuthDirection = props => {
  return (
    <Container className="home">
      <Header />
      <img src={logImg} alt="log"></img>
      <Jumbotron>
        <h3>Connexion</h3>
      </Jumbotron>
      <div className="links">
        <Login history={props.history}></Login>
        {/* <Link to='/login'>
          <Button className='links_spaced-link' block variant='outline-primary'>
            se connecter
          </Button>
        </Link> */}
      </div>
      <div className="register">
        <Link to="/userregister">
          <Button className="register_text" block variant="outline-primary">
            Inscription utilisateur
          </Button>
        </Link>
        <Link to="/businessregister">
          <Button className="register_text" block variant="outline-primary">
            Inscription commerçant
          </Button>
        </Link>
      </div>
    </Container>
  )
}

export default AuthDirection
