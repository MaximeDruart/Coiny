import React, { useContext, useState, useEffect } from "react"
import { LoginContext } from "../contexts/LoginContext"
import { UIDataContext } from "../contexts/UIDataContext"
import { CSSTransition } from "react-transition-group"
import uuid from "uuid"
import "./userHistory.scss"
import Axios from "axios"

const UserHistory = props => {
  const { getExtendedData, userData } = useContext(LoginContext)
  const { getBusinessDataForId } = useContext(UIDataContext)
  let [ids, setIds] = useState([])
  let [businessesData, setBusinessesData] = useState([])

  let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  useEffect(() => {
    getExtendedData()
  }, [getExtendedData])

  useEffect(() => {
    if (userData) setIds(userData.donationHistory.map(item => item.target))
  }, [userData])

  useEffect(() => {
    let cancelToken = Axios.CancelToken.source()
    ;(async () => {
      let tempArr = []
      for (const id of ids) {
        const data = await getBusinessDataForId(id, cancelToken)
        tempArr.push(data)
      }
      setBusinessesData(tempArr)
    })()

    return () => {
      setBusinessesData([])
    }
  }, [ids, getBusinessDataForId])

  return (
    <div className='user-history'>
      <div className='history-header'>
        <div className='text'>Vos dons</div>
      </div>
      <div className='history-container'>
        {userData &&
        ids.length === businessesData.length &&
        businessesData !== "undefined" &&
        ids.length > 0
          ? userData.donationHistory.map((historyItem, index) => (
              <CSSTransition
                appear={true}
                key={uuid()}
                in={!!userData}
                timeout={500}
                classNames='history-item'
              >
                <div key={uuid()} className='history-item'>
                  <div className='amount'>{historyItem.amount}</div>
                  <div className='businessName'>
                    {businessesData[index].name}
                  </div>
                </div>
              </CSSTransition>
            ))
          : arr.map(x => <div key={uuid()} className='placeholder'></div>)}
        }
      </div>
    </div>
  )
}

export default UserHistory
