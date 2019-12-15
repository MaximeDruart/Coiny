import React, { Component } from "react"
import axios from "axios"

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
      <form noValidate onSubmit={this.handleSubmit}>
        <h3>User register</h3>
        <h4>
          {this.state.errors &&
            Object.keys(errors).map(key => <div>{errors[key]}</div>)}
        </h4>
        <fieldset>
          <label> First name:</label>
          <input
            name='firstName'
            type='text'
            value={this.state.firstName}
            onChange={this.handleChange}
          />
        </fieldset>

        <fieldset>
          <label> Last name:</label>
          <input
            name='lastName'
            type='text'
            value={this.state.lastName}
            onChange={this.handleChange}
          />
        </fieldset>

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

        <fieldset>
          <label> Confirm your password :</label>
          <input
            name='password2'
            type='password'
            value={this.state.password2}
            onChange={this.handleChange}
          />
        </fieldset>
        <input type='submit' value='Submit' />
      </form>
    )
  }
}

export default UserRegister
