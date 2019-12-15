import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import UserRegister from "./components/UserRegister"
import BusinessRegister from "./components/BusinessRegister"
import Home from "./components/Home"
import Login from "./components/Login"
import Profile from "./components/Profile"
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
            <h1>Common item to all routes</h1>
            <Route path='/' exact component={Home}></Route>
            <Route path='/userregister' component={UserRegister}></Route>
            <Route
              path='/businessregister'
              component={BusinessRegister}
            ></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/profile' component={Profile}></Route>
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
