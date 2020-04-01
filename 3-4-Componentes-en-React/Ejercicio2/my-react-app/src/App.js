import React from 'react';
import HalfPage from './HalfPage';
import './App.css';

function App() {
  return (
    <div>
      <HalfPage styling="info">
        <h1 className="horizontal-center">Welcome</h1>
        <p>Thank you for visiting our webpage!</p>
        <p>We hope you enjoy our new shiny site!</p>
      </HalfPage>
    </div>
  );
}

export default App;


