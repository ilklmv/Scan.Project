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
    <div className='search-container'>
      <h2 className='search-header'>Найдите необходимые данные в пару кликов.</h2>
      <div className='search-text'>Задайте параметры поиска.</div>
      <div className='search-text'>Чем больше заполните, тем точнее поиск</div>
      <div className='search-form'>
          <div className='search-form-input'>
              <label>
                  ИНН Компании *
                <input 
                  className='text' 
                  type="text" 
                  placeholder="10 цифр"
                  value={inn} 
                  onChange={(e) => setInn(e.target.value.replace(/\D/, '').slice(0, 10))} 
                  maxLength={10} 
                  pattern="\d{0,10}" 
                />
                {inn === '' && <span style={{ color: 'red', marginLeft: '4rem', fontSize: '0.625rem' }}>Обязательное поле</span>}
              </label>
              <label>
                  Тональность
                  <select className='option' value={sentiment} onChange={(e) => setSentiment(e.target.value as 'any' | 'positive' | 'negative')}>
                  <option className='option' value="any">Любая</option>
                  <option className='option' value="positive">Позитивная</option>
                  <option className='option' value="negative">Негативная</option>
                  </select>
              </label>
              <label>
                  Колиество документов в выдаче * 
                  <input 
                    className='text' 
                    type="text" 
                    placeholder="От 1 до 1000" 
                    value={documentCount} 
                    onChange={(e) => {
                      const enteredValue = e.target.value;
                      const parsedValue = parseInt(enteredValue);

                      if (!isNaN(parsedValue) && parsedValue >= 0 && parsedValue <= 1000) {
                        setDocumentCount(parsedValue);
                      } else if (enteredValue === '') {
                        setDocumentCount(0); 
                      }
                    }} 
                  />
                  {documentCount === (0) && <span style={{ color: 'red', marginLeft: '4rem', fontSize: '0.625rem' }}>Обязательное поле</span>}
              </label>
              <label>
                  Диапазон поиска
                  <div className='search-range'>
                    <input className='date' type="date" value={startDate.toISOString().split('T')[0]} onChange={(e) => setStartDate(new Date(e.target.value))} />
                    <input className='date' type="date" value={endDate.toISOString().split('T')[0]} onChange={(e) => setEndDate(new Date(e.target.value))} />
                  </div>
              </label>
          </div>
          <div className='search-form-input'>
              <label className='checkbox'>
                    <div className='checkbox-value'>
                      <input type="checkbox" value="category1" onChange={(e) => e.target.checked ? setCategories(categories => [...categories, 'category1']) : setCategories(categories.filter(cat => cat !== 'category1'))} />
                      Признак максимальной полноты
                    </div>
                    <div className='checkbox-value'>
                      <input type="checkbox" value="category2" onChange={(e) => e.target.checked ? setCategories(categories => [...categories, 'category2']) : setCategories(categories.filter(cat => cat !== 'category2'))} />
                      Упоминания в бизнес-контексте
                    </div>
                    <div className='checkbox-value'>
                      <input type="checkbox" value="category3" onChange={(e) => e.target.checked ? setCategories(categories => [...categories, 'category3']) : setCategories(categories.filter(cat => cat !== 'category3'))} />
                      Главная роль в публикации
                    </div>
                    <div className='checkbox-value'>
                      <input type="checkbox" value="category4" onChange={(e) => e.target.checked ? setCategories(categories => [...categories, 'category4']) : setCategories(categories.filter(cat => cat !== 'category4'))} />
                      Публикации только с риск-факторами
                    </div>
                    <div className='checkbox-value'>
                      <input type="checkbox" value="category5" onChange={(e) => e.target.checked ? setCategories(categories => [...categories, 'category5']) : setCategories(categories.filter(cat => cat !== 'category5'))} />
                      Включать технические новости рынков
                    </div>
                    <div className='checkbox-value'>
                      <input type="checkbox" value="category6" onChange={(e) => e.target.checked ? setCategories(categories => [...categories, 'category6']) : setCategories(categories.filter(cat => cat !== 'category6'))} />
                      Включать анонсы и календари
                    </div>
                    <div className='checkbox-value'>
                      <input type="checkbox" value="category6" onChange={(e) => e.target.checked ? setCategories(categories => [...categories, 'category7']) : setCategories(categories.filter(cat => cat !== 'category7'))} />
                      Включать сводки новостей
                    </div> 
              </label>
              <button className='requestData' onClick={handleSearch}>Поиск</button>
              <p className='footnote'>* Обязательные к заполнению поля</p>
          </div>
      </div>
    </div>
  );
};

export default SearchForm;
