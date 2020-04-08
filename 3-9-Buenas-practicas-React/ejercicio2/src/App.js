import React, { useState, useEffect } from 'react';
import './App.css';
import Collapsable from './colapsable';

function App() {
  const [paletas, setPaletas] = useState([{ name: 'PACO' }]);


  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json')
      .then(el => el.json())
      .then(result => setPaletas(result.palettes))
  }, []);

  return (
    <div className="App">
      {paletas.map((elem, i) =>
        <Collapsable key={i} palette={elem}></Collapsable>
      )}
    </div>
  );
}

export default App;
