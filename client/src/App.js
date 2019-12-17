import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
// import "bootstrap/dist/css/bootstrap.min.css"

import PrivateRoute from "./components/PrivateRoute"
import PrivateComponent from "./components/privateComponent"
import LoginContextProvider from "./contexts/LoginContext"
import UIDataContextProvider from "./contexts/UIDataContext"

import UserRegister from "./components/auth/UserRegister"
import BusinessRegister from "./components/auth/BusinessRegister"
import AuthDirection from "./components/auth/AuthDirection"
import Homepage from "./components/homepage"
import UserProfile from "./components/UserProfile"
import PrivilegeAccess from "./components/PrivilegeAccess"
import Welcome from "./components/welcomeComp/Welcome"
import FullPageSearch from "./components/FullPageSearch"
import StorePage from "./components/StorePage.jsx"

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <Router>
        <UIDataContextProvider>
          <LoginContextProvider>
            <div className='App'>
              <Route path='/' exact component={Welcome}></Route>
              <Route path='/getstarted' component={AuthDirection}></Route>
              <Route path='/userregister' component={UserRegister}></Route>
              <Route path='/storePage' component={StorePage}></Route>
              <Route
                path='/businessregister'
                component={BusinessRegister}
              ></Route>
              {/* PRIVATE ROUTES : USER NEEDS TO BE AUTHENTICATED TO ACCESS */}
              <PrivateRoute
                path='/homepage'
                component={Homepage}
              ></PrivateRoute>
              <PrivateRoute
                path='/private'
                component={PrivateComponent}
              ></PrivateRoute>

              <PrivateRoute
                path='/search'
                component={FullPageSearch}
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
        </UIDataContextProvider>
      </Router>
    )
  }
}

export default App
