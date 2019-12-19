import React from 'react';
import './Article.scss'
import cedricPhotoOUahou from './img/BrunoChallant.png'

const Article = ()=>{
    return(
        <div className="articleContainer">
            <div className="articletop"><img src={cedricPhotoOUahou} alt=""/></div>
            <div className="articletitle"><h1>Cedric Grolet. <br/> Quand ambition rime avec dévotion.</h1></div>
            <div className="articleText"></div>
            <div className="articlequote"></div>
            <div className="articleText"></div>
        </div>
    )
}


export default Article