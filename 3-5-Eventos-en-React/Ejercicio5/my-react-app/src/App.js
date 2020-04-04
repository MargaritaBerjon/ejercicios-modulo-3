import React, { useState } from 'react';
import './App.css';
import CitySelector from './CitySelector';
import CityImage from './CityImage';

function App() {
  const [citySelected, setCity] = useState('Boston');

  const destinySelected = (city) => {
    setCity(city);
  }

  return (
    <div>
      <CitySelector city={destinySelected}></CitySelector>
      <CityImage citySelected={citySelected}></CityImage>
    </div>
  );
}

export default App;
