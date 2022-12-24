import React, { useState } from 'react'
import Product from './components/Product/Product';
import Main from './components/Main/Main';
import Basket from './components/Basket/Basket';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './components/Authentication/Registration/Registration';
import Login from './components/Authentication/Login/Login.js';



function App () {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    // <BrowserRouter>
      <Routes>
        <Route path='/GIZ' element={<Main />}/>
        <Route path='/GIZ/Product' element={<Product />} />
        <Route path='/GIZ/Basket' element={<Basket />} />
        <Route path='/GIZ/Login' element={<Login />} />
        <Route path='/GIZ/Registration' element={<Registration />} />
      </Routes>
      
        
    // </BrowserRouter>  
  );
}

export default App;
