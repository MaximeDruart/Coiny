import React, { Component } from "react"
import axios from "axios"

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
    console.log(business, "post")
    axios
      .post("/business/register", business)
      .then(res => {
        console.log("submitted")
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
      <form noValidate onSubmit={this.handleSubmit}>
        <h3>Business register</h3>
        <h4>
          {this.state.errors &&
            Object.keys(errors).map(key => <div key={key}>{errors[key]}</div>)}
        </h4>
        <fieldset>
          <label> Business name:</label>
          <input
            name='name'
            type='text'
            value={this.state.name}
            onChange={this.handleChange}
          />
        </fieldset>

        <fieldset>
          <label> Phone number:</label>
          <input
            name='phoneNumber'
            type='text'
            value={this.state.phoneNumber}
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

export default BusinessRegister
