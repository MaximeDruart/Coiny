import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./main.scss"

import UserRegister from "./components/auth/UserRegister"
import BusinessRegister from "./components/auth/BusinessRegister"
import Login from "./components/auth/Login"
import Home from "./components/Home"
import PrivateRoute from "./components/PrivateRoute"
import privateComponent from "./components/privateComponent"

import LoginContextProvider from "./contexts/LoginContext"

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
            <Route
              path='/businessregister'
              component={BusinessRegister}
            ></Route>
            <Route path='/login' component={Login}></Route>
            <PrivateRoute
              path='/private'
              component={privateComponent}
            ></PrivateRoute>
          </div>
        </LoginContextProvider>
      </Router>
    )
  }
}

export default App
