import React, { useState } from "react";
import "./loginForm.scss";

const LoginForm: React.FC = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Проверка заполнения полей логина и пароля
        if (!login || !password) {
            setError("Пожалуйста, введите логин и пароль");
            return;
        }

        // Отправка запроса на сервер для авторизации
        try {
            const response = await fetch("account/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ login, password })
            });

            if (response.ok) {
                // Получение данных токена авторизации и сохранение в localStorage
                const data = await response.json();
                localStorage.setItem("accessToken", data.accessToken);
                localStorage.setItem("expire", data.expire);
            } else {
                setError("Неверный логин или пароль");
            }
        } catch (error) {
            console.error("Ошибка авторизации:", error);
            setError("Произошла ошибка при авторизации");
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
