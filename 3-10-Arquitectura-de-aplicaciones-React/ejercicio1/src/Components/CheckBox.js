import React from 'react'
import '../styles/App.css';

function CheckBox(props) {

  function inputChange(ev) {
    props.filterModifyed(ev.target);
  }

  return (
    <div className="Chechbox">
      {
        props.list.map((elem, i) =>
          <label htmlFor={elem} key={i}>  <input type="checkbox" id={elem} name={props.name} value={elem} onChange={inputChange} />{elem}</label>
        )
      }

    </div>
  );
}

export default CheckBox;
