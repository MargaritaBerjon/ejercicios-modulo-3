import React from 'react';




function Destiny(props) {
  const onChangeListener = ev => {
    let selectedCity = ev.target.value;
    props.city(ev.target.value);
    console.log(`tu destino elegido es ${this.selectedCity}`)

  }
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
