import React, { useEffect, useState } from "react"
import "./StorePage.scss"
import Topbar from "./homepageComp/Topbar"
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
      <Link to='/homepage'>
        <button onClick={goBack}>Go back</button>
      </Link>
      <div className='storeTop'>
        <div className='roundLogo'>
          <img src={storeImg} alt='' />
        </div>
      </div>
      {loading ? (
        "loadinganim"
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
        </div>
      ) : (
        <h1> {console.log(error)} </h1>
      )}
      <Link to={`${url}/donate`}>
        <button>Donate</button>
      </Link>
      <Switch>
        <Route path={`${url}/donate`} component={Donation}>
          {console.log(`${url}/donate`)}
        </Route>
      </Switch>
      <div className='bottomCompenser'></div>
    </div>
  )
}

export default StorePage
