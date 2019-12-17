import React, { Component } from "react"
import { LoginContext } from "../../contexts/LoginContext"
import "./AuthDirection.scss"

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
    if (this.context.isAuthenticated) this.props.history.push("/homepage")
    return (
      <LoginContext.Consumer>
        {loginContext => (
          <div className="connexion">
            <Form
              className="home_form"
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
                <Form.Control
                  placeholder="Mail"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  isInvalid={!!loginContext.errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {loginContext.errors.email}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Control
                  placeholder="Mot de passe"
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  isInvalid={!!loginContext.errors.password}
                />
                <Form.Control.Feedback type="invalid">
                  {loginContext.errors.password}
                </Form.Control.Feedback>
              </Form.Group>
              <Button
                className="home_form_submit"
                block
                variant="outline-primary"
                disabled={loginContext.loading}
                type="submit"
              >
                {loginContext.isLoading ? "Loading..." : "Se connecter"}
              </Button>
            </Form>
          </div>
        )}
      </LoginContext.Consumer>
    )
  }
}

export default Login
