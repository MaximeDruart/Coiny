import React from "react"
import { Navbar, Nav, Container } from "react-bootstrap"
import { Link } from "react-router-dom"

const BottomNav = () => {
  return (
    <Navbar className='bottomNav' fixed='bottom' variant='light'>
      {/* <div className='center-logo'>Logo</div> */}
      <Nav style={{ width: "100%" }} fill className='justify-content-center'>
        <Nav.Item>
          <Link to='/UIHome'>Home</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to='/Profile'>Profile</Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  )
}

export default BottomNav
