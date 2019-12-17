import React, { Component, createContext } from "react"
import axios from "axios"

export const UIDataContext = createContext()

class UIDataContextProvider extends Component {
  // provider provides state data
  constructor(props) {
    super(props)
    this.state = {
      activePage: "",
      activePageAdress: "",
      businessQueryResults: "",
      allBusinessData: "",
      errors: ""
    }
  }

  getBusinessData = (query = null, results = 0) => {
    console.log("business query results")
    if (!query) {
      axios
        .get("/business/find/all")
        .then(res =>
          this.setState({
            allBusinessData: res.data.slice(results),
            businessQueryResults: res.data.slice(results)
          })
        )
        .catch(errors => this.setState({ errors }))
    } else {
      axios
        .post("/business/search", { query, results })
        .then(res => {
          this.setState({ businessQueryResults: res.data })
          return res.data
        })
        .catch(errors => this.setState({ errors }))
    }
  }

  // but you can also provide functions to mutate this data

  render() {
    return (
      <UIDataContext.Provider
        value={{ ...this.state, getBusinessData: this.getBusinessData }}
      >
        {this.props.children}
      </UIDataContext.Provider>
    )
  }
}

export default UIDataContextProvider
