import React from 'react';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import './App.scss';
import About from './components/Main/about/about';


function App() {
  return (
    <div className='App'>
      <Header />
      <About />
      <Footer />
    </div>
  );
}

export default App;
