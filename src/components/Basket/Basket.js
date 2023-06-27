import React, { useEffect, useState } from 'react'
import "../Basket/Basket.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faTrash } from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from 'react-redux';
import {AddOrder} from '../../store/slice/userSlice';
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

    // const [user,setUser] = useState(localStorage.setItem('user', JSON.stringify([])))

    const dispatch = useDispatch();
    
    useEffect(() => {       
        setTotal({
            price: order.reduce((prev, curr) => {return prev + curr.priceTotal}, 0),
        })
        setOrder(order)
        // if(!localStorage.getItem('user')) {
        //     localStorage.setItem('user', JSON.stringify([]))
        // }else {
        //     return false
        // }
    }, [order])

    const countUp = (id) => {
        setOrder((order) => {          
            return order.map((product) => {                   
                    if (product.idProduct === id) {     
                        return {
                            ...product,
                            count: product.count + 1,
                            priceTotal: (product.count + 1) * product.priceElectro,    
                        };                      
                    }  
                    localStorage.setItem("order", JSON.stringify(order)); 
                    return product;                                                
               })                 
        })      
    }

    const countDown = (id) => {
        setOrder((order) => {
            return order.map((product) => {
                    if(product.idProduct === id) {                    
                        const newCount = product.count - 1 > 1 ? product.count - 1 : 1
                        return {
                            ...product,
                            count: newCount,
                            priceTotal: newCount * product.priceElectro,
                            
                        };                      
                    }
                localStorage.setItem("order", JSON.stringify(order));
                    return product; 
               })         
        })  
    }

    const changeValue = (id, value) => {
        setOrder((order) => {
            return order.map((product) => {
                    if(product.idProduct === id) {
                        return {
                            ...order,
                            count: value,
                            priceTotal: value * product.priceElectro,
                        };
                    }
                    localStorage.setItem("order", JSON.stringify(order));
                    return product;                   
               })         
        })      
    }
    
    const handleDelete = (id) => {
        const indexOrder = order.findIndex(el => el.idProduct === id);
        console.log(indexOrder);
        const orderRemove = [...order]
        orderRemove.splice(indexOrder, 1)
      
        dispatch(AddOrder({
            AddOrder: [...orderRemove]
        }))
        
        localStorage.setItem("order", JSON.stringify(orderRemove));
        setOrder(JSON.parse(localStorage.getItem("order")));
        setTotal(+total.price - id.priceTotal)
    };

    const decor = () => {
        setOrder(order)
        localStorage.setItem("order", JSON.stringify(order));
    }
    
    console.log(order);
    // console.log(localStorage.getItem('user'));

  return (
    <div>
        <div className="container-md cart">
            <h1>Список товаров в корзине</h1>
            {order.length ? order.map((item, i) =>           
                <div key={i} id={i} className='card__order'>
                    <img className='order__img' src={require(`../../images/products/${item.image.split('/')[11]}`)} alt="[100%x225]" /> 
                    <div className='order__title'>
                      <h2>{item.nameOfMaker} {item.ModelElectro}</h2>
                    </div>
                    <div className='order__price'>  
                      <h2>{Intl.NumberFormat('ru-RU').format(item.priceTotal)} ₽</h2> 
                    </div>

                    <div className='count'>
                    
                        <div className='count__box'>
                            <input onChange={(e) => {changeValue(item.idProduct, +e.target.value)}} type='number' className='count__input' min='1' max='10' value={item.count}/>
                        </div>
                        <div className='count__controls'>
                            <button onClick={() => {countUp(item.idProduct)}} type='button' className='count__up'>+</button>
                            <button onClick={() => {countDown(item.idProduct)}} type='button' className='count__down'>-</button>
                        </div>
                    
                    </div>
                    
                    {/* <div > */}
                        <FontAwesomeIcon className='order__delete' onClick={() => {handleDelete(item.idProduct)}} icon={faTrash} title='Удалить'/>                
                    {/* </div>          */}
                </div>
            ) : <h3 className='container-md middle'>Корзина пустая</h3>}
            <div className="total-price">
                    <table>
                        <tbody>
                        <tr>
                          <td className='order__amount'>Товаров в корзине:</td>
                          <td className='num__amount'>{order.length}</td>
                        </tr>
                        <tr>
                          <td className='order__amount-down'>Товары ({order.length}):</td>
                          <td className='order__summa'> {Intl.NumberFormat('ru-RU').format(total.price)} руб.</td>
                        </tr>
                        <tr>
                          <td className='total'>Итого к оплате</td>
                          <td className='order__summa'>{Intl.NumberFormat('ru-RU').format(total.price)} руб.</td>
                        </tr>
                        </tbody>
                    </table>                    
                        {!localStorage.getItem('user') ? <Link to={'/GIZ/Login'}> <div onClick={decor} className="checkout btn">Войдите в профиль</div></Link>
                        :  order.length ? <Link to={'/GIZ/Order'}> <div onClick={decor} className="checkout btn">Перейти к оформлению</div></Link>
                        : <Link to={'/GIZ/Product'}> <div className="checkout btn">Добавьте товар в корзину</div> </Link>}  
                </div>
        </div>   
   </div>
    
  )
}

export default Order;