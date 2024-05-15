import React, { useState, useEffect } from "react";
import Logo from "./logoHeader";
import Menu from "./menu";
import AccountPanel from "./accountPanel";
import './header.scss';

interface HeaderProps {
    onLoginClick: () => void; 
}

const Header: React.FC<HeaderProps> = ({ onLoginClick }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    const [accessToken] = useState<string | null>(localStorage.getItem("accessToken"));

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await fetch('https://gateway.scan-interfax.ru/api/v1/account/info', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${accessToken}`
                    },
                });
                const data = await response.json();
                return data;
            } catch (error) {
                console.error('Failed to fetch user info:', error);
                throw error;
            }
        };
    
        if (accessToken) {
            fetchUserInfo().then((userInfo) => {
                setIsLoggedIn(true); // Устанавливаем в true только при успешном получении информации о пользователе
                setLoading(false);
            }).catch((error) => {
                console.error('Failed to fetch user info:', error);
                setLoading(false);
            });
        } else {
            setLoading(false);
        }
    }, [accessToken, setIsLoggedIn, setLoading]);
     

    return (
        <header className="header">
            <Logo />
            <Menu isLoggedIn={isLoggedIn} />
            {isLoggedIn ? (
                <AccountPanel loading={loading} onLogout={() => setIsLoggedIn(false)} />
            ) : (
                <AccountPanel onLoginClick={onLoginClick} loading={false} />
            )}
        </header>
    );
};

export default Header;