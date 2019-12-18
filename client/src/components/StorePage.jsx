import React, { useEffect, useState } from "react"
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

const StorePage = props => {
  let [error, setError] = useState("")
  let [businessData, setBusinessData] = useState("")
  let [loading, setLoading] = useState(true)
  const { id } = useParams()
  let { path, url } = useRouteMatch()
  let { goBack } = useHistory()

  useEffect(() => {
    setLoading(true)
    axios
      .post("/business/find", { id })
      .then(res => {
        setBusinessData(res.data)
        setLoading(false)
      })
      .catch(err => {
        setError(err)
        setLoading(false)
      })
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
      ) : businessData ? (
        <div className='storeInfo'>
          <div className='storeStatisitcs'>
            <div className='statContainer'>
              <div className='moneyInTheBag'>
                <img src='' alt='' />
                <span>{`Cagnotte : ${businessData.moneyAllocated}€`}</span>
              </div>
            </div>
          </div>
          <div className='storePresentation'>
            <h2>{businessData.name}</h2>
            <p>Description</p>
          </div>
          <button>se rendre au store</button>
        </div>
      ) : (
        <h1> {error} </h1>
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
