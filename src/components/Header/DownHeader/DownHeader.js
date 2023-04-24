import React from 'react'
import './DownHeader.css'
import { Link } from 'react-router-dom';
import Main from '../../../images/pngegg.png'

function DownHeader() {
  return (
    <div className="header">
        <main className='header__main'>         
            <div className="hero-content">
                <h2><span className="discount"></span>
                    Магазин Giz
                </h2>
                <h1>
                    <span>Магазин электротранспорта</span>
                    <span>Giz</span> 
                </h1>
                <Link to='/GIZ/Product'>
                 <div className="btn" href="#">shop now</div>
                </Link>
                
            </div>
            <div className="hero-content__scooter">
                <img
                        src={Main}
                        alt="[100%x225]"
                        className='main__back'
                />
            </div>         
         </main>
    </div>
  )
}

export default DownHeader;