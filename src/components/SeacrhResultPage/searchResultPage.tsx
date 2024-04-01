import React from "react";
import './searchResult.scss';
import Carousel from "./resultSlider";

interface SearchResult {
    date: string;
    queries: number;
    risks: number;
}

interface SearchResultPageProps {
    searchResults: SearchResult[];
}

const ResultPage: React.FC<SearchResultPageProps> = ({ searchResults }) => {
    return (
        <div className="result-page">
            <div className="result-header">
                <div className="result-header-text">
                    <h2 className='search-header'>Ищем. Скоро будут результаты</h2>
                    <div className='search-text'>Поиск может занять некоторое время, просим сохранять терпение.</div>
                </div>
                    <img src={process.env.PUBLIC_URL + '/img/girl.svg'} alt="Девушка с лупой" />
                </div>
            <div className="general-summary">
                <h3 className="document-header">Общая сводка</h3>
                <span className="result-value">Найдено 4 221 вариантов</span>
                <Carousel columns={searchResults} />
                <h3 className="document-header">Список документов</h3>
                <div className="news">
                    <div className="list-document">
                        <div className="list-item">
                            <div className="list-item-header">
                                <span>13.09.2021</span>
                                <span className="edition">Комсомольская правда KP.RU</span>
                            </div>
                            <h2 className="list-item-title">Скиллфэктори - лучшая онлайн-школа для будущих айтишников</h2>
                            <div className="news-genre">Технические новости</div>
                            <img src={process.env.PUBLIC_URL + '/img/skillfactory.svg'} alt="Скиллфэктори"/>
                            <p className="list-item-information">
                                SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. 
                                С 2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов, самому взрослому студенту сейчас 86 лет. 
                                Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых компаниях.
                            </p>
                            <p className="list-item-information"> 
                                Принципы SkillFactory: акцент на практике, забота о студентах и ориентир на трудоустройство. 
                                80% обучения — выполнение упражнений и реальных проектов. 
                                Каждого студента поддерживают менторы, 2 саппорт-линии и комьюнити курса. 
                                А карьерный центр помогает составить резюме, подготовиться к собеседованиям и познакомиться с IT-рекрутерами.
                            </p>
                            <div className="list-item-footer">
                                <button className="list-item-read">Читать в источнике</button>
                                <span className="list-item-result">2 543 слова</span>
                            </div>
                        </div>
                    </div>
                    <div className="list-document">
                        <div className="list-item">
                            <div className="list-item-header">
                                <span>15.10.2021</span>
                                <span className="edition">VC.RU</span>
                            </div>
                            <h2 className="list-item-title">Работа в Data Science в 2022 году: тренды, навыки и обзор специализаций</h2>
                            <div className="news-genre">Технические новости</div>
                            <img src={process.env.PUBLIC_URL + '/img/vc.svg'} alt="vc"/>
                            <p className="list-item-information">
                                Кто такой Data Scientist и чем он занимается? 
                                Data Scientist — это специалист, который работает с большими массивами данных, чтобы с их помощью решить задачи бизнеса. 
                                Простой пример использования больших данных и искусственного интеллекта — умные ленты в социальных сетях. 
                                На основе ваших просмотров и лайков алгоритм выдает рекомендации с контентом, который может быть вам интересен. 
                                Эту модель создал и обучил дата-сайентист, и скорее всего, не один. 
                            </p>
                            <p className="list-item-information"> 
                                В небольших компаниях и стартапах дата-сайентист делает все: собирает и очищает данные, создает математическую модель для их анализа, 
                                тестирует ее и презентует готовое решение бизнесу.
                            </p>
                            <div className="list-item-footer">
                                <button className="list-item-read">Читать в источнике</button>
                                <span className="list-item-result">3 233 слова</span>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="requestData">Показать больше</button>
            </div>
        </div>
    );
};

export default ResultPage;