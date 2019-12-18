import React, { Component, createContext } from "react"
import axios from "axios"

export const UIDataContext = createContext()

class UIDataContextProvider extends Component {
  // provider provides state data
  constructor(props) {
    super(props)
    this.state = {
      businessQueryResults: "",
      errors: "",
      businessDataForId: "",
      loading: false
    }
  }

  getBusinessData = (query = null, resultsNumber = 0) => {
    if (!query) {
      axios
        .get("/business/find/all")
        .then(res => {
          !resultsNumber
            ? this.setState({ businessQueryResults: res.data })
            : this.setState({
                businessQueryResults: res.data.slice(0, resultsNumber)
              })
        })
        .catch(errors => this.setState({ errors }))
    } else {
      axios
        .post("/business/search", { query, resultsNumber })
        .then(res => {
          this.setState({ businessQueryResults: res.data })
          return res.data
        })
        .catch(errors => this.setState({ errors }))
    }
  }

  getBusinessDataForId = id => {
    this.setState({ loading: true })
    axios
      .post("/business/find", { id })
      .then(res => {
        this.setState({ businessDataForId: res.data, loading: false })
      })
      .catch(errors => {
        this.setState({ errors, loading: false })
      })
  }

  // but you can also provide functions to mutate this data

  render() {
    return (
      <UIDataContext.Provider
        value={{
          ...this.state,
          getBusinessData: this.getBusinessData,
          getBusinessDataForId: this.getBusinessDataForId
        }}
      >
        {this.props.children}
      </UIDataContext.Provider>
    )
  }
}

export default UIDataContextProvider
