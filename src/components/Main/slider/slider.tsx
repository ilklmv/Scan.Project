import React, { useState } from "react";
import "./slider.scss";

interface Slide {
    image: string;
    text: string;
}

// Пример данных для слайдов
const slides: Slide[] = [
    {
      image: 'image1.svg',
      text: 'Высокая и оперативная скорость обработки заявки',
    },
    {
      image: 'image2.svg',
      text: 'Огромная комплексная база данных, обеспечивающая объективный ответ на запрос',
    },
    {
      image: 'image3.svg',
      text: 'Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству',
    },
    // добавьте еще блоки при необходимости
];

const Slider: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };
  
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="slider-container">
            <div className="slider-header">Почему именно мы</div>
            <div className="slider">
                <button className="switchSlide" onClick={prevSlide}>
                    <img src={process.env.PUBLIC_URL + '/img/prevslide.svg'} alt="Стрелка влево" />
                </button>
                <div className="slider-item">
                    {slides.slice(currentSlide, currentSlide + 3).map((slide, index) => (
                    <div key={index} className="slide">
                        <img className="slider-img" src={process.env.PUBLIC_URL + `/img/${slide.image}`} alt={`Slide ${index + 1}`} />
                        <p className="slider-text">{slide.text}</p>
                    </div>
                    ))} 
                </div>
                <button className="switchSlide" onClick={nextSlide}>
                    <img src={process.env.PUBLIC_URL + '/img/nextslide.svg'} alt="Стрелка вправо" />
                </button>
            </div>
            <img className="selection" src={process.env.PUBLIC_URL + '/img/Group 14.svg'} alt="Выбор" />
        </div>
    )
}

export default Slider;