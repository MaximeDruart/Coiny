import React, { useEffect, useContext } from "react"
import "./StorePage.scss"
import storeImg from "./img/magasin1.jpg"
import {
  useParams,
  Link,
  useRouteMatch,
  Route,
  Switch,
  useHistory
} from "react-router-dom"
import axios from "axios"
import Donation from "./payment/Donation"
import Back from "./auth/Back"
import { UIDataContext } from "../contexts/UIDataContext"

const StorePage = props => {
  const {
    loading,
    businessDataForId,
    getBusinessDataForId,
    errors
  } = useContext(UIDataContext)
  console.log(useContext(UIDataContext))

  const { id } = useParams()
  let { url } = useRouteMatch()
  useEffect(() => {
    getBusinessDataForId(id)
  }, [])

  return (
    <div className='storeContainer'>
      <Back history={props.history}>Go back</Back>
      <div className='storeTop'>
        <div className='roundLogo'>
          <img src={storeImg} alt='' />
        </div>
      </div>
      {loading ? (
        "loadinganim" // need to do a plachholder
      ) : businessDataForId ? (
        <div className='storeInfo'>
          <div className='storeStatisitcs'>
            <div className='statContainer'>
              <div className='moneyInTheBag'>
                <img src='' alt='' />
                <span>{`Cagnotte : ${businessDataForId.moneyAllocated}€`}</span>
              </div>
            </div>
          </div>
          <div className='storePresentation'>
            <h2>{businessDataForId.name}</h2>
            <p>Description</p>
          </div>
          <button>se rendre au store</button>
        </div>
      ) : (
        <h1> {errors} </h1>
      )}
      <Link to={`${url}/donate`}>
        <button>Donate</button>
      </Link>
      <Switch>
        <Route path={`${url}/donate`} exact component={Donation}></Route>
      </Switch>
      <div className='bottomCompenser'></div>
    </div>
  )
}

export default StorePage
