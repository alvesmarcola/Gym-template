// App.js
import React, { useState } from 'react';
import './index.css';

// Components
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Features from './Components/Features/Features';
import Offer from './Components/Offer/Offer';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

const App = () => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Features toggleTheme={toggleTheme} theme={theme} /> 
      <Offer toggleTheme={toggleTheme} theme={theme} />
      <About toggleTheme={toggleTheme} theme={theme} />
      <Contact toggleTheme={toggleTheme} theme={theme} />
      <Footer toggleTheme={toggleTheme} theme={theme} />
    </div>
  );
};

export default App;
