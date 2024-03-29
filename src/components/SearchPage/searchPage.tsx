// SearchPage.tsx
import React, { useState } from "react";
import Header from "../Header/header";
import SearchForm from "./searchForm";
import ResultPage from "../SeacrhResultPage/searchResultPage";
import './searchPage.scss';

const SearchPage: React.FC = () => {
    const [showResults, setShowResults] = useState(false); // Состояние для отображения результатов поиска

    const handleLoginClick = () => {
        console.log("Login button clicked");
    };

    const handleSearch = (query: any) => {
        console.log("Search query:", query);
        setShowResults(true);
    };

    return (
        <div className="search-page">
            {process.env.REACT_APP_SHOW_HEADER === "true" && (
                <Header onLoginClick={handleLoginClick} />
            )}
            {!showResults ? (
                <SearchForm onSearch={handleSearch} />
            ) : (
                <ResultPage searchResults={[]} />
            )}
            {!showResults && (
                <div className='search-image-container'>
                    <div className="image-row">
                        <img src={process.env.PUBLIC_URL + '/img/Document.svg'} alt="Документ" />
                        <img src={process.env.PUBLIC_URL + '/img/Folders.svg'} alt="Папки" />
                    </div>
                    <img src={process.env.PUBLIC_URL + '/img/rocket.svg'} alt="Человек с лупой и ракета" />
                </div>
            )}
        </div>
    );
};

export default SearchPage;
