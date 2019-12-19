import React from "react"
import "./Article.scss"
import cedricPhotoOUahou from "./img/BrunoChallant.png"

const Article = props => {
  return (
    <div className="articleContainer">
      <div className="articletop">
        <img src={cedricPhotoOUahou} alt="" />
      </div>
      <div className="articletitle">
        <h1>
          Cedric Grolet. <br /> Quand ambition rime avec dévotion.
        </h1>
      </div>
      <div className="articleText">
        <div className="theArticle">
          <h3>Profitez de 5€ chez Cédric</h3>
          <p>
            Cédric Grolet est le meilleur Pâtissier du monde. C'est un fait.
            Après son CAP de pâtissier-chocolatier-glacier obtenu au
            Puy-en-Velay en 2002, il obtient une mention complémentaire en 2004
            puis un Brevet technique des métiers à la célèbre École nationale
            supérieure de la pâtisserie (ENSP) d’Yssingeaux. Dès la fin de ses
            études en pâtisserie, il commence à se distinguer dans de nombreuses
            compétitions.
            <br />
            <br />
            Cédric Grolet, meilleur pâtissier du monde à plusieurs reprises,
            faisait déjà saliver le public avec ses gourmandises en trompe-l’œil
            dans l’émission Top Chef (M6). Et il y a deux ans, le chef avait
            ouvert sa première pâtisserie à Paris.
            <br />
            <br />
            Sa pâtisserie boulangerie c’est inscrite sur l’application Coiny
            pour une bonne raison, donner même aux personnes en précarité la
            possibilité de se faire des petits plaisirs. “il faut repenser la
            dignité, la disrupter jusque dans ses moindres détails.” En tout cas
            c’est ce que nous confie Cédric Grolet quand nous sommes allés le
            voir dans son antre.
          </p>
        </div>
      </div>
      <div className="articlequote">
        “il faut repenser la dignité, la disrupter jusque dans ses moindres
        détails.”
      </div>
      <div className="articleText theArticle">
        <p>
          En effet, le marché du luxe est assez fermé et inaccessible. Coiny
          essaye de casser les barrières et repenser la répartition des
          richesses à sa manière. Vous pouvez donc disposer d’un code de 5€ chez
          Cédric.
        </p>
      </div>
      <div className="blankSpace"></div>
    </div>
  )
}

export default Article
