import React, { useContext, useEffect, useState } from "react"
import { UIDataContext } from "../contexts/UIDataContext"
import { LoginContext } from "../contexts/LoginContext"
import "./businessProfile.scss"

import epicerie from "./img/epicerie.svg"
import boucherie from "./img/boucherie.svg"
import coiffeur from "./img/coiffeur.svg"
import boulangerie from "./img/boulangerie.svg"
import pharmacie from "./img/pharmacie.svg"
import supermarche from "./img/supermarche.svg"
import friperie from "./img/friperie.svg"
import restaurant from "./img/restaurant.svg"
import store from "./img/store.svg"

const storeImgs = {
  epicerie,
  boucherie,
  coiffeur,
  boulangerie,
  pharmacie,
  friperie,
  restaurant,
  store
}

const BusinessProfile = props => {
  const {
    businessDataForId,
    getBusinessDataForId,
    updateBusiness,
    loading
  } = useContext(UIDataContext)
  const { logout } = useContext(LoginContext)

  let [desc, setDesc] = useState("")
  // let [img, setImg] = useState("")

  const submitDesc = () => {
    updateBusiness(business.id, null, desc)
  }

  // const handleFile = event => {
  //   setImg(event.target.files[0])
  //   const data = new FormData()
  //   data.append("file", img)
  //   updateBusiness(business.id, img, null)
  // }

  const { business } = useContext(LoginContext)
  useEffect(() => {
    getBusinessDataForId(business.id)
  }, [getBusinessDataForId, business.id])

  useEffect(() => {
    businessDataForId && setDesc(businessDataForId.description)
  }, [businessDataForId.description, businessDataForId])

  return (
    businessDataForId && (
      <div className='businessProfile'>
        <div className='businessProfile_avatar'>
          <img
            alt=''
            src={
              businessDataForId
                ? businessDataForId.type !== "store"
                  ? storeImgs[businessDataForId.type]
                  : supermarche
                : supermarche
            }
          ></img>
          {/* <input type='file' name='business-img' onChange={handleFile} /> */}
        </div>

        <div className='name'>{businessDataForId.name}</div>

        <div className='businessProfile_wallet'>
          <span>{`Cagnotte : ${businessDataForId.moneyAllocated}€`}</span>
        </div>
        <div className='businessProfile_description'>
          <textarea
            className={loading ? "loading" : undefined}
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
          className={
            loading
              ? "businessProfile_valider disabled"
              : "businessProfile_valider"
          }
        >
          Valider
        </div>
        <div className='deconnexion'>
          <button onClick={logout}>Déconnexion</button>
        </div>
        <div className='bottomBarBlock'></div>
      </div>
    )
  )
}

export default BusinessProfile
