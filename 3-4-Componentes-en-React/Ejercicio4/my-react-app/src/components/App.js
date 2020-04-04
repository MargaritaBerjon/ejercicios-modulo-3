import React from 'react';
import '../App.css';
import { ItemList } from './ItemList';

const items = [
  {
    name: 'Cereales con chocolate',
    description: 'Cereales rellenos de chocolate',
    quantity: 2,
    category: 'Cereales',
    price: 'n'
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
    quantity: 2,
    category: 'Bebida',
    price: 5
  }
];

function App() {
  return (
    <div className="App">
      <ItemList items={items} />
    </div>
  );
}




export default App;
