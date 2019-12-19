import React, { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import "./Category.scss"
import Storefiltercontainer from "./CategoryComp/Storefiltercontainer"
import { UIDataContext } from "../contexts/UIDataContext"
import uuid from "uuid"

const Category = props => {
  const { id } = useParams()
  const { getBusinessData, businessQueryResults } = useContext(UIDataContext)

  useEffect(() => {
    getBusinessData(null)
  }, [getBusinessData])

  const renderDivFilter = () => {
    let filteredArray = businessQueryResults.filter(
      item => item.type === id.toLowerCase()
    )
    return filteredArray.map(business => (
      <Storefiltercontainer key={uuid()} business={business} />
    ))
  }

  return (
    <div className='containCategory'>
      {businessQueryResults && renderDivFilter()}
    </div>
  )
}

export default Category
