import React, { useContext, useEffect } from "react"
import { LoginContext } from "../contexts/LoginContext"
import { Link } from "react-router-dom"

const Profile = () => {
  const { user, getExtendedData, userData } = useContext(LoginContext)

  // running useEffect on user is updated : aka componentDidMount from loginContext ran and user was retrieved from localStorage
  useEffect(() => {
    getExtendedData()
  }, [user])

  return (
    <div>
      {userData && (
        <div>
          <h1>Hello {userData.firstName}</h1>
          <h2>
            {`You pledged ${
              userData.totalAmountPledged
            } € since you signed up on
            ${new Date(userData.createdAt).toDateString()}.`}
          </h2>
          <Link to='/privilegeaccess'>
            <button>Register for privileges</button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Profile
