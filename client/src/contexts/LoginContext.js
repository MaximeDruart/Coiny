import React, { Component, createContext } from "react"
import setAuthToken from "../utils/setAuthToken"
import jwt_decode from "jwt-decode"
import axios from "axios"

export const LoginContext = createContext()

class LoginContextProvider extends Component {
  // provider provides state data
  constructor(props) {
    super(props)
    this.state = {
      isAuthenticated: false,
      user: null,
      business: null,
      errors: "",
      userLogErrors: "",
      businessLogErrors: "",
      loading: false,
      userData: null,
      localStorageHasBeenRead: false,
      userType: "user",
      userHistoryData: ""
    }
  }
  // but you can also provide functions to mutate this data

  login = userData => {
    this.setState({ loading: true })
    axios
      .post("/users/login", userData)
      .then(res => {
        // saving token to localStorage so user is remembered
        const { token } = res.data
        localStorage.setItem("jwtToken", token)
        localStorage.setItem("userType", "user")
        setAuthToken(token)
        const decodedData = jwt_decode(token)
        this.setState({
          isAuthenticated: true,
          user: decodedData,
          loading: false,
          userType: "user",
          errors: ""
        })
      })
      .catch(error => {
        // if not a user, test for a business
        this.setState({ userLogErrors: error.response.data, loading: false })
        axios
          .post("/business/login", userData)
          .then(res => {
            // saving token to localStorage so user is remembered
            const { token } = res.data
            localStorage.setItem("jwtToken", token)
            localStorage.setItem("userType", "business")
            setAuthToken(token)
            const decodedData = jwt_decode(token)
            this.setState({
              isAuthenticated: true,
              business: decodedData,
              loading: false,
              userType: "business",
              errors: ""
            })
          })
          .catch(error =>
            this.setState(
              {
                businessLogErrors: error.response.data,
                loading: false
              },
              () => {
                let tempError = ""
                const { businessLogErrors, userLogErrors } = this.state
                if (!businessLogErrors.email && businessLogErrors.password)
                  tempError = { password: businessLogErrors.password }
                if (!userLogErrors.email && userLogErrors.password)
                  tempError = { password: userLogErrors.password }
                if (businessLogErrors.email && userLogErrors.email) {
                  tempError = { email: userLogErrors.email }
                }
                this.setState({ errors: tempError })
              }
            )
          )
      })
  }

  setUserHistoryData = data => {
    this.setState({ userHistoryData: data })
  }

  getExtendedData = () => {
    if (this.state.user) {
      axios
        .post("/users/find", {
          id: this.state.user.id
        })
        .then(res => this.setState({ userData: res.data }))
        .catch(error => this.setState({ errors: error.response.data }))
    }
  }

  logout = () => {
    // removing token from local storage
    localStorage.removeItem("jwtToken")
    // removing authorization header from axios requests
    setAuthToken(false)
    // resetting state
    this.setState(
      {
        isAuthenticated: false,
        user: null,
        business: null
      },
      // gotta use history.push
      (window.location = "/login")
    )
  }

  checkLocalStorage = () => {
    if (Storage !== "undefined") {
      if (localStorage.getItem("jwtToken") !== null) {
        this.setState({
          isAuthenticated: true,
          user: jwt_decode(localStorage.getItem("jwtToken")),
          business: jwt_decode(localStorage.getItem("jwtToken")),
          userType: localStorage.getItem("userType"),
          localStorageHasBeenRead: true
        })
      } else {
        this.setState({ localStorageHasBeenRead: true })
      }
    }
  }

  componentDidMount() {
    this.checkLocalStorage()
  }

  render() {
    return (
      <LoginContext.Provider
        value={{
          ...this.state,
          login: this.login,
          logout: this.logout,
          getExtendedData: this.getExtendedData,
          setUserHistoryData: this.setUserHistoryData
        }}
      >
        {this.props.children}
      </LoginContext.Provider>
    )
  }
}

export default LoginContextProvider
