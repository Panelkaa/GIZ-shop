import React from 'react'
import { Link } from 'react-router-dom';
import "./OnlyHead.css"
import { Icon } from '@iconify/react';


function OnlyHead() {

  return (
    <div>
        <div>
        <header id="home" >
    <nav className="nav">
      <div className="navigation container">
        <div className="logo">
          <h1 className='logo__text'>GIZ</h1>
        </div>

        <div className="menu">
          <div className="top-nav">
            <div className="logo">
              <h1>GIZ</h1>
            </div>
            <div className="close">
              <i className="bx bx-x"></i>
            </div>
          </div>

          <ul className="nav-list">
          <Link to='/GIZ'>
            <li className="nav-item">
            <a href="#home" className="nav-link scroll-link">Главная</a>
            </li>
          </Link>
          <Link to='/GIZ/Product'>
            <li className="nav-item">
              <a href="product.html" className="nav-link ">Товары</a>
            </li>
          </Link>
            <li className="nav-item">
              <a href="#about" className="nav-link">Контакты</a>
            </li>
          <Link to='/GIZ/Login'>
            <li className="nav-item" >
              <a href="#head" className="nav-link">Вход</a>
            </li>
          </Link>
            <Link to='/GIZ/Basket'>
            <li className="nav-item">
              {/* <a href="cart.html" className="nav-link icon"> */}
              <Icon icon="bx:shopping-bag" width="24px"/>
                  <span className="nav-link check">1</span>
              {/* </a> */}
            </li>
            </Link>
          </ul>
        </div>

        <a href="cart.html" className="cart-icon">
          <i className="bx bx-shopping-bag"></i>
        </a>

        <div className="hamburger">
          <i className="bx bx-menu"></i>
        </div>
      </div>
    </nav>
  </header>
    </div>
    </div>
  )
}

export default OnlyHead