// LoginForm.tsx
import React from "react";
import "./loginForm.scss";

const LoginForm: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Обработка отправки формы
        console.log("Form submitted");
    };

    const handleForgotPassword = () => {
        // Обработчик клика на кнопку "Восстановить пароль"
        console.log("Forgot password clicked");
    };

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <button className="submit" type="submit">Войти</button>
            <button className="submit" type="submit">Зарегистрироваться</button>
            <div className="form-group">
                <label htmlFor="login">Логин или номер телефона:</label>
                <input type="text" id="login" required />
            </div>
            <div className="form-group">
                <label htmlFor="password">Пароль</label>
                <input type="password" id="password" required />
            </div>
            <div className="form-group">
                <button className="requestData" type="submit">Войти</button>
            </div>
            <div className="form-group">
                <button className="submit_1" onClick={handleForgotPassword}>Восстановить пароль</button>
            </div>
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
