import React from 'react';
import './OnionHater.css';

class OnionHater extends React.Component {
  constructor(props) {
    super(props);
    this.onKeyPressListener = this.onKeyPressListener.bind(this);
  }

  onKeyPressListener(ev) {
    if (ev.target.value.includes('cebolla')) {
      this.isHating = true;
    } else {
      this.isHating = false;
    }
    this.forceUpdate();
  }
  render() {
    if (this.isHating === true) {
      document.body.classList.add('red');
    }
    else {
      document.body.classList.remove('red');
      document.body.classList.add('white');

    }
    return <textarea onKeyPress={this.onKeyPressListener}></textarea>;
  }
}


export default OnionHater;


