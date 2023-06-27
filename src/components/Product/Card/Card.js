import React, { useState, useEffect } from 'react'
import "./Card.css";
import { store } from "../../../store";
import {useDispatch} from 'react-redux';
import {AddOrder} from '../../../store/slice/userSlice';

function Card() {
  const [card, setCard] = useState([]);
  const [productOrder, setProductOrder] = useState([...store.getState().user.AddOrder]);
  const [characteristics, setCharacteristics] = useState();
  const [cardID, setCardID] = useState(store.getState().user.electroID);
  const [id, setId] = useState(() => {
    const saved = localStorage.getItem("id");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const dispatch = useDispatch();
  
  useEffect(() => {
    async function fetchData() {
      await fetch(`http://localhost:3002/GIZ/Card/${id}`)
        .then(res => res.json())
        .then(data => {      
            setCard([data])         
        })    
      await fetch(`http://localhost:3002/GIZ/Card/Characteristics/${id}`)
      .then(res => res.json())
      .then(data => {      
        setCharacteristics([data])         
      })       
    }
    fetchData(cardID)
      .catch(console.error);   
  }, [cardID])

 

  const handlerOrder = (e) => {
    e.preventDefault();
    const localStorageOrder = [localStorage.getItem('order')];
    productOrder.push(...card);
    console.log(productOrder);
    dispatch(AddOrder({
      AddOrder: [...productOrder],
    }))    
    localStorageOrder.push(localStorage.setItem("order", JSON.stringify(productOrder)));   
}

  return (
    <div className='theme'>
          <section className="section all-products">        
                <div className="product-center container">  
                
                    {card && card.map((item, i) =>
                      <div key={i} className='card'>
                        <div className='card__title'>
                          <h1 >{item.nameElectro} {item.ModelElectro}</h1>
                        </div>
                        <div className='card__background'>  
                          
                            <div className='card__block-image' >
                              <img className='card__img' src={require(`../../../images/products/${item.image.split('/')[11]}`)} alt="[100%x225]" />
                              
                            </div> 
                        
                          <div className='card__info'>
                          <div className='info__item'>
                            {item.nameStatus === 'В наличии' ? <p className='card__status'>{item.nameStatus}</p> : <p className='card__status notAvailable'>{item.nameStatus}</p>}
                            <p className='description__title'>Описание товара:</p>
                            <p className='description__text'>{item.description}</p>
                          </div>

                          {characteristics && characteristics.map((item, i) =>
                            
                            <div key={i} className='characteristic__block'>
                                
                              <div className='item__characteristic'>
                                <p className='characteristic__title'>Скорость:</p>
                                <p className='characteristic__text'>{item[0].name} {item[0].nameUnit}</p>
                              </div>
                              <div className='item__characteristic'>
                                <p className='characteristic__title'>Запас хода:</p>
                                <p className='characteristic__text'>{item[1].name} {item[1].nameUnit}</p>
                              </div>
                              <div className='item__characteristic'>
                                <p className='characteristic__title'>Мощность:</p>
                                <p className='characteristic__text'>{item[2].name} {item[2].nameUnit}</p>
                              </div>
                              <div className='item__characteristic'>
                                <p className='characteristic__title'>Максимальная нагрузка:</p>
                                <p className='characteristic__text'>{item[3].name} {item[3].nameUnit}</p>
                              </div>
                              <div className='item__characteristic'>
                                <p className='characteristic__title'>Вес:</p>
                                <p className='characteristic__text'>{item[4].name} {item[4].nameUnit}</p>
                              </div>
                              <div className='item__characteristic'>
                                <p className='characteristic__title'>Емкость аккумулятора:</p>
                                <p className='characteristic__text'>{item[5].name} {item[5].nameUnit}</p>
                              </div>
                              <div className='item__characteristic'>
                                <p className='characteristic__title'>Время полной зарядки:</p>
                                <p className='characteristic__text'>{item[6].name} {item[6].nameUnit}</p>
                              </div>
                              <div className='item__characteristic'>
                                <p className='characteristic__title'>Тормоза:</p>
                                <p className='characteristic__text'>{item[7].name} {item[7].nameUnit}</p>
                              </div>
                            </div>
                          )} 
                            
                              <div className='card__footer'>
                                <div className='item__price'> 
                                  <p className='price__total'>{Intl.NumberFormat('ru-RU').format(item.priceElectro)} руб.</p>
                                  <div className='card__btn'>
                                  {item.nameStatus === 'В наличии' ?  <button className='btn__price' onClick={handlerOrder}>В корзину</button> :  <button className='btnNotAvailable' onClick={() => {handlerOrder(item)}}>Нет в наличии</button>}   
                                  </div>
                                  <span className='price__subtext'>Купить в один клик</span>
                                </div>
                                <div className='item__delivery'> 
                                  <p className='delivery__title'>Информация о доставке</p>
                                  <div className='delivery__info'>
                                    <p className='delivery__text'>Бесплатная доставка по всей России при заказе на сумму от 50.000 рублей!</p>
                                  </div>
                                  <div className='delivery__info-moscow'>
                                    <p className='delivery__text-moscow'>Доставка по Москве на следующий день после заказа!</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                          </div>   
                      </div>
                    )}                   
                </div>                 
        </section>
    </div>
  )
}

export default Card;