import React from "react";
import './about.scss';

const About: React.FC = () => {
    return (
        <div className="about">
            <div className="about-information">
                <div className="information_text1">сервис по поиску публикаций о компании по его ИНН</div>
                <div className="informaton_text2">Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</div>
                <button className="requestData">Запросить данные</button>
            </div>
            <div className="about-image">
                <img src={process.env.PUBLIC_URL + '/img/Group 13.svg'} alt="Логотип" />
            </div>
        </div>
    );
};

export default About;