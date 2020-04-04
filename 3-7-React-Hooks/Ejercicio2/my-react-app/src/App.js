import React, { useState } from 'react';


function App() {
  const [count, setCount] = useState(20);
  const [present, setPresent] = useState(1);
  return (
    <div >
      <p>Hoy tengo {count} años de edad</p>
      <button onClick={() => setCount(count + 1)}>Hazme más viejo</button>
      <p>Tengo {present} regalo</p>
      <button onClick={() => setPresent(present + 1)}>Dame regalos</button>
    </div>
  );
}

export default App;
