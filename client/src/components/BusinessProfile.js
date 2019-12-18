import React, { useContext, useEffect } from "react"
import { UIDataContext } from "../contexts/UIDataContext"
import { LoginContext } from "../contexts/LoginContext"
import "./businessProfile.scss"

const BusinessProfile = props => {
  const { businessDataForId, getBusinessDataForId } = useContext(UIDataContext)
  const { logout } = useContext(LoginContext)

  const { business } = useContext(LoginContext)
  useEffect(() => {
    getBusinessDataForId(business.id)
  }, [])

  return (
    <div className="businessProfile">
      <div className="businessProfile_avatar"></div>
      {businessDataForId && (
        <div>
          <h1>{businessDataForId.name}</h1>
        </div>
      )}
      <div className="businessProfile_description">
        <textarea
          name="description"
          placeholder="Description du commerce"
        ></textarea>
      </div>
      <div className="deconnexion">
        <button onClick={logout}>Déconexion</button>
      </div>
      <div className="bottomBarBlock"></div>
    </div>
  )
}

export default BusinessProfile
