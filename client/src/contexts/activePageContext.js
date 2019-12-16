import React, { Component, createContext } from "react"

export const activePageContext = createContext()

class activePageContextProvider extends Component {
  // provider provides state data
  constructor(props) {
    super(props)
    this.state = {
      activePage: "",
      activePageAdress: ""
    }
  }
  // but you can also provide functions to mutate this data

  render() {
    return (
      <LoginContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </LoginContext.Provider>
    )
  }
}

export default activePageContextProvider
