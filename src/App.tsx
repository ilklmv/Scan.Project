import React from 'react';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import './App.scss';
import About from './components/Main/about/about';
import Slider from './components/Main/slider/slider';
import Tariffs from './components/Main/tariff/tariffs';


function App() {
  return (
    <div className='App'>
      <Header />
      <About />
      <Slider />
      <Tariffs />
      <Footer />
    </div>
  );
}

export default App;
