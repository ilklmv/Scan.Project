import React from "react";
import About from "./about/about";
import Slider from "./slider/slider";
import Tariffs from "./tariff/tariffs";

const HomePage: React.FC = () => {
    return (
        <div className="main_page">
            <About />
            <Slider />
            <Tariffs />
        </div>
    );
};

export default HomePage;