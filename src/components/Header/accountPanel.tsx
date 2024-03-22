// accountPanel.tsx
import React from "react";
import './header.scss';

interface AccountPanelProps {
    onLoginClick: () => void; // Обработчик клика на кнопку "Войти"
}

const AccountPanel: React.FC<AccountPanelProps> = ({ onLoginClick }) => {
    return (
        <div className="accountPanel">
            <button className="signUp">Зарегистрироваться</button>
            <div className="line">
                <img src={process.env.PUBLIC_URL + '/img/line1.svg'} alt="line"/>
            </div>
            <button className="login" onClick={onLoginClick}>Войти</button> {/* Используем обработчик клика на кнопку "Войти" */}
        </div>
    );
};

export default AccountPanel;
