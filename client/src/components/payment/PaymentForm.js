import React, { Component } from "react"
import { UIDataContext } from "../../contexts/UIDataContext"
import { LoginContext } from "../../contexts/LoginContext"
import { Form } from "react-bootstrap"
import "./paymentForm.scss"
import axios from "axios"
import { Redirect } from "react-router-dom"
import Back from "../auth/Back"

class PaymentForm extends Component {
  static contextType = UIDataContext
  constructor(props) {
    super(props)
    this.state = {
      amount: "",
      businessId: "",
      cardNumber: "",
      cardName: "",
      expiryDate: "",
      cvc: "",
      errors: "",
      transactionEnd: ""
    }
  }

  componentDidMount() {
    const { state } = this.props.location
    if (state) {
      this.context.getBusinessDataForId(state.id)
      this.setState({
        amount: state.amount,
        businessId: state.id
      })
    }
  }

  handleChange = event => {
    let { name, value } = event.target
    if (name === "cvc" && value.length > 3) value = value.slice(0, 3)
    this.setState({
      [name]: value
    })
  }

  donationSubmitHandler = (e, id) => {
    e.preventDefault()
    axios
      .post("/users/donate", {
        user: { id },
        donationData: {
          amount: this.state.amount,
          target: this.state.businessId
        },
        cardData: {
          cardNumber: this.state.cardNumber,
          cardName: this.state.cardName,
          expiryDate: this.state.expiryDate,
          cvc: this.state.cvc
        }
      })
      .then(() =>
        this.setState({
          transactionEnd: (
            <Redirect
              to={{
                pathname: "/success",
                state: {
                  amount: this.state.amount,
                  businessName: this.context.businessDataForId.name
                }
              }}
            />
          )
        })
      )
      .catch(err => this.setState({ errors: err.response.data }))
  }

  render() {
    return (
      <LoginContext.Consumer>
        {loginContext => (
          <UIDataContext.Consumer>
            {uiContext => (
              <div className='paymentFormContainer'>
                <Back history={this.props.history} />
                {this.props.location.state && uiContext.businessDataForId ? (
                  <Form
                    className='home_form'
                    noValidate
                    onSubmit={event =>
                      this.donationSubmitHandler(event, loginContext.user.id)
                    }
                  >
                    <h1>{`Paying ${this.state.amount}€ to ${this.context.businessDataForId.name}`}</h1>
                    <Form.Group>
                      <Form.Control
                        placeholder='Numéro de carte'
                        name='cardNumber'
                        type='number'
                        value={this.state.cardNumber}
                        onChange={this.handleChange}
                        isInvalid={!!this.state.errors.cardNumber}
                      />
                      <Form.Control.Feedback type='invalid'>
                        {this.state.errors.cardNumber}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                      <Form.Control
                        placeholder='Nom du porteur'
                        name='cardName'
                        type='text'
                        value={this.state.cardName}
                        onChange={this.handleChange}
                        isInvalid={!!this.state.errors.cardName}
                      />
                      <Form.Control.Feedback type='invalid'>
                        {this.state.errors.cardName}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                      <Form.Control
                        placeholder="Date d'expiration"
                        name='expiryDate'
                        type='date'
                        value={this.state.expiryDate}
                        onChange={this.handleChange}
                        isInvalid={!!this.state.errors.expiryDate}
                      />
                      <Form.Control.Feedback type='invalid'>
                        {this.state.errors.expiryDate}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                      <Form.Control
                        placeholder='CVC'
                        name='cvc'
                        type='number'
                        value={this.state.cvc}
                        onChange={this.handleChange}
                        isInvalid={!!this.state.errors.cvc}
                      />
                      <Form.Control.Feedback type='invalid'>
                        {this.state.errors.cvc}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <button
                      className='home_form_submit'
                      variant='outline-primary'
                      disabled={this.state.loading}
                      type='submit'
                    >
                      {this.state.isLoading ? "Loading..." : "payer"}
                    </button>
                  </Form>
                ) : (
                  "cannot find payment informations, please try again."
                )}
                {this.state.transactionEnd}
              </div>
            )}
          </UIDataContext.Consumer>
        )}
      </LoginContext.Consumer>
    )
  }
}

export default PaymentForm
