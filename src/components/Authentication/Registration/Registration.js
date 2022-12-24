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
    // <div className='reg__page'> 
    //   <form className='reg__content' onClick={e => e.stopPropagation()} >
    //     <h1>Регистрация</h1>

    //     <fieldset>
    //         <label htmlFor="name">Имя:</label>
    //         <input type="text" className="name" name="user_name"/>
    //         <label htmlFor="mail">Email:</label>
    //         <input type="email" className="mail" name="user_email"/>
    //         <label htmlFor="password">Пароль:</label>
    //         <input type="password" className="password" name="user_password"/>
    //         <label htmlFor="phone">Телефон:</label>
    //         <input type="text" className="mail" name="user_number" placeholder='+7 ___ ___-__-__'/>
    //         <input type="date" 
    //             // value=''
    //             className={style}    
    //             aria-required="true" 
    //             aria-invalid="false" 
    //             placeholder="Дата рождения" 
    //             onChange={textDate}
    //             />
    //             <label htmlFor="mail">Пол:</label>
    //             <div className='gender__block'>
    //               <div className='form_radio_btn'>
    //                 <input id="radio-1" type="radio" className="gender" name="user_gender" />
    //                 <label htmlFor="radio-1"><FcBusinessman className='male'/></label>
    //               </div>
    //               <div className='form_radio_btn'>
    //                 <input id="radio-2" type="radio" className="gender" name="user_gender" />
    //                 <label htmlFor="radio-2"><FcBusinesswoman  className='female'/></label>
    //               </div>
    //             </div>
              
    //           <button type="submit" onClick={handleRegister}>Зарегистрироваться</button>
    //           <p className='switch__login'>
    //             Уже зарегистрированы? <Link className='switch__link' to='/GIZ/Login'>Войти</Link>
    //           </p>  
    //     </fieldset>
    //   </form>
    // </div>
    // <div>
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