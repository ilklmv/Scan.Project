import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import "./loginForm.scss";

interface LoginFormProps {
    onLoginSuccess: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Проверка наличия логина и пароля
        if (!username || !password) {
            setError("Пожалуйста, введите логин и пароль");
            return;
        }

        const validLogins = [
            { username: process.env.USERNAME_1, password: process.env.PASSWORD_1 },
            { username: process.env.USERNAME_2, password: process.env.PASSWORD_2 },
            { username: process.env.USERNAME_3, password: process.env.PASSWORD_3 },
            { username: process.env.USERNAME_4, password: process.env.PASSWORD_4 },
            { username: process.env.USERNAME_5, password: process.env.PASSWORD_5 },
            { username: process.env.USERNAME_6, password: process.env.PASSWORD_6 },
            { username: process.env.USERNAME_7, password: process.env.PASSWORD_7 },
            { username: process.env.USERNAME_8, password: process.env.PASSWORD_8 },
            { username: process.env.USERNAME_9, password: process.env.PASSWORD_9 },
            { username: process.env.USERNAME_10, password: process.env.PASSWORD_10 },
        ];

        const isValidLogin = validLogins.some(login => login.username === username && login.password === password);

        if (!isValidLogin) {
            setError("Неверный логин или пароль");
            return;
        }

        try {
            const response = await axios.post("https://gateway.scan-interfax.ru/api/v1/account/login", 
                { login: username, password }, 
                { headers: { "Content-Type": "application/json", "Accept": "application/json" } }
            );

            const { accessToken } = response.data;

            // Сохраняем токен в локальное хранилище
            localStorage.setItem("accessToken", accessToken);

            // Вызываем колбэк для успешного входа
            onLoginSuccess();
        } catch (err) {
            if (err instanceof AxiosError && err.response) {
                // Ошибка запроса от сервера
                setError("Ошибка сервера: " + (err.response.data.message || "Неизвестная ошибка"));
            } else if (err instanceof Error) {
                // Другие ошибки
                setError("Произошла ошибка: " + err.message);
            } else {
                setError("Произошла неизвестная ошибка");
            }
        }
    };

    const handleForgotPassword = () => {
        console.log("Forgot password clicked");
    };

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-form-btn">
                <button className="submit" type="submit">Войти</button>
                <button className="submit" type="button" onClick={handleForgotPassword}>Зарегистрироваться</button>
            </div>
            <div className="form-group">
                <label className="label" htmlFor="username">Логин или номер телефона:</label>
                <input
                    className="input"
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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
            {error && <p className="error-message">{error}</p>}
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
