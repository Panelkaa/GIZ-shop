import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function UserOrders() {
    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('user')))
    const [userOrders, setUserOrders] = useState()
    const [userOrders2, setUserOrders2] = useState()

    useEffect(() => {
        fetch(`http://localhost:3002/GIZ/Profile/Orders`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
            .then(res => res.json())
            .then(data => {
                setUserOrders(data)
                console.log(data);
                const array = []
                data.map((e) => {
                    const res = {
                        userOrder: JSON.parse(e.userOrder),
                        totalPrice: e.totalPrice,
                        orderDate: e.orderDate,
                        statusOrder: e.statusOrderName
                    }
                    return array.push(res)
                })
                setUserOrders2(array)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [false])


    const handlerCard = (id) => {
        localStorage.setItem("id", JSON.stringify(id));
    }

    console.log(userOrders2);

    return (
        <div>
            <div className=''>
                {userOrders2 && userOrders2.length ? userOrders2?.map((item, i) => (
                    <div key={i} className='order'>

                        <div className='orderTop'>
                            <p className='profile__subOrder'>Дата заказа: {item.orderDate.split('T')[0]}</p>
                            <p className='profile__sub'>Итог: <span className='price'> {Intl.NumberFormat('ru-RU').format(item.totalPrice)} </span> ₽</p>
                        </div>
                        <div className='orderItem'>
                            {(item.userOrder.map(item => (

                                <div className='orderName'>
                                    <Link to={`/GIZ/Card/${item.idProduct}`} className='profile__subTitle'>
                                        <p className='profile__subTitle' onClick={() => handlerCard(item.idProduct)}>Товар: <span className='title'>{item.Maker} {item.Model}</span></p>
                                    </Link>
                                    <p className='profile__subTitle'>Количество: {item.count}</p>
                                </div>

                            )))}
                            <div className='orderStatus'>
                                <p className='statusText'>Статус заказа:
                                    <span className='status'>{item.statusOrder}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                )) : <h1 className='noOrder'>У вас нет заказов</h1>}
            </div>
        </div>
    )
}

export default UserOrders