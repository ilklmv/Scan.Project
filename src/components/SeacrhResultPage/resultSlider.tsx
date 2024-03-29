import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SearchResult {
    title: string;
    total: number;
    risks: number;
    // Добавьте другие поля, если необходимо
}

const ResultSlider: React.FC<{ searchResults: SearchResult[] }> = ({ searchResults }) => {
    
  // Формируем слайды для слайдера
  const slides = [
    {
      title: "Период",
      total: "Всего",
      risks: "Риски"
    },
    // Добавьте остальные данные для каждого дня из результатов поиска
    ...searchResults.map((dayData: { title: any; total: any; risks: any; }) => ({
      title: dayData.title,
      total: dayData.total,
      risks: dayData.risks
    }))
  ];

  // Настройки слайдера
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index}>
          <h3>{slide.title}</h3>
          <p>Всего: {slide.total}</p>
          <p>Риски: {slide.risks}</p>
        </div>
      ))}
    </Slider>
  );
};

export default ResultSlider;
