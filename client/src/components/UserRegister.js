import React, { Component } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { Form, Jumbotron, Alert, Container, Row, Button } from "react-bootstrap"

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
      .then(res => this.props.history.push("/login"))
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
      <Container>
        <Jumbotron>
          <h2>User registration</h2>
        </Jumbotron>
        <Link to='/'>
          <Button>Go back</Button>
        </Link>
        {this.state.errors &&
          Object.keys(errors).map(key => (
            <Alert key={key} variant='danger'>
              {errors[key]}
            </Alert>
          ))}
        <Form noValidate onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label> First name:</Form.Label>
            <Form.Control
              size='lg'
              name='firstName'
              type='text'
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label> Last name:</Form.Label>
            <Form.Control
              size='lg'
              name='lastName'
              type='text'
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label> Email:</Form.Label>
            <Form.Control
              size='lg'
              name='email'
              type='email'
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label> Password :</Form.Label>
            <Form.Control
              size='lg'
              name='password'
              type='password'
              value={this.state.password}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label> Confirm your password :</Form.Label>
            <Form.Control
              size='lg'
              name='password2'
              type='password'
              value={this.state.password2}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Control size='lg' type='submit' value='Submit' />
        </Form>
      </Container>
    )
  }
}

export default UserRegister
