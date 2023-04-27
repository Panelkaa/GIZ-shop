import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import "./OnlyHead.css"
import { Icon } from '@iconify/react';
import {useDispatch} from 'react-redux';
import { useAuth } from '../../../hooks/use-auth';
import {removeUser} from '../../../store/slice/userSlice';
import logo from '../../../images/logo.jpg';


function OnlyHead(order) {
  const [countBucket, setCountBucket] = useState()
  const dispatch = useDispatch();
  const {isAuth, email} = useAuth();
  const {user, setUser} = useState();




  useEffect (() => {
    const res = localStorage.getItem("order");
    const count = JSON.parse(res);
    setCountBucket(count.length)
    // console.log(user);
  })

  return isAuth ?( 
    // <div>
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
                <li className="nav-item">Главная
                </li>
              </Link>
              <Link to='/GIZ/Product'>
                <li className="nav-item">Товары
                </li>
              </Link>
                <li className="nav-item">
                  <a href="#footer" className="nav-link">Контакты</a>
                </li>
              <Link to='/GIZ'>{isAuth ? (<span className='userEmail'> {email} <button className='exit__btn' onClick={() => dispatch(removeUser())}>Выйти</button> </span>) : (<li className="nav-item">
                Вход
                </li>)}
              </Link>       
                <Link to='/GIZ/Basket'>
                  <li className="nav-item">
                    <Icon icon="bx:shopping-bag" width="24px"/>
                        <span className="nav-link check">{countBucket}</span>
                  </li>
                </Link>
              </ul>
            </div>

            <div className="cart-icon">
              <i className="bx bx-shopping-bag"></i>
            </div>

            <div className="hamburger">
              <i className="bx bx-menu"></i>
            </div>
          </div>
        </nav>
      </header>
    //  </div>
   
  ) : (  
     

    <header id="home" >
      <nav className="nav">
        <div className="navigation container">
          <div className="logo">
          <Link to='/GIZ'>
            <img className='logo__text' src={logo} style={{'width': '50px'}} alt="[100%x225]" />
          </Link>   
             {/* <h1 className='logo__text'>GIZ</h1> */}
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
              <a href="#footer" className="nav-link">Контакты</a>
            </li>
          <Link to='/GIZ/Login'>
            <li className="nav-item">
            Вход
            </li>
          </Link>
            <Link to='/GIZ/Basket'>
              <li className="nav-item">
                <Icon icon="bx:shopping-bag" width="24px"/>
                    <span className="nav-link check">{countBucket}</span>
              </li>
            </Link>
          </ul>
        </div>

        <div className="cart-icon">
          <i className="bx bx-shopping-bag"></i>
        </div>

        <div className="hamburger">
          <i className="bx bx-menu"></i>
        </div>
      </div>
    </nav>

  </header>

 
  )
}

export default OnlyHead