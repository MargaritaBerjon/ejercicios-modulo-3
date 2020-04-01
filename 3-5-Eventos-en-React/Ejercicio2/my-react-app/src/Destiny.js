import React from 'react';


const onChangeListener = ev => {
  alert('Tu destino es viajar a ' + ev.target.value);
}


function Destiny() {
  return (
    <select name="select" onChange={onChangeListener}>
      <option value="Buenos Aires">Buenos Aires</option>
      <option value="Sydney">Sydney</option>
      <option value="Praga">Praga</option>
      <option value="Boston">Boston</option>
      <option value="Tokio">Tokio</option>
    </select>
  );
}

export default Destiny;
