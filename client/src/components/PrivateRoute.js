import React from "react"
import { Route, Redirect } from "react-router-dom"
import { LoginContext } from "../contexts/LoginContext"

let authTest = true
// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <LoginContext.Consumer>
//     {context => {
//       console.log(context)
//       return (
//         <Route
//           {...rest}
//           render={props =>
//             context.isAuthenticated ? (
//               <Component {...props} />
//             ) : (
//               <Redirect to='/login' />
//             )
//           }
//         />
//       )
//     }}
//   </LoginContext.Consumer>
// )

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <LoginContext.Consumer>
        {LoginContext =>
          LoginContext.isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect to='/login' />
          )
        }
      </LoginContext.Consumer>
    )}
  />
)

export default PrivateRoute
