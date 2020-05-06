import React from "react"

const Storefiltercontainer = (props) => {
  return (
    <div className="storefilter">
      <div className="storePhoto">img</div>
      <div className="storeName">
        <h2 className="name">{props.business.name}</h2>
        <h3 className="type">{props.business.type}</h3>
      </div>
    </div>
  )
}
export default Storefiltercontainer
