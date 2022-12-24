import React from 'react'
import mainSamik from "../../../images/mainSamik.jpg"
import "./Banner.css"

function Banner() {
  return (
    <div>
        <section className="section">
      <div className="product-banner">
        <div className="left">
          <img className='scooter' src={mainSamik} alt="" />
        </div>
        <div className="right">
          <div className="content">
            <h2><span className="discount">20% </span> SALE OFF</h2>
            <h1>
              <span>Новая коллекция</span>
              <span>Электросамокатов</span>
            </h1>
            <a className="btn" href="./product.html">shop now</a>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Banner;