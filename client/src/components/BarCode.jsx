import "./BarCode.scss"
import React from "react"
import barcodeimg from "./img/barcodeimg.png"
import svgRainMoney from "./img/undraw_make_it_rain_iwk4.svg"

const BarCodePage = props => {
  // const [barcode , setBarcode]= React.useState(barcodeimg)

  return (
    <div className='barCodeContainer'>
      <div className='barcodeTop'>
        <h2>Scannez</h2>
        <div className='line'></div>
        <p>
          montrez le code barre en caisse <br />
          pour profitez de vos avantages.
        </p>
      </div>
      <div className='barcodeDraw'>
        <img src={svgRainMoney} alt='' />
      </div>
      <div className='barcodeCode'>
        <img src={barcodeimg} alt='' />
      </div>
    </div>
  )
}

export default BarCodePage
