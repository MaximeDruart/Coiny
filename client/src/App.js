import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
// import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/main.scss"

import PrivateRoute from "./components/PrivateRoute"
import PrivateComponent from "./components/privateComponent"
import LoginContextProvider from "./contexts/LoginContext"

import UserRegister from "./components/auth/UserRegister"
import BusinessRegister from "./components/auth/BusinessRegister"
import Login from "./components/auth/Login"
import Home from "./components/Home"
import Homepage from "./components/homepage"
import UserProfile from "./components/UserProfile"
import PrivilegeAccess from "./components/PrivilegeAccess"

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <Router>
        <LoginContextProvider>
          <div className='App'>
            <Route path='/' exact component={Home}></Route>
            <Route path='/userregister' component={UserRegister}></Route>
            <Route path='/homepage' component={Homepage}></Route>
            <Route
              path='/businessregister'
              component={BusinessRegister}
            ></Route>
            <Route path='/login' component={Login}></Route>

            {/* PRIVATE ROUTES : USER NEEDS TO BE AUTHENTICATED TO ACCESS */}
            <PrivateRoute
              path='/private'
              component={PrivateComponent}
            ></PrivateRoute>

            <PrivateRoute
              path='/userprofile'
              component={UserProfile}
            ></PrivateRoute>
            <PrivateRoute
              path='/privilegeaccess'
              component={PrivilegeAccess}
            ></PrivateRoute>
          </div>
        </LoginContextProvider>
      </Router>
    )
  }
}

export default App
