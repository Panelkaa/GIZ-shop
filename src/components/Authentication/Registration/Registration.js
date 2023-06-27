import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Registration.css";
import { useState } from 'react';
import { FcBusinessman } from 'react-icons/fc';
import { FcBusinesswoman } from 'react-icons/fc';
import {Link} from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {useDispatch} from 'react-redux'
import {setUser} from '../../../store/slice/userSlice'
import InputMask from 'react-input-mask';



const Registration = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [inputs, setInputs] = useState({
    userName: '',
    userSurname: '',
    email: '',
    phone: '',
    password: '',
    birthday: '',
    gender: '',
  })
  
  const [err, setErr] = useState(null)

  const handelChange = (e) => {
    setInputs((prev) => ({...prev, [e.target.name]: e.target.value}))
  }

  const dispatch = useDispatch()
  const push = useNavigate()

  
  const handleRegister = async e => {
    e.preventDefault()
      fetch('http://localhost:3002/GIZ/Auth/Register', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
      }) 
      .then(function (response) {
        if (response.status === 409) {
          alert('Такой пользователя уже зарегистрирован');
        }
        return response.json();
      })
      .then ((user) => {
        dispatch(setUser({
          profile: user.recordset,      
        }))
        console.log(user.recordset[0]);
        push('/GIZ');
      })
      .catch ((err) => {
        setErr(err)
      })
  }

  return (   
      <div className='login__page'>
        <form className='login__content'>
          <h1 className='login__title'>Регистрация</h1>

          {/* <fieldset>         */}
              <label htmlFor="mail">Имя:</label>
              <input type="name"  onChange={handelChange} className="input" required name="userName" maxLength="45"/>
              <label htmlFor="name">Фамилия:</label>
              <input type="name"  onChange={handelChange} className="input" required name="userSurname"  maxLength="45"/>
              <label htmlFor="mail">Почта:</label>
              <input type="name"  onChange={handelChange} className="input" required name="email" maxLength="45"/>
              <label htmlFor="mail">Номер телефона:</label>
              {/* <input type="email" onChange={handelChange} className="input" name="phone" placeholder='+79771234433' maxLength="12"/> */}
              <InputMask mask="+79999999999" onChange={handelChange} className="input" name="phone" required></InputMask>
              <label htmlFor="password">Пароль:</label>
              <input type="password"  onChange={handelChange} className="input" required name="password" maxLength="45"/>
              <label htmlFor="password">Дата рождения:</label>
              <input type="date" 
                className='input'    
                aria-required="true" 
                aria-invalid="false" 
                onChange={handelChange}
                name="birthday"
                required
                />
              <div className='gender__block'>
                <div className='form_radio_btn'>
                  <input id="radio-1" type="radio" className="gender" name="gender" value='1' onChange={handelChange}/>
                  <label htmlFor="radio-1"><FcBusinessman className='male'/></label>
                </div>
                <div className='form_radio_btn'>
                  <input id="radio-2" type="radio" className="gender" name="gender" value='2' onChange={handelChange}/>
                  <label htmlFor="radio-2"><FcBusinesswoman  className='female'/></label>
                </div>
              </div>
                {/* {err && err} */}
                {!inputs.userName.length || !inputs.phone.length || !inputs.userSurname.length || !inputs.email.length || !inputs.phone.length || !inputs.password.length ?
                        <button className='enter__btn' type="submit" onClick={handleRegister}>Зарегистрироваться</button>   
                        :
                        <Link to={'/GIZ'}>
                            <button className='enter__btn' type="submit" onClick={handleRegister}>Зарегистрироваться</button>   
                        </Link>
                    }
                {/* <button className='enter__btn' type="submit" onClick={handleRegister}>Зарегистрироваться</button>     */}
                <p className='switch__login'>
                   Уже зарегистрированы? <Link className='switch__link' to='/GIZ/Login'>Войти</Link>
                </p>      
                {/* <button onClick={()=> setRegistration(true)} type="text">Регистрация</button> */}
          {/* </fieldset>     */}
        </form>
      </div>
  )
}

export default Registration;