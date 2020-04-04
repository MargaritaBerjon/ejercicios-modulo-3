import React from 'react';
import PropTypes from 'prop-types';

function Item(props) {
  return (
    <div className="item">
      <h5 className="quantity">{props.quantity}</h5>
      <div>
        <h5>{props.name}</h5>
        <h6 className="text-muted">{props.description}</h6>
      </div>
      <div className="badge badge-info">{props.category}</div>
      <h5 className="price">{props.price}€</h5>
    </div>
  );
}

Item.defaultProps = {
  description: 'No hay descripción'
};

Item.prototype = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

export default Item;