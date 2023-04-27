import React from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
import {useState} from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useDispatch} from 'react-redux'
import {setUser} from '../../../store/slice/userSlice'

const Login = ({handleClick}) => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  })

  const [err, setErr] = useState(null)

  const handelChange = (e) => {
    setInputs((prev) => ({...prev, [e.target.name]: e.target.value}))
  }

  console.log(inputs);

  const dispatch = useDispatch()
  const push = useNavigate()

  const handleLogin = async e => {
    e.preventDefault()
    fetch('http://localhost:3002/GIZ/Auth/Login', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
      }) 
    .then((response) => {
        if (response.status === 409) {
          alert('Неправильный логин');
        }
        else if (response.status === 400) {
          alert('Неправильный пароль');
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
    
    .catch((err) => {
      setErr(err)
    })
  }

  return ( 
    
      <div className='login__page'>
        <form className='login__content' onClick={e => e.stopPropagation()} >
          <h1 className='login__title'>Авторизация</h1>

          <fieldset>        
              <label htmlFor="mail">Email:</label>
              <input type="email" onChange={handelChange} className="input" name="email" required/>
              <label htmlFor="password">Пароль:</label>
              <input type="password" onChange={handelChange} className="input" name="password" required/>
                <button className='enter__btn' type="submit" onClick={handleLogin}>Войти</button>    
                <p className='switch__login'>
                  Или <Link className='switch__link' to='/GIZ/Registration'>Регистрация</Link>
                </p>      
                {/* <button onClick={handleLogin} type="text">Регистрация</button> */}
          </fieldset>    
        </form>
      </div>
    


  )
}

export default Login;