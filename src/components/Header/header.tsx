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
    const [accessToken, setAccessToken] = useState<string | null>(null);

    useEffect(() => {
        fetchUserInfo().then((userInfo) => {
            setIsLoggedIn(true);
            setLoading(false);
        }).catch((error) => {
            console.error('Failed to fetch user info:', error);
            setLoading(false);
        });
    }, []);

    const fetchUserInfo = async () => {
        const response = await fetch('https://gateway.scan-interfax.ru/api/v1/account/info', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                ...(isLoggedIn && { 'Authorization': `Bearer ${accessToken}` })
            },
        });
        const data = await response.json();
        return data;
    };

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