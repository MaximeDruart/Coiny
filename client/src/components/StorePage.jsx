import React, { useEffect, useContext } from "react"
import "./StorePage.scss"
import storeImg from "./img/magasin1.jpg"
import { useParams, Link } from "react-router-dom"
import Back from "./auth/Back"
import { UIDataContext } from "../contexts/UIDataContext"
import { LoginContext } from "../contexts/LoginContext"

import epicerie from "./img/epicerie.svg"
import boucherie from "./img/boucherie.svg"
import coiffeur from "./img/coiffeur.svg"
import boulangerie from "./img/boulangerie.svg"
import pharmacie from "./img/pharmacie.svg"
import supermarche from "./img/supermarche.svg"
import friperie from "./img/friperie.svg"
import restaurant from "./img/restaurant.svg"
import store from "./img/store.svg"

let storeImgs = {
  epicerie,
  boucherie,
  coiffeur,
  boulangerie,
  pharmacie,
  friperie,
  restaurant,
  store
}

const StorePage = props => {
  const {
    loading,
    businessDataForId,
    getBusinessDataForId
    // errors
  } = useContext(UIDataContext)
  const { userType } = useContext(LoginContext)

  const { id } = useParams()
  useEffect(() => {
    getBusinessDataForId(id)
  }, [getBusinessDataForId, id])

  return (
    <div className='storeContainer'>
      <Back history={props.history}>Go back</Back>
      <div className='storeTop'>
        <div className='roundLogo'>
          {businessDataForId && (
            <img
              src={
                businessDataForId
                  ? businessDataForId.type !== "store"
                    ? storeImgs[businessDataForId.type]
                    : supermarche
                  : supermarche
              }
              alt=''
            />
          )}
        </div>
      </div>
      {loading ? (
        "loadinganim" // need to do a placeholder
      ) : businessDataForId ? (
        <div className='storeInfo'>
          <div className='storePresentation'>
            <h2>{businessDataForId.name}</h2>
            <div className='statContainer'>
              <span>{`Cagnotte : ${businessDataForId.moneyAllocated}€`}</span>
            </div>
            <div className='storeDescription'>
              <p>
                {businessDataForId && businessDataForId.description.length > 0
                  ? businessDataForId.description
                  : "Aucune description disponible"}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <h1> {/*errors*/} </h1>
      )}

      {userType === "user" && (
        <Link to={`/donate/${id}`}>
          <button>Donate</button>
        </Link>
      )}
      <a href={businessDataForId.gmapLink}>Se rendre au store</a>
      <div className='bottomCompenser'></div>
    </div>
  )
}

export default StorePage
