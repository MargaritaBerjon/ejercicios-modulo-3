import React, { useState } from 'react';
import './App.css';

const originalNumbers = [1, 4, 6, 8, 45, 89];

function App() {
  const [numbers, setNumbers] = useState([1, 4, 6, 8, 45, 89]);
  return (
    <div className="alal">
      Mayores de:<input type="text" onChange={inputChange}></input>
      Solo pares <input type="checkbox" onChange={checkboxChange}></input>
      <ul>
        {
          numbers.map((number, i) => <li key={i}>{number}</li>)
        }
      </ul>
    </div>
  );

  function checkboxChange(ev) {
    if (ev.target.checked) {
      setNumbers(numbers.filter(number => number % 2 === 0));
    } else {
      setNumbers(originalNumbers);
    }
  }

  function inputChange(ev) {
    if (ev.target.value) {
      setNumbers(numbers.filter(number => number > parseInt(ev.target.value)));
    } else {
      setNumbers(originalNumbers);
    }
  }
}

export default App;
