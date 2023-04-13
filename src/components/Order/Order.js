import React, { useEffect, useState } from 'react'
import "../Order/Order.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {AddOrder} from '../../store/slice/userSlice';
import { store } from "../../store";
import Form from '../Form/Form';
import { Link } from 'react-router-dom';
import OnlyHead from '../Header/OnlyHead/OnlyHead';
import Footer from '../Footer/Footer';

function Order() {  
    const [order, setOrder] = useState(() => {
        const saved = localStorage.getItem("order");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
        
    });

    const [total, setTotal] = useState({
        price: order.reduce((prev, curr) => {return prev + curr.priceTotal}, 0),
    });
   
   

  return (
    <div>
        <OnlyHead/>
        <div className="container-md cart form">
            
            <h2>В таблице ниже - содержимое вашего заказа:</h2>
            <div className='order__block'>
                {order ? order.map((item, i) => 
                <div key={i} id={i} className='card__order'>
                        <img className='order__img' src={require(`../../images/products/${item.image}`)} alt="[100%x225]" /> 
                        <div className='order__title'>
                        <h2>{item.nameOfMaker} {item.ModelElectro}</h2>
                        </div>
                        <div className='order__price'>  
                        <h2>{Intl.NumberFormat('ru-RU').format(item.priceTotal)} ₽</h2> 
                        </div>

                        <div className='count'>
                        
                            <div className='count__product'>
                                <div>Количество: <span className='count__num'>{item.count}</span></div>
                                {/* <input type='number' className='count__input' min='1' max='10' value={item.count}/> */}
                            </div>
                            
                        
                        </div>
                        
                            <FontAwesomeIcon className='order__delete'  title='Удалить'/>                

                    </div>) 
                : ''}

                <div className='total'>
                    <div className='total__text'>Итого к оплате:</div>
                    <div className='order__summa'>{Intl.NumberFormat('ru-RU').format(total.price)} руб.</div>
                </div>

            </div>
            
            <Form priceTotal = {total.price}/>
        </div>  
        <Footer />
    </div>
    
  )
}

export default Order;