import React from 'react'
import '../styles/App.css';

function PersonDetail(props) {


  return (
    <div className="results-container">
      <h2 >{props.elem.name.first}</h2>
      <div className="results-img">
        <img src={props.elem.picture.large} alt={props.elem.name.first}></img>
        <div className="results-content">
          <p>{'Ciudad: ' + props.elem.location.city}</p>
          <p>{'Género: ' + props.elem.gender}</p>
          <p>{'Edad: ' + props.elem.dob.age}</p>
          <p>{'email: ' + props.elem.email}</p>
          <p>{'Móvil: ' + props.elem.cell}</p>

        </div>
      </div>
    </div>
  );
}




export default PersonDetail;
