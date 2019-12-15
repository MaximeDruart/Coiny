import React, { useContext } from "react"
import { Route, Redirect } from "react-router-dom"
import { LoginContext } from "../contexts/LoginContext"

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useContext(LoginContext)
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? <Component {...props} /> : <Redirect to='/login' />
      }
    />
  )
}

export default PrivateRoute
