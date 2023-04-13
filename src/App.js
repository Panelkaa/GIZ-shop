import React from 'react'
import Product from './components/Product/Product';
import Main from './components/Main/Main';
import Basket from './components/Basket/Basket';
import Card from './components/Product/Card/Card';
import { Routes, Route } from 'react-router-dom';
import Registration from './components/Authentication/Registration/Registration';
import Login from './components/Authentication/Login/Login.js';
import Order from './components/Order/Order'




function App () {
  return (
      <Routes>
        <Route path='/GIZ' element={<Main />}/>      
        <Route path='/GIZ/Product' element={<Product />} />
        <Route path='/GIZ/Card' element={<Card />}>
          <Route path=':id' element={<Card />} />
        </Route>
        <Route path='/GIZ/Basket' element={<Basket />} />
        <Route path='/GIZ/Order' element={<Order />} />
      
      
        <Route path='/GIZ/Login' element={<Login />} />
        <Route path='/GIZ/Registration' element={<Registration />} />
      </Routes>
  );
}

export default App;
