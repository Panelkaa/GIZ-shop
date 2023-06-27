import React, { useEffect, useState } from 'react'
import "../Order/Order.css";
import Form from '../Form/Form';


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
        <div className="container-md cart form ">
            
            <h2>В таблице ниже - содержимое вашего заказа:</h2>
            <div className='order__block'>
                {order ? order.map((item, i) => 
                <div key={i} id={i} className='card__order'>
                        <img className='order__img' src={require(`../../images/products/${item.image.split('/')[11]}`)} alt="[100%x225]" /> 
                        {/* <div className='order__info'> */}
                            <div className='order__title'>
                                <h2 className='item__name'>{item.nameOfMaker} {item.ModelElectro}</h2>
                            </div>
                            <div className='order__price'>  
                                <h2 className='item__name'>{Intl.NumberFormat('ru-RU').format(item.priceTotal)} ₽</h2> 
                            </div>
                        {/* </div> */}
                            <div className='count'>
                            
                                <div className='count__product'>
                                    <div>Количество: <span className='count__num'>{item.count}</span></div>
                                </div>
                                
                            
                            
                        </div>
                    </div>) 
                : ''}

                <div className='total'>
                    <div className='total__text'>Итого к оплате:</div>
                    <div className='order__summa'>{Intl.NumberFormat('ru-RU').format(total.price)} руб.</div>
                </div>

            </div>
            
            <Form priceTotal = {total.price}/>
        </div>  
    </div>
    
  )
}

export default Order;