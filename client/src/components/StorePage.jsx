import React, { useEffect, useContext } from "react"
import "./StorePage.scss"
import storeImg from "./img/magasin1.jpg"
import { useParams, Link } from "react-router-dom"
import Back from "./auth/Back"
import { UIDataContext } from "../contexts/UIDataContext"
import { LoginContext } from "../contexts/LoginContext"

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
          <img src={storeImg} alt='' />
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
              <p>Description</p>
            </div>
          </div>
          <a href={businessDataForId.gmapLink}>
            {console.log(businessDataForId)}
            <button>se rendre au store</button>
          </a>
        </div>
      ) : (
        <h1> {/*errors*/} </h1>
      )}
      {userType === "user" && (
        <Link to={`/donate/${id}`}>
          <button>Donate</button>
        </Link>
      )}
      <div className='bottomCompenser'></div>
    </div>
  )
}

export default StorePage
