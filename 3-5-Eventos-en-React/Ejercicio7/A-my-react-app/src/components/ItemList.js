import React, { useState } from 'react';
import Item from './Item';
import CategoryButton from './CategoryButton';

function ItemList(props) {
  const [items, setItems] = useState(props.list);
  console.log(props);

  const typeChanges = (newType) => {
    setItems(props.items.filter(elem => {
      return elem.category !== newType;
    }));
  }

  return (
    <div>

      <ul className="item-list">
        {
          props.items.map(item =>
            <li key={item.key}><Item name={item.name} description={item.description} quantity={item.quantity} category={item.category} price={item.price} /></li>
          )
        }
      </ul>
      <CategoryButton type={typeChanges} category="Bebida" />
    </div>
  );
}

export default ItemList;

