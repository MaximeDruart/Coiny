import React, { Component } from "react"
import { Link } from "react-router-dom"
import { LoginContext } from "../../contexts/LoginContext"

import {
  Form,
  Jumbotron,
  Alert,
  Container,
  Button,
  FormControl
} from "react-bootstrap"

class Login extends Component {
  static contextType = LoginContext
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      errors: ""
    }
  }

  handleChange = event => {
    let { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  render() {
    if (this.context.isAuthenticated) this.props.history.push("/home")
    return (
      <LoginContext.Consumer>
        {loginContext => (
          <Container>
            <Jumbotron>
              <h3>User register</h3>
            </Jumbotron>
            <Link to='/'>
              <Button>Go back</Button>
            </Link>
            <Form
              noValidate
              onSubmit={e => {
                e.preventDefault()
                loginContext.login({
                  email: this.state.email,
                  password: this.state.password
                })
              }}
            >
              <Form.Group>
                <Form.Label> Email:</Form.Label>
                <Form.Control
                  name='email'
                  type='email'
                  value={this.state.email}
                  onChange={this.handleChange}
                  isInvalid={!!loginContext.errors.email}
                />
                <Form.Control.Feedback type='invalid'>
                  {loginContext.errors.email}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label> Password :</Form.Label>
                <Form.Control
                  name='password'
                  type='password'
                  value={this.state.password}
                  onChange={this.handleChange}
                  isInvalid={!!loginContext.errors.password}
                />
                <Form.Control.Feedback type='invalid'>
                  {loginContext.errors.password}
                </Form.Control.Feedback>
              </Form.Group>
              <Button
                block
                variant='outline-primary'
                disabled={loginContext.loading}
                type='submit'
              >
                {loginContext.isLoading ? "Loading..." : "Submit"}
              </Button>
            </Form>
          </Container>
        )}
      </LoginContext.Consumer>
    )
  }
}

export default Login
