import React, { useState } from 'react'
import './Header.css'
import DownHeader from './DownHeader/DownHeader';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import {Navigate } from 'react-router-dom'
import {useDispatch} from 'react-redux';
import { useAuth } from '../../hooks/use-auth';
import {removeUser} from '../../store/slice/userSlice.js';
import logo from '../../images/logo.png';

 function Header() {
  const dispatch = useDispatch();
  const {isAuth, email} = useAuth();
  
   return isAuth ? (
    <div>
    <header id="home" className="header">
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
            <li className="nav-item">Главная
            </li>
          </Link>
          <Link to='/GIZ/Product'>
            <li className="nav-item">Товары
            </li>
          </Link>
            <li className="nav-item">
              <a href="#about" className="nav-link">Контакты</a>
            </li>
          <Link to='/GIZ'>{isAuth ? (<span>{email} <button className='exit__btn' onClick={() => dispatch(removeUser)}>Log out</button> </span>) : (<li className="nav-item" >
            Вход
            </li>)}
          </Link>       
            <Link to='/GIZ/Basket'>
              <li className="nav-item">
                <Icon icon="bx:shopping-bag" width="24px"/>
                    <span className="nav-link check">1</span>
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
    <DownHeader />
   
  </header>
     </div>
   
  ) : (  
     <div>
    <header id="home" className="header">
      <nav className="nav">
        <div className="navigation container">
          <div className="logo">
          <img className='logo__text' src={logo} alt="[100%x225]" />
            {/* <h1 className='logo__text'>{logo}</h1> */}
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
            <li className="nav-item">Главная
            </li>
          </Link>
          <Link to='/GIZ/Product'>
            <li className="nav-item">Товары
            </li>
          </Link>
            <li className="nav-item">
              <a href="#about" className="nav-link">Контакты</a>
            </li>
          <Link to='/GIZ/Login'>
            <li className="nav-item">
            Вход
            </li>
          </Link>
            <Link to='/GIZ/Basket'>
              <li className="nav-item">
                <Icon icon="bx:shopping-bag" width="24px"/>
                    <span className="nav-link check">1</span>
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
    <DownHeader />
  </header>
     </div>
   )
 }
 
 export default Header;