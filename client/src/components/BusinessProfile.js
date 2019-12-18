import React, { useContext, useEffect } from "react"
import { UIDataContext } from "../contexts/UIDataContext"
import { LoginContext } from "../contexts/LoginContext"

const BusinessProfile = props => {
  const { loading, businessDataForId, getBusinessDataForId } = useContext(
    UIDataContext
  )
  const { business } = useContext(LoginContext)
  useEffect(() => {
    getBusinessDataForId(business.id)
  }, [])

  return (
    <div className='businessProfile'>
      {/* business data for id */}
      {loading ? "loading animation" : "data"}
    </div>
  )
}

export default BusinessProfile
