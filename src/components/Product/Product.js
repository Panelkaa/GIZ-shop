import React, { useState, useEffect } from 'react';
import "./Product.css"
import { Icon } from '@iconify/react';
import {useDispatch} from 'react-redux'
import {electroID} from '../../store/slice/userSlice';
import {AddOrder} from '../../store/slice/userSlice';
import { Link } from 'react-router-dom';
import { store } from "../../store";
// app.use('/local-files', express.static('/'));


function Product() {
    const [productsArr, setProducts] = useState();
    const [sortArr, setSortArr] = useState();
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState(false);
    const [selects, setSelects] = useState('default');
    const [productOrder, setProductOrder] = useState([...store.getState().user.AddOrder]);
    const [count, setCount] = useState(0);
    const [selectsFilterType, setSelectsFilterType] = useState('allType');
    const [selectsFilterMaker, setSelectsFilterMaker] = useState('allMaker');
    const [selectsFilterCountry, setSelectsFilterCountry] = useState('allCountry');
    const [selectsFilterColor, setSelectsFilterColor] = useState('allColor');

    const dispatch = useDispatch();

   
    useEffect (() => {
        async function fetchData () {
            await fetch('http://localhost:3002/GIZ/Product')
           .then(res => res.json())
           .then(data => {
            setProducts(data.recordset)
            setSortArr(data.recordset)
            console.log(data.recordset);
           })          
        }
        fetchData()    
        .catch(console.error);  
        
    },[filter])

    const handlerSearch = (e) => {
        setSearch(e.target.value)
    }

    const handleSelect = (event) => {
        setSelects(event.target.value);
        setSortArr([...productsArr])
    };


    const handleAllFilter = () => {
        fetch(`http://localhost:3002/GIZ/Product/${selectsFilterType}/${selectsFilterMaker}/${selectsFilterCountry}/${selectsFilterColor}`)
            .then((response) => {
                if (response.status !== 200) {
                    alert('Ошибка' + response.status);
                }
                return response.json();
            })
            .then(data => {
                if (data.length == 0) {
                    setSortArr(data)
                    console.log('err',data)
                } else {
                    setSortArr(data)
                    console.log('done',data)
                }
            })         
            .catch(() => {
                console.log('ERROR');
            })
    }

    const handleSet = () => {
        setSortArr(productsArr)
        setSelects('default')
        setSelectsFilterType('allType')
        setSelectsFilterMaker('allMaker')
        setSelectsFilterCountry('allCountry')
        setSelectsFilterColor('allColor')
    }

    const handlerCard = (id) => {
        localStorage.setItem("id", JSON.stringify(id));
        dispatch(electroID({
            electroID: +id,
        }))      
    }

    const handlerOrder = (item) => {  
        const localStorageOrder = [localStorage.getItem('order')];      
        let checkItem = false;

        productOrder.forEach(el => {
            if(el.idProduct === item.idProduct)
            {checkItem = true
                console.log(el.idProduct);
            }
        })
            if(!checkItem) {      
                productOrder.push(item);
                console.log(item);
                dispatch(AddOrder({
                    AddOrder: [...productOrder],
                }))     
                localStorageOrder.push(localStorage.setItem("order", JSON.stringify(productOrder)));     
            }
    } 
    

  return (
    <div>
        <section className="section all-products" id="products">
            <div className="top container">
               
                    <h1 className='top__title'>Все товары</h1>
                    <input onChange={handlerSearch} className='search' type='text' placeholder='Поиск'/>
                    <form>
                        <select
                            value={selects}
                            onChange={handleSelect}
                            className='product__select'
                        >
                            <option value='default'>По умолчанию</option>
                            <option value='asc'>По возрастанию</option>
                            <option value='desc' >По убыванию</option>
                        </select>

                            <span className='arrow'><Icon icon="bx:chevron-down"/></span>
                    </form>
          
                
            </div>      
            <div className="top container">
                <h1 className='top__title'>Фильтрация</h1>
                <select
                    value={selectsFilterType}
                    onChange={(e) => {setSelectsFilterType(e.target.value)}}
                    className='product__select'
                >
                    <option value='allType'>Выбрать тип</option>
                    <option value='Электросамокат'>Электросамокаты</option>
                    <option value='Гироскутер'>Гироскутер</option>
                    <option value='Электровелосипед'>Электровелосипед</option>
                    <option value='Моноколесо'>Моноколесо</option>
                </select>

                <select
                    value={selectsFilterMaker}
                    onChange={(e) => {setSelectsFilterMaker(e.target.value)}}
                    className='product__select'
                >
                    <option value='allMaker'>Выбрать производителя</option>
                    <option value='Ninebot'>Ninebot</option>
                    <option value='Aovo'>Aovo</option>
                    <option value='Xiaomi'>Xiaomi</option>
                    <option value='YOKAMURA'>YOKAMURA </option>
                    <option value='Smart Balance'>Smart Balance</option>
                    <option value='Hummer'>Hummer</option>
                    <option value='Besshof'>Besshof</option>
                    <option value='Airwheel'>Airwheel</option>
                </select>

                <select
                    value={selectsFilterCountry}
                    onChange={(e) => {setSelectsFilterCountry(e.target.value)}}
                    className='product__select'
                >
                    <option value='allCountry'>Выбрать страну</option>
                    <option value='США'>США</option>
                    <option value='Япония'>Япония</option>
                    <option value='Китай'>Китай</option>
                    <option value='Франция'>Франция</option>
                    <option value='Германия'>Германия</option>
                </select>

                <select
                    value={selectsFilterColor}
                    onChange={(e) => {setSelectsFilterColor(e.target.value)}}
                    className='product__select'
                >
                    <option value='allColor'>Выбрать цвет</option>
                    <option value='Черный'>Черный</option>
                    <option value='Зеленый'>Зеленый</option>
                    <option value='Белый'>Белый</option>
                    <option value='Красный'>Красный</option>
                    <option value='Синий'>Синий</option>
                    <option value='Коричневый'>Коричневый</option>
                </select>
                <button className='btn__product' onClick={handleAllFilter}>Фильтровать</button>
                <button className='btn__product' onClick={handleSet}>Сбросить</button>
            </div>
            
            <div className="product-center container">
                {search === '' || selects === 'default' ? sortArr && sortArr.filter((item) =>
                                   item.ModelElectro.toLowerCase().toString().includes(search) || item.nameOfMaker.toLowerCase().toString().includes(search)
                                ).map((item, i) => 
                                    <div key={i} id={item.idProduct} className="product" onClick={()=> {handlerCard(item.idProduct)}}>
                                        <Link to={`/GIZ/Card/${item.idProduct}`}>
                                            <div className="product-header">
                                                <img src={require(`../../images/products/${item.image.split('/')[11]}`)} alt="[100%x225]"/>
                                                {/* <ul className="icons">
                                                    <span><Icon icon="bx:heart" /></span>
                                                    <span onClick={handlerOrder}><Icon icon="bx:shopping-bag" /></span>
                                                    <span><Icon icon="bx:search" /></span>
                                                </ul>  */}                                    
                                            </div>
                                        </Link>
                                        <div className="product-footer">                                      
                                            <h3  className='product__title' key={item.uniqueId} onClick={handlerCard}>
                                                <Link to={`/GIZ/Card/${item.idProduct}`}>{item.nameOfMaker} {item.ModelElectro}</Link>
                                            </h3>
                                            <h4 key={item.uniqueId} className="price">Цена: {Intl.NumberFormat('ru-RU').format(item.priceElectro)}  ₽</h4>
                                            <div className='product__btn'>
                                                {item.nameStatus === 'В наличии' ?  <button className='btn__price' onClick={() => {handlerOrder(item)}}>В корзину</button> :  <button className='btnNotAvailable' onClick={() => {handlerOrder(item)}}>Нет в наличии</button>}   
                                            </div>
                                        </div>
                                    </div>

                ) : sortArr.filter((item) =>
                                     item.ModelElectro.toLowerCase().toString().includes(search) || item.nameOfMaker.toLowerCase().toString().includes(search)
                                ).map((item, i) => 
                                    <div key={i} id={item.idProduct} className="product" onClick={()=> {handlerCard(item.idProduct)}}>
                                        <Link to={`/GIZ/Card/${item.idProduct}`}>
                                            <div className="product-header">
                                                <img key={item.uniqueId}  src={require(`../../images/products/${item.image.split('/')[11]}`)} alt="[100%x225]" />
                                            </div>
                                        </Link>

                                        <div className="product-footer">
                                        
                                        <h3 className='product__title' key={item.uniqueId}>
                                            <Link to={`/GIZ/Card/${item.idProduct}`}> {item.nameOfMaker} {item.ModelElectro}</Link>
                                        </h3>
                                            <h4 key={item.uniqueId} className="price">Цена: {item.priceElectro} ₽</h4>
                                            <div className='product__btn'>
                                                <button className='btn__price' onClick={() => {handlerOrder(item)}}>В корзину</button>
                                            </div>
                                        </div>
                                    </div>
                                    )} 
                                    {sortArr == 0 ? 
                                        <div className = "container">
                                            <div className='empty'>
                                                <h1>Такого товара не существует</h1>
                                            </div>
                                        </div> 
                                    : ''}

                                                    
                    {selects === 'asc' ? selects === 'asc' && sortArr.sort((a,b) => a.priceElectro - b.priceElectro) && sortArr.filter((item) =>
                                     item.ModelElectro.toLowerCase().toString().includes(search) 
                                ).map((item) => 
                                    
                                {/* asc */}
                    ) : selects === 'desc' && sortArr.sort((a,b) => b.priceElectro - a.priceElectro) && sortArr.filter((item) =>
                                         item.ModelElectro.toLowerCase().toString().includes(search)  
                                    ).map((item, i) => 
                                 {/* desc */}
                    )}
            </div>  
        </section> 
        <section className="pagination">
        {/* <div className=" container">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span><Icon icon="bx:right-arrow-alt" /></span>
        </div> */}
        
        
        </section>

    </div>

  )
}

export default Product;