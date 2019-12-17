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

  render() {
    return (
      <div>
        <form onSubmit={donationSubmitHandler}>
          <h1>{`Paying ${this.state.donationAmount}€ to ${this.props.businessName}`}</h1>
          <h2>{this.state.error}</h2>
          <button>Pay</button>
        </form>
      </div>
    )
  }
}

export default Donate
