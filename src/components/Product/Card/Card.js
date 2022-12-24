import React from 'react'
import Scooter from '../../../images/five.jpg'
import { Icon } from '@iconify/react';

function Card() {
  return (
    <div>
        <div className="product">
          <div className="product-header">
            <img src={Scooter} alt="" />
            <ul className="icons">
              <span><Icon icon="bx:heart" /></span>
              <span><Icon icon="bx:shopping-bag" /></span>
              <span><Icon icon="bx:search" /></span>
            </ul> 
          </div>
          
          <div className="product-footer">
            {/* <a href="/"> */}
              <h3>Электросамокат Kugoo HX</h3>
            {/* </a> */}
            <div className="rating">
              <Icon icon="bxs:star" />
              <Icon icon="bxs:star" />
              <Icon icon="bxs:star" />
              <Icon icon="bxs:star" />
              <Icon icon="bxs:star" />
              {/* <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bx-star"></i> */}
            </div>
            <h4 className="price">Цена: 25000 руб.</h4>
          </div>
        </div>
    </div>
  )
}

export default Card;