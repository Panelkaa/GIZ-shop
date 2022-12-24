import React from 'react'
import "../Order/Order.css";
import Scooter from '../../images/five.jpg'

function Order() {
  return (
    <div>
        <div className="container-md cart">
            <table>
                    <tr>
                        <th>Товар</th>
                        <th>Количество</th>
                        <th>Цена</th>
                    </tr>
                    
                <tr>
                    <td>
                    <div className="cart-info">
                        <img src={Scooter} alt="" />
                        <div>
                        <p>Электросамокат Kugoo G-MAX 500W</p>
                        <span>Цена: 35 500 руб.</span>
                        <br />
                        <a href="#">remove</a>
                        </div>
                    </div>
                    </td>
                    <td>
                        <input type="number" value="1" min="1" />          
                    </td>
                    <td>35 500 руб.</td>
                </tr>
                
                
            </table>
            

            <div className="total-price">
                <table>
                    <tr>
                    <td>Subtotal</td>
                    <td>$200</td>
                    </tr>
                    <tr>
                    <td>Tax</td>
                    <td>$50</td>
                    </tr>
                    <tr>
                    <td>Всего</td>
                    <td>127 496 руб.</td>
                    </tr>
                </table>
                <a href="/GIZ" className="checkout btn">Купить</a>

            </div>

        </div>
    </div>
  )
}

export default Order;