import React from 'react'
import instagram from '../assets/img/instagram.png'
import maestro from '../assets/img/maestro.png'
import facebook from '../assets/img/facebook.png'
import twitter from '../assets/img/twitter.png'
import youtube from '../assets/img/youtube.png'
import visa from '../assets/img/visa.png'
import googlePay from '../assets/img/google-pay.png'
import amazonPay from '../assets/img/amazon-pay.png'
import applePay from '../assets/img/apple-pay.png'
const Footer = () => {
  return (
    <footer className = "footer-container">
        <div className="container">
            <ul className="footer-nav">
                <li>
                    <a href="">игрушки</a></li>
                <li>
                    <a href="">контакт</a>ы</li>
                <li>
                    <a href="">виды оплат</a></li>
                <li>
                    <a href="">Домашняя страница</a></li>
                <li>
                    <a href="">каталог</a></li>
                <li>
                    <a href="">все игрушки</a>
                </li>
       
            </ul>
            <hr />
            <div className = "footer-social">

     <a href="#">
     <img src={instagram} alt=""  width={40} style = {{marginTop:100}}/>
    </a>
    <a href="#">
        <img src={facebook} alt="" width={40}  style = {{marginTop:100}}/>
    </a>
    <a href="#">
        <img src={twitter} alt=""  width={40} style = {{marginTop:100}}/>
    </a>
    <a href="#">
        <img src={maestro} alt="" width={40}  style = {{marginTop:100}}/>
    </a>
    <a href="#">
        <img src={googlePay} alt="" width={40} style = {{marginTop:100}} />
    </a>
    <a href="#">
        <img src={amazonPay} alt="" width={40} style = {{marginTop:100}} />
    </a>
    <a href="#">
        <img src={visa} alt="" width={40} style = {{marginTop:100}}  />
    </a>
    <a href="#">
        <img src={applePay} alt="" width={40} style = {{marginTop:100}}  />
    </a>
        </div>
        </div>
    </footer>
  )
}

export default Footer