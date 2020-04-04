import React from 'react';




function CitySelector(props) {
  function onChangeHandler(ev) {
    props.city(ev.target.value);
  }
  return (
    <select name="select" onChange={onChangeHandler}>
      <option value="Buenos Aires">Buenos Aires</option>
      <option value="Sydney">Sydney</option>
      <option value="Praga">Praga</option>
      <option value="Boston">Boston</option>
      <option value="Tokio">Tokio</option>
    </select>
  );
}

export default CitySelector;
