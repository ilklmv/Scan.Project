import React from "react";
import "./tariffs.scss"

const Tariffs: React.FC = () => {
    return (
        <div className="tariffs-container">
            <div className="tariffs-header">Наши тарифы</div>
            <div className="tariffs-choose">
                <div className="choose-block">
                    <div className="choose-block-container">
                        <div className="choose-beginner">
                            <p className="header-block">Beginner</p>
                            <p className="text-block">Для небольшого исследования</p>
                            <img className="img-block" src={process.env.PUBLIC_URL + '/img/lampa.svg'} alt="Лампочка" />
                        </div>
                        <div className="choose-information">
                            <button className="tariff-btn">Текущий тариф</button>
                            <div className="price">
                                <p className="value">799 &#8381;</p>
                                <p className="value-through">1200 &#8381;</p>
                            </div>
                            <p className="installment">или 150 &#8381;/мес. при рассрочке на 24 мес.</p>
                            <p className="header-tariff-list">В тариф входит:</p>
                            <ul className="tariff-list">
                                <li>Безлимитная история запросов</li>
                                <li>Безопасная сделка</li>
                                <li>Поддержка 24/7</li>
                            </ul>
                            <button className="requestData">Перейти в личный кабинет</button>
                        </div>
                    </div>
                    <div className="choose-block-container">
                        <div className="choose-pro">
                            <p className="header-block">Pro</p>
                            <p className="text-block">Для HR и фрилансеров</p>
                            <img className="img-block" src={process.env.PUBLIC_URL + '/img/target.svg'} alt="Лампочка" />
                        </div>
                        <div className="choose-information">
                            <div className="price">
                                <p className="value">1299 &#8381;</p>
                                <p className="value-through">2600 &#8381;</p>
                            </div>
                            <p className="installment">или 279 &#8381;/мес. при рассрочке на 24 мес.</p>
                            <p className="header-tariff-list">В тариф входит:</p>
                            <ul className="tariff-list">
                                <li>Все пункты тарифа Beginner</li>
                                <li>Экспорт истории</li>
                                <li>Рекомендации по приоритетам</li>
                            </ul>
                            <button className="requestData">Подробнее</button>
                        </div>
                    </div>
                    <div className="choose-block-container">
                        <div className="choose-business">
                            <p className="header-block">Business</p>
                            <p className="text-block">Для корпоративных клиентов</p>
                            <img className="img-block" src={process.env.PUBLIC_URL + '/img/phone.svg'} alt="Лампочка" />
                        </div>
                        <div className="choose-information">
                            <div className="price">
                                <p className="value">2379 &#8381;</p>
                                <p className="value-through">3700 &#8381;</p>
                            </div>
                            <p className="header-tariff-list">В тариф входит:</p>
                            <ul className="tariff-list">
                                <li>Все пункты тарифа Pro</li>
                                <li>Безлимитное количество запросов</li>
                                <li>Приоритетная поддержка</li>
                            </ul>
                            <button className="requestData">Подробнее</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tariffs;