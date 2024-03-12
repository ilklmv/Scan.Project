import React from "react";
//import './footer.scss';

const InformationFooter: React.FC = () => {

    const CurrentYear = new Date().getFullYear();

    return (
        <div className="footerInformaton">
            <div className="information">
                г. Москва, Цветной б-р, 40 +7 495 771 21 11 info@skan.ru
            </div>
            <div className="copyright">
            Copyright. {CurrentYear}
            </div>
        </div>
    );
};

export default InformationFooter;