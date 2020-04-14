import React from 'react'
import '../styles/App.css';
import Card from './Card';

function List(props) {

  return (
    <div className="List">
      {props.list.map((elem, i) => <Card key={i} elem={elem}></Card>)}
    </div>
  );
}


export default List;
