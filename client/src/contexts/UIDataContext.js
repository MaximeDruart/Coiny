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
      businessDataForType: "",
      loading: false
    }
  }

  getBusinessData = (query = null, resultsNumber = 0) => {
    this.setState({ loading: true })
    if (!query) {
      axios
        .get("/business/find/all")
        .then(res => {
          !resultsNumber
            ? this.setState({ businessQueryResults: res.data, loading: false })
            : this.setState({
                businessQueryResults: res.data.slice(0, resultsNumber),
                loading: false
              })
        })
        .catch(errors => this.setState({ errors }))
    } else {
      axios
        .post("/business/search", { query, resultsNumber })
        .then(res => {
          this.setState({ businessQueryResults: res.data, loading: false })
          return res.data
        })
        .catch(errors => this.setState({ errors, loading: false }))
    }
  }

  getBusinessDataForId = async (id, token = null) => {
    this.setState({ loading: true })
    try {
      const res = await axios.post(
        "/business/find",
        { id }
        // { cancelToken: token }
      )
      this.setState({ businessDataForId: res.data, loading: false })
      return res.data
    } catch (errors) {
      this.setState({ errors, loading: false })
    }
  }

  getBusinessDataForType = async type => {
    this.setState({ loading: true })
    try {
      const businesses = await axios.post("/business/find/type", { type })
      this.setState({ businessDataForType: businesses.data, loading: false })
    } catch (error) {
      this.setState({ loading: false })
      return error
    }
  }

  updateBusiness = async (id, picture = null, desc = null) => {
    this.setState({ loading: true })
    try {
      const imgUpdate =
        picture &&
        (await axios.post("/business/update/img", {
          id,
          picture
        }))
      const descUpdate =
        desc &&
        (await axios.post("/business/update/desc", {
          id,
          desc
        }))
      this.setState({ loading: false })
    } catch (error) {
      return error
    }
  }

  // but you can also provide functions to mutate this data

  render() {
    return (
      <UIDataContext.Provider
        value={{
          ...this.state,
          getBusinessData: this.getBusinessData,
          getBusinessDataForId: this.getBusinessDataForId,
          getBusinessDataForType: this.getBusinessDataForType,
          updateBusiness: this.updateBusiness
        }}
      >
        {this.props.children}
      </UIDataContext.Provider>
    )
  }
}

export default UIDataContextProvider
