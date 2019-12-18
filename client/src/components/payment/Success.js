import React from 'react';
import "./success.scss"
import successImg from "../img/success.svg"

const Success = () => {
    return (  
        <div className="containSuccess">
            <h1>Merci !</h1>
            <img src={successImg} alt="success"/>
            <h2>Votre don de 10€ chez Monoprix a bien été effectué!</h2>
        </div>
    );
}
 
export default Success;