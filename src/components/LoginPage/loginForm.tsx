import React, { useState } from "react";
import axios from "axios";
import "./loginForm.scss"

interface LoginFormProps {
    onLoginSuccess: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        try {
            const validLogins = [
                { username: "sf_student1", password: "4i2385j"},
                { username: "sf_student10", password: "KHKfTXb" },
                { username: "sf_student3", password: "6z9ZFRs" },
                { username: "sf_student2", password: "lV8xjCH" },
                { username: "sf_student4", password: "Br1+tbG" },
                { username: "sf_student5", password: "LuwAwJf" },
                { username: "sf_student6", password: "eczpWCB" },
                { username: "sf_student7", password: "P6VcKNf" },
                { username: "sf_student8", password: "5QB0KM/" },
                { username: "sf_student9", password: "DTdEwAn" }
            ];

            const isValidLogin = validLogins.some(login => login.username === username && login.password === password);
            
            if (!isValidLogin) {
                setError("Неверный логин или пароль");
                return;
            }

            if (!username || !password) {
                setError("Пожалуйста, введите логин и пароль");
                return;
            }
    
            const response = await axios.post("https://gateway.scan-interfax.ru/api/v1/account/login", 
              { login: username, password }, 
              { headers: { "Content-Type": "application/json", "Accept": "application/json" } }
            );
    
            const { accessToken } = response.data;
            // Сохраняем токен в локальное хранилище
            localStorage.setItem("accessToken", accessToken);
    
            // Вызываем колбэк для успешного входа
            onLoginSuccess();
        } catch (error) {
            setError("Неверный логин или пароль");
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
