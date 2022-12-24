import React from 'react'
import './Section.css'
import Card from '../../Product/Card/Card'

function LastProduct() {
  return (
    <div>
        <section className="section featured">
      <div className="title">
        <h1>Последние продукты</h1>
      </div>

      <div className="product-center container">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
    </div>
  )
}

export default LastProduct