import React from 'react'
import "./Login/Login.css"
import {Link} from 'react-router-dom'
import {useState} from 'react';

const Form = ({title, handleClick}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [inputs, setInputs] = useState({
    userName: '',
    email: '',
    password: '',
    birthday: '',

  })
  
  const handelChange = (e) => {
    setInputs((prev) => ({...prev, [e.target.name]: e.target.value}))
  }
  console.log(inputs);


  return (  
      <div className='login__page'>
        <form className='login__content' onClick={e => e.stopPropagation()} >
          <h1 className='login__title'>Авторизация</h1>

          <fieldset>        
              <label htmlFor="mail">Email:</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mail" name="email" required/>
              <label htmlFor="password">Пароль:</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="password" name="password" required/>
                <button type="submit" onClick={(e) =>  {handleClick(email, password)}}>{title}</button>    
                <p className='switch__login'>
                  Или <Link className='switch__link' to='/GIZ/Registration'>Регистрация</Link>
                </p>      
                {/* <button onClick={()=> setRegistration(true)} type="text">Регистрация</button> */}
          </fieldset>    
        </form>
      </div>
  )
}

export default Form;