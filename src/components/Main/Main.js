import React from 'react'
import Header from '../Header/Header'
import RecommendedProducts from './Offer/RecommendedProducts';
import LastProduct from './Offer/LastProduct';
import Banner from './Banner/Banner';
import Comments from './Comments/Comments';
import Footer from '../Footer/Footer';
import { useAuth } from '../../hooks/use-auth'
import {useDispatch} from 'react-redux';
import {removeUser} from '../../store/slice/userSlice.js'


function Main() {
  const dispatch = useDispatch()
  const {isAuth, email} = useAuth()
  return (
    <div> 
        <Header />
        <RecommendedProducts />
        <LastProduct /> 
        <Banner />
        <Comments />   
        <Footer />
    </div>
  )
}

export default Main