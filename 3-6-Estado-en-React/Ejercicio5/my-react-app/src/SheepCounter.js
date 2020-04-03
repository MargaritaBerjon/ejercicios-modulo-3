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
    this.setState((prevState) => {
      let nextValue = prevState.counter + 1;
      return {
        counter: nextValue
      };
    });
  }

  render() {
    console.log(this.state)
    const sheeps = []
    for (let index = 0; index < this.state.counter; index++) {
      sheeps.push(<img height="50" src='https://image.flaticon.com/icons/png/512/66/66682.png' alt='oveja' key={index} />)
    }
    return (
      <div>
        <p>{this.state.counter}</p>
        {sheeps}
        <button onClick={this.upDateCounter}>
          Botón
        </button>
      </div>
    );
  }
}


export default SheepCounter;
