import React from 'react';

const onKeyPressListener = ev => {
  if (ev.target.value.includes('cebolla')) {
    alert('ODIO LA CEBOLLA');
  }
};


function OnionHater() {
  return (
    <textarea onKeyPress={onKeyPressListener} ></textarea>

  );
}

export default OnionHater;


