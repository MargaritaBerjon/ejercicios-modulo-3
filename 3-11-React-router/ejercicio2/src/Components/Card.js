import React from 'react'
import '../styles/App.css';
import { Link } from "react-router-dom";

function Card(props) {


  return (
    <Link to={'/PersonDetail/' + props.elem.id.value}>
      <div className="results-container">
        <h2 >{props.elem.name.first}</h2>
        <div className="results-img">
          <img src={props.elem.picture.large} alt={props.elem.name.first}></img>
          <div className="results-content">
            <p>{'Ciudad: ' + props.elem.location.city}</p>
            <p>{'Género: ' + props.elem.gender}</p>
            <p>{'Edad: ' + props.elem.dob.age}</p>
          </div>
        </div>
      </div>
    </Link>

  );
}




export default Card;
