import React from 'react';
import './App.css';

const users = [
  { name: 'Nymphadora Tonks', time: 9 },
  { name: 'Cedric Diggory', time: 28 },
  { name: 'Cho Chang', time: 35 },
  { name: 'Luna Lovegood', time: 45 },
  { name: 'Gregory Goyle', time: 56 }
];

console.log(users.slice(0, 3).map((name, time) => name, time));

function App() {

  return (
    <div className="App">
      {
        users.slice(0, 3).map(({ name, time }, i) => <p key={i}>{name}-{time}</p>)
      }
    </div>
  );
}

export default App;
