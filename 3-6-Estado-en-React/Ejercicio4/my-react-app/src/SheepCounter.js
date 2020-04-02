import React from 'react';


class SheepCounter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
    this.upDateCounter = this.upDateCounter.bind(this);
  }


  upDateCounter() {
    this.setState(() => {
      let nextValue = this.state.counter + 1;
      return {
        counter: nextValue
      };
    });
  }

  render() {
    return (
      <div>
        <p>{this.state.counter}</p>
        <button onClick={this.upDateCounter}>
          Botón
        </button>
      </div>
    );
  }
}


export default SheepCounter;
