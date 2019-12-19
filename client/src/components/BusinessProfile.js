import React, { useContext, useEffect, useState } from "react"
import { UIDataContext } from "../contexts/UIDataContext"
import { LoginContext } from "../contexts/LoginContext"
import { Link } from "react-router-dom"
import "./businessProfile.scss"

const BusinessProfile = props => {
  const {
    businessDataForId,
    getBusinessDataForId,
    updateBusiness
  } = useContext(UIDataContext)
  const { logout } = useContext(LoginContext)

  let [desc, setDesc] = useState("")
  let [img, setImg] = useState("")

  const submitDesc = () => {
    updateBusiness(business.id, null, desc)
  }

  const handleFile = event => {
    setImg(event.target.files[0])
    const data = new FormData()
    data.append("file", img)
    updateBusiness(business.id, img, null)
  }

  const { business } = useContext(LoginContext)
  useEffect(() => {
    getBusinessDataForId(business.id)
  }, [getBusinessDataForId, business.id])

  return (
    <div className='businessProfile'>
      <div className='businessProfile_avatar'>
        {/* <input type='file' name='business-img' onChange={handleFile} /> */}
      </div>
      {businessDataForId && (
        <div>
          <h1>{businessDataForId.name}</h1>
        </div>
      )}
      <div className='businessProfile_wallet'>
        <span>{`Cagnotte : ${businessDataForId.moneyAllocated}€`}</span>
      </div>
      <div className='businessProfile_description'>
        <textarea
          onChange={event => setDesc(event.target.value)}
          value={desc}
          name='desc'
          placeholder='Décrivez votre commerce...'
          maxLength='200'
        ></textarea>
      </div>
      <div
        style={{ cursor: "pointer" }}
        onClick={submitDesc}
        className='businessProfile_valider'
      >
        Valider
      </div>
      <div className='deconnexion'>
        <button onClick={logout}>Déconexion</button>
      </div>
      <div className='bottomBarBlock'></div>
    </div>
  )
}

export default BusinessProfile
