import React, { useEffect, useState } from 'react'
import { Route, Link, Routes } from "react-router-dom";
import './Profile.css'
import InfoProfile from './InfoProfile/InfoProfile';
import UserOrders from './UserOrders/UserOrders';

function Profile() {
  
  return (
    <div className='section__profile container'>
      <div className='profile'>
        <InfoProfile />

      
        <article className='navUser'>

          <nav>
            <Link to=''><h1 className='navTitle'>Заказы</h1></Link>
          </nav>

          <Routes>
            <Route path='' element={<UserOrders />}/>
          </Routes>
        </article>
      </div>
    </div>

  )
}

export default Profile