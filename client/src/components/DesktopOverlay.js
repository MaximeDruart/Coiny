import React, { useState } from "react"
import "./desktopOverlay.scss"

const DesktopOverlay = () => {
  const [show, setShow] = useState(true)
  return (
    <div className={`desktop-overlay ${!show && "hidden"}`}>
      <div className="modal">
        <div className="content">
          <p className="body">Please view on mobile for an optimal experience !</p>
          <div onClick={() => setShow(false)} className="button accept">
            OK
          </div>
        </div>
      </div>
      <div className="filter"></div>
    </div>
  )
}

export default DesktopOverlay
