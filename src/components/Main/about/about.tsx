// About.tsx
import React, { useState } from "react";
import './about.scss';
import SearchPage from "../../SearchPage/searchPage";

const About: React.FC = () => {
    const [showSearchPage, setShowSearchPage] = useState(false);
    
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Добавляем состояние для отслеживания статуса авторизации

    const handleRequestDataClick = () => {
        // Обработчик клика на кнопку "Запросить данные"
        // Показываем страницу поиска
        setShowSearchPage(true);
    };
    
    return (
        <div className="about">
            {showSearchPage ? (
                <SearchPage />
            ) : (
                <>
                    <div className="about-information">
                        <div className="information_text1">сервис по поиску публикаций о компании по его ИНН</div>
                        <div className="informaton_text2">Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</div>
                        {isLoggedIn && <button className="requestData" onClick={handleRequestDataClick}>Запросить данные</button>}
                    </div>
                    <div className="about-image">
                        <img src={process.env.PUBLIC_URL + '/img/Group 13.svg'} alt="Логотип" />
                    </div>
                </>
            )}
        </div>
    );
}

export default About;
