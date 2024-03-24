import React, { useState } from 'react';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import './App.scss';
import HomePage from './components/Main/homePage';
import LoginPage from './components/LoginPage/loginPage'; // Импортируем компонент страницы авторизации

function App() {
  const [showHomePage, setShowHomePage] = useState(true); // Состояние для отображения/скрытия главной страницы

  const handleLoginClick = () => {
    setShowHomePage(false); // При клике на кнопку "Войти" скрываем главную страницу
  };

  return (
    <div className='App'>
      <Header onLoginClick={handleLoginClick} /> {/* Передаем обработчик клика на кнопку "Войти" в компонент Header */}
      {showHomePage ? <HomePage /> : <LoginPage />} {/* Отображаем главную страницу или страницу авторизации в зависимости от состояния */}
      <Footer />
    </div>
  );
}

export default App;