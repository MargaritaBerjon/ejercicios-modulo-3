import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      className: 'blue'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((prevState) => {
      let nextClassName;

      if (prevState.className === 'blue') {
        nextClassName = 'red';
      } else {
        nextClassName = 'blue';
      }
      console.log('Estaba de color ' + prevState.className);
      console.log('Cambio a color ' + nextClassName);

      return {
        className: nextClassName
      };
    });
  }


  render() {
    return (
      <div className={this.state.className} onClick={this.handleClick} >
      </div>
    );
  }
}

export default App;