import React from "react"
import { Link } from "react-router-dom"
import { Jumbotron, Container, Button } from "react-bootstrap"
import Profile from "./UserProfile"
import PrivilegeAccess from "./PrivilegeAccess"

const Home = props => {
  return (
    <Container className='home'>
      <Jumbotron>
        <h1>This is home</h1>
      </Jumbotron>
      <div className='links'>
        <Link to='/userregister'>
          <Button className='spaced-link' block variant='outline-primary'>
            Register as user
          </Button>
        </Link>
        <Link to='/businessregister'>
          <Button className='spaced-link' block variant='outline-primary'>
            Register as business
          </Button>
        </Link>
        <Link to='/login'>
          <Button className='spaced-link' block variant='outline-primary'>
            Login
          </Button>
        </Link>
      </div>
      {/* <Profile></Profile> */}
      <PrivilegeAccess history={props.history}></PrivilegeAccess>
    </Container>
  )
}

export default Home
