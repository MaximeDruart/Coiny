import React, { useContext } from "react"
import { LoginContext } from "../contexts/LoginContext"

const PrivateComponent = () => {
  const { logout, user } = useContext(LoginContext)
  console.log(user)
  return (
    <div>
      <h1>Hello {user.firstName} !</h1>
      <h2>You are now logged in (protected content blabla)</h2>
      <button type='button' onClick={logout}>
        Log out
      </button>
    </div>
  )
}

export default PrivateComponent
