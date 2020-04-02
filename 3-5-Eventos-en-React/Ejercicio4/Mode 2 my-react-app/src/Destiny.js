import React from 'react';

function Destiny(props) {
  const onChangeListener = ev => {
    props.city(ev.target.value);
  }

  return (
    <select name="select" onChange={onChangeListener}>
      <option value="BuenosAires">Buenos Aires</option>
      <option value="Sydney">Sydney</option>
      <option value="Praga">Praga</option>
      <option value="Boston">Boston</option>
      <option value="Tokio">Tokio</option>
    </select>
  );
}

export default Destiny;
