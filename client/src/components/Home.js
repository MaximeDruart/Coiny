import React, { Component } from "react"
import { Link } from "react-router-dom"

class Home extends Component {
  render() {
    return (
      <div>
        <h1>This is home</h1>
        <button>
          <Link to='/userregister'>Register as user</Link>
        </button>
        <br></br>
        <button>
          <Link to='/businessregister'>Register as business</Link>
        </button>
        <br></br>
        <button>
          <Link to='/login'>Login to your account</Link>
        </button>
      </div>
    )
  }
}

export default Home
