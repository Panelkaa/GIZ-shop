import React from 'react'
import Footer from '../Footer/Footer';
import Card from './Card/Card'
import "./Product.css"
import { Icon } from '@iconify/react';
import OnlyHead from '../Header/OnlyHead/OnlyHead';

function Product() {
  return (
    <div>
        <OnlyHead />
        <section className="section all-products" id="products">
            <div className="top container">
                <h1 className='product__title'>Все товары</h1>
                <input className='search' type='text' placeholder='Поиск'/>
                <form>
                    <select className='product__select'>
                        <option value="1">Сортировка</option>
                        <option value="2">По возрастанию</option>
                        <option value="3">По убыванию</option>
                        <option value="5">По рейтингу</option>
                    </select>
                    <span className='arrow'><Icon icon="bx:chevron-down"/></span>
                </form>
            </div>      
            
            <div className="product-center container">
                <div className="product-center container">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>  
        </section> 
        <section className="pagination">
        <div className=" container">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span><Icon icon="bx:right-arrow-alt" /></span>
        </div>
    </section>
        <Footer />
    </div>

  )
}

export default Product