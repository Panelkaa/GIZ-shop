import React from 'react'
import "./Section.css"

function RecommendedProducts() {
  return (
    <div>
    <section class="section featured">
      <div class="title">
        <h1>Рекомендуемые продукты</h1>
      </div>

      <div class="product-center container">
        <div class="product">
          <div class="product-header">
            {/* <img src="./images/whieSamik.jpg" alt=""> */}
            <ul class="icons">
              <span><i class="bx bx-heart"></i></span>
              <span><i class="bx bx-shopping-bag"></i></span>
              <span><i class="bx bx-search"></i></span>
            </ul> 
          </div>
          
          <div class="product-footer">
            <a href="#">
              <h3>Электросамокат Kugoo HX</h3>
            </a>
            <div class="rating">
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bx-star"></i>
            </div>
            <h4 class="price">Цена: 25000 руб.</h4>
          </div>
        </div>
        <div class="product">
          <div class="product-header">
            {/* <img src="./images/Mini.jpg" alt=""> */}
            <ul class="icons">
              <span><i class="bx bx-heart"></i></span>
              <span><i class="bx bx-shopping-bag"></i></span>
              <span><i class="bx bx-search"></i></span>
            </ul>
          </div>
          <div class="product-footer">
            <a href="#">
              <h3>Электросамокат KUGOO S3 Jilong</h3>
            </a>
            <div class="rating">
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bx-star"></i>
            </div>
            <h4 class="price">Цена: 23900 руб.</h4>
          </div>
        </div>
        <div class="product">
          <div class="product-header">
            {/* <img src="./images/tree.jpg" alt=""> */}
            <ul class="icons">
              <span><i class="bx bx-heart"></i></span>
              <span><i class="bx bx-shopping-bag"></i></span>
              <span><i class="bx bx-search"></i></span>
            </ul>
          </div>
          <div class="product-footer">
            <a href="#">
              <h3>Электросамокат HIMO L2 2022</h3>
            </a>
            <div class="rating">
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bx-star"></i>
            </div>
            <h4 class="price">Цена: 29900 руб.</h4>
          </div>
        </div>
        <div class="product">
          <div class="product-header">
            {/* <img src="./images/velo1.jpg" alt=""> */}

            <ul class="icons">
              <span><i class="bx bx-heart"></i></span>
              <span><i class="bx bx-shopping-bag"></i></span>
              <span><i class="bx bx-search"></i></span>
            </ul>
          </div>
          <div class="product-footer">
            <a href="#">
              <h3>Электровелосипед HIPER Engine Fold X1</h3>
            </a>
            <div class="rating">
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bx-star"></i>
            </div>
            <h4 class="price">Цена: 63 500 руб.</h4>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default RecommendedProducts;