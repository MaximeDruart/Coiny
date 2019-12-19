import React from "react"
import { Link } from "react-router-dom"
import { Jumbotron, Container, Button } from "react-bootstrap"
import "./AuthDirection.scss"
import Login from "./Login"
import Header from "../welcomeComp/Header"
import { CSSTransition } from "react-transition-group"

const AuthDirection = props => {
  return (
    <Container className='home'>
      <CSSTransition
        appear={true}
        in={true}
        timeout={0}
        classNames='loginElements'
      >
        <div className='loginElements'>
          <Header />
          <Jumbotron>
            <h3>Connexion</h3>
          </Jumbotron>
          <div className='links'>
            <Login history={props.history}></Login>
          </div>
        </div>
      </CSSTransition>
      <div className='register'>
        <Link to='/userregister'>
          <Button className='register_text' block variant='outline-primary'>
            Inscription utilisateur
          </Button>
        </Link>
        <Link to='/businessregister'>
          <Button className='register_text' block variant='outline-primary'>
            Inscription commerçant
          </Button>
        </Link>
      </div>
    </Container>
  )
}

export default AuthDirection
