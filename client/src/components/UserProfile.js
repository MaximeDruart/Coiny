import React, { useContext, useEffect } from "react"
import { LoginContext } from "../contexts/LoginContext"
import { Link } from "react-router-dom"
import "./userProfile.scss"

const Profile = () => {
  const { user, getExtendedData, userData, logout } = useContext(LoginContext)

  // running useEffect on user is updated : aka componentDidMount from loginContext ran and user was retrieved from localStorage
  useEffect(() => {
    getExtendedData()
  }, [user])

  return (
    <div>
      <div className='profileContainer'>
        <div className='profileContainer_avatar'></div>
        {userData && (
          <div>
            <h1>{userData.firstName}</h1>
            <h2>
              {`Vous avez offert ${
                userData.totalAmountPledged
              } € à Coiny depuis le
            ${new Date(userData.createdAt).toDateString()}.`}
            </h2>
            <Link to='/privilegeaccess'>
              <button>Demander des privilèges</button>
            </Link>
            <Link to='/userhistory'>
              <button>Vos dons</button>
            </Link>
          </div>
        )}
        <div className='deconnexion'>
          <button onClick={logout}>Déconexion</button>
        </div>
        <div className='bottomBarBlock'></div>
      </div>
    </div>
  )
}

export default Profile
