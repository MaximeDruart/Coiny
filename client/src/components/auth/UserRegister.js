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

class UserRegister extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      password2: "",
      errors: ""
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    }
    axios
      .post("/users/register", user)
      .then(res => this.props.history.push("/getstarted"))
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
      <Container className='home'>
        <Link className='home_back' to='/getstarted'>
          <img src={backImg} alt='back'></img>
          <h5>Retour</h5>
        </Link>
        <Jumbotron>
          <h2>Profil utilisateur</h2>
        </Jumbotron>
        <div className='home_line'></div>
        <Form className='home_form' noValidate onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Control
              placeholder='Prénom'
              size='lg'
              name='firstName'
              type='text'
              value={this.state.firstName}
              onChange={this.handleChange}
              isInvalid={!!errors.firstName}
            />
            <Form.Control.Feedback type='invalid'>
              {errors.firstName}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Control
              placeholder='Nom de famille'
              size='lg'
              name='lastName'
              type='text'
              value={this.state.lastName}
              onChange={this.handleChange}
              isInvalid={!!errors.lastName}
            />
            <Form.Control.Feedback type='invalid'>
              {errors.lastName}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Control
              placeholder='E-mail'
              size='lg'
              name='email'
              type='email'
              value={this.state.email}
              onChange={this.handleChange}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type='invalid'>
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Control
              placeholder='Mot de passe'
              size='lg'
              name='password'
              type='password'
              value={this.state.password}
              onChange={this.handleChange}
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type='invalid'>
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Control
              placeholder='Confirmer le mot de passe'
              size='lg'
              name='password2'
              type='password'
              value={this.state.password2}
              onChange={this.handleChange}
              isInvalid={!!errors.password2}
            />
            <Form.Control.Feedback type='invalid'>
              {errors.password2}
            </Form.Control.Feedback>
          </Form.Group>
          <Button type='submit' className='home_form_submit'>
            s'inscrire
          </Button>
        </Form>
      </Container>
    )
  }
}

export default UserRegister
