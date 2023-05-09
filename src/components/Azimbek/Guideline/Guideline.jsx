import React from 'react'
import guide from '../../../assets/guide.jpg'
import './Guideline.css'

const Guideline = () => {
    return (
        <div className='container'>
            <div className="guideline__body">
                <h2>Гайдлайны в подарок</h2>
                <div className="guideline__content">
                    <img src={guide} alt="" />
                    <div className="guideline__texts">
                        <div className="guideline__text1">
                            <h3>Что такое гайдлайн и зачем он <br /> нужен?</h3>
                            <p>
                                А теперь об обещанном бонусе: заказывая <br /> фирменный стиль в нашем агентстве вы <br /> получаете минимальный гайдлайн в подарок, это <br /> позволит вам уже быть на шаг впереди ваших <br /> конкурентов!
                            </p>
                        </div>
                        <p className='guideline__text2'>
                            Гайдлайн - это свод правил по воспроизведению <br /> фирменного стиля на носителях. Если коротко, то в <br /> гайдлайне описано, как должен выглядеть каждый <br /> элемент корпоративного стиля <br /> и какие правила его использования. Гайдлайн <br /> помогает вашему бизнесу экономить время и <br /> деньги, помогать масштабироваться, а также <br /> тиражировать ваш бизнес посредством франшизы.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default Guideline