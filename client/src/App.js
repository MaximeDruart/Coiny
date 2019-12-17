import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import PrivateRoute from "./components/PrivateRoute"
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
import Bottombar from "./components/homepageComp/Bottombar"

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
            <div className='App' style={{ height: "100vh" }}>
              {/* Switching so it's either the pre-auth components or the bottombar that's available */}
              <Switch>
                <Route path='/' exact component={Welcome}></Route>
                <Route path='/getstarted' component={AuthDirection}></Route>
                <Route path='/userregister' component={UserRegister}></Route>
                <Route
                  path='/businessregister'
                  component={BusinessRegister}
                ></Route>
                <PrivateRoute path='/' component={Bottombar}></PrivateRoute>
              </Switch>
              {/* PRIVATE ROUTES : USER NEEDS TO BE AUTHENTICATED TO ACCESS */}

              <PrivateRoute
                path='/homepage'
                component={Homepage}
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

              <PrivateRoute
                path='/storePage'
                component={StorePage}
              ></PrivateRoute>
            </div>
          </LoginContextProvider>
        </UIDataContextProvider>
      </Router>
    )
  }
}

export default App
