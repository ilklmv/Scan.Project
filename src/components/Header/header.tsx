import React from "react";
import Logo from "./logo";
import Menu from "./menu";
import AccountPanel from "./accountPanel";
import './header.scss';

const Header: React.FC = () => {
    return (
        <header className="header">
            <Logo />
            <Menu />
            <AccountPanel />
        </header>
    );
};

export default Header;