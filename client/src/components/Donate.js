import React, { Component } from "react"
import { LoginContext } from "../contexts/LoginContext"

// this component should be rendered on a custom route with the business id encoded
// ie : businesses/donate:id with id = a set business id
class Donate extends Component {
  static contextType = LoginContext
  constructor(props) {
    super(props)
    this.state = {
      // businessName : this.props.businessName
      // businessId : this.props.params.id // getting id from router params
      // donationAmount : this.props.amount // need to pass it as a prop
      error: ""
    }
  }

  donationSubmitHandler = e => {
    e.preventDefault()
    axios
      .post("/users/donate", {
        user: {
          id: this.context.id
        },
        donationData: {
          amount: this.state.donationAmount,
          target: this.state.businessId
        }
      })
      .then(() => this.props.history.push("/paymentSuccessful"))
      .catch(error => this.setState({ error }))
  }

  handleChange = event => {
    let { name, value } = event.target

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        <h1>Donating X € to Y</h1>
        <Form
          className='donation_form'
          noValidate
          onSubmit={this.donationSubmitHandler}
        >
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

          <Button className='donation_form_submit' type='submit'>
            Payer
          </Button>
        </Form>
      </div>
    )
  }
}

export default Donate
