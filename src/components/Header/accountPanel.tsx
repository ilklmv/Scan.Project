import React from "react";
import './header.scss';

const AccountPanel: React.FC = () => {
    return (
        <div className="accountPanel">
            <button className="signUp">Зарегистрироваться</button>
            <div className="line">
                <img src={process.env.PUBLIC_URL + '/img/line1.svg'} alt="line"/>
            </div>
            <button className="login">Войти</button>
        </div>
    );
};

export default AccountPanel;