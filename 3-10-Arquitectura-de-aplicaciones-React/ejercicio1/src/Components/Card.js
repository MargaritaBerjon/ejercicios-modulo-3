import React from 'react'
import '../styles/App.css';

function Card(props) {


  return (
    <>
      <h2 >{props.elem.name.first}</h2>
      <img src={props.elem.picture.large} alt={props.elem.name.first}></img>
      <p>{props.elem.location.city}</p>
      <p>{props.elem.gender}</p>
      <p>{props.elem.dob.age}</p>
    </>
  );
}




export default Card;
