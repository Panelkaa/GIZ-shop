import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div>
        <footer id="footer" className="section footer">
    <div className="container">
      <div className="footer-container">

        <div className="footer-center">
          <a name="about"></a>
          <h3>О нас </h3>
          <div>    
            <span>
              <i className="fas fa-map-marker-alt"></i>
            </span>
            Большая Семёновская улица, 23А
          </div>
          <div>
            <span>
              <i className="far fa-envelope"></i>
            </span>
            Electro-samokat@gmail.com
          </div>
          <div>
            <span>
              <i className="fas fa-phone"></i>
            </span>
            +8 (977)-445-66-66
          </div>
          <div>
            <span>
              <i className="far fa-paper-plane"></i>
            </span>
            Москва, Росиия
          </div>
        </div>
      </div>
    </div>
   
  </footer>
    </div>
  )
}

export default Footer