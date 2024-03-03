import React from "react";
import Logo from "./logoFooter";
import InformationFooter from "./informationFooter";
//import AccountPanel from "./accountPanel";
import './footer.scss';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <Logo />
            <InformationFooter />
        </footer>
    );
};

export default Footer;