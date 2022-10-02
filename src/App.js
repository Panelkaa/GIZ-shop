import React from 'react'
import Header from './components/Header/Header';
import RecommendedProducts from './components/Main/Offer/RecommendedProducts';
import LastProduct from './components/Main/Offer/LastProduct';

const App = () => {
  return (
    <div>
      <Header />
      <RecommendedProducts />
      <LastProduct />
    </div>
  )
}

export default App;