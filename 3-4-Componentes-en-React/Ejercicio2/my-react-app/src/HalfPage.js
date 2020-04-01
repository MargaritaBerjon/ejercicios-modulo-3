import React from 'react';
import './App.css';


function HalfPage(props) {
  return (
    <div className={props.styling} role="alert">
      {props.children}
    </div>
  );

}

export default HalfPage;

