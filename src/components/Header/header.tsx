
import React from "react";
import Logo from "./logoHeader";
import Menu from "./menu";
import AccountPanel from "./accountPanel";
import './header.scss';

interface HeaderProps {
    onLoginClick: () => void; 
}

const Header: React.FC<HeaderProps> = ({ onLoginClick }) => {
    return (
        <header className="header">
            <Logo />
            <Menu />
            <AccountPanel onLoginClick={onLoginClick} /> 
        </header>
    );
};

export default Header;
