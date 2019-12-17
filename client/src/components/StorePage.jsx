import React from "react"
import Bottombar from "./homepageComp/Bottombar"
import "./StorePage.scss"
import Topbar from "./homepageComp/Topbar"
import storeImg from "./img/magasin1.jpg"

const StorePage = props => {
  return (
    <div className='storeContainer'>
      <Topbar />
      <div className='storeTop'>
        <div className='roundLogo'>
          <img src={storeImg} alt='' />
        </div>
      </div>
      <div className='storeStatisitcs'>
        <div className='statContainer'>
          <div className='moneyInTheBag'>
            <img src='' alt='' />
            <span>45€</span>
          </div>
        </div>
      </div>
      <div className='storePresentation'>
        <h2>ah mais là c'est le nom du store</h2>
        <p>
          QUI EST CE STORE ??? adipisicing elit. Eaque eos porro consequuntur
          iure vero molestias perferendis eius ab vel dicta quia quas atque
          expedita nam saepe totam illo, fugiat animi Lorem ipsum dolor sit amet
          consectetur, <br /> <br /> adipisicing elit. Numquam temporibus esse
          minus exercitationem quod laboriosam qui iste aliquid ea. A dolorem
          similique quis iusto odio dicta <br />
          <br /> quasi et error nam Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Vitae rerum non praesentium, fugit quod eligendi eum
          omnis unde, aut blanditiis doloremque, iure minus accusamus
          accusantium distinctio corporis officiis labore reprehenderit.
        </p>
      </div>
      <Bottombar location={props.location} />
      <div className='bottomCompenser'></div>
    </div>
  )
}

export default StorePage
