import React, { Component } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { Form, Jumbotron, Alert, Container, Row, Button } from "react-bootstrap"

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
      <Container>
        <Jumbotron>
          <h2>Business register</h2>
        </Jumbotron>
        <Link to='/'>
          <Button>Go back</Button>
        </Link>
        {this.state.errors &&
          Object.keys(errors).map(key => (
            <Alert variant='danger' key={key}>
              {errors[key]}
            </Alert>
          ))}
        <Form noValidate onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label> Business name:</Form.Label>
            <Form.Control
              name='name'
              type='text'
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label> Phone number:</Form.Label>
            <Form.Control
              name='phoneNumber'
              type='text'
              value={this.state.phoneNumber}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label> Email:</Form.Label>
            <Form.Control
              name='email'
              type='email'
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label> Password :</Form.Label>
            <Form.Control
              name='password'
              type='password'
              value={this.state.password}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label> Confirm your password :</Form.Label>
            <Form.Control
              name='password2'
              type='password'
              value={this.state.password2}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Control type='submit' value='Submit' />
        </Form>
      </Container>
    )
  }
}

export default BusinessRegister
