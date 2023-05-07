import React from 'react'
import './Header.css';
import logo from '../../assets/logo.png'
import inst from '../../assets/inst.png'

const Header = () => {
  return (
    <div className='header'>
        <div className="container">
            <nav className='nav'>
                <div className='nav__logo'>
                    <img src={logo} alt="" />
                    <p>Разрабатываем фирменные <br /> стили с 2009 года</p>
                </div>
                <ul className='nav__menu'>
                    <li className='number'>8 (495) 156-39-11</li>
                    <li className='nav__list'><img src={inst} alt="" /></li>
                </ul>
            </nav>
            <div className="main">
                <h2>Вам нужен фирменный <br /> стиль или ребрендинг?</h2>
                <p>Разработаем в срок от 10-ти дней</p>
                <div className="main__buttons">
                    <button>Портфолио</button>
                    <button>Оставить заявку</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header