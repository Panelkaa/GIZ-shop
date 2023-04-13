import React from 'react'
import "./Comments.css"
import photoCommentOne from "../../../images/profile3.jpg"
import photoCommentTwo from "../../../images/profile2.jpg"
import photoCommentThree from "../../../images/profile1.jpg"
import brand from "../../../images/brand2.jpg"

function Comments() {
  return (
    <div>
        <section className="section">
      <div className="testimonial-center container">
        <div className="testimonial">
          <span>&ldquo;</span>
          <p>
            Электроcамокаты, Электровелосипеды на любой выбор. Подобрала для себя именно тот электровелосипед!!!
          </p>
          <div className="rating">
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bx-star"></i>
          </div>
          <div className="img-cover">
            <img src={photoCommentOne} alt="" />
          </div>
          <h4>Ира Андропова</h4>
        </div>
        <div className="testimonial">
          <span>&ldquo;</span>
          <p>
            Купил гироскутер, очень даволен!!! Удобный интерфейс и карзина, сделал быстро покупку
          </p>
          <div className="rating">
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bx-star"></i>
          </div>
          <div className="img-cover">
            <img src={photoCommentTwo} alt="" />
          </div>
          <h4>Влдамир Краснов</h4>
        </div>
        <div className="testimonial">
          <span>&ldquo;</span>
          <p>
            Я покупала здесь электросамокат своим двум очковым детям. Они были счастливы от этого подарка и после этого
            мы кайфанули
          </p>
          <div className="rating">
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>

          </div>
          <div className="img-cover">
            <img src={photoCommentThree} alt="" />
          </div>
          <h4>Надежда Дымкина</h4>
        </div>
      </div>
    </section>


    <section className="section">
      <div className="brands-center container">
        <div className="brand">
          <img src={brand} alt="" />
        </div>
        <div className="brand">
          <img src={brand} alt="" />
        </div>
        <div className="brand">
          <img src={brand} alt="" />
        </div>
        <div className="brand">
          <img src={brand} alt="" />
        </div>
        <div className="brand">
          <img src={brand} alt="" />
        </div>
        <div className="brand">
          <img src={brand} alt="" />
        </div>
      </div>
    </section>
    </div>
  )
}

export default Comments