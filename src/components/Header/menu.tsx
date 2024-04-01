import React, {useState} from "react";
import './header.scss';

const Menu: React.FC = () => {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Добавляем состояние для отслеживания статуса авторизации

    return (
        <nav>
            <ul className="menu">
                <li><a href="/">Главная</a></li>
                <li><a href="/about">Тарифы</a></li>
                <li><a href="/contact">FAQ</a></li>
                {isLoggedIn && <li><a href="/search">Запросить данные</a></li>}
            </ul>
        </nav>
    );

}
export default Menu;