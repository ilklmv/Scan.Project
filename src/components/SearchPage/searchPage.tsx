import React from "react";
import Header from "../Header/header";
import SearchForm from "./searchForm";

const SearchPage: React.FC = () => {
    const handleLoginClick = () => {
        // Обработчик клика на кнопку "Войти"
        // Реализация может быть разной, включая открытие модального окна, переход на другую страницу и т.д.
        console.log("Login button clicked");
    };

    const handleSearch = (query: any) => {
        // Реализация обработчика поиска, например, отправка запроса на сервер
        console.log("Search query:", query);
    };

    return (
        <div className="search-page">
            {process.env.REACT_APP_SHOW_HEADER === "true" && (
                <Header onLoginClick={handleLoginClick} />
            )}
            <SearchForm onSearch={handleSearch} />
        </div>
    );
};

export default SearchPage;
