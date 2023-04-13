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




const Registration = () => {
  const [style, setStyle] = useState('index-txt');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  
  const textDate = () => {
      const result = (style ? 'index-txt:before' : 'index-txt');
      setStyle(result)   
  }

  const dispatch = useDispatch()
  const push = useNavigate()

  async function handleRegister (e) {
    e.preventDefault()
    const auth = getAuth();  
    console.log(auth);  
    await createUserWithEmailAndPassword(auth, email, password)
    .then (({user}) => {
      console.log(user);
      console.log(user.email);
      dispatch(setUser({
        email: user.email,
        id: user.uid,
        token: user.accessToken,
      }));
      push('/GIZ');
    })
    .catch(() => {
      alert('Такой пользователь зарегистрирован')
    });
      
  }
  
  
  //  const handleRegister = (e, email, password, ) => {
  //   e.preventDefault()
  //   const auth = getAuth();  
  //   console.log(auth);  
  //   await createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       console.log(userCredential);
  //       console.log(auth);
  //       const user = userCredential.user;
        
  //       // ...
  //     })
  //     .catch(console.error);
      
  // }
  
  return (

      <div className='login__page'>
        <form className='login__content'>
          <h1 className='login__title'>Регистрация</h1>

          {/* <fieldset>         */}
              <label htmlFor="mail">Email:</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mail" name="user_email"/>
              <label htmlFor="password">Пароль:</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="password" name="user_password"/>
                <button className='enter__btn' type="submit" onClick={handleRegister}>Зарегистрироваться</button>    
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