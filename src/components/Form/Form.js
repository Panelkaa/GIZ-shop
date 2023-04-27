import React, { useEffect, useState } from 'react'
import './Form.css'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AddOrder } from '../../store/slice/userSlice';
import { store } from "../../store";

function Form(priceTotal) {
    const [checked, setChecked] = useState(false);
    const [userEmail, setUserEmail] = useState(store.getState().user.email ? [...store.getState().user.email] : '');
    //  all input value 
    const [inputName, setInputName] = useState('');
    const [inputPhone, setInputPhone] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputAddress, setInputAddress] = useState('');
    const [inputReview, setInputReview] = useState('');
    const [inputDelivery, setInputDelivery] = useState('');
    const [inputTotalPrice, setTotalPrice] = useState(priceTotal.priceTotal);

    const deliveryValue = (e) => {
        setInputDelivery(e.target.value)
        setChecked(!checked)
    }

    const dispatch = useDispatch();

    const saved = localStorage.getItem("order");


    const handleSubmit = () => {

        const postForm = {
            userName: inputName,
            userPhone: inputPhone,
            userEmail: inputEmail,
            userAddress: inputAddress,
            userReview: inputReview,
            userDelivery: inputDelivery,
            orderDate: new Date().toLocaleDateString(),
            priceTotal: inputTotalPrice,
            userOrder: JSON.parse(saved),
        }

        fetch('http://localhost:3002/GIZ/Order/Accept', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postForm),
        })

            .then(function (response) {
                return response.json();
            })

        dispatch(AddOrder({
            AddOrder: []
        }))
        localStorage.setItem("order", JSON.stringify([]));
    }

    return (
        <div className='form container'>
            <form method="post" className='container'>
                <div className='form__one'>
                    <p className='form__title'>Заполните форму ниже, чтобы оформить заказ</p>
                    <div className='form__item'>
                        <label className='item__title'>
                            Ваше имя
                            <span className="required-dot">*</span>
                        </label>

                        <input type='text' className='item__input' onChange={(event) => setInputName(event.target.value)} name="Name" placeholder='Максим Александрович' required minLength="3" maxLength="45" />
                    </div>

                    <div className='form__item'>
                        <label className='item__title'>
                            Номер телефона
                            <span className="required-dot">*</span>
                        </label>
                        <input type='text' className='item__input' onChange={(event) => setInputPhone(event.target.value)} name="Phone" placeholder='+79771234433' required minLength="12" maxLength="12" />
                    </div>

                    <div className='form__item'>
                        <label className='item__title'>
                            Email
                            <span className="required-dot">*</span>
                        </label>
                        {userEmail
                            ? <input type='text' className='item__input' name="Email" placeholder='max@mail.ru' required minLength="9" maxLength="45" value={userEmail.join('')} />
                            : <input type='text' className='item__input' onChange={(event) => setInputEmail(event.target.value)} name="Email" placeholder='max@mail.ru' required minLength="9" maxLength="45" defaultValue='' />}
                    </div>

                    <div className='form__item'>
                        <label className='item__title'>
                            Комментарий к заказу
                            <span className="required-dot">*</span>
                        </label>
                        <textarea className='item__textarea' onChange={(event) => setInputReview(event.target.value)}></textarea>
                    </div>
                </div>

                <div className='form__delivery'>
                    <p className='form__title'>Сервис доставки</p>
                    <div className='delivery__block'>
                        <div className='delivery__item'>
                            <input type='radio' id="contactChoice1" checked={checked} className='radio' name="contact" value="Доставка курьером" onChange={deliveryValue} />
                            <label className='delivery__item-title'>
                                Доставка курьером ( 500 ₽ )
                                <div className='delivery__display'><div className='delivery__display'>Курьерская доставка по Москве, Московской области</div></div>
                                {checked ? <div className='form__item-address'>
                                    <label className='item__title'>
                                        Адрес
                                        <span className="required-dot">*</span>
                                    </label>
                                    <input type='text' name="Address" className='item__input' onChange={(event) => setInputAddress(event.target.value)} placeholder='Николоямская ул., д. 19 кв. 54' required minLength="3" maxLength="70" value={inputAddress} />
                                </div> : ''}
                            </label>
                        </div>

                        <div className='delivery__item'>
                            <input type='radio' id="contactChoice2" className='radio' name="contact" value="Самовывоз" onChange={deliveryValue} />
                            <label className='delivery__item-title'>
                                Самовывоз ( 0 ₽ )
                                <div className='delivery__display'>Москва, Большая Семёновская улица, 23А</div>
                            </label>
                        </div>
                    </div>
                </div>

                <div className='submit'>
                    {!inputName.length || !inputPhone.length || !inputEmail.length ?
                        <button type='submit' className='submit__btn' onClick={handleSubmit}>
                            <span>Оформить заказ</span>
                        </button>
                        :
                        <Link to={'/GIZ'}>
                            <button type='submit' className='submit__btn' onClick={handleSubmit}>
                                <span>Оформить заказ</span>
                            </button>
                        </Link>
                    }


                    <p className='submit__policy'>Оформляя заказ, Вы подтверждаете, что ознакомились и соглашаетесь с условиями  политики конфиденциальности и правилами продажи.</p>
                </div>
            </form>
        </div>
    )
}

export default Form