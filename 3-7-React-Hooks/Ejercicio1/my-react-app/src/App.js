import React, { useState } from 'react';


function App() {
  const [count, setCount] = useState(20);
  return (
    <div >
      <p>Hoy tengo {count} años de edad</p>
      <button onClick={() => setCount(count + 1)}>Hazme más viejo</button>
    </div>
  );
}

export default App;
