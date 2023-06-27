import React from 'react'
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import {  faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {  faPhone } from '@fortawesome/free-solid-svg-icons';
import {  faPaperPlane } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <div>
      <footer id="footer" className=" footer">
        <div className="container">
          <div className="footer-container">

            <div className="footer-center">
              <a name="about"></a>
              <h3 className='footer__title'>О нас</h3>
              <div>    
                <span>
                <FontAwesomeIcon className='icon' icon={faMapMarkerAlt}></FontAwesomeIcon>
                </span>
                Большая Семёновская улица, 23А
              </div>
              <div>
                <span>
                <FontAwesomeIcon className='icon' icon={faEnvelope}></FontAwesomeIcon>
                </span>
                Electro-transport@gmail.com
              </div>
              <div>
                <span>
                <FontAwesomeIcon className='icon' icon={faPhone}></FontAwesomeIcon>
                </span>
                +8 (977)-445-66-66
              </div>
              <div>
                <span>
                <FontAwesomeIcon className='icon' icon={faPaperPlane}></FontAwesomeIcon>
                </span>
                Москва, Росиия
              </div>
            </div>
            <div className="footer-center">
            <div className="mapouter"><div className="gmap_canvas"><iframe className='map'  width="600" height="280" id="gmap_canvas" src="https://maps.google.com/maps?q=%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%B0%D1%8F%20%D0%A1%D0%B5%D0%BC%D1%91%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%20%D1%83%D0%BB%D0%B8%D1%86%D0%B0,%2023%D0%90&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe><a href="https://fmovies-online.net"></a><a href="https://www.embedgooglemap.net"></a></div></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer