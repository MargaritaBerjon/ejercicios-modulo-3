import React, { useState } from 'react';
import './App.css';
import Destiny from './Destiny';
import CityImage from './CityImage';

function App() {
  const [citySelected, setCity] = useState('Praga');

  const destinySelected = (city) => {
    setCity(city);
  }

  return (
    <div className="app">
      <Destiny city={destinySelected}></Destiny>
      <CityImage citySelected={citySelected}></CityImage>
    </div>
  );
}

export default App;
