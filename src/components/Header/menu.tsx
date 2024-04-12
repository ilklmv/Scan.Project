import React from "react";

interface MenuProps {
    isLoggedIn: boolean;
}

const Menu: React.FC<MenuProps> = ({ isLoggedIn }) => {
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
};

export default Menu;
