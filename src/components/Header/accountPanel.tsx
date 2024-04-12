import React from "react";
import './header.scss';

interface AccountPanelProps {
    loading: boolean;
    onLogout?: () => void;
    onLoginClick?: () => void; // Добавляем обработчик для клика на кнопку "Войти"
}

const AccountPanel: React.FC<AccountPanelProps> = ({ loading, onLogout, onLoginClick }) => {
    return (
        <div className="accountPanel">
            {loading ? (
                <div>Загрузка...</div>
            ) : (
                <>
                    {onLogout ? ( // Показываем панель для авторизованного пользователя
                        <>
                            <div className="limit-company">
                                <span className="company-used">Использовано компаний 34</span>
                                <span className="limit-counter">Лимит по компаниям  100</span>
                            </div>
                                <div className="user-column">
                                    <p>Алексей А.</p>
                                    <button className="logout" onClick={onLogout}>Выйти</button>
                                </div>
                                <img className="avatar-user" src={process.env.PUBLIC_URL + '/img/avatar.svg'} alt="line"/>
                        </>
                    ) : ( // Показываем панель для неавторизованного пользователя
                        <>
                            <button className="signUp">Зарегистрироваться</button>
                            <div className="line">
                                <img src={process.env.PUBLIC_URL + '/img/line1.svg'} alt="line"/>
                            </div>
                            <button className="login" onClick={onLoginClick}>Войти</button>
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default AccountPanel;
