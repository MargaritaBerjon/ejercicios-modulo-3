import React from 'react'
import '../styles/App.css';
import { Link } from 'react-router-dom';

function NotFound(props) {

  return (
    <div className="not-found">
      <Link to={props.returnRoute}><h1>Go Home</h1></Link>
      <h1>El contenido no existe</h1>
    </div>
  );
}




export default NotFound;
