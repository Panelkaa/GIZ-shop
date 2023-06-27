import React from 'react'
import mainSamik from "../../../images/mainSamik.jpg"
import "./Banner.css";
import { Link } from 'react-router-dom';


function Banner() {
  return (
    <div>
        <section className="section">
      <div className="product-banner">
        <div className="left">
          <img className='scooter' src={mainSamik} alt="" />
        </div>
        <div className="right">
          <div className="content">
            <h2><span className="discount"></span>О НАС</h2>
            <h1>
              <p className='banner__text'>Компания GIZ предлагает широкий выбор мото и электротранспортных средств. Продукция, продаваемая нашей компанией, имеет все необходимые сертификаты и отвечает международным стандартам качества.
                На протяжении своего существования мы постоянно ищем интересные новинки, отслеживаем новые тенденции и расширяем ассортимент.
                За счет больших объемов поставок мы предлагаем нашим клиентам современные и качественные товары по доступным ценам.</p>
              {/* <span>Новая коллекция</span>
              <span>Электросамокатов</span> */}
            </h1>
            <div className='mini__content'>
              <div className='mini__content-block'>
                <h2>Гарантия</h2>
                <p>На все самокаты гарантия 1 год. Мы сами выполним ремонт или замену устройства при обнаружении брака.</p>
              </div>   

              <div className='mini__content-block'>
                <h2>Тест-драйв</h2>
                <p>У нас можно прокатиться на самокатах перед покупкой, чтобы определиться с выбором.</p>
              </div>    

              <div className='mini__content-block'>
                <h2>Поддержка</h2>
                <p>Ответим на все ваши вопросы. А также предоставим скидку 20% на первую покупку электросамоката у нас.</p>
              </div>     
            </div>
            <div className='btnS'>
              <div className='btn_banner'>
                <Link to='/GIZ/Product'>
                  <div className="btn" href="">Каталог</div>
                </Link>
                <a className="btn" href="#footer">Контакты</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Banner;