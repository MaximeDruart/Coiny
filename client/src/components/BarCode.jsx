import "./BarCode.scss"

const BarCode=(props)=> {
    

    return(
        <div className="barCodeContainer">
            <div className="barcodeTop"></div>
            <div className="barcodeDraw"></div>
            <div className="barcodeCode"></div>
        </div>
    )
}

export default BarCode