import React, { Component } from "react"
import "react-router-dom"
import { LoginContext } from "../contexts/LoginContext"

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
    if (this.context.isAuthenticated) this.props.history.push("/private")
    return (
      <LoginContext.Consumer>
        {loginContext => (
          <form
            noValidate
            onSubmit={e => {
              e.preventDefault()
              loginContext.login({
                email: this.state.email,
                password: this.state.password
              })
            }}
          >
            <h3>User register</h3>
            <h4>
              {loginContext.errors &&
                Object.keys(loginContext.errors).map(key => (
                  <div key={key}>{loginContext.errors[key]}</div>
                ))}
            </h4>
            <fieldset>
              <label> Email:</label>
              <input
                name='email'
                type='email'
                value={this.state.email}
                onChange={this.handleChange}
              />
            </fieldset>
            <fieldset>
              <label> Password :</label>
              <input
                name='password'
                type='password'
                value={this.state.password}
                onChange={this.handleChange}
              />
            </fieldset>
            <input type='submit' value='Submit' />
          </form>
        )}
      </LoginContext.Consumer>
    )
  }
}

export default Login
