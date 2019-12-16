import React, { useContext, useEffect } from "react"
import { Container } from "react-bootstrap"
import { LoginContext } from "../contexts/LoginContext"

const Profile = () => {
  const { user, getExtendedData, userData } = useContext(LoginContext)

  // running useEffect on user is updated : aka componentDidMount from loginContext ran and user was retrieved from localStorage
  useEffect(() => {
    getExtendedData()
  }, [user])

  return (
    <Container>
      {userData && (
        <Container>
          <h1>Hello {userData.firstName}</h1>
          <h2>
            {`You pledged ${
              userData.totalAmountPledged
            } € since you signed up on
            ${new Date(userData.createdAt).toDateString()}.`}
          </h2>
        </Container>
      )}
    </Container>
  )
}

export default Profile
