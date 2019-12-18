import React, { useContext, useEffect } from "react"
import { UIDataContext } from "../contexts/UIDataContext"
import { LoginContext } from "../contexts/LoginContext"
import { Link } from "react-router-dom"
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
      <div className="businessProfile_wallet">
        <span>{`Cagnotte : ${businessDataForId.moneyAllocated}€`}</span>
      </div>
      <div className="businessProfile_description">
        <textarea
          name="description"
          placeholder="Description du commerce"
          maxlength="200"
        ></textarea>
      </div>
      <div className="businessProfile_valider">Valider</div>
      <Link to="/privilegeaccess">
        <button>Historique des dons</button>
      </Link>
      <div className="deconnexion">
        <button onClick={logout}>Déconexion</button>
      </div>
      <div className="bottomBarBlock"></div>
    </div>
  )
}

export default BusinessProfile
