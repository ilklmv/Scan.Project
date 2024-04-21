import React, { useState } from "react";

interface MenuProps {
  isLoggedIn: boolean;
}

const Menu: React.FC<MenuProps> = ({ isLoggedIn }) => {
  // Состояние для отображения/скрытия бургер-меню
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);

  return (
    <nav>
      {/* Обычное меню */}
      <ul className="menu">
        <li><a href="/" className="menu-link">Главная</a></li>
        <li><a href="/about" className="menu-link">Тарифы</a></li>
        <li><a href="/contact" className="menu-link">FAQ</a></li>
      </ul>

      {/* Бургер-меню */}
      <div className="burger-icon" onClick={() => setBurgerMenuOpen(!isBurgerMenuOpen)}>
        <span></span>
      </div>

      {/* Отображение бургер-меню при клике */}
      {isBurgerMenuOpen && (
        <ul className="burger-menu">
          <li><a href="/" className="burger-menu-link">Главная</a></li>
          <li><a href="/about" className="burger-menu-link">Тарифы</a></li>
          <li><a href="/contact" className="burger-menu-link">FAQ</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Menu;
