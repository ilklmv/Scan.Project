import React, { useState } from 'react';
import "./searchForm.scss";

interface SearchFormProps {
  onSearch: (query: SearchQuery) => void;
}

interface SearchQuery {
  inn: string;
  sentiment: 'any' | 'positive' | 'negative';
  documentCount: number;
  startDate: Date;
  endDate: Date;
  categories: string[];
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [inn, setInn] = useState('');
  const [sentiment, setSentiment] = useState<'any' | 'positive' | 'negative'>('any');
  const [documentCount, setDocumentCount] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [categories, setCategories] = useState<string[]>([]);
  
  const handleSearch = () => {
    const query: SearchQuery = {
      inn,
      sentiment,
      documentCount,
      startDate,
      endDate,
      categories
    };
    onSearch(query);
  };

  return (
    <div className='search-form'>
        <div className='search-form-input'>
            <label>
                ИНН Компании *
                <input type="text" value={inn} onChange={(e) => setInn(e.target.value)} />
            </label>
            <br />
            <label>
                Тональность
                <select value={sentiment} onChange={(e) => setSentiment(e.target.value as 'any' | 'positive' | 'negative')}>
                <option value="any">Любая</option>
                <option value="positive">Позитивная</option>
                <option value="negative">Негативная</option>
                </select>
            </label>
            <br />
            <label>
                Колиество документов в выдаче * 
                <input type="number" value={documentCount} min={1} max={1000} onChange={(e) => setDocumentCount(parseInt(e.target.value))} />
            </label>
            <br />
            <label>
                Диапазон поиска
                <input type="date" value={startDate.toISOString().split('T')[0]} onChange={(e) => setStartDate(new Date(e.target.value))} />
                <input type="date" value={endDate.toISOString().split('T')[0]} onChange={(e) => setEndDate(new Date(e.target.value))} />
            </label>
        </div>
        <div className='search-form-input'>
            <label>
                <br />
                <input type="checkbox" value="category1" onChange={(e) => e.target.checked ? setCategories(categories => [...categories, 'category1']) : setCategories(categories.filter(cat => cat !== 'category1'))} />
                Признак максимальной полноты
                <br />
                <input type="checkbox" value="category2" onChange={(e) => e.target.checked ? setCategories(categories => [...categories, 'category2']) : setCategories(categories.filter(cat => cat !== 'category2'))} />
                Упоминания в бизнес-контексте
                <br />
                <input type="checkbox" value="category3" onChange={(e) => e.target.checked ? setCategories(categories => [...categories, 'category3']) : setCategories(categories.filter(cat => cat !== 'category3'))} />
                Главная роль в публикации
                <br />
                <input type="checkbox" value="category4" onChange={(e) => e.target.checked ? setCategories(categories => [...categories, 'category4']) : setCategories(categories.filter(cat => cat !== 'category4'))} />
                Публикации только с риск-факторами
                <br />
                <input type="checkbox" value="category5" onChange={(e) => e.target.checked ? setCategories(categories => [...categories, 'category5']) : setCategories(categories.filter(cat => cat !== 'category5'))} />
                Включать технические новости рынков
                <br />
                <input type="checkbox" value="category6" onChange={(e) => e.target.checked ? setCategories(categories => [...categories, 'category6']) : setCategories(categories.filter(cat => cat !== 'category6'))} />
                Включать анонсы и календари
                <br />
                <input type="checkbox" value="category6" onChange={(e) => e.target.checked ? setCategories(categories => [...categories, 'category7']) : setCategories(categories.filter(cat => cat !== 'category7'))} />
                Включать сводки новостей
            </label>
            <br />
            <button onClick={handleSearch}>Search</button>
            <p>* Обязательные к заполнению поля</p>
        </div>
    </div>
  );
};

export default SearchForm;
