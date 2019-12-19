import React, { useContext, useState, useEffect } from "react"
import { LoginContext } from "../contexts/LoginContext"
import { UIDataContext } from "../contexts/UIDataContext"
import { CSSTransition } from "react-transition-group"
import uuid from "uuid"
import "./userHistory.scss"
import Axios from "axios"
import { Link } from "react-router-dom"

const UserHistory = props => {
  const {
    getExtendedData,
    userData,
    userHistoryData,
    setUserHistoryData
  } = useContext(LoginContext)
  const { getBusinessDataForId } = useContext(UIDataContext)
  let [ids, setIds] = useState([])
  let [businessesData, setBusinessesData] = useState([])

  let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  useEffect(() => {
    if (!userHistoryData) {
      getExtendedData()
    }
  }, [getExtendedData])

  useEffect(() => {
    if (userData) setIds(userData.donationHistory.map(item => item.target))
  }, [userData])

  useEffect(() => {
    let cancelToken = Axios.CancelToken.source()
    if (!userHistoryData) {
      ;(async () => {
        let tempArr = []
        for (const id of ids) {
          const data = await getBusinessDataForId(id, cancelToken)
          tempArr.push(data)
        }
        setBusinessesData(tempArr)
      })()
    }

    return () => {
      setBusinessesData([])
    }
  }, [ids, getBusinessDataForId])

  const getData = () => {
    if (userHistoryData) {
      return userHistoryData
    }
    // setUserHistoryData(renderedData)

    let placeholder = arr.map(x => (
      <div key={uuid()} className='placeholder'></div>
    ))
    return userData &&
      ids.length === businessesData.length &&
      businessesData !== "undefined" &&
      ids.length > 0
      ? (getRenderedData(), setUserHistoryData(getRenderedData()))
      : placeholder
  }

  const getRenderedData = () => {
    return userData.donationHistory.map((historyItem, index) => (
      <CSSTransition
        appear={true}
        key={uuid()}
        in={!!userData}
        timeout={500}
        classNames='history-item'
      >
        <div key={uuid()} className='history-item'>
          <div className='date'>
            {historyItem.date ? historyItem.date : "Cannot find date"}
          </div>
          <div className='amount'>{`Donated ${historyItem.amount}€ to ${businessesData[index].name}`}</div>
          <Link to={`/business/${businessesData[index]._id}`}>
            <button>Check business</button>
          </Link>
        </div>
      </CSSTransition>
    ))
  }

  return (
    <div className='user-history'>
      <div className='history-header'>
        <div className='text'>Vos dons</div>
      </div>
      <div className='history-container'>{getData()}</div>
    </div>
  )
}

export default UserHistory
