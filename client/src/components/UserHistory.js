import React, { useContext, useState, useEffect } from "react"
import { LoginContext } from "../contexts/LoginContext"
import { UIDataContext } from "../contexts/UIDataContext"
import logo from "./img/logo.svg"
import { CSSTransition } from "react-transition-group"
import uuid from "uuid"
import "./userHistory.scss"

const UserHistory = props => {
  const { getExtendedData, userData } = useContext(LoginContext)
  const { getBusinessDataForId, getBusinessQueryResults } = useContext(
    UIDataContext
  )
  let [ids, setIds] = useState([])
  let [businessesData, setBusinessesData] = useState([])

  const getRenderedHistory = () => {
    let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    if (userData) {
      if (
        ids.length === businessesData.length &&
        businessesData !== "undefined" &&
        ids.length > 0
      ) {
        return userData.donationHistory.map((historyItem, index) => (
          <CSSTransition
            appear={true}
            key={uuid()}
            in={!!userData}
            timeout={500}
            classNames='history-item'
          >
            <div key={uuid()} className='history-item'>
              <div className='amount'>{historyItem.amount}</div>
              <div className='businessName'>{businessesData[index].name}</div>
            </div>
          </CSSTransition>
        ))
      } else {
        return arr.map(x => <div key={uuid()} className='placeholder'></div>)
      }
    } else {
      return arr.map(x => <div key={uuid()} className='placeholder'></div>)
    }
  }

  const getBusinessesLoop = async () => {
    let tempArr = []
    for (const id of ids) {
      const data = await getBusinessDataForId(id)
      tempArr.push(data)
    }
    setBusinessesData(tempArr)
  }

  useEffect(() => {
    getExtendedData()
  }, [])

  useEffect(() => {
    if (userData) setIds(userData.donationHistory.map(item => item.target))
  }, [userData])

  useEffect(() => {
    getBusinessesLoop()
  }, [ids])

  return (
    <div className='user-history'>
      <div className='history-header'>
        <div className='text'>Vos dons</div>
      </div>
      <div className='history-container'>{getRenderedHistory()}</div>
    </div>
  )
}

export default UserHistory
