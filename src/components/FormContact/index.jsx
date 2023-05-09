import React from "react";
import './FormContact.css'

const FormContact = () => {
    return(
        <div className="form-wrapper">
            <form className="form">
                <h3>Связаться с нами</h3>
                <input type="text" placeholder="Ваше Имя" className="input"/>
                <input type="tel"  placeholder="+7 (999) 999-99-99" className="input"/>
                <p><input type="checkbox"/> Я принимаю <span>условия передачи персональных данных</span></p>
                <input type="submit" className="submit" value="Оставить заявку" />
            </form>
            <div className="contact">
                <h3>Контакты</h3>
                <a href="#">8 (495) 156-39-11</a>
                <a href="#">brand@free-creative.com</a>
                <a href="#">Москва, Садовническая улица 69</a>
            </div>
        </div>
    )
}

export default FormContact;