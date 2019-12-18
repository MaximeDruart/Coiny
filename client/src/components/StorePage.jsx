import React, { useEffect, useState } from "react"
import "./StorePage.scss"
import Topbar from "./homepageComp/Topbar"
import storeImg from "./img/magasin1.jpg"
import { useParams, Link } from "react-router-dom"
import axios from "axios"

const StorePage = props => {
  let [error, setError] = useState("")
  let [businessData, setBusinessData] = useState("")
  let [loading, setLoading] = useState(true)
  const { id } = useParams()

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
      <Topbar />
      <Link to='/homepage'>
        <h1>X</h1>
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
          <button>se rendre au store</button>
        </div>
      ) : (
        <h1> {console.log(error)} </h1>
      )}
      <div className='bottomCompenser'></div>
    </div>
  )
}

export default StorePage
