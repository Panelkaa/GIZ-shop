import React from 'react'
import HeaderPage from '../Header/HeaderPage'
import RecommendedProducts from './Offer/RecommendedProducts';
import Banner from './Banner/Banner';
import Comments from './Comments/Comments';
import Footer from '../Footer/Footer';
import DownHeader from '../Header/DownHeader/DownHeader';
import OnlyHead from '../Header/OnlyHead/OnlyHead';


function Main() {
  return (
    <div> 
        <HeaderPage />
        <RecommendedProducts />
        <Banner />
        <Comments />   
    </div>
  )
}

export default Main