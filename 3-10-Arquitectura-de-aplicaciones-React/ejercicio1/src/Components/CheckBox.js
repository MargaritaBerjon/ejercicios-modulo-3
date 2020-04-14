import React from 'react'
import '../styles/App.css';

function CheckBox(props) {

  console.log(props);

  return (
    <>
      <input type="checkbox" id="female" name="female" value="female" />
      <label htmlFor="female"> Mujer</label>
      <input type="checkbox" id="male" name="male" value="male" />
      <label htmlFor="male"> Hombre</label>
    </>
  );
}

export default CheckBox;
