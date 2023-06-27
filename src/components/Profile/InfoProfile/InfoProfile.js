import React, { useState }  from 'react'
import {removeUser} from '../../../store/slice/userSlice';
import {useDispatch} from 'react-redux';
import '../Profile.css'
// import Avatar from '../../../images/logo.jpg';
import Avatar from '../../../images/profile2.jpg';
import { Link } from 'react-router-dom';

function InfoProfile() {
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('user')))
  const dispatch = useDispatch();


  return (
      <div>
        <div className='infoUser'>
          <div>
            <img src={Avatar} className='avatar'/>
          </div>
          <div className='info__block'>
            <p className='profile__title'>{userData.name + ' ' + userData.surname}</p>
            <p className='profile__subTitle'>Почта: {userData.eMail}</p>
            <p className='profile__subTitle'>Телефон: {userData.phoneNumber}</p>
            <p className='profile__subTitle'>Дата Рождения: {userData.birthday.split('T')[0]}</p>
            <Link to='/GIZ' className='exit__btn'><button className='exit__btn' onClick={() => dispatch(removeUser())}>Выйти</button></Link>
          </div>
        </div>
      </div>

  )
}


export default InfoProfile;