import React, { useState } from "react";
import "./loginForm.scss";

// Функция для проверки логина и пароля
const authenticateUser = (username: string, password: string): boolean => {
    const validCredentials: { [key: string]: string } = {
        sf_student1: '4i2385j',
        sf_student10: 'KHKfTXb',
        sf_student3: '6z9ZFRs',
        sf_student2: 'lV8xjCH',
        sf_student4: 'Br1+tbG',
        sf_student5: 'LuwAwJf',
        sf_student6: 'eczpWCB',
        sf_student7: 'P6VcKNf',
        sf_student8: '5QB0KM/',
        sf_student9: 'DTdEwAn'
    };

    // Проверяем, существуют ли введенные логин и пароль в списке допустимых учетных данных
    if (validCredentials[username] === password) {
        // Если пользователь аутентифицирован, сохраняем информацию о входе в локальное хранилище
        localStorage.setItem('isLoggedIn', 'true');
        return true;
    } else {
        return false;
    }
};

const LoginForm: React.FC = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Проверка заполнения полей логина и пароля
        if (!login || !password) {
            setError("Пожалуйста, введите логин и пароль");
            return;
        }

        // Попытка аутентификации пользователя
        const isAuthenticated = authenticateUser(login, password);
        if (isAuthenticated) {
            // Перенаправление на другую страницу или выполнение другой логики
            window.location.href = "/"; // Например, перенаправление на главную страницу
        } else {
            setError("Неверный логин или пароль");
        }
    };

    const handleForgotPassword = () => {
        // Обработчик клика на кнопку "Восстановить пароль"
        console.log("Forgot password clicked");
    };

    return (
        <form className="login-form" onSubmit={handleSubmit}>
             <div className="login-form-btn">
                <button className="submit" type="submit">Войти</button>
                <button className="submit" type="submit">Зарегистрироваться</button>
            </div>
            {error && <p className="error-message">{error}</p>}
            <div className="form-group">
                <label className="label" htmlFor="login">Логин или номер телефона:</label>
                <input 
                    className="input" 
                    type="text" 
                    id="login" 
                    value={login} 
                    onChange={(e) => setLogin(e.target.value)} 
                    required 
                />
            </div>
            <div className="form-group">
                <label className="label" htmlFor="password">Пароль</label>
                <input 
                    className="input" 
                    type="password" 
                    id="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
            </div>
            <button className="requestData_1" type="submit">Войти</button>
            <button className="submit_1" type="button" onClick={handleForgotPassword}>Восстановить пароль</button>
            <div className="social-login">
                <p className="login-social">Войти через:</p>
                <div className="social-icons">
                    <button className="social-btn"><img src={process.env.PUBLIC_URL + '/img/google.svg'} alt="Google" /></button>
                    <button className="social-btn"><img src={process.env.PUBLIC_URL + '/img/facebook.svg'} alt="Facebook" /></button>
                    <button className="social-btn"><img src={process.env.PUBLIC_URL + '/img/yandex.svg'} alt="Yandex" /></button>
                </div>
            </div>
        </form>
    );
};

export default LoginForm;