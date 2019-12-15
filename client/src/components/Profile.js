import React from "react"
import { LoginContext } from "../contexts/LoginContext"
import { Link } from "react-router-dom"

const Profile = () => {
  return (
    <LoginContext.Consumer>
      {context => (
        <div>
          <h1>You are now logged in</h1>
          <button type='button' onClick={context.logout}>
            Log out
          </button>
          <button type='button'>
            <Link to='/private'>Go to private</Link>
          </button>
        </div>
      )}
    </LoginContext.Consumer>
  )
}

export default Profile
