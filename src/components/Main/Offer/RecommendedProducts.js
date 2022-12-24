import React from 'react'
import Card from '../../Product/Card/Card';
import "./Section.css"


function RecommendedProducts() {
  return (
    <div>
    <section className="section featured">
      <div className="title">
        <h1>Рекомендуемые продукты</h1>
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

export default RecommendedProducts;