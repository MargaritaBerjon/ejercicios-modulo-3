import React from 'react';
import { Item } from './Item';

export function ItemList(props) {
  return (
    <ul className="item-list">
      {
        props.items.map(item =>
          <li><Item name={item.name} description={item.description} quantity={item.quantity} category={item.category} price={item.price} /></li>
        )
      }
    </ul>
  );
}


