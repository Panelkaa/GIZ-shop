 import React from 'react'
 import './Header.css'
import DownHeader from './DownHeader/DownHeader';
 
 function Header() {
   return (
     <div>
        <header id="home" class="header">
    <nav class="nav">
      <div class="navigation container">
        <div class="logo">
          <h1>GIZ</h1>
        </div>

        <div class="menu">
          <div class="top-nav">
            <div class="logo">
              <h1>GIZ</h1>
            </div>
            <div class="close">
              <i class="bx bx-x"></i>
            </div>
          </div>

          <ul class="nav-list">
            <li class="nav-item">
              <a href="#home" class="nav-link scroll-link">Главная</a>
            </li>
            <li class="nav-item">
              <a href="product.html" class="nav-link ">Товары</a>
            </li>
            <li class="nav-item">
              <a href="#about" class="nav-link">Контакты</a>
            </li>
            <li class="nav-item">
              <a href="form.html" class="nav-link">Регистрация</a>

            </li>
            <li class="nav-item">
              <a href="enter.html" class="nav-link">Вход</a>

            </li>
            <li class="nav-item">
              <a href="cart.html" class="nav-link icon">
                  <i class="bx bx-shopping-bag"></i>
                  <span class="nav-link check">1</span>
              </a>
            </li>
          </ul>
        </div>

        <a href="cart.html" class="cart-icon">
          <i class="bx bx-shopping-bag"></i>
        </a>

        <div class="hamburger">
          <i class="bx bx-menu"></i>
        </div>
      </div>
    </nav>
    <DownHeader />
  </header>
     </div>
   )
 }
 
 export default Header;