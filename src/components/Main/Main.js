import React from 'react'
import Header from '../Header/Header'
import RecommendedProducts from './Offer/RecommendedProducts';
import Banner from './Banner/Banner';
import Comments from './Comments/Comments';
import Footer from '../Footer/Footer';
import DownHeader from '../Header/DownHeader/DownHeader';
import OnlyHead from '../Header/OnlyHead/OnlyHead';


function Main() {
  return (
    <div> 
        <OnlyHead />
        <DownHeader />
        <RecommendedProducts />
        <Banner />
        <Comments />   
        <Footer />
    </div>
  )
}

export default Main