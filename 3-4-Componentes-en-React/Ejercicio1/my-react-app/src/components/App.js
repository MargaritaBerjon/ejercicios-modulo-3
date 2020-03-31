import React from 'react';
import '.././App.css';
import { ItemList } from './ItemList';
const items = [
  {
    name: 'Cereales con chocolate',
    description: 'Cereales rellenos de chocolate',
    quantity: 2,
    category: 'Cereales',
    price: 5
  },
  {
    name: 'Hamburguesa con queso',
    description: 'Hamburguesa rica y saludable',
    quantity: 1,
    category: 'Fast-food',
    price: 15
  },
  {
    name: 'Agua mineral',
    description: 'Agua de un charco del Himalaya',
    quantity: 2,
    category: 'Bebida',
    price: 5
  }
];

function App() {
  return (
    <div className="App">
      <ItemList items={items}></ItemList>
    </div>
  );
}

export default App;
