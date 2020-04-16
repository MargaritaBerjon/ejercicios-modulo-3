import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('' || localStorage.getItem('userData'));

  useEffect(() =>
    localStorage.setItem('userData', input), [input]);

  function handleChange(ev) {
    //Guardamos los datos en el estado
    console.log(ev.target.value);
    setInput(ev.target.value);

  }

  return (<input type='text' onChange={handleChange} value={input}></input>);

}

export default App;
//Preguntar a Miguel por qué pone null en el input