import React from 'react';


function CategoryButton(props) {
  // console.log(props);
  function handlerClick(ev) {

    props.type(ev.currentTarget.name);
    // console.log(ev.currentTarget.name);
  }

  return (
    <button onClick={handlerClick} name={props.category}>{props.category}</button>
  )
}
export default CategoryButton;