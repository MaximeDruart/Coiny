import React, { Component } from "react"
import axios from "axios"
import "./AuthDirection.scss"
import Back from "./Back"
import { Dropdown } from "semantic-ui-react"

import { Form, Jumbotron, Container, Button } from "react-bootstrap"

class BusinessRegister extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      phoneNumber: "",
      email: "",
      password: "",
      password2: "",
      type: "",
      typeOptions: [
        { key: "boucherie", text: "boucherie", value: "boucherie" },
        { key: "droguerie", text: "droguerie", value: "droguerie" },
        { key: "épicerie", text: "épicerie", value: "épicerie" },
        { key: "friperie", text: "friperie", value: "friperie" },
        { key: "mercerie", text: "mercerie", value: "mercerie" },
        { key: "poissonnerie", text: "poissonnerie", value: "poissonnerie" }
      ],
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
      password2: this.state.password2,
      type: this.state.type
    }
    axios
      .post("/business/register", business)
      .then(res => {
        this.props.history.push("/getstarted")
      })
      .catch(error => this.setState({ errors: error.response.data }))
  }

  handleChange = event => {
    let { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleDropDownChange = (e, { value }) => this.setState({ type: value })

  handleAddition = (e, { value }) => {
    this.setState(prevState => ({
      typeOptions: [{ text: value, value }, ...prevState.typeOptions]
    }))
  }

  render() {
    let { errors } = this.state
    return (
      <Container className='home'>
        <Back history={this.props.history} />
        <Jumbotron>
          <h2>Profil commerçant</h2>
        </Jumbotron>
        <div className='home_line'></div>
        <Form className='home_form' noValidate onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Control
              placeholder='nom du commerce'
              isInvalid={!!errors.name}
              name='name'
              type='text'
              value={this.state.name}
              onChange={this.handleChange}
            />
            <Form.Control.Feedback type='invalid'>
              {errors.name}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Control
              placeholder='numero de téléphone'
              isInvalid={!!errors.phoneNumber}
              name='phoneNumber'
              type='text'
              value={this.state.phoneNumber}
              onChange={this.handleChange}
            />
            <Form.Control.Feedback type='invalid'>
              {errors.phoneNumber}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Control
              placeholder='Email'
              isInvalid={!!errors.email}
              name='email'
              type='email'
              value={this.state.email}
              onChange={this.handleChange}
            />
            <Form.Control.Feedback type='invalid'>
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Control
              placeholder='Mot de passe'
              isInvalid={!!errors.password}
              name='password'
              type='password'
              value={this.state.password}
              onChange={this.handleChange}
            />
            <Form.Control.Feedback type='invalid'>
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Control
              placeholder='Confirmer le mot de passe'
              isInvalid={!!errors.password2}
              name='password2'
              type='password'
              value={this.state.password2}
              onChange={this.handleChange}
            />
            <Form.Control.Feedback type='invalid'>
              {errors.password2}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Dropdown
              id='business-dropdown'
              options={this.state.typeOptions}
              placeholder='type de commerce'
              search
              selection
              fluid
              allowAdditions
              value={this.state.type}
              name='type'
              onAddItem={this.handleAddition}
              onChange={this.handleDropDownChange}
            />
            <Form.Control.Feedback type='invalid'>
              {errors.type}
            </Form.Control.Feedback>
          </Form.Group>

          <Button className='home_form_submit' type='submit'>
            s'inscrire
          </Button>
        </Form>
      </Container>
    )
  }
}

export default BusinessRegister
