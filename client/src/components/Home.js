import React from "react"
import { Link } from "react-router-dom"
import { Jumbotron, Container, Button } from "react-bootstrap"
import "./Home.scss"
import logImg from "../components/img/log.svg"

const Home = props => {
  return (
    <Container className="home">
      <Jumbotron>
        <h1>
          Bienvenue <br></br>sur Coiny
        </h1>
      </Jumbotron>
      <img src={logImg} alt="log"></img>
      <div className="links">
        <Link to="/login">
          <Button className="links_spaced-link" block variant="outline-primary">
            se connecter
          </Button>
        </Link>
      </div>
      <div class="register">
        <Link to="/userregister">
          <Button className="register_text" block variant="outline-primary">
            inscription utilisateur
          </Button>
        </Link>
        <Link to="/businessregister">
          <Button className="register_text" block variant="outline-primary">
            inscription commerçant
          </Button>
        </Link>
      </div>
    </Container>
  )
}

export default Home
