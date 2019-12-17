import React, { useContext } from "react"
import { Route, Redirect } from "react-router-dom"
import { LoginContext } from "../contexts/LoginContext"

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated, localStorageHasBeenRead } = useContext(LoginContext)
  // first render is done before local storage has been read so redirect is being rendered even so the 2nd render would see that user !== null
  // To make up for that i'm only rendering <Redirect> if local storage has been read
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : localStorageHasBeenRead ? (
          <Redirect to='/getstarted' />
        ) : (
          ""
        )
      }
    />
  )
}

export default PrivateRoute
