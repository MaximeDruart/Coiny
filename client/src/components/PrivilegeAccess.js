import React, { Component } from "react"
import { Container, Form, Button } from "react-bootstrap"
import isEmpty from "is-empty"
import { LoginContext } from "../contexts/LoginContext"
import axios from "axios"
import "./privilegeAccess.scss"

class PrivilegeAccess extends Component {
  static contextType = LoginContext
  constructor(props) {
    super(props)
    this.state = {
      firstFile: "",
      secondFile: "",
      thirdFile: "",
      errors: "",
      loading: false
    }
    this.$firstFile = React.createRef()
    this.$secondFile = React.createRef()
    this.$thirdFile = React.createRef()
  }

  handleSubmit = event => {
    event.preventDefault()
    const { user } = this.context
    this.setState({ errors: "" })
    let files = {
      firstFile: this.$firstFile.current.files[0],
      secondFile: this.$secondFile.current.files[0],
      thirdFile: this.$thirdFile.current.files[0]
    }
    let errors = {}
    Object.keys(files).forEach(key => {
      if (!files[key]) errors[key] = "Please provide a file"
    })
    if (!isEmpty(errors)) {
      this.setState({ errors })
    } else {
      axios
        .post("/users/accessprivilege", {
          id: user.id
        })
        .then(res => this.props.history.push("/userprofile"))
        .catch(err => {
          errors.submit = err
          this.setState({ errors })
        })
    }
  }

  render() {
    return (
      <Container className='AccessContainer'>
        <h1>Accès privilégié</h1>
        <div className='AccessContainer_line'></div>
        <h2>
          Nous avons besoin des documents suivants pour confirmer votre statut
        </h2>
        <Form className='formAccess' onSubmit={this.handleSubmit}>
          <Form.Group className='formAccess file'>
            <Form.Label className='formAccess title'>Carte d’identité</Form.Label>
            <div className='formAccess input'>
              <Form.Control
                ref={this.$firstFile}
                name='firstFile'
                type='file'
                isInvalid={!!this.state.errors.firstFile}
              />
            </div>
            <Form.Control.Feedback type='invalid'>
              {this.state.errors.firstFile}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className='formAccess file'>
            <Form.Label className='formAccess title'>Avis fiscal</Form.Label>
            <div className='formAccess input'>
              <Form.Control
                ref={this.$secondFile}
                name='secondFile'
                type='file'
                isInvalid={!!this.state.errors.secondFile}
              />
            </div>
            <Form.Control.Feedback type='invalid'>
              {this.state.errors.secondFile}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className='formAccess file'>
            <Form.Label className='formAccess title'> Third file</Form.Label>
            <div className='formAccess input'>
              <Form.Control
                ref={this.$thirdFile}
                name='thirdFile'
                type='file'
                isInvalid={!!this.state.errors.thirdFile}
              />
            </div>
            <Form.Control.Feedback type='invalid'>
              {this.state.errors.thirdFile}
            </Form.Control.Feedback>
          </Form.Group>
          <Button
            className='formAccess submit'
            block
            variant='outline-primary'
            disabled={this.state.loading}
            type='submit'
          >
            {this.state.isLoading ? "Loading..." : "Envoyer"}
          </Button>
        </Form>
      </Container>
    )
  }
}

export default PrivilegeAccess
