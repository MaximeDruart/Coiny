import React from "react"
import { LoginContext } from "../contexts/LoginContext"

const PrivateComponent = props => {
  return (
    <LoginContext.Consumer>
      {loginContext => (
        <div>
          <h1>You are now logged in (protected content blabla)</h1>
          <button type='button' onClick={loginContext.logout}>
            Log out
          </button>
        </div>
      )}
    </LoginContext.Consumer>
  )
}

export default PrivateComponent
