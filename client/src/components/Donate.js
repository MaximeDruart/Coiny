import React, { Component } from "react"

import { Container } from "react-bootstrap"

class Donate extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Container>
        <Button>Donate</Button>
      </Container>
    )
  }
}

export default Donate
