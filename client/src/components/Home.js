import React from "react"
import { Link } from "react-router-dom"
import { Jumbotron, Container, Button } from "react-bootstrap"
import "./Home.scss"
import logImg from "../components/img/log.svg"

const Home = props => {
  return (
    <Container className="home">
      <Jumbotron>
        <h1>Welcome to Coiny</h1>
      </Jumbotron>
      <img src={logImg} alt="log"></img>
      <div className="links">
        <Link to="/login">
          <Button className="links_spaced-link" block variant="outline-primary">
            Login
          </Button>
        </Link>
        <Link to="/userregister">
          <Button className="links_spaced-link" block variant="outline-primary">
            Register as user
          </Button>
        </Link>
        <Link to="/businessregister">
          <Button className="links_spaced-link" block variant="outline-primary">
            Register as business
          </Button>
        </Link>
      </div>
    </Container>
  )
}

export default Home
