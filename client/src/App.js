import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import PrivateRoute from "./components/PrivateRoute"
import LoginContextProvider, { LoginContext } from "./contexts/LoginContext"
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
import Success from "./components/payment/Success"
import Donation from "./components/payment/Donation"
import BusinessProfile from "./components/BusinessProfile"
import PaymentForm from "./components/payment/PaymentForm"

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
                path='/donation'
                component={Donation}
              ></PrivateRoute>

              <PrivateRoute path='/success' component={Success}></PrivateRoute>

              <PrivateRoute
                path='/homepage'
                component={Homepage}
              ></PrivateRoute>

              <PrivateRoute
                path='/search'
                component={FullPageSearch}
              ></PrivateRoute>

              <LoginContext.Consumer>
                {context =>
                  context.userType === "user" ? (
                    <div>
                      <PrivateRoute
                        path='/userprofile'
                        component={UserProfile}
                      />
                      <PrivateRoute
                        path='/privilegeaccess'
                        component={PrivilegeAccess}
                      />
                    </div>
                  ) : (
                    <PrivateRoute
                      path='/businessprofile'
                      component={BusinessProfile}
                    />
                  )
                }
              </LoginContext.Consumer>

              <PrivateRoute
                path='/business/:id'
                // exact
                component={StorePage}
              ></PrivateRoute>
              <PrivateRoute
                path='/donate/:id'
                component={Donation}
              ></PrivateRoute>

              <PrivateRoute
                path='/paymentform'
                component={PaymentForm}
              ></PrivateRoute>
            </div>
          </LoginContextProvider>
        </UIDataContextProvider>
      </Router>
    )
  }
}

export default App
