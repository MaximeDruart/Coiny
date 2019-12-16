import React, { Component, createContext } from "react"

export const UIDataContext = createContext()

class UIDataContextProvider extends Component {
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
      <UIDataContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </UIDataContext.Provider>
    )
  }
}

export default UIDataContextProvider
