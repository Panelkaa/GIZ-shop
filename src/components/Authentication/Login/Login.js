import React from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
import {useState} from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useDispatch} from 'react-redux'
import {setUser} from '../../../store/slice/userSlice'

const Login = ({handleClick}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const dispatch = useDispatch()
  const push = useNavigate()

  async function handleLogin (e) {
    e.preventDefault()
    const auth = getAuth();  
    console.log(auth);  
    await signInWithEmailAndPassword(auth, email, password)
    .then (({user}) => {
      console.log(user);
        dispatch(setUser({
        email: user.email,
        id: user.uid,
        token: user.accessToken,
      }));
      push('/GIZ');
    })
    .catch(() => {
      alert('Такого пользователя нет')
    });
      
  }

  // const handleLogin = (e, email, password) => {
  //   e.preventDefault()
  //   const auth = getAuth();

  //   signInWithEmailAndPassword(auth, email, password)
  //     .then(({user}) => {
  //       console.log(user);
  //       dispatch(setUser({
  //       email: user.email,
  //       id: user.uid,
  //       token: user.accessToken,
  //     }));
  //     push('/GIZ');
  //     })
  //     .catch(console.error);
      
  // }
  
  return ( 
    
      <div className='login__page'>
        <form className='login__content' onClick={e => e.stopPropagation()} >
          <h1 className='login__title'>Авторизация</h1>

          <fieldset>        
              <label htmlFor="mail">Email:</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mail" name="user_email"/>
              <label htmlFor="password">Пароль:</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="password" name="user_password"/>
                <button className='enter__btn' type="submit" onClick={handleLogin}>Войти</button>    
                <p className='switch__login'>
                  Или <Link className='switch__link' to='/GIZ/Registration'>Регистрация</Link>
                </p>      
                {/* <button onClick={()=> setRegistration(true)} type="text">Регистрация</button> */}
          </fieldset>    
        </form>
      </div>
    


  )
}

export default Login;