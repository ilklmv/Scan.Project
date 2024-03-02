import React from "react";

const Logo: React.FC = () => {
    return (
        <div className="Logo">
            <img src={process.env.PUBLIC_URL + '/img/logo.svg'} alt="Логотип" />
        </div>
    );
};

export default Logo;