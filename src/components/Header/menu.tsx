import React from "react";

const Menu: React.FC = () => {
    return (
        <nav>
            <ul className="menu">
                <li><a href="/">Главная</a></li>
                <li><a href="/about">Тарифы</a></li>
                <li><a href="/contact">FAQ</a></li>
            </ul>
        </nav>
    );
        
        
};

export default Menu;