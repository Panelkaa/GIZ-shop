import React from 'react'
import OnlyHead from '../Header/OnlyHead/OnlyHead';
import Order from '../Order/Order';
import "./Basket.css"
import Footer from '../Footer/Footer';

function Basket() {
  return (
    <div>
        <OnlyHead />
        <Order />
        <Footer />
    </div>
  )
}

export default Basket