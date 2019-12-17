import React, { Component } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import "./AuthDirection.scss"
import backImg from "../img/back.svg"

import {
  Form,
  Jumbotron,
  Alert,
  Container,
  Button,
  FormControl
} from "react-bootstrap"

class BusinessRegister extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      phoneNumber: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    }
  }

  handleSubmit = event => {
    this.setState({ errors: {} })
    event.preventDefault()
    const business = {
      name: this.state.name,
      phoneNumber: this.state.phoneNumber,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    }
    axios
      .post("/business/register", business)
      .then(res => {
        this.props.history.push("/login")
      })
      .catch(error => this.setState({ errors: error.response.data }))
  }

  handleChange = event => {
    let { name, value } = event.target

    this.setState({
      [name]: value
    })
  }

  render() {
    let { errors } = this.state
    return (
      <Container className="home">
        <Link className="home_back" to="/">
          <img src={backImg} alt="back"></img>
          <h5>Retour</h5>
        </Link>
        <Jumbotron>
          <h2>Profil commerçant</h2>
        </Jumbotron>
        <div className="home_line"></div>
        <Form className = "home_form" noValidate onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Control
              placeholder="nom du commerce"
              isInvalid={!!errors.name}
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Control
              placeholder="numero de téléphone"
              isInvalid={!!errors.phoneNumber}
              name="phoneNumber"
              type="text"
              value={this.state.phoneNumber}
              onChange={this.handleChange}
            />
            <Form.Control.Feedback type="invalid">
              {errors.phoneNumber}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Control
              placeholder="Email"
              isInvalid={!!errors.email}
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Control
              placeholder="Mot de passe"
              isInvalid={!!errors.password}
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Control
              placeholder="Confirmer le mot de passe"
              isInvalid={!!errors.password2}
              name="password2"
              type="password"
              value={this.state.password2}
              onChange={this.handleChange}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password2}
            </Form.Control.Feedback>
          </Form.Group>
          <Button className="home_form_submit" type="submit">
          s'inscrire
          </Button>
        </Form>
      </Container>
    )
  }
}

export default BusinessRegister
