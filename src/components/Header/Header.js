import React from 'react'
import './Header.css'
import DownHeader from './DownHeader/DownHeader';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import {Navigate } from 'react-router-dom'
import {useDispatch} from 'react-redux';
import { useAuth } from '../../hooks/use-auth';
import {removeUser} from '../../store/slice/userSlice.js';

 function Header() {
  const dispatch = useDispatch()
  const {isAuth, email} = useAuth()
  console.log(email);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
   return isAuth ? (
    // <div>
    //   <h1>Welcome</h1>

    //   <button onClick={() => dispatch(removeUser)}>Log out from {email}</button>
    // </div>
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
          <Link to='/'>
            <li className="nav-item">Главная
            {/* <a href="giz" className="nav-link scroll-link">Главная</a> */}
            </li>
          </Link>
          <Link to='/GIZ/Product'>
            <li className="nav-item">Товары
              {/* <a href="product.html" className="nav-link ">Товары</a> */}
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
    <DownHeader />
    {/* <Login render={(props)=> <Login {...props} setIsLoggedIn={setIsLoggedIn}/>} props={props} /> */}
  </header>
     </div>
   
  ) : (  
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
          <Link to='/'>
            <li className="nav-item">Главная
            {/* <a href="giz" className="nav-link scroll-link">Главная</a> */}
            </li>
          </Link>
          <Link to='/GIZ/Product'>
            <li className="nav-item">Товары
              {/* <a href="product.html" className="nav-link ">Товары</a> */}
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
    <DownHeader />
    {/* <Login render={(props)=> <Login {...props} setIsLoggedIn={setIsLoggedIn}/>} props={props} /> */}
  </header>
     </div>
   )
 }
 
 export default Header;