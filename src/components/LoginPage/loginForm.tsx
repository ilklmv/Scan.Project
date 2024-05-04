import React, { useState } from "react";
import axios from "axios";

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
            if (!username || !password) {
                setError("Пожалуйста, введите логин и пароль");
                return;
            }

            const response = await axios.post("https://url/login", { username, password });
            const { token } = response.data;

            // Сохраняем токен в локальное хранилище
            localStorage.setItem("token", token);

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
            <div className="login-form-btn">
                <button className="submit" type="submit">Войти</button>
                <button className="submit" type="button" onClick={handleForgotPassword}>Восстановить пароль</button>
            </div>
        </form>
    );
};

export default LoginForm;
