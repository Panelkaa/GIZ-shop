import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import "./Section.css";
import {AddOrder} from '../../../store/slice/userSlice';
import { store } from "../../../store";
import {useDispatch} from 'react-redux'

function RecommendedProducts() {
  const [productOrder, setProductOrder] = useState([...store.getState().user.AddOrder]);
  const [recommendedArr, setRecommendedArr] = useState();
  const [filter, setFilter] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      await fetch("http://localhost:3002/GIZ/Recommended")
        .then((res) => res.json())
        .then((data) => {
          const result = data.recordset
          setRecommendedArr(result.filter((item) => item.idProduct <= 4));
        });
    }
    fetchData();
  }, [filter]);

  const handlerOrder = (id) => {  
    const idCard = id;
    const localStorageOrder = [localStorage.getItem('order')];
    
    recommendedArr.forEach((item) => {
        if (+idCard === item.idProduct) { 
            productOrder.push(item)      
        }else  { 
            return (productOrder)
        }    
        dispatch(AddOrder({
            AddOrder: [...productOrder],
        }))       
        
        localStorageOrder.push(localStorage.setItem("order", JSON.stringify(productOrder)));     
    })   
    
}

  return (
    <div>
      <section className="section featured">
        <div className="title">
          <h1>Рекомендуемые товары</h1>
        </div>

        <div className="product-center container">
          {recommendedArr &&
            recommendedArr.map((item, i) => (
              <div key={i} id={item.idProduct} className="product">
                <div className="product-header">
                  <img
                    src={require(`../../../images/products/${item.image}`)}
                    alt="[100%x225]"
                  />

                
                </div>

                <div className="product-footer">
                  <h3 className='product__title' key={item.uniqueId}>{item.nameOfMaker} {item.ModelElectro}</h3>           
                  <h4 key={item.uniqueId} className="price">Цена: {Intl.NumberFormat('ru-RU').format(item.priceElectro)} руб.</h4>
                 
                  <div className='product__btn'>
                    <button className='btn__price' onClick={() => {handlerOrder(item.idProduct)}}>В корзину</button>
                  </div>
                </div>

                
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}

export default RecommendedProducts;
